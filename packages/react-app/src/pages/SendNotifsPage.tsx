import React from "react";

import { SectionV2 } from 'components/reusables/SharedStylingV2';
import SendNotifsModule from "modules/sendNotifs/SendNotifsModule";
import styled from 'styled-components';

import GLOBALS from "config/Globals";

// Other Information section
const SendNotifsPage = () => {
  // RENDER
  return (
    <Container>
      <SendNotifsModule />
    </Container>
  );
}
export default SendNotifsPage;

// This defines the page settings, toggle align-self to center if not covering entire stuff, align-items to place them at center
// justify content flex start to start from top, height is defined by module as well as amount of margin, padding
const Container = styled(SectionV2)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    align-items: center;
`;