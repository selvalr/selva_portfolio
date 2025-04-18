import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TocIcon from "@mui/icons-material/Toc";
import "../styles/Navbar.css";
import ThemeSwitch from "./ThemeSwitch";
import Certificates from "./Certification";

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
          <TocIcon />
        </button>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/certificates">Certificates</Link>
        <Link to="/contact">Contact</Link>
        <div className="switch" id="switch">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
