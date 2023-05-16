import React from 'react' 
import "../Styling/Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Logo from "../Assets/logo.png";

const Footer = () => {
  return (
    <footer>
     <div className="col-6">
        <img src={Logo} alt="" />

        <div className="footer__socials">
        <a href="#" target="_blank">
          <BsLinkedin />
        </a>
        <a href="#" target="_blank">
          <FaYoutube/>
        </a>
        <a href="#" target="_blank">
          <FaTwitter/>
        </a>
        <a href="#" target="_blank">
          <BsFacebook />
        </a>
      </div>
      

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
      </ul>

     

      <div className="footer__copyright">
        <small>&copy; Richard Chalk</small>
      </div>
      </div>
    </footer>
  );
};

export default Footer;