import { Route, Switch, useLocation } from "react-router-dom";
import  OrdersPage  from "./screens/ordersPage";

import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import "../css/App.css";
import "../css/navbar.css";
import "../css/home.css"
import "../css/footer.css";
import HelpPage  from "./screens/helpPage";



import MemberService from "./services/MemberService";
import { useGlobals } from "./hooks/ueGlobals";
import { T } from "../lib/types/common";
import { sweetErrorHandling, sweetTopSuccessAlert } from "../lib/sweetAlert";
import { Messages } from "../lib/config";
import Footer from "./components/footer";
import { useState } from "react";
import useBasket from "./hooks/useBasket";
import { ProductsPage } from "./screens/productsPage";
import UserPage from "./screens/userPage";
import HomePage from "./screens/homePage";
import AuthenticationModal from "./components/auth";


export function App() {
  const location = useLocation();
  const { cartItems, onAdd, onRemove, onDelete, onDeleteAll } = useBasket();
  const [signupOpen, setSignupOpen] = useState<boolean>(false);
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const {setAuthMember} = useGlobals()

  /** HANDLERS **/

  const handleSignupClose = () => setSignupOpen(false);
  const handleLoginClose = () => setLoginOpen(false);

  const handleLogoutClick = (e: T) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseLogout = () => setAnchorEl(null);
 const handleLogoutRequest = async () => {
  console.log('Clicked');
  
   try {
     const member = new MemberService();
     await member.logout();
     await sweetTopSuccessAlert("success", 700);
     setAuthMember(null);
   } catch (err) {
     console.log(err);
     sweetErrorHandling(Messages.error1);
   }
 };

  return (
    <>
      {location.pathname === "/" ? (
        <HomeNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          setSignupOpen={setSignupOpen}
          setLoginOpen={setLoginOpen}
          anchorEl={anchorEl}
          handleLogoutClick={handleLogoutClick}
          handleCloseLogout={handleCloseLogout}
          handleLogoutRequest={handleLogoutRequest}
        />
      ) : (
        <OtherNavbar
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
          onDelete={onDelete}
          onDeleteAll={onDeleteAll}
          setSignupOpen={setSignupOpen}
          setLoginOpen={setLoginOpen}
          anchorEl={anchorEl}
          handleLogoutClick={handleLogoutClick}
          handleCloseLogout={handleCloseLogout}
          handleLogoutRequest={handleLogoutRequest}
        />
      )}
      <Switch>
        <Route path="/products">
          <ProductsPage onAdd={onAdd} />
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



