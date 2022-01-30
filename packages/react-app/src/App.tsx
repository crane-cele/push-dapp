import React, {useState} from "react";
import ReactGA from "react-ga";
import { Navigate, Routes, Route, Link } from "react-router-dom";

import { Web3Provider } from "ethers/providers";
import { useWeb3React } from "@web3-react/core";
import { AbstractConnector } from "@web3-react/abstract-connector";
import { useEagerConnect, useInactiveListener } from "hooks";
import { injected, walletconnect, portis, ledger } from "connectors";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import styled, {ThemeProvider} from "styled-components";
import { Item, ItemH, Span, H2, B, A } from "components/SharedStyling";

import Header from "sections/Header";
import Navigation from "sections/Navigation";

import Home from "pages/Home";
import Channels from "pages/Channels";

import InboxPage from "pages/InboxPage";
import SpamPage from "pages/SpamPage";
import ChannelsPage from "pages/ChannelsPage";
import ChannelDashboardPage from "pages/ChannelDashboardPage";
import ReceiveNotifsPage from "pages/ReceiveNotifsPage";

import GovernancePage from "pages/GovernancePage";

import YieldFarmingPage from "pages/YieldFarmingPage";
import NFTPage from "pages/NFTPage";
import AirdropPage from "pages/AirdropPage";

import NavigationContextProvider from "contexts/NavigationContext";

import { themeLight, themeDark } from "config/Themization";
import GLOBALS from "config/Globals";

import * as dotenv from "dotenv";
dotenv.config();

// define the different type of connectors which we use
const web3Connectors = {
  Injected: {
    obj: injected,
    logo: "./svg/login/metamask.svg",
    title: "MetaMask",
  },
  WalletConnect: {
    obj: walletconnect,
    logo: "./svg/login/walletconnect.svg",
    title: "Wallet Connect",
  },
  // Trezor: {obj: trezor, logo: './svg/login/trezor.svg', title: 'Trezor'},
  Ledger: { obj: ledger, logo: "./svg/login/ledger.svg", title: "Ledger" },
  Portis: { obj: portis, logo: "./svg/login/portis.svg", title: "Portis" },
};

export default function App() {
  const { connector, activate, active, error } = useWeb3React<Web3Provider>();
  const [activatingConnector, setActivatingConnector] = React.useState<
    AbstractConnector
  >();
  const [currentTime,setcurrentTime]=React.useState(0);

  React.useEffect(()=>{
    const now = Date.now()/ 1000;
    setcurrentTime(now)
  },[])
  React.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
  const triedEager = useEagerConnect();
  // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists
  useInactiveListener(!triedEager || !!activatingConnector);

  // Initialize GA
  ReactGA.initialize("UA-165415629-5");
  ReactGA.pageview("/login");
  // Initialize GA

  // Initialize Theme
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight }>
      <NavigationContextProvider>
        <HeaderContainer>
          <Header
            isDarkMode={darkMode}
            darkModeToggle={toggleDarkMode}
          />  
        </HeaderContainer>

        <ParentContainer
          headerHeight={GLOBALS.CONSTANTS.HEADER_HEIGHT}
        >

          {(active) && !error && (
            <>
              <LeftBarContainer
                leftBarWidth={GLOBALS.CONSTANTS.LEFT_BAR_WIDTH}
              >
                <Navigation />
              </LeftBarContainer>

              <ContentContainer
                leftBarWidth={GLOBALS.CONSTANTS.LEFT_BAR_WIDTH}
              >
                <Interface>
                  <Routes>
                    <Route path="inbox" element={<InboxPage />} />
                    <Route path="channels" element={<ChannelsPage />} />
                    <Route path="dashboard" element={<ChannelDashboardPage />} />
                    <Route path="spam" element={<SpamPage />} />
                    <Route path="receive" element={<ReceiveNotifsPage />} />

                    <Route path="govern" element={<GovernancePage />} />

                    <Route path="yield" element={<YieldFarmingPage />} />
                    <Route path="rockstar" element={<NFTPage />} />
                    <Route path="gratitude" element={<AirdropPage />} />
                    <Route
                        path="/"
                        element={<Navigate to="/channels" />}
                    />
                  </Routes>
                </Interface>
              </ContentContainer>
            </>
          )}

          {(!active) && (
            <Item>
              <ProviderLogo
                src="./epnshomelogo.png"
                srcSet={"./epnshomelogo@2x.png 2x, ./epnshomelogo@2x.png 3x"}
              />
              <Item
                bg="#fafafa"
                border="1px solid #ddd"
                padding="15px"
                radius="12px"
              >
                <H2 textTransform="uppercase" spacing="0.1em">
                  <Span bg="#e20880" color="#fff" weight="600" padding="0px 8px">
                    Connect
                  </Span>
                  <Span weight="200"> Your Wallet</Span>
                </H2>

                <ItemH maxWidth="800px" align="stretch">
                  {Object.keys(web3Connectors).map((name) => {
                    const currentConnector = web3Connectors[name].obj;
                    const connected = currentConnector === connector;
                    const disabled =
                      !triedEager ||
                      !!activatingConnector ||
                      connected ||
                      !!error;
                    const image = web3Connectors[name].logo;
                    const title = web3Connectors[name].title;

                    return (
                      <ProviderButton
                        disabled={disabled}
                        key={name}
                        onClick={() => {
                          setActivatingConnector(currentConnector);
                          activate(currentConnector);
                        }}
                        border="#35c5f3"
                      >
                        <ProviderImage src={image} />

                        <Span
                          spacing="0.1em"
                          textTransform="uppercase"
                          size="12px"
                          weight="600"
                          padding="10px"
                        >
                          {title}
                        </Span>
                      </ProviderButton>
                    );
                  })}
                </ItemH>
              </Item>

              <Span margin="10px" size="14px">
                By unlocking your wallet, <B>You agree</B> to our{" "}
                <A href="https://epns.io/tos" target="_blank">
                  Terms of Service
                </A>{" "}
                and our{" "}
                <A href="https://epns.io/privacy" target="_blank">
                  Privacy Policy
                </A>
                .
              </Span>
            </Item>
          )}
        </ParentContainer>

        <ToastContainer
          position="bottom-right"
          autoClose={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
      </NavigationContextProvider>
    </ThemeProvider>
  );
}

