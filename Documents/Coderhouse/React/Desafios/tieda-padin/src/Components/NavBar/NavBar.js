import React from "react";
import logo from "../../assets/logo-tienda.jpeg";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import "./NavBar.css"

const NavBar = () => {

    return (

            <header>

            <img src={logo} alt="" />

            <nav>
                
                <Button className = "buttonNav" variant="outlined" color="error" href="">Inicio</Button>
                <Button className = "buttonNav" variant="outlined" color="error" href="">Nosotros</Button>
                <Button className = "buttonNav" variant="outlined" color="error" href="">Tienda</Button>
                <Button className = "buttonNav" variant="outlined" color="error" href="">Contacto</Button>

            </nav>

            <ShoppingCartIcon className="carrito-logo" sx={{ fontSize: 30 }} color="error" />

            

            </header>

        

    )

}

export default NavBar