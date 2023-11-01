

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link} from 'react-router-dom';
import Tab from '@mui/material/Tab';
function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <img
            src="lakme.jpeg"
            alt="Logo"
            width="120"
            height="50"
          />
          <Tab label={<Link to="/Trendingnow" style={{ textDecoration: 'none', color: 'white' }}>Trendingnow </Link>} />
          <Tab label={<Link to="/Categories" style={{ textDecoration: 'none', color: 'white' }}>Categories</Link>}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Tab label={<Link to="/Track" style={{ textDecoration:'none', color:'white'}}>Track</Link>}/>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
