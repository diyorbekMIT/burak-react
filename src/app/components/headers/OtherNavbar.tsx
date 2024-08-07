import { Container, Stack, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { CartItem } from "../../../lib/types/search";

interface OtherNavbarProps {
    cartItems: CartItem[];
    onRemove: (item: CartItem) => void;
    onAdd: (item: CartItem) => void;
    onDelete: (item: CartItem) => void;
    onDeleteAll: () => void;
    setSignupOpen: (isOpen: boolean) => void;
    setLoginOpen: (isOpen: boolean) => void;
    
}

export function OtherNavbar(props: OtherNavbarProps) {
    const {cartItems, onAdd, onDelete, onRemove, onDeleteAll, setSignupOpen, setLoginOpen} = props;
    const authMember = null;
    return <div className="other-navbar">
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
                    <NavLink to="/">Home</NavLink>
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
    </Container>
</div>
}