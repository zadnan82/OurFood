import React from "react";
//import Logo from "../Assets/logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useState } from "react"; 
import "../assets/css/main.css";

const Header = () => {

  const menuOptions = [
    {
      text: "Hem",
      icon: <HomeIcon />,
    },
    {
      text: "Om",
      icon: <InfoIcon />,
    },
    {
      text: "Referenser",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Kontakt",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Vagn",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header id="header" class="header fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-lg-0">
        
        {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
        <h1>Our Food<span>.</span></h1>
      </a>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#references">References</a></li>
          <li><a href="#contact">Contact</a></li>  
        </ul>
      </nav> 

      <a class="btn-book-a-table" href="#book-a-table">Book a Table</a>
      <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
      <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

    </div>
  </header> 

  )
}


export default Header