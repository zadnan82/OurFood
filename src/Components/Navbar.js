
import React from "react";  
import "../Styling/Navbar.css";


export const Navbar = () => {
           return (
            <nav>
              <div className="navbar-links-container">
                <a href="">OurFood</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#about">Work</a>
                <a href="#contact">References</a>
              </div>
            </nav>
          );
	}


  export default Navbar