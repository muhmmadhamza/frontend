import React from 'react';
import {
  AppBar,
  Toolbar,
  Avatar,
  Grid,
  Paper,
  Tabs,
  Tab,
  TextField,
  Box,
  List,
  ListItem,
  Typography,
  Divider,
  IconButton,
  InputAdornment,
  Button,
  MenuItem,
  Menu,
} from '@mui/material';
import { Search, Call, Send, Chat, Settings, Phone } from '@mui/icons-material';
import Sidebar from './LeftSideBar';

export default function ChatApp() {
  // Dropdown state for "Select your number"
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ height: '100vh' }}>
      {/* Top Navbar */}
     <Paper>
     <AppBar position="static" color="default" sx={{ boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          
          {/* Left section with dropdown and icons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* Dropdown for "Select your number" */}
            <Button
              variant="outlined"
              onClick={handleClick}
              sx={{
                borderColor: '#8a2be2',
                color: '#8a2be2',
                marginRight: '10px',
                textTransform: 'none',
              }}
            >
              Select your number
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>All Numbers</MenuItem>
              <MenuItem onClick={handleClose}>Number 1</MenuItem>
              <MenuItem onClick={handleClose}>Number 2</MenuItem>
            </Menu>
            {/* Chat and Call Icons */}
            <IconButton sx={{ color: '#8a2be2', marginRight: '10px' }}>
              <Chat />
            </IconButton>
            <IconButton sx={{ color: '#8a2be2' }}>
              <Phone />
            </IconButton>
          </Box>

          {/* Center section with profile name and status */}
          <Box sx={{ display: 'flex', alignItems: 'center', }}>
            <Avatar alt="Mishal Irfan" src="profile-pic-url" />
            <Box sx={{ marginLeft: '10px' }}>
              <Typography variant="h6" sx={{ margin: 0 }}>
                Mishal Irfan
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Last seen at 2:34pm
              </Typography>
            </Box>

            <Box>
            <IconButton sx={{ color: '#8a2be2' }}>
              <Call />
            </IconButton>
            
            :
          </Box>
          </Box>

          {/* Right section with call and settings icons */}
          <Box>
            <IconButton sx={{ color: '#8a2be2' }}>
              <Call />
            </IconButton>
            <IconButton sx={{ color: '#8a2be2' }}>
              <Settings />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
     </Paper>

      {/* The rest of the app goes below the Navbar */}
      <Grid container sx={{ height: 'calc(100vh - 64px)' }}>
        {/* Left Sidebar */}
        <Grid item xs={3} sx={{ borderRight: '1px solid #e0e0e0' }}>
      <Sidebar />
        </Grid>

        {/* Main Chat Section */}
        <Grid item xs={6}>
          <Paper sx={{ height: '100%', borderRadius: 0, display: 'flex', flexDirection: 'column' }}>
            {/* Chat Message Area */}
            <Box sx={{ flex: 1, padding: '10px', overflowY: 'auto', backgroundColor: '#f9f9f9' }}>
              {/* Received message */}
              <Box sx={{ display: 'flex', marginBottom: '10px' }}>
                <Box
                  sx={{
                    backgroundColor: '#e5e5ea',
                    padding: '10px',
                    borderRadius: '10px',
                    maxWidth: '70%',
                  }}
                >
                  <Typography>Hello, how are you available for meeting</Typography>
                </Box>
              </Box>

              {/* Sent message */}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <Box
                  sx={{
                    backgroundColor: '#6e00fa',
                    padding: '10px',
                    borderRadius: '10px',
                    maxWidth: '70%',
                    color: '#fff',
                  }}
                >
                  <Typography>Hello</Typography>
                </Box>
              </Box>

              {/* Another received message */}
              <Box sx={{ display: 'flex', marginBottom: '10px' }}>
                <Box
                  sx={{
                    backgroundColor: '#e5e5ea',
                    padding: '10px',
                    borderRadius: '10px',
                    maxWidth: '70%',
                  }}
                >
                  <Typography>Hello, how are you available for meeting</Typography>
                </Box>
              </Box>
            </Box>

            {/* Chat Input Box */}
            <Divider />
            <Box sx={{ padding: '10px', display: 'flex', alignItems: 'center' }}>
              <TextField
                fullWidth
                placeholder="Type a message"
                variant="outlined"
                size="small"
              />
              <IconButton color="primary" sx={{ marginLeft: '10px' }}>
                <Send />
              </IconButton>
            </Box>
          </Paper>
        </Grid>

        {/* Right Sidebar */}
        <Grid item xs={3}>
          <Paper sx={{ height: '100%', borderRadius: 0 }}>
            <Box sx={{ padding: '10px' }}>
              <TextField
                fullWidth
                placeholder="Search Contact"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            {/* Contact List */}
            <List>
              {['Afina', 'Brown', 'Cutting', 'Cear'].map((contact, index) => (
                <ListItem button key={index}>
                  <Avatar sx={{ marginRight: '10px' }}> {contact[0]} </Avatar>
                  <Typography>{contact}</Typography>
                </ListItem>
              ))}
            </List>

            <Divider />
            <Typography sx={{ padding: '10px' }}>Recent</Typography>
            <Typography sx={{ padding: '10px' }}>Favorites</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
