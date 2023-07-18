// React + Web3 Essentials
import React, { useContext, useEffect, useState } from 'react';

// External Packages
import styled from 'styled-components';

// Internal Components
// import { SpaceBoxSection, SpaceSidebarSection } from 'sections/space';
// import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';

// Internal Configs
import GLOBALS, { device, globalsMargin } from '../../config/Globals';
// import { SpaceGlobalContext, SpaceLocalContext, SpaceLocalContextProvider } from 'contexts';
// import { ChatUserContext } from 'contexts/ChatUserContext';
// import { getSpaceRequests, getSpaces } from 'services/space';
// import { getSpaceRequestsFromIndexedDB, getSpacesFromIndexedDB } from 'helpers/space';
// import { SpaceInfoModalContent } from 'components/space/spaceModals/spaceInfoModal';
// import useToast from 'hooks/useToast';
// import MemberMenuModal from 'components/space/spaceModals/MemberMenu/MemberMenuModal';
// import useModalBlur, { MODAL_POSITION } from 'hooks/useModalBlur';
// import CreateSpaceModal from 'components/space/spaceModals/createSpaceModals/CreateSpaceModal';
// import SpaceNotification from 'components/space/spaceNotification/SpaceNotification';
// import { useDeviceWidthCheck } from 'hooks/useDeviceWidthCheck';

import { SpaceFeedSection } from 'sections/space/SpaceFeedSection';
import { ChatUserContext } from 'contexts/ChatUserContext';
import { useWeb3React } from '@web3-react/core';
import { appConfig } from 'config';
import * as PushAPI from '@pushprotocol/restapi';

export const SpaceModule = ({ spaceid }) => {
  const { account, library } = useWeb3React();
  const {pgpPvtKey, getUser, setPgpPvtKey, connectedUser} = useContext(ChatUserContext);

  // useEffect(()=>{
    // if(!pgpPvtKey) {
      // getUser();
    // }
  // },[account, library, appConfig?.env])

  useEffect(() => {
    (async () => {
      if (!account || !appConfig?.appEnv || !library) return;

      const user = await PushAPI.user.get({ account, env: appConfig?.appEnv });
      let pgpPrivateKey;
      const librarySigner = await library.getSigner(account);
      if (user?.encryptedPrivateKey) {
        pgpPrivateKey = await PushAPI.chat.decryptPGPKey({
          encryptedPGPPrivateKey: user.encryptedPrivateKey,
          account,
          signer: librarySigner,
          env: appConfig?.appEnv,
        });
      }
      setPgpPvtKey(pgpPrivateKey);
    })();
  }, [account, appConfig?.appEnv, library]);


  // RENDER
  return (
    <Container>
      <SpaceFeedSection spaceid={spaceid}/>
    </Container>
  );
};

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
// css styles
const Container = styled.div`
  align-items: stretch;
  align-self: stretch;
  flex: 1;
  // background: ${(props) => props.theme.default.bg};
  // border-radius: ${GLOBALS.ADJUSTMENTS.RADIUS.LARGE};
  // box-shadow: ${GLOBALS.ADJUSTMENTS.MODULE_BOX_SHADOW};
  display: flex;
  // flex: initial;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  // padding: 13px 13px 13px 0px;
  margin: 0px 0px 17px 0px;

  // margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.DESKTOP};
  max-height: calc(
    100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.DESKTOP.TOP} -
      ${globalsMargin.MINI_MODULES.DESKTOP.BOTTOM}
  );



  @media ${device.laptop} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.MINI_MODULES.TABLET};
    height: calc(
      100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.MINI_MODULES.TABLET.TOP} -
        ${globalsMargin.MINI_MODULES.TABLET.BOTTOM}
    );
  }

  @media ${device.mobileL} {
    margin: ${GLOBALS.ADJUSTMENTS.MARGIN.BIG_MODULES.MOBILE};
    height: calc(
      100vh - ${GLOBALS.CONSTANTS.HEADER_HEIGHT}px - ${globalsMargin.BIG_MODULES.MOBILE.TOP} -
        ${globalsMargin.BIG_MODULES.MOBILE.BOTTOM}
    );
  }
`;

//   const SpaceSidebarContainer = styled(ItemVV2)`
//   @media ${device.tablet} {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     right: 0;
//     width: 95%;
//     margin-right: ${(props) => (props.spaceActive ? '20%' : '0%')};
//     opacity: ${(props) => (props.spaceActive ? '0' : '1')};
//     transition: margin-right 0.25s;
//     max-width: initial;
//     min-width: auto;
//     z-index: 1;
//   }
// `;

//   const SpaceContainer = styled(ItemVV2)`
//   @media ${device.tablet} {
//     position: absolute;
//     top: 0;
//     bottom: 0;
//     left: 0;
//     width: 100%;
//     margin-left: ${(props) => (props.spaceActive ? '0%' : '100%')};
//     transition: margin-left 0.25s;
//     max-width: initial;
//     min-width: auto;
//     z-index: 2;
//     background: white;
//   }
// `;
