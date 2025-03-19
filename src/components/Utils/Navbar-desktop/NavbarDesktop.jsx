import React from "react";
import "./NavbarDesktop.css";
import LogoDesktop from "../../../assets/Navbar-Img/logoDesktop.svg";
import LightModeIcon from "../../../assets/Navbar-Img/LightModeIcon.svg";

const NavbarDesktop = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={LogoDesktop} alt="Logo" />
        </div>
        <ul className="navLinks">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Project">Project</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
          <li>
            <a href="#Blog">Blog</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
        <div className="ToggleMode">
          <img src={LightModeIcon} alt="Logo" />
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
