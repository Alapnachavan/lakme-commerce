

import './App.css';
import Navbar from './Components/Navbar';
import { Route,Routes } from 'react-router-dom';
import Trendingnow from './Components/Treandingnow';
import Categories from './Components/Categories';
import Track from './Components/Track';
import './App.css';
import React from 'react';
import Product from './components/Product';

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/Trendingnow" element={<Trendingnow/>}/>
          <Route path="/Categories" element={<Categories/>}/>
          <Route path="/Track" element={<Track/>}/>

      </Routes>
    </div>
  );
}

export default App;
