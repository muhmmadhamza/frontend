import React from 'react';
import { Box, Typography, Button, InputBase, styled, } from '@mui/material';
import {
  
    MoreVertical,
    Paperclip,
    Smile,
    Send,

    MessageSquare,
    Phone,
    Plus
} from 'lucide-react';
import { MessageBubbleOneComponent, MessageBubbleThreeComponent, MessageBubbleTwoComponent } from './MessageBubble';

const ChatContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ChatHeader = styled(Box)`
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  padding: 16px;
`;

const ChatMessages = styled(Box)`
  flex-grow: 1;
  padding: 16px;
`;

const MessageBubble = styled(Box)`
  background-color: #f3f3f3;
  padding: 0.75rem;
  border-radius: 10px;
  max-width: 20rem;
  margin-bottom: 10px;
`;

const SentMessageBubble = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

  & > div {
    background: linear-gradient(to right, #D92CC1, #4D72F8);
    color: white;
    padding: 12px;
    border-radius: 10px;
    max-width: 300px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);
  }
`;

const MessageInputBox = styled(Box)`
  background-color: rgb(243 244 246);
  /* padding: .5rem; */
  border-top: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
  border-radius: 9999px;
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
`;
const MessageInputBoxConatiner = styled(Box)`
  background-color: white;
  padding: 1rem;
  border-top: 1px solid #e5e5e5;
`;

const IconButton = styled(Button)`
  padding: 8px;
  color: gray;
  border-radius:9999px;
`;

const SendButton = styled(Button)`
  background: linear-gradient(to right, #D92CC1, #4D72F8);
  color: white;
  border-radius: 9999px;
  padding: .5rem;
  margin-left: 1rem;
  min-width: 0px !important;
`;
const TimeText = styled(Typography)`
  font-size: 0.89rem; 
  text-align: right;
  color: #9CA3AF; 
  margin-top: 0.25rem; 
`;
const StyledBox = styled(Box)(({ theme }) => ({
    width: 40,
    height: 40,
    borderRadius: '50%',
    background: 'linear-gradient(to right, #D92CC1, #4D72F8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    marginRight: 2, 
  }));
const MainWrapper = styled(Box)(({ theme }) => ({
display:"flex",
flexDirection:"column",
alignItems:"flex-end"
  }));

const ChatApp = () => {
    return (
        <ChatContainer>
            <ChatHeader>
                <Box display="flex" alignItems="center">
                    <StyledBox                    >
                        MI
                    </StyledBox>
                    <Box>
                        <Typography variant="h6">Mishal Irfan</Typography>
                        <Typography variant="body2" color="textSecondary">Last seen at 2:34pm</Typography>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center" gap={2}>
                    <IconButton><Phone size={24} /></IconButton>
                    <IconButton><MessageSquare size={24} /></IconButton>
                    <IconButton><MoreVertical size={24} /></IconButton>
                </Box>
            </ChatHeader>

            <ChatMessages>
                <MessageBubble>
                    Hello, how are you available for meeting
                    <TimeText>
                        9:30AM
                    </TimeText>
                </MessageBubble>

                <MainWrapper>

                    <MessageBubbleOneComponent />
                    <MessageBubbleTwoComponent />
                    <MessageBubbleThreeComponent />

                </MainWrapper>
                <MessageBubble>
                    Hello, how are you available for meeting
                    <TimeText>
                        9:30AM
                    </TimeText>
                </MessageBubble>
                <MessageBubbleOneComponent />
                <MessageBubble>
                    Hello, how are you available for meeting
                    <TimeText>
                        9:30AM
                    </TimeText>
                </MessageBubble>

            </ChatMessages>

             <MessageInputBoxConatiner>
            <MessageInputBox>
                <IconButton><Paperclip size={20} /></IconButton>
                <InputBase
                    placeholder="Type message here"
                    fullWidth
                    sx={{ marginLeft: 1, flexGrow: 1 }}
                />
                <IconButton><Smile size={20} /></IconButton>
                <SendButton><Send size={20} /></SendButton>
            </MessageInputBox>
            </MessageInputBoxConatiner>
          
        </ChatContainer>
    );
};

export default ChatApp;

