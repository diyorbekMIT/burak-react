import React from 'react';
import { Button, Container, Typography, Stack, Box, Switch, SwitchProps } from '@mui/material';
import { RippleBadge } from './MaterialTheme/styled';
import { Link, Route, Router, useLocation, } from 'react-router-dom';
import {  HomePage } from './screens/homePage';
import { ProductsPage } from './screens/productsPage';
import { OrdersPage } from './screens/ordersPage';
import { UserPage } from './screens/userPage';
import { HomeNavbar } from './components/headers/HomeNavbar';
import { OtherNavbar } from './components/headers/OtherNavbar';
import { Footer } from './components/footer';
import '../css/App.css';
import "../css/navbar.css";
function App() {
  const location = useLocation();
  
  
  return (
    <>
    {location.pathname == "/" ? <HomeNavbar /> : <OtherNavbar />}
    <Switch {...( {} as SwitchProps )} >
      <Route path="/products">
        <ProductsPage />
      </Route>
      <Route path="/orders">
        <OrdersPage />
      </Route>
      <Route path="/member-page">
        <UserPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
    <Footer />
  </>
  );
}



export default App;