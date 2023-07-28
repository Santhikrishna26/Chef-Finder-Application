import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import './Firstpage.css'
import { AppBar, Box, Toolbar, Typography} from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function Firstpage() {
  return (
    <div className='page'>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>ChefKart</Typography>
        </Toolbar>
      </AppBar>
    </Box>
      <div className="container">
    <Stack direction="row" spacing={20}>
      <div className="avatar-wrapper">
      <Avatar src="https://static.vecteezy.com/system/resources/previews/019/133/708/original/cartoon-flat-style-drawing-chef-standing-with-okay-gesture-and-cooking-uniform-prepares-ingredients-to-cook-best-dishes-beautiful-female-chef-with-table-and-cake-graphic-design-illustration-vector.jpg" sx={{ width: 180, height: 180 }}/>
      <Typography className="avatar-text">Chef</Typography>
      </div>
      <div className='avatar-wrapper'>
      <Avatar  src="https://s3-ap-south-1.amazonaws.com/blogmindler/bloglive/wp-content/uploads/2021/02/23124214/how-to-become-an-event-manager.png" sx={{ width: 180, height: 180 }} component={NavLink} to='/LoginReg' />
      <Typography className="avatar-text">Event Organizer</Typography>
      </div>
    </Stack>
    </div>
    </div>
  );
}