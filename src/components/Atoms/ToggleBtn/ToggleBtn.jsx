// import { useState, useEffect } from "react";
// import LightModeIcon from "../../../assets/Navbar-Img/LightModeIcon.svg"; // Replace with your light mode icon
// import DarkModeIcon from "../../../assets/Navbar-Img/MoonIcon.svg"; // Replace with your dark mode icon
// import "./ToggleBtn.css"; // Add styles

// const ToggleBtn = () => {
//   const [isDarkMode, setIsDarkMode] = useState(
//     localStorage.getItem("theme") === "dark"
//   );

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDarkMode]);

//   return (
//     <div className="ToggleMode" onClick={() => setIsDarkMode(!isDarkMode)}>
//       <img
//         src={isDarkMode ? DarkModeIcon : LightModeIcon}
//         alt="Theme Toggle"
//         className="toggle-icon"
//       />
//     </div>
//   );
// };

// export default ToggleBtn;


// import { useState, useEffect } from "react";
// import LightModeIcon from "../../../assets/Navbar-Img/LightModeIcon.svg";
// import DarkModeIcon from "../../../assets/Navbar-Img/MoonIcon.svg";
// import "./ToggleBtn.css";

// const getInitialTheme = () => {
//   return localStorage.getItem("theme") === "dark";
// };

// const ToggleBtn = () => {
//   const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

//   useEffect(() => {
//     if (isDarkMode) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDarkMode]);

//   useEffect(() => {
//     const handleStorageChange = () => {
//       setIsDarkMode(localStorage.getItem("theme") === "dark");
//     };

//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   return (
//     <div className="ToggleMode" onClick={() => setIsDarkMode(!isDarkMode)}>
//       <img
//         src={isDarkMode ? DarkModeIcon : LightModeIcon}
//         alt="Theme Toggle"
//         className="toggle-icon"
//       />
//     </div>
//   );
// };

// export default ToggleBtn;



import { useState, useEffect } from "react";
import LightModeIcon from "../../../assets/Navbar-Img/LightModeIcon.svg";
import DarkModeIcon from "../../../assets/Navbar-Img/MoonIcon.svg";
import "./ToggleBtn.css";

const getInitialTheme = () => {
  return localStorage.getItem("theme") === "dark";
};

const ToggleBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsDarkMode(localStorage.getItem("theme") === "dark");
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <div className="ToggleMode" onClick={() => setIsDarkMode(!isDarkMode)}>
      <img
        src={isDarkMode ? LightModeIcon : DarkModeIcon}
        alt="Theme Toggle"
        className="toggle-icon"
      />
    </div>
  );
};

export default ToggleBtn;
