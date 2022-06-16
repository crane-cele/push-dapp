import React, { useEffect, useState } from "react";
import styled, { useTheme } from "styled-components";

import {ThemeProvider} from "styled-components";

import W2wIndex from 'components/chat/w2wChat/w2wIndex';
import {Section, Item, ItemH, Span, Anchor, RouterLink, Image} from 'components/SharedStyling';

// Create Header
function Chat() {
    const themes = useTheme();
    const [rerender,setRerender] = useState(false);
    const [display,setDisplay] = useState(1);
    window.ethereum.on('accountsChanged',(account)=>{
      window.location.reload();
    });
    window.ethereum.on('networksChanged',()=>{
      window.location.reload();
    })
    

    return (
      <ThemeProvider theme={themes}>
        <Container>
          <ItemH>
               <W2wIndex/>
          </ItemH>
        </Container>
      </ThemeProvider>
    );
}

// css styles
const Container = styled.div`
  display: flex;
  flex: 1;
  position:'fixed';
  background:'blue';
  font-weight: 200;
  align-content: center;
  align-items: stretch;
  justify-content: center;
  height: 83.6vh;

`;

const ScrollItem = styled(Item)`
  display: flex;
  align-self: stretch;
  align-items: stretch;
  justify-content: stretch;
  flex-wrap: nowrap;
  
  flex: 1;
  padding: 10px 20px;
  overflow-y: scroll;

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.scrollBg};
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    background-color: ${props => props.theme.scrollBg};
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-image: -webkit-gradient(linear,
                       left top,
                       left bottom,
                       color-stop(0.44, #35c5f3),
                       color-stop(0.72, #35b0f3),
                       color-stop(0.86, #35a1f3));
  }
`;

const ContainerInfo = styled.div`
  padding: 20px;
`;

const CenteredContainerInfo = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterContainer = styled(ContainerInfo)`
  width: fit-content;
  align-self: center;
`;

// Export Default
export default Chat;