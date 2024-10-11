
import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import ChatApp from './components/ChatComponent';
import RightSidebar from './components/RightSidebar';
import { Box, styled } from '@mui/material';

function App() {
const MainContainer = styled(Box)`
display: flex;
height: 100vh;

`;
  return (
    <MainContainer>
      <LeftSidebar />
      <ChatApp />
      <RightSidebar /> 
    </MainContainer>
  );
}

export default App;

