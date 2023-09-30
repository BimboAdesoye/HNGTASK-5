import logo from "../assets/iCON 7 1.svg";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="cc-container">
        <img src={logo} alt="" />
        <ul className="nav-list">
          <Link className="link">Features</Link>
          <Link className="link">How it works</Link>
        </ul>
        <p className="get-started">Get Started</p>
      </nav>
    </div>
  );
};

export default Navbar;
