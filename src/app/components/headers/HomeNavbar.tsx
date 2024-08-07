import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { useEffect, useState } from "react";
import { CartItem } from "../../../lib/types/search";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onRemove: (item: CartItem) => void;
  onAdd: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;

}

export function HomeNavbar(props: HomeNavbarProps) {
  const {cartItems, onAdd, onDelete, onRemove, onDeleteAll, setSignupOpen, setLoginOpen} = props;

    const authMember = null;


    return (
        <div className="home-navbar">
            <Container className="navbar-container">
                <Stack 
                    className="menu"
                >
                    <Box>
                        <NavLink to="/">
                            <img  
                                className="brand-logo"
                                src="/icons/burak.svg"
                               
                            />
                        </NavLink>
                    </Box>
                    <Stack 
                        className="links"
                    >
                         <Box className="hover-line">
                            <NavLink to="/" activeClassName="product-link underline">Home</NavLink>
                        </Box>
                        <Box className="hover-line">
                            <NavLink to="/products" className="product-link">Products</NavLink>
                        </Box>
                        {authMember && (
                            <>
                                <Box className="hover-line">
                                    <NavLink to="/orders" className="product-link">Orders</NavLink>
                                </Box>
                                <Box className="hover-line">
                                    <NavLink to="/member-page" className="product-link">My Page</NavLink>
                                </Box>
                            </>
                        )}
                        <Box className="hover-line">
                            <NavLink to="/help" className="product-link">Help</NavLink>
                        </Box>
                        <Basket 
                          onAdd={onAdd}
                          cartItems={cartItems}   
                          onRemove={onRemove} 
                          onDeleteAll={onDeleteAll} 
                          onDelete={onDelete}/>
                        <Box>
                            {!authMember ? (
                                <Button variant="contained" className="login-button" onClick={() => setLoginOpen(true)}>Login</Button>
                            ) : (
                                <img 
                                className="user-avatar"
                                src="/icons/default-user.svg" 
                                alt="User" />
                            )}
                        </Box>
                    </Stack>
                </Stack>
                <Stack className="header-frame">
          <Stack className="detail">
            <Box className="head-main-txt">World`s Most Delicious Cousine</Box>
            <Box className="wel-txt">The Choice, not just a choice</Box>
            <Box className="service-txt">24 hours service</Box>
            <Box className="sign-up">
              {!authMember ? (
                <Button
                  variant={"contained"}
                  className="signup-button"
                  onClick={() => setSignupOpen(true)}
                >
                  Signup
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Stack className="logo-frame">
            <div className="logo-img"></div>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}