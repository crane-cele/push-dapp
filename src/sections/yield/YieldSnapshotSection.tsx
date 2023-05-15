// React + Web3 Essentials
import React from 'react';

// External Packages
import styled from 'styled-components';

// Internal Compoonents
import ChatBox from 'components/chat/w2wChat/chatBox/ChatBox';
import { ItemHV2, ItemVV2 } from 'components/reusables/SharedStylingV2';
import YieldUniswapV3 from 'components/yield/YieldUniswapV3';
import YieldPushFeeV3 from 'components/yield/YieldPushFeeV3';
import YieldUniswapV2 from 'components/yield/YieldUniswapV2';
import YieldPushFeeV2 from 'components/yield/YieldPushFeeV2';

// Internal Configs
import GLOBALS from 'config/Globals';


// Chat Sections
// Divided into two, left and right
const YieldSnapshotSection = ({
  userDataPush,
  getUserDataPush,
  PUSHPoolstats,
  loadingComponent,
  lpPoolStats,
  userDataLP,
  getLpPoolStats,
  getUserDataLP,
  getPUSHPoolStats
}) => {
  // RENDER
  return (
    <>
      <V3Container>
        {/* <YieldUniswapV3/> */}
        <YieldUniswapV3
          loadingComponent={loadingComponent}
          lpPoolStats={lpPoolStats}
          userDataLP={userDataLP}
          getLpPoolStats={getLpPoolStats}
          getUserDataLP={getUserDataLP}
        />
        <YieldPushFeeV3
          userDataPush={userDataPush}
          getUserDataPush={getUserDataPush}
          PUSHPoolstats={PUSHPoolstats}
          loadingComponent={loadingComponent}
          getPUSHPoolStats={getPUSHPoolStats}
        />
      </V3Container>

      <V2Container>
        <YieldUniswapV2 />
        <YieldPushFeeV2 />
      </V2Container>
    </>
  );
}
export default YieldSnapshotSection;

const V3Container = styled(ItemHV2)`
  // width: 50%;
  // margin: auto;

  // @media (max-width:1300px){
  //   width: 75%;
  // }

  // @media (max-width:768px){
  //   width: 100%;
  // }

  @media (max-width:900px){
    flex-direction:column;
  }
`
const V2Container = styled(ItemHV2)`

  @media (max-width:1300px){
    margin:auto;
    width: 75%;
    flex-direction:column;
  }

  @media (max-width:768px){
    width: 100%;
  }

  @media (max-width:900px){
    width: 100%;
    flex-direction:column;
  }
`