import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TocIcon from "@mui/icons-material/Toc";
import "../styles/Navbar.css";
import ThemeSwitch from "./ThemeSwitch";
import Certificates from "./Certification";
import Dark from "./Dark";
import { Divide as Hamburger } from 'hamburger-react'
import { FaHome } from "react-icons/fa";
import { IoIosChatboxes } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
import { IoBag } from "react-icons/io5";
import { FaLightbulb } from "react-icons/fa6";
import { FaBrain } from "react-icons/fa6";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <nav className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          {/* <TocIcon /> */}
         <Hamburger size={48} duration={0.8}  color="#080606" rounded />
        </button>
      </div>

      <div className="links">
        <Link to="/"> Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills"> Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/certificates"> Certificates</Link>
        <Link to="/contact">Contact</Link>
        <div className="switch" id="switch">
          {/* <ThemeSwitch /> */}
          <Dark/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



//2

// import React, { useState, useRef, useEffect } from 'react';
// import '../styles/Navbar.css';

// const NavBar = () => {
//   const [isActive, setIsActive] = useState(false);
//   const navRef = useRef(null);

//   useEffect(() => {
//     if (navRef.current) {
//       navRef.current.style.setProperty('--childenNumber', navRef.current.children.length);
//     }
//   }, [isActive]);

//   const handleToggle = () => {
//     setIsActive(!isActive);
//   };

//   return (
//     <nav>
//       <div>
//         <a href="https://codepen.io/CodingPencil" className="logo">Something</a>
//       </div>
//       <div>
//         <ul id="nav" ref={navRef} className={isActive ? 'active' : ''}>
//           <li><a href="#">Home</a></li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Contact</a></li>
//           <li><a href="#">Services</a></li>
//         </ul>
//       </div>
//       <div className={`menu ${isActive ? 'active' : ''}`} id="menu" onClick={handleToggle}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;




