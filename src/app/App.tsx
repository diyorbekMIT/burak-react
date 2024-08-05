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



export function App() {
  const location = useLocation();
  

  const cartJson: string | null = localStorage.getItem('cartData');
  const currentCart = cartJson ? JSON.parse(cartJson) : [];
  const [cartItems, setCartItems] = useState<CartItem[]>(currentCart);
  

  /** HANDLERS */

  const onAdd = (input: CartItem) => {
    const exist: any = cartItems.find(
      (item: CartItem) => item._id === input._id);
    if(exist) {
      const cartUpdate = cartItems.map((item: CartItem) => 
        item._id === input._id 
          ? {...exist, quantity: exist.quantity + 1}  
          : item
        );
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));

    } else {
      const cartUpdate = [...cartItems, {...input}];
      setCartItems(cartUpdate);
      localStorage.setItem("cartData", JSON.stringify(cartUpdate));
    }
    
  }
  
  return (
    <>
      {location.pathname === "/" ? <HomeNavbar cartItems={cartItems} /> : <OtherNavbar cartItems={cartItems} />}
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
