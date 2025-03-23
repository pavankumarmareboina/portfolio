import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarDesktop from "./components/Utils/Navbar-desktop/NavbarDesktop";
import Home from "./Page/Home/Home";
import FooterDesktop from "./components/Utils/FooterDesktop/FooterDesktop";
import Projects from "./Page/Projects/Projects";
import About from "./Page/About/About";
import Blog from "./Page/Blog/Blog";

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
        </Routes>
        <FooterDesktop/>
      </div>
    </Router>
  );
}

export default App;
