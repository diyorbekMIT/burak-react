import React from 'react';
import {Link, Route, Switch, useLocation } from 'react-router-dom';
// import { RippleBadge } from './MaterialTheme/styled';
import { Box, Button, Container, Stack, Typography } from '@mui/material';
import {  HomePage } from './screens/homePage';
import { ProductsPage } from './screens/productsPage';
import { OrdersPage } from './screens/ordersPage';
import { UserPage } from './screens/userPage';
import { HomeNavbar } from './components/headers/HomeNavbar';
import { OtherNavbar } from './components/headers/OtherNavbar';
import  Footer  from './components/footer';
import '../css/App.css';
import "../css/navbar.css";
import "../css/footer.css";
import { HelpPage } from './screens/helpPage';
function App() {
  const location  = useLocation()
  console.log("console:" , location);
  return (
    <>
      {location.pathname === '/' ? <HomeNavbar/> : <OtherNavbar/> }
      <Switch>
        <Route path="/"><HomePage/> </Route>
        <Route path="/products"><ProductsPage /></Route>
        <Route path="/orders"><OrdersPage /></Route>
        <Route path="/member-page"><UserPage/></Route>
        <Route path="/help"><HelpPage /></Route>
      </Switch>
      <Footer/>
    </>
  );
}



export default App;