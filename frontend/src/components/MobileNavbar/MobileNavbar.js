import { NavLink } from "react-router-dom"; // import Link in addition to other Components
import { useState, useEffect } from 'react';
import "./mobile-navbar.css";
import "../Navbar/navbar.css";

// import logo from "../logo.svg";

const MobileNavbar = ({scale, toggle}) => {
  return (
    <>
      <nav className="mobile-navigation" style={{'width': scale}}>
         <a 
            href="https://www.youtube.com/@Polyverge"
            target="_blank"
            rel="noopener noreferrer"
            onClick={toggle}
          >
            Films & Series
          </a>
          {/* <NavLink className="nav-links" to="/film" onClick={toggle}>Film</NavLink> */}
          <NavLink to="/novels" onClick={toggle}>Illustrated Novels</NavLink>
          <NavLink  to="/illustrations" onClick={toggle}>Art</NavLink>
          <NavLink to="/newsletter" onClick={toggle}>Newsletter</NavLink>
          {/* <a className="nav-links" target="_blank"href="https://polyverge.kit.com/12bb684e5a">Newsletter</a> */}
          {/* <NavLink className="nav-links" to="//www.polyverge.shop"  onClick={toggle} target={"_blank"} rel="noopener noreferrer">Shop</NavLink> */}
      </nav>
    </>
  );
};

export default MobileNavbar;
