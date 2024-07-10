import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
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
                            <NavLink to="/home" className="product-link underline">Home</NavLink>
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
                        <Box>
                            {!authMember ? (
                                <Button variant="contained" className="login-button">Login</Button>
                            ) : (
                                <img 
                                className="user-avatar"
                                src="/icons/default-user.svg" 
                                alt="User" />
                            )}
                        </Box>
                    </Stack>
                </Stack>
                <Stack className={"header-frame"}>
                    <Stack className={"detail"}>
                        <Box className={"head-main-txt"}>World's Most Delicious Cousine</Box>
                        <Box className={"wel-txt"}>The Choice, not just a choice</Box>
                        <Box className={"service-txt"}>24 hours service</Box>
                        <Box className={"sign-up"}>
                            {!authMember ? (
                                <Button variant="contained" className="signup-button">Sign Up</Button>
                            ) : null}
                        </Box>
                    </Stack>
                    <Box className={"logo-frame"}>
                        <div className={"logo-img"}></div>
                    </Box>
                </Stack>
            </Container>
        </div>
    );
}
