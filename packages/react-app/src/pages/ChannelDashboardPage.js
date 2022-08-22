import React from "react";
import ReactGA from "react-ga";
import { ethers } from "ethers";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addresses, abis, envConfig } from "@project/contracts";
import { useWeb3React } from "@web3-react/core";

import EPNSCoreHelper from "helpers/EPNSCoreHelper";
import NotificationToast from "primaries/NotificationToast";
import Info from "segments/Info";
import Feedbox from "segments/Feedbox";
import ViewChannels from "segments/ViewChannels";
import ChannelOwnerDashboard from "segments/ChannelOwnerDashboard";
import ChannelsDataStore from "singletons/ChannelsDataStore";
import UsersDataStore from "singletons/UsersDataStore";
import { postReq, getReq } from "api";
import {
  setCoreReadProvider,
  setCoreWriteProvider,
  setCommunicatorReadProvider,
  setCommunicatorWriteProvider,
  setPushAdmin,
} from "redux/slices/contractSlice";
import {
  setUserChannelDetails,
  setCanVerify,
  setDelegatees,
} from "redux/slices/adminSlice";
import { addNewNotification } from "redux/slices/notificationSlice";
import { convertAddressToAddrCaip } from "helpers/CaipHelper";
import { setAliasEthAddress, setAliasVerified } from "redux/slices/adminSlice";
export const ALLOWED_CORE_NETWORK = envConfig.coreContractChain; //chainId of network which we have deployed the core contract on
const CHANNEL_TAB = 2; //Default to 1 which is the channel tab

const blockchainName = {
  1: "ETH_MAINNET",
  137: "POLYGON_MAINNET",
  42: "ETH_TEST_KOVAN",
  80001: "POLYGON_TEST_MUMBAI",
};

