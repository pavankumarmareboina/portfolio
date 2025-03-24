import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import NavbarDesktop from "./components/Utils/Navbar-desktop/NavbarDesktop";
import Home from "./Page/Home/Home";
import FooterDesktop from "./components/Utils/FooterDesktop/FooterDesktop";
import Projects from "./Page/Projects/Projects";
import About from "./Page/About/About";
import Blog from "./Page/Blog/Blog";
import Contact from "./Page/Contact/Contact";


// const About = React.lazy(() => import("./Page/About/About"));
// const Projects = React.lazy(() => import("./Page/Projects/Projects"));
// const Blog = React.lazy(() => import("./Page/Blog/Blog"));
// const Contact = React.lazy(() => import("./Page/Contact/Contact"));

function App() {
  return (
    <Router>
      <div className="container">
        <NavbarDesktop />

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <FooterDesktop/>
      </div>
    </Router>
  );
}

export default App;
