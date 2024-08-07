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
import AuthenticationModal from "./components/auth";



export function App() {
  const location = useLocation();
  const {cartItems, onAdd, onDelete, onRemove, onDeleteAll} = useBasket();
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);

  /** Handlers */

  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);
  
  return (
    <>
      {location.pathname === "/" ? 
        <HomeNavbar  
          onAdd={onAdd}
          cartItems={cartItems} 
          onRemove={onRemove} 
          onDeleteAll={onDeleteAll} 
          onDelete={onDelete}
          setSignupOpen={setSignupOpen}
          setLoginOpen={setLoginOpen}/> 
        : 
        <OtherNavbar 
          onAdd={onAdd}
          cartItems={cartItems}
          onRemove={onRemove} 
          onDeleteAll={onDeleteAll} 
          onDelete={onDelete}
          setSignupOpen={setSignupOpen}
          setLoginOpen={setLoginOpen}
           />}
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

      <AuthenticationModal 
       signupOpen={signupOpen}
       loginOpen={loginOpen}
       handleLoginClose={handleLoginClose}
       handleSignupClose={handleSignupClose}
      />
    </>
  );
}

export default App;