// Create Header
function ChannelDashboardPage() {
  ReactGA.pageview("/channel_dashboard");

  const dispatch = useDispatch();
  const { account, library, chainId } = useWeb3React();
  const {
    epnsReadProvider,
    epnsWriteProvider,
    epnsCommReadProvider,
  } = useSelector((state) => state.contracts);
  const {
    aliasDetails: { aliasEthAddr },
  } = useSelector((state) => state.admin);

  const CORE_CHAIN_ID = envConfig.coreContractChain;
  const onCoreNetwork = CORE_CHAIN_ID === chainId;
  const INITIAL_OPEN_TAB = CHANNEL_TAB; //if they are not on a core network.redirect then to the notifications page

  const [controlAt, setControlAt] = React.useState(2);
  const [adminStatusLoaded, setAdminStatusLoaded] = React.useState(false);
  const [channelAdmin, setChannelAdmin] = React.useState(false);
  const [channelJson, setChannelJson] = React.useState([]);

  // toast related section
  const [toast, showToast] = React.useState(null);
  const clearToast = () => showToast(null);

  //clear toast variable after it is shown
  React.useEffect(() => {
    if (toast) {
      clearToast();
    }
  }, [toast]);
  // toast related section

  /**
   * Logic to get channel alias and alias verification status as well as create instances of core and comunicator contract
   */
  React.useEffect(() => {
    (async function init() {
      const coreProvider = onCoreNetwork
        ? library
        : new ethers.providers.JsonRpcProvider(envConfig.coreRPC);
      // if we are not on the core network then check for if this account is an alias for another channel
      if (!onCoreNetwork && !aliasEthAddr) {
        // get the eth address of the alias address, in order to properly render information about the channel
        await checkUserForAlias();
      }
      // if we are not on the core network then fetch if there is an alias address from the api
      // inititalise the read contract for the core network
      const coreContractInstance = new ethers.Contract(
        addresses.epnscore,
        abis.epnscore,
        coreProvider
      );
      // initialise the read contract for the communicator function
      const commAddress = onCoreNetwork
        ? addresses.epnsEthComm
        : addresses.epnsPolyComm;
      const commContractInstance = new ethers.Contract(
        commAddress,
        abis.epnsComm,
        library
      );
      dispatch(setCommunicatorReadProvider(commContractInstance));
      dispatch(setCoreReadProvider(coreContractInstance));
      // initialise the read contract for the communicator function
      if (!!(library && account)) {
        let signer = library.getSigner(account);
        let coreSigner = coreProvider.getSigner(account);

        const coreSignerInstance = new ethers.Contract(
          addresses.epnscore,
          abis.epnscore,
          coreSigner
        );
        const communicatorSignerInstance = new ethers.Contract(
          commAddress,
          abis.epnsComm,
          signer
        );
        dispatch(setCoreWriteProvider(coreSignerInstance));
        dispatch(setCommunicatorWriteProvider(communicatorSignerInstance));
      }
    })();
  }, [account, chainId]);

  /**
   * When we instantiate the contract instances, fetch basic information about the user
   * Corresponding channel owned.
   */
  React.useEffect(async () => {
    if (!epnsReadProvider || !epnsCommReadProvider || !epnsWriteProvider)
      return;
    // Reset when account refreshes
    setChannelAdmin(false);
    dispatch(setUserChannelDetails(null));
    setAdminStatusLoaded(false);
    userClickedAt(INITIAL_OPEN_TAB);
    setChannelJson([]);
    // save push admin to global state
    epnsReadProvider
      .pushChannelAdmin()
      .then((response) => {
        dispatch(setPushAdmin(response));
      })
      .catch((err) => {
        console.log({ err });
      });

    // EPNS Read Provider Set
    if (epnsReadProvider != null && epnsCommReadProvider != null) {
      // Instantiate Data Stores
      UsersDataStore.instance.init(
        account,
        epnsReadProvider,
        epnsCommReadProvider
      );
      ChannelsDataStore.instance.init(
        account,
        epnsReadProvider,
        epnsCommReadProvider,
        chainId
      );

      await checkUserForAlias();
      await checkUserForChannelOwnership();
      fetchDelegators();
    }
  }, [epnsReadProvider, epnsCommReadProvider, epnsWriteProvider]);

  // handle user action at control center
  const userClickedAt = (controlIndex) => {
    setControlAt(controlIndex);
  };

  // fetch all the channels who have delegated to this account
  const fetchDelegators = () => {
    const channelAddressInCaip = convertAddressToAddrCaip(account, chainId);
    getReq(`/channels/_getUserDelegations/${channelAddressInCaip}`)
      .then(async ({ data: delegators }) => {
        // if there are actual delegators
        // fetch basic information abouot the channels and store it to state
        if (delegators && delegators.channelOwners) {
          const channelInformationPromise = [
            ...new Set([account, ...delegators.channelOwners]), //make the accounts unique
          ].map((channelAddress) => {
            return ChannelsDataStore.instance
              .getChannelJsonAsync(channelAddress)
              .then((res) => ({ ...res, address: channelAddress }))
              .catch(() => false);
          });
          const channelInformation = await Promise.all(
            channelInformationPromise
          );
          dispatch(setDelegatees(channelInformation.filter(Boolean)));
          // fetch the json information about this delegatee channel and add to global state
        } else {
          dispatch(setDelegatees([]));
        }
      })
      .catch(async (err) => {
        console.log({ err });
      });
  };

  // Check if a user is a channel or not
  const checkUserForChannelOwnership = async () => {
    if (!onCoreNetwork && aliasEthAddr == null) {
      setChannelAdmin(false);
      setAdminStatusLoaded(true);
      return;
    }
    // Check if account is admin or not and handle accordingly
    const ownerAccount = !onCoreNetwork ? aliasEthAddr : account;
    EPNSCoreHelper.getChannelJsonFromUserAddress(ownerAccount, epnsReadProvider)
      .then(async (response) => {
        // if channel admin, then get if the channel is verified or not, then also fetch more details about the channel
        const verificationStatus = await epnsWriteProvider.getChannelVerfication(
          ownerAccount
        );
        const channelJson = await epnsWriteProvider.channels(ownerAccount);
        const channelSubscribers = await ChannelsDataStore.instance.getChannelSubscribers(
          account
        );
        dispatch(
          setUserChannelDetails({
            ...response,
            ...channelJson,
            subscribers: channelSubscribers,
          })
        );
        dispatch(setCanVerify(Boolean(verificationStatus)));
        setChannelJson(response);
        setChannelAdmin(true);
        setAdminStatusLoaded(true);
      })
      .catch((err) => {
        console.log(
          "There was an error [checkUserForChannelOwnership]:",
          err.message
        );
        setChannelAdmin(false);
        setAdminStatusLoaded(true);
      })
      .finally(() => {
        setAdminStatusLoaded(true);
      });
  };

  // Check if a user is a channel or not
  const checkUserForAlias = async () => {
    // Check if account is admin or not and handle accordingly
    const userAddressInCaip = convertAddressToAddrCaip(account, chainId);
    await getReq(`/v1/alias/${userAddressInCaip}/channel`).then(({ data }) => {
      if (data) {
        dispatch(setAliasEthAddress(data.channel));
        dispatch(setAliasVerified(data.is_alias_verified));
      }
      return data;
    });
  };

  // Render
  return (
    <Container>
      <Interface>
        {controlAt == 0 && <Feedbox />}
        {controlAt == 1 && <ViewChannels />}
        {controlAt == 2 && adminStatusLoaded ? (
          <ChannelOwnerDashboard />
        ) : (
          // <ChannelLoadingMessage>
          //   Channel details are being loaded, please wait…
          // </ChannelLoadingMessage>
          <ChannelLoadingMessage>
            Channel details are being loaded, please wait…
          </ChannelLoadingMessage>
        )}
        {controlAt == 3 && <Info />}
        {toast && (
          <NotificationToast notification={toast} clearToast={clearToast} />
        )}
      </Interface>
    </Container>
  );
}

// css style
const ChannelLoadingMessage = styled.div`
  width: 100%;
  /* background-color: red; */
  padding: 40px;
  font-size: 1.5em;
  font-weight: 300;
  text-align: center;
  color: ${(props) => props.theme.color};
`;

const Container = styled.div`
  flex: 1;
  display: block;
  flex-direction: column;
`;

const Interface = styled.div`
  flex: 1;
  display: flex;

  margin-bottom: 15px;
  overflow: hidden;
`;

// Export Default
export default ChannelDashboardPage;
