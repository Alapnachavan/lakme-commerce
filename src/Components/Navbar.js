

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link} from 'react-router-dom';
import Tab from '@mui/material/Tab';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Search as SearchIcon } from '@mui/icons-material';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

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
             

          <Tab label={<Link to="/Trendingnow" style={{ textDecoration: 'none', color: 'white' ,fontWeight: 'bold'}}>Trendingnow </Link>} />
          <Tab label={<Link to="/Categories" style={{ textDecoration: 'none', color: 'white',fontWeight: 'bold' }}>Categories</Link>}/>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          {/* <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white' }}>
  <IconButton color="inherit">
    <SearchIcon />
  </IconButton>
  <InputBase
    placeholder="Search..."
    inputProps={{ 'aria-label': 'search' }}
  />
</div> */}<div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white' }}>
  <IconButton color="inherit" style={{ color: 'black' }}>
    <SearchIcon />
  </IconButton>
  <InputBase
    placeholder="search product here"
    inputProps={{ 'aria-label': 'search' }}
  />
</div>


        
          <Tab label={<Link to="/Track" style={{ textDecoration:'none', color:'white',fontWeight: 'bold'}}>Track</Link>}/>
          {/* <Button color="inherit">Login</Button> */}
          <Tab label={<Link to="/Login" style={{ textDecoration: 'none', color: 'white' ,fontWeight: 'bold'}}>Login</Link>} />
          <Tab label={<Link to="/Cart"  style={{ textDecoration: 'none', color: 'white' ,fontWeight: 'bold'}}><AddShoppingCartIcon /></Link>}/>
       
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Navbar;
