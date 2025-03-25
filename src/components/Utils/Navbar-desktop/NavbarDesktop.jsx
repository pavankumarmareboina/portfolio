

// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "./NavbarDesktop.css";
// import LogoDesktop from "../../../assets/Navbar-Img/logoDesktop.svg";
// import LightModeIcon from "../../../assets/Navbar-Img/LightModeIcon.svg";

// const NavbarDesktop = () => {
//   return (
//     <nav>
//       <div className="navbar">
//         <div className="logo">
//           <img src={LogoDesktop} alt="Logo" />
//         </div>
//         <ul className="navLinks">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/Project">Project</Link>
//           </li>
//           <li>
//             <Link to="/About">About</Link>
//           </li>
//           <li>
//             <Link to="/Blog">Blog</Link>
//           </li>
//           <li>
//             <Link to="/Contact">Contact</Link>
//           </li>
//         </ul>
//         <div className="ToggleMode">
//           <img src={LightModeIcon} alt="Theme Toggle" />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavbarDesktop;


import React from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
import "./NavbarDesktop.css";
import LogoDesktop from "../../../assets/PersonalData/image.png";
import LightModeIcon from "../../../assets/Navbar-Img/LightModeIcon.svg";
import ToggleBtn from "../../Atoms/ToggleBtn/ToggleBtn"

const NavbarDesktop = () => {
  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={LogoDesktop} alt="Logo" />
        </div>
        <ul className="navLinks">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/Project" className={({ isActive }) => (isActive ? "active" : "")}>Project</NavLink>
          </li>
          <li>
            <NavLink to="/About" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
          </li>
          <li>
            <NavLink to="/Blog" className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink>
          </li>
          <li>
            <NavLink to="/Contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
          </li>
        </ul>
        <div className="ToggleMode">
          <ToggleBtn/>
          {/* <img src={LightModeIcon} alt="Theme Toggle" /> */}
        </div>
      </div>
    </nav>
  );
};

export default NavbarDesktop;
