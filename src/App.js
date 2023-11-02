

import './App.css';
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Trendingnow from './Components/Treandingnow';
import Categories from './Components/Categories';
import Track from './Components/Track';
import './App.css';
import React from 'react';
// import Profile from './Components/profile';
// import Product from './components/Product';
import Login from './Components/Login';
import Cart from './Components/Cart';


function App() {
  
  return (
    <div>
      <Navbar />
      {/* <Login/> */}
      {/* <Profile/> */}
      <Routes>
          <Route path="/Trendingnow" element={<Trendingnow/>}/>
          <Route path="/Categories" element={<Categories/>}/>
          <Route path="/Track" element={<Track/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
