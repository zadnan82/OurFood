import React from "react";
// import Logo from "../Assets/logo.png";
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


const Navbar = () => {

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
    <nav id="navbar" class="navbar">
    <ul>
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#menu">Menu</a></li>
      <li><a href="#events">Events</a></li>
      <li><a href="#chefs">Chefs</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
        <ul>
          <li><a href="#">Drop Down 1</a></li>
          <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-down dropdown-indicator"></i></a>
            <ul>
              <li><a href="#">Deep Drop Down 1</a></li>
              <li><a href="#">Deep Drop Down 2</a></li>
              <li><a href="#">Deep Drop Down 3</a></li>
              <li><a href="#">Deep Drop Down 4</a></li>
              <li><a href="#">Deep Drop Down 5</a></li>
            </ul>
          </li>
          <li><a href="#">Drop Down 2</a></li>
          <li><a href="#">Drop Down 3</a></li>
          <li><a href="#">Drop Down 4</a></li>
        </ul>
      </li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>
  )
}


export default Navbar