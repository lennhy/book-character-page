import { NavLink, useLocation } from "react-router-dom"; // import Link in addition to other Components
import { useState } from 'react';
import "./navbar.css";
import logo from '../../assets/polyverge-logo.jpg';

// import logo from "../logo.svg";

const Navbar = () => {
  let location = useLocation();  
  const addSubNav = () =>{
    if (location.pathname !== '/'){
    return(
      <>
      <NavLink className="nav-links" to="/illustrations">Illustrations</NavLink>
      <NavLink className="nav-links" to="/film">Film</NavLink>
      <NavLink className="nav-links" to="/novels">Novels</NavLink>
      </>
    );
    }

  }
  return (
    <>
      <nav className="navigation">
        <div className="left">
          {/* <NavLink to="/"> <img src={logo} className="" alt="logo" /></NavLink> */}
          <NavLink id="logo" to="/">POLYVERGE</NavLink>
          {addSubNav()}
        </div>
        <div className="right">
          <NavLink className="nav-links" to="/newsletter">Newsletter</NavLink>
          <NavLink className="nav-links" to="//www.polyverge.shop" target={"_blank"} rel="noopener noreferrer">Shop</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
