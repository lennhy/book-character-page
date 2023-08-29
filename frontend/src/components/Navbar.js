import { NavLink, useLocation } from "react-router-dom"; // import Link in addition to other Components
import "./navbar.css";
import logo from '../assets/polyverge-logo.jpg';

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
       
        <div className="flex-container">
          {/* <NavLink to="/"> <img src={logo} className="" alt="logo" /></NavLink> */}
          <NavLink id="logo" to="/">POLYVERGE</NavLink>
          {addSubNav()}
        </div>
        <div className="flex-container float-right">
          <NavLink className="nav-links" to="/newsletter">Newsletter</NavLink>
          <NavLink className="nav-links" to="//www.polyverge.com" target={"_blank"} rel="noopener noreferrer">SHOP</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
