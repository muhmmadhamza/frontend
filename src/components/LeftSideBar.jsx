import React, { useState } from 'react';
import {
  Box,
  Button,
  Tabs,
  Tab,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  Avatar,
  List,
  ListItem,
  Divider,
  Paper,
} from '@mui/material';
import { Search, Call, Message } from '@mui/icons-material';

const Sidebar = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  // Handle tab change for Messages and Calls
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
      <div
      className='bg-gray-100'
      style={{
        // width: '300px',
        padding: '0px  15px',
      }}
    >

      <List>
        {[
          { name: 'Kim Williamson', status: 'Missed', time: '3:34pm' },
          { name: 'Shane Watson', status: 'Outgoing', time: '3:34pm' },
          { name: 'Hazelwood', status: 'Incoming', time: '3:34pm' },
          { name: 'Zunaira Butt', status: 'Incoming', time: '2:34pm' },
          { name: 'Kamran Masood', status: 'Outgoing', time: '2:34pm' },
        ].map((contact, index) => (
          <ListItem
            key={index}
            sx={{
              backgroundColor: '#fff',
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '10px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                style={{
                  background: 'linear-gradient(180deg, #4D72F8 0%, #D92CC1 100%)',
                  color: '#fff',
                  marginRight: '10px',
                }}
              >
                {contact.name[0]}
              </Avatar>
              <Box>
                <Typography sx={{ fontWeight: 'bold' }}>
                  {contact.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {contact.status}
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2"   color="textSecondary">
              {contact.time}
            </Typography>
          </ListItem>
        ))}
      </List>
    </div>
   );
};

export default Sidebar;
