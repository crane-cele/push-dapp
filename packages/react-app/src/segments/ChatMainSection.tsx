import React from 'react'
import styled, { ThemeProvider, useTheme } from 'styled-components'
import { Content } from 'components/SharedStyling'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import Avatar from '@mui/material/Avatar'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const ChatMainSection = (): JSX.Element => {
  const themes = useTheme()
  const count = 2

  const TypeBar = (): JSX.Element => {
    return (
      <TypeBarContainer>
        <IconButton>
          <SentimentSatisfiedAltIcon />
        </IconButton>
        <TextInput type="text" placeholder="Type your message" />
        <IconButton>
          <img src="/svg/chats/gif.svg" height="27px" width="27px" />
        </IconButton>
        <IconButton>
          <img src="/svg/chats/attachment.svg" height="27px" width="27px" />
        </IconButton>
        <IconButton>
          <img src="/svg/chats/send.svg" height="27px" width="27px" />
        </IconButton>
      </TypeBarContainer>
    )
  }

  return (
    <ThemeProvider theme={themes}>
      <Container>
        {count === 2 ? (
          <Box>
            <ChatHeader>
              <UserInfo>
                <Avatar alt="Remy Sharp" src="/svg/chats/user.svg" />
                <Typography variant="body1" ml={1}>
                  {' '}
                  Adam.eth
                </Typography>
              </UserInfo>
              <IconButton aria-label="more">
                <MoreVertIcon />
              </IconButton>
            </ChatHeader>
            <MessageContainer>
              <FirstConversation>
                This is your first conversation with the receipent, you will be able to continue the conversation once
                the receipent accepts the intent
              </FirstConversation>
              <MessageTime>July 26, 2022</MessageTime>
              <MessageWrapper>
                <ReceivedMessage>
                  <Message>Hi, Good Morning</Message>
                  <TimeStamp>12.44</TimeStamp>
                </ReceivedMessage>
              </MessageWrapper>
              <MessageWrapper>
                <SenderMessage>
                  <Message>Hello how are you, what are you doing?</Message>
                  <TimeStamp>12.44</TimeStamp>
                </SenderMessage>
              </MessageWrapper>
              <MessageTime>Today</MessageTime>
              <MessageWrapper>
                <ReceivedMessage>
                  <Message>Hi, Good Morning</Message>
                  <TimeStamp>12.44</TimeStamp>
                </ReceivedMessage>
              </MessageWrapper>
              <MessageWrapper>
                <SenderMessage>
                  <Message>Hello how are you</Message>
                  <TimeStamp>12.44</TimeStamp>
                </SenderMessage>
              </MessageWrapper>
              <MessageWrapper>
                <ReceivedMessage>
                  <Message>Hi, Good Morning</Message>
                  <TimeStamp>12.44</TimeStamp>
                </ReceivedMessage>
              </MessageWrapper>
              <MessageWrapper>
                <SenderMessage>
                  <Message>Hello how are you</Message>
                  <TimeStamp>12.44</TimeStamp>
                </SenderMessage>
              </MessageWrapper>
            </MessageContainer>
            <TypeBar />
          </Box>
        ) : (
          <Box>
            <HelloBox>
              <Typography>Say Hello to Push Chat</Typography>
            </HelloBox>
            <HelloText>You haven’t started a conversation yet.</HelloText>
            <HelloText>Begin by searching name.eth or 0x123...</HelloText>
          </Box>
        )}
      </Container>
    </ThemeProvider>
  )
}

const FirstConversation = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  color: #657795;
  margin: 59px 0px 0px 0px;
`

const TimeStamp = styled.span`
  min-width: 44px;
  min-height: 32px;
  font-size: 13px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  padding-left: 15px;
`

const Message = styled.span`
  height: 100%;
  padding-bottom: 10px;
`

const MessageTime = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #000000;
  margin: 15px 0px;
`

const MessageContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  height: 701px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: space-around;
  gap: 10px;
  border:1px solid black;
`

const MessageWrapper = styled.div`
  width: 100%;
  min-height: 43px;
  padding: 0;
  margin: 0px 0px 10px 0px;
  color: black;
`

const ReceivedMessage = styled.div`
  box-sizing: border-box;
  position: absolute;
  left: 34px;
  max-width: 419px;
  min-height: 32px;
  padding: 11px 11px 5px 24px;
  background: #ffffff;
  text-align: left;
  border-radius: 2px 16px 16px 16px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #000000;
`

const SenderMessage = styled.div`
  box-sizing: border-box;
  position: absolute;
  right: 34px;
  max-width: 419px;
  min-height: 32px;
  text-align: left;
  padding: 11px 11px 5px 24px;
  background: #ca599b;
  border-radius: 16px 2px 16px 16px;
  display: flex;
  justify-content: flex-strt;
  align-items: center;
  color: #ffffff;
`

const UserInfo = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`

const ChatHeader = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 9px;
  left: 9px;
  right: 9px;
  height: 55px;
  border-radius: 29px;
  color: black;
  background: #ffffff;
  padding: 6px;
`

const TextInput = styled.textarea`
  font-size: 16px;
  width: 70%;
  height: 25px;
  outline: none;
  border: none;
  resize: none;
  background: transparent;
`

const TypeBarContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 9px;
  left: 9px;
  right: 9px;
  height: 55px;
  border-radius: 13px;
  color: black;
  background: #ffffff;
`

const Container = styled(Content)`
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(179.97deg, #eef5ff 0.02%, rgba(236, 239, 255, 0) 123.25%);
  border-radius: 13px;
  height: inherit;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
`

const HelloBox = styled(Box)`
  width: 333px;
  height: 75px;
  background: #ffffff;
  border-radius: 2px 16px 16px 16px;
  color: #000000;
  font-size: 24px;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 10px;
`

const HelloText = styled(Typography)`
  color: #657795;
  font-size: 14px;
  margin-bottom: 5px;
`

export default ChatMainSection
