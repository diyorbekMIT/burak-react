import { Route, Switch, useLocation } from "react-router-dom";
import  OrdersPage  from "./screens/ordersPage";

import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import "../css/App.css";
import "../css/navbar.css";
import "../css/navbar.css";
import "../css/footer.css";
import HelpPage  from "./screens/helpPage";
import Footer from "./components/footer";

import { ProductsPage } from "./screens/productsPage";
import UserPage from "./screens/userPage";
import HomePage from "./screens/homePage";
import { CartItem } from "../lib/types/search";
import { useState } from "react";
import useBasket from "./hooks/useBasket";



export function App() {
  const location = useLocation();
  
  const {cartItems, onAdd, onDelete, onRemove, onDeleteAll} = useBasket();
  
  return (
    <>
      {location.pathname === "/" ? 
        <HomeNavbar  
          onAdd={onAdd}
          cartItems={cartItems} 
          onRemove={onRemove} 
          onDeleteAll={onDeleteAll} 
          onDelete={onDelete}/> 
        : 
        <OtherNavbar 
          onAdd={onAdd}
          cartItems={cartItems}
          onRemove={onRemove} 
          onDeleteAll={onDeleteAll} 
          onDelete={onDelete} />}
      <Switch>
        <Route path="/products">
          <ProductsPage onAdd={onAdd}/>
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
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
