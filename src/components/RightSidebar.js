import React, { useState } from 'react';
import { Box, Button, Typography, InputBase, IconButton, styled } from '@mui/material';
import { Plus, Search, ChevronDown } from 'lucide-react'; // Ensure to install react-feather
import setting from './setting.png';
import vector from './Vector.png';
 
const Container = styled(Box)({
  width: '25%',
  backgroundColor: 'white',
  borderLeft: '1px solid #e5e7eb',
});

const Header = styled(Box)({
  backgroundColor: 'white',
  padding: '16px',
  display: 'flex',
  justifyContent: 'flex-end',
  borderBottom: '1px solid #e5e7eb',
});

const HeaderIcons = styled(Box)({
  padding: '12px 0',
  display: 'flex',
  gap: '1rem',
});

const Content = styled(Box)({
  padding: '16px',
});

const TitleBar = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
});

const SearchBox = styled(Box)({
  position: 'relative',
  marginBottom: '16px',
});

const SearchIcon = styled(Search)({
  position: 'absolute',
  left: '12px',
  top: '50%',
  transform: 'translateY(-50%)',
  color: 'gray',
});

const SearchInput = styled(InputBase)({
  paddingLeft: '32px',
  paddingRight: '16px',
  paddingTop: '8px',
  paddingBottom: '8px',
  marginLeft:"1px",
  borderRadius: '9999px',
  border: '1px solid #e5e7eb',
  width: '100%',
});

const ContactListBox = styled(Box)({
  position: 'relative',
});

const ContactItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '16px',
});

const ContactAvatar = styled(Box)({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundImage: 'linear-gradient(to right, #4D72F8, #D92CC1)',
  color: 'white',
  fontWeight: 'bold',
  marginRight: '16px',
});

const ContactInfo = styled(Box)({});

const ContactName = styled(Typography)({
  fontWeight: 'bold',
});

const ContactPhone = styled(Typography)({
  color: 'gray',
});

const AlphabetList = styled(Box)({
  position: 'absolute',
  top: '0',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
});

const AlphabetButton = styled(Button)({
  color: 'gray',
  padding: '1px',
  '&:hover': {
    color: 'black',
  },
});
const PluseButton = styled(Button)({
    borderRadius: '9999px',
    backgroundImage: 'linear-gradient(to right, #4D72F8, #D92CC1)',
    minWidth:"0px ",
    padding:"0px"
});

const SectionHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderTop: '1px solid #e5e7eb',
  borderBottom: '1px solid #e5e7eb',
  padding: '8px ',
});

const RightSidebar = () => {
  const [contacts] = useState([
    { name: 'Alina', phone: '0923456784521' },
    { name: 'Anna', phone: '0923456784521' },
    { name: 'Brown', phone: '0923456784521' },
    { name: 'Ben', phone: '0923456784521' },
    { name: 'Cutting', phone: '0923456784521' },
    { name: 'Carol', phone: '0923456784521' },
  ]);

  return (
    <Container>
      <Header>
        <HeaderIcons>
          <img src={setting} width={20} height={20} alt="settings" />
          <img src={vector} width={20} height={20} alt="vector" />
        </HeaderIcons>
      </Header>

      <Content>
         <TitleBar>
          <Typography variant="h6" fontWeight="bold">
            Contact
          </Typography>
          <PluseButton
            variant="contained"
            color="primary"
             
          >
            <Plus size={20} />
          </PluseButton>
        </TitleBar>

         <SearchBox>
          <SearchIcon size={20} />
          <SearchInput placeholder="Search Contact" />
        </SearchBox>

         <ContactListBox>
          <div style={{ paddingRight: '16px' }}>
            {contacts.map((contact, index) => (
              <ContactItem key={index}>
                <ContactAvatar>{contact.name[0]}</ContactAvatar>
                <ContactInfo>
                  <ContactName variant="body2">{contact.name}</ContactName>
                  <ContactPhone variant="caption">{contact.phone}</ContactPhone>
                </ContactInfo>
              </ContactItem>
            ))}
          </div>

          <AlphabetList>
            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','k','L','M','N'].map((letter, index) => (
              <AlphabetButton key={index}>{letter}</AlphabetButton>
            ))}
          </AlphabetList>
        </ContactListBox>
      </Content>

       <SectionHeader>
        <Typography variant="subtitle1" fontWeight="semibold">
          Recent
        </Typography>
        <IconButton color="default">
          <ChevronDown size={20} />
        </IconButton>
      </SectionHeader>

      <SectionHeader>
        <Typography variant="subtitle1" fontWeight="semibold">
          Favourites
        </Typography>
        <IconButton color="default">
          <ChevronDown size={20} />
        </IconButton>
      </SectionHeader>
    </Container>
  );
};

export default RightSidebar;
