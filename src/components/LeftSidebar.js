import React, { useState } from 'react';
import { Avatar, Button, Box, List, ListItem, ListItemText, IconButton, InputBase, styled } from '@mui/material';
import { Search, Phone, ChevronDown } from 'lucide-react';

const SidebarContainer = styled(Box)`
  width: 25%;
  border-right: 1px solid #e0e0e0;
`;

const Header = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e0e0e0;
  padding: 16px;
`;

const GradientButton = styled(Button)`
  background: linear-gradient(to right, #4d72f8, #d92cc1);
  border-radius: 50px;
  color: #fff;
`;
const OutlinedButton = styled(Button)`
  border-radius: 9999px;
  padding: 0.25rem 2rem !important;
  font-size: 10px;
   background:#fff;
   border: 1px solid #e0e0e0;
  color: black;
`;

const ToggleSection = styled(Box)`
  display: flex;
  background: white;
  border-radius: 50px;
  padding: 8px;
  margin-left: 32px;
  position: relative;
  width: 200px;
  height: 40px;
`;

const ToggleBackground = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 50px;
  background: linear-gradient(to right, #4d72f8, #d92cc1);
  width: 50%;
  transition: all 0.3s ease;
  transform: ${({ active }) => (active ? 'translateX(100%)' : 'translateX(0%)')};
`;

const SearchBox = styled(Box)`
  position: relative;
  margin-top: 16px;
`;

const CustomInputBase = styled(InputBase)`
  padding-left: 40px;
  padding-right: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 100%;
  background-color: white;
  border-radius: 50px;
  border: 1px solid #e0e0e0;
`;

const ContactList = styled(Box)`
  padding: 0 24px;
  background-color: #f5f5f5;
`;

const ContactItem = styled(ListItem)`
  background-color: white;
  margin-bottom: 16px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
`;

const AvatarStyled = styled(Avatar)`
  background: linear-gradient(to bottom, #4d72f8, #d92cc1);
  color: white;
  margin-right: 16px;
`;

const LeftSidebar = () => {
  const [activeSection, setActiveSection] = useState('Calls');
  const contacts = [
    { name: 'Kim Williamson', status: 'Missed', time: '3:34pm' },
    { name: 'Shane Watson', status: 'Outgoing', time: '3:34pm' },
    { name: 'Hazelwood', status: 'Incoming', time: '3:34pm' },
    { name: 'Zunaira Butt', status: 'Incoming', time: '2:34pm' },
    { name: 'Kamran Masood', status: 'Outgoing', time: '2:34pm' },
  ];

  return (
    <SidebarContainer>
      <Header>
        <GradientButton endIcon={<ChevronDown size={20} />}>
          All Numbers
        </GradientButton>
        <IconButton>
          <Phone size={24} color="gray" />
        </IconButton>
      </Header>

      <Box p={3} bgcolor="grey.100">
        <ToggleSection>
          <ToggleBackground active={activeSection === 'Calls'} />
          <Button
            fullWidth
            sx={{
              zIndex: 10,
              color: activeSection === 'Messages' ? 'white' : 'black',
              transition: 'color 0.3s ease',
            }}
            onClick={() => setActiveSection('Messages')}
          >
            Messages
          </Button>
          <Button
            fullWidth
            sx={{
              zIndex: 10,
              color: activeSection === 'Calls' ? 'white' : 'black',
              transition: 'color 0.3s ease',
            }}
            onClick={() => setActiveSection('Calls')}
          >
            Calls
          </Button>
        </ToggleSection>

        <SearchBox>
          <Search
            size={20}
            style={{ position: 'absolute', top: '50%', left: '12px', transform: 'translateY(-50%)', color: '#9e9e9e' }}
          />
          <CustomInputBase placeholder="Search" />
        </SearchBox>

         <Box display="flex" mt={4} gap={2}>
          <GradientButton>All</GradientButton>
          <OutlinedButton variant='outlined'>
            Scheduled
          </OutlinedButton>
          <OutlinedButton >
            Broadcast
          </OutlinedButton>
        </Box>
      </Box>

       <ContactList>
        <List>
          {contacts.map((contact, index) => (
            <ContactItem key={index}>
              <Box display="flex" alignItems="center">
                <AvatarStyled>{contact.name[0]}</AvatarStyled>
                <Box>
                  <ListItemText primary={contact.name} secondary={contact.status} />
                </Box>
              </Box>
              <ListItemText primary={contact.time} sx={{ textAlign: 'right', color: '#9e9e9e' }} />
            </ContactItem>
          ))}
        </List>
      </ContactList>
    </SidebarContainer>
  );
};

export default LeftSidebar;