// CSS STYLES
const HeaderContainer = styled.header`
  left: 0;
  right: 0;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
`;

const ParentContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex: 1;
  background: ${props => props.theme.mainBg};
  margin: ${props => props.headerHeight}px 0px 0px 0px;
`;

const LeftBarContainer = styled.div`
  left: 0;
  top: 0;
  bottom: 0;
  width: ${props => props.leftBarWidth}px;
  position: fixed;

  @media (max-width: 992px) {
    display: none;
  }
`

const ContentContainer = styled.div`
  display: flex;
  flex: 1;
  align-self: center;
  width: 100%;

  margin: 20px 20px 20px ${props => props.leftBarWidth + 20}px;

  @media (max-width: 992px) {
    margin: 20px;
  }
`;

const Interface = styled(Item)`
  flex: 1;
  display: flex;
  align-items: stretch;

  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  border: 1px solid rgb(225, 225, 225);

  margin: 15px;
  overflow: hidden;
`

const ProviderLogo = styled.img`
  width: 15vw;
  align-self: center;
  display: flex;
  margin: 10px 20px 20px 20px;
  min-width: 200px;
`;

const ProviderButton = styled.button`
  flex: 1 1 0;
  min-width: 280px;
  background: #fff;
  outline: 0;

  box-shadow: 0px 15px 20px -5px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  border: 1px solid rgb(225, 225, 225);

  margin: 20px;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  display: flex;
  flex-direction: row;
  padding: 10px;

  &:hover {
    opacity: 0.9;
    cursor: pointer;
    border: 1px solid ${(props) => props.border};
  }
  &:active {
    opacity: 0.75;
    cursor: pointer;
    border: 1px solid ${(props) => props.border};
  }
`;

const ProviderImage = styled.img`
  width: 32px;
  max-height: 32px;
  padding: 10px;
`;

const ProviderLabel = styled.span`
  font-size: 12px;
  margin: 5px;
`;

const StyledContainer = styled(ToastContainer).attrs({})`
  .Toastify__toast-container {
  }
  .Toastify__toast {
  }
  .Toastify__toast--error {
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
  }
  .Toastify__toast-body {
    font-size: 12px;
  }
  .Toastify__progress-bar {
  }
`;
