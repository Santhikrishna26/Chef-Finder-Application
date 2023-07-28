import { AppBar, Box, Toolbar, Typography} from '@mui/material';
// import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="secondary">
        <Toolbar>
          <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>ChefKart</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  </>;
};

export default Navbar;
