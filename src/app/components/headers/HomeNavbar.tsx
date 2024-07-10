import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export function HomeNavbar() {
    const authMember = false;
    return (
        <div className="home-navbar">
            <Container sx={{ mt: "55px", height: "642px" }}>
                <Stack 
                    sx={{ height: "50px" }} 
                    flexDirection="row" 
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Box>
                        <NavLink to="/">
                            <img  
                                style={{ width: "125px", height: "30px" }}
                                src="/icons/burak.svg"
                                alt="Logo"
                            />
                        </NavLink>
                    </Box>
                    <Stack 
                        flexDirection="row"
                        justifyContent="space-between"
                        minWidth="700px"
                        alignItems="center"
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
                                <Button variant="contained" style={{ background: "#3776CC", color: "#f8f8ff" }}>Login</Button>
                            ) : (
                                <img alt="User" />
                            )}
                        </Box>
                    </Stack>
                </Stack>
                <Stack>Detail</Stack>
            </Container>
        </div>
    );
}
