import { Box, Button, Container, ListItemIcon, Menu, MenuItem, Stack } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { Logout } from "@mui/icons-material";
import { useGlobals } from "../../hooks/ueGlobals";
import { CartItem } from "../../../lib/types/search";
import { T } from "../../../lib/types/common";
import { serverApi } from "../../../lib/config";


interface OtherNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
  anchorEl: HTMLElement | null;
  handleCloseLogout: () => void;
  handleLogoutRequest: () => void;
    handleLogoutClick: (e: T) => void;
}

export const OtherNavbar = (props: OtherNavbarProps) => {
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
    setLoginOpen,
    setSignupOpen,
    handleLogoutClick,
    handleCloseLogout,
    anchorEl,
    handleLogoutRequest,
  } = props;
  const { authMember } = useGlobals();

  return (
    <div className="other-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box className="">
            <NavLink to={"/"}>
              <img className="brand-logo" alt="" src="/icons/burak.svg" />
            </NavLink>
          </Box>

          <Stack className="links">
            <Box className="hover-line">
              <NavLink to={"/"}>Home</NavLink>
            </Box>

            <Box className="hover-line">
              <NavLink activeClassName="underline" to={"/products"}>
                Products
              </NavLink>
            </Box>

            {authMember ? (
              <>
                <Box className="hover-line">
                  <NavLink activeClassName="underline" to={"/orders"}>
                    Orders
                  </NavLink>
                </Box>
                <Box className="hover-line">
                  <NavLink activeClassName="underline" to={"/member-page"}>
                    My Page
                  </NavLink>
                </Box>
              </>
            ) : null}

            <Box className="hover-line">
              <NavLink activeClassName="underline" to={"/help"}>
                Help
              </NavLink>
            </Box>
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />

            {!authMember ? (
              <Box>
                <Button
                  className="login-button"
                  variant="contained"
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img
                className="user-avatar"
                src={
                  authMember?.memberImage
                    ? `${serverApi}/${authMember?.memberImage}`
                    : "/icons/default-user.svg"
                }
                onClick={handleLogoutClick}
                alt="user.img"
              />
            )}
            <Menu
              onClick={handleCloseLogout}
              onClose={handleCloseLogout}
              id="account-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleLogoutRequest}>
                <ListItemIcon>
                  <Logout fontSize="small" style={{ color: "blue" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};