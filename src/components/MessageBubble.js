import React from 'react';
import { Box, styled ,Typography} from '@mui/material';

 

const TimeText = styled(Typography)`
  font-size: 0.89rem; 
  text-align: right;
  color: #E9D5FF; 
  margin-top: 0.25rem; 
`;
const MessageBubbleOne = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;


  & > div {
    background: linear-gradient(to right, #4D72F8, #D92CC1);
    color: white;
    padding: 12px;
    width: 160px;
    border-top-left-radius: 9999px;
    border-top-right-radius:9999px ;
    border-bottom-left-radius: 9999px;
    border-bottom-right-radius: 0px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15);

    & > div {
      font-size: 12px;
      text-align: right;
      color: #B4A0D2;
      margin-top: 5px;
    }
  }
`;

const MessageBubbleOneComponent = () => (
  <MessageBubbleOne>
    <Box>
      Hello
      <TimeText>9:30AM</TimeText>
    </Box>
  </MessageBubbleOne>
);

// Second Bubble Component
const MessageBubbleTwo = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

  & > div {
    background: linear-gradient(to right, #4D72F8, #D92CC1);
    color: white;
    padding: 12px;
    max-width: 330px;
    border-radius: 9999px 0 0 9999px;

    & > div {
      font-size: 12px;
      text-align: right;
      color: #B4A0D2;
      margin-top: 5px;
    }
  }
`;

const MessageBubbleTwoComponent = () => (
  <MessageBubbleTwo>
    <Box>
      Hello, how are you available for meeting
      <TimeText>9:32AM</TimeText>
    </Box>
  </MessageBubbleTwo>
);


// Third Bubble Component
const MessageBubbleThree = styled(Box)`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;

  & > div {
    background: linear-gradient(to right, #4D72F8, #D92CC1);
    color: white;
    padding: 12px;
    max-width: 330px;
    border-radius: 9999px 0 9999px 9999px;

    & > div {
      font-size: 12px;
      text-align: right;
      color: #B4A0D2;
      margin-top: 5px;
    }
  }
`;

const MessageBubbleThreeComponent = () => (
  <MessageBubbleThree>
    <Box>
      Hello, how are you available for meeting
      <TimeText>9:32AM</TimeText>
    </Box>
  </MessageBubbleThree>
);

export { MessageBubbleOneComponent, MessageBubbleTwoComponent, MessageBubbleThreeComponent };
