import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          className="appbar"
          style={{ background: "purple" }} 
        >
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <img src="https://preview.colorlib.com/theme/robotics/img/logo.png" alt="logo" />
            </Typography>

            <Link to="/">
              <Button color="inherit" style={{ color: "white" }}>
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button color="inherit" style={{ color: "white" }}>
                About Us
              </Button>
            </Link>
            <Link to="/services">
              <Button color="inherit" style={{ color: "white" }}>
                Services
              </Button>
            </Link>
            <Link to="/products">
              <Button color="inherit" style={{ color: "white" }}>
                Products
              </Button>
            </Link>
            <Link to="/blog">
              <Button color="inherit" style={{ color: "white" }}>
                Blog{" "}
              </Button>
            </Link>
            <Link to="/contact">
              <Button color="inherit" style={{ color: "white" }}>
                Contact
              </Button>
            </Link>
            <Link to="/dropdown">
              <Button color="inherit" style={{ color: "white" }}>
                DropDown
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
