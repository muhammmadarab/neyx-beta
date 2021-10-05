import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import Logo from "../../../img/logo-dark.svg";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobleMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img className="logoImage" src={Logo} alt="" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <li className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              className="nav-links"
              activeClassName="main-nav-active"
              onClick={closeMobleMenu}
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-links"
              onClick={closeMobleMenu}
              activeClassName="main-nav-active"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/joinbeta"
              className="nav-links"
              onClick={closeMobleMenu}
              activeClassName="main-nav-active"
            >
              Join Beta
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/team"
              className="nav-links"
              onClick={closeMobleMenu}
              activeClassName="main-nav-active"
            >
              Team
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              className="nav-links"
              onClick={closeMobleMenu}
              activeClassName="main-nav-active"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
