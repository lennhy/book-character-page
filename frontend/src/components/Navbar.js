import { NavLink } from "react-router-dom"; // import Link in addition to other Components
import "./navbar.css";

// import logo from "../logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="navigation">
        <img src="" className="" alt="logo" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/film">Film</NavLink>
        <NavLink to="/novels">Novels</NavLink>
        <NavLink to="/illustrations">Illustrations</NavLink>
        <NavLink to="/topbookadaptations">IMDB Top Book Adaptations</NavLink>
        <NavLink to="//www.polyverge.com" target={"_blank"} rel="noopener noreferrer">SHOP</NavLink>

      </nav>
    </>
  );
};

export default Navbar;
