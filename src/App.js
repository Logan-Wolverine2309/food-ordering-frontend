import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { darkTheme } from './component/Theme/DarkTheme';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart';
import Profile from './component/Profile/Profile';
import CustomerRoute from './component/Routers/CustomerRoute';
import { useState } from 'react';

function App() {
  
  return (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline/>
    
     <CustomerRoute/>

</ThemeProvider>
  );
}

export default App;
