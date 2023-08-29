import { NavLink } from "react-router-dom"; // import Link in addition to other Components
import "./navbar.css";
import logo from '../assets/polyverge-logo.jpg';

// import logo from "../logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navigation">
       
        <div className="flex-container">
          <NavLink to="/"> <img src={logo} className="" alt="logo" /></NavLink>
          <NavLink to="/illustrations">Illustrations</NavLink>
          <NavLink to="/film">Film</NavLink>
          <NavLink to="/novels">Novels</NavLink>
        </div>
        <div className="flex-container float-right">
          <NavLink to="/newsletter">Newsletter</NavLink>
          <NavLink to="//www.polyverge.com" target={"_blank"} rel="noopener noreferrer">SHOP</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
