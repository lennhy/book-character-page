import { NavLink } from "react-router-dom"; // import Link in addition to other Components
// import logo from "../logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="">
        <img src="" className="" alt="logo" />
        <NavLink to="/">Home</NavLink>
        <NavLink to="/film">Film</NavLink>
        <NavLink to="/novels">Novels</NavLink>
        <NavLink to="/comics">Comics</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
