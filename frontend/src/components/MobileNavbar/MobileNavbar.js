import { NavLink } from "react-router-dom"; // import Link in addition to other Components
import { useState, useEffect } from 'react';
import "./mobile-navbar.css";
import "../Navbar/navbar.css";

// import logo from "../logo.svg";

const MobileNavbar = ({scale, toggle}) => {
  return (
    <>
      <nav className="mobile-navigation" style={{'width': scale}}>
          <NavLink className="nav-links" to="/" onClick={toggle}>Home</NavLink>
          <NavLink className="nav-links" to="/illustrations" onClick={toggle}>Art</NavLink>
          {/* <NavLink className="nav-links" to="/film" onClick={toggle}>Film</NavLink> */}
          <NavLink className="nav-links" to="/novels" onClick={toggle}>Books</NavLink>
          <NavLink className="nav-links" to="/newsletter" onClick={toggle}>Newsletter</NavLink>
          {/* <NavLink className="nav-links" to="//www.polyverge.shop"  onClick={toggle} target={"_blank"} rel="noopener noreferrer">Shop</NavLink> */}
      </nav>
    </>
  );
};

export default MobileNavbar;
