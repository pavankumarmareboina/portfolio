import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarDesktop from "./components/Utils/Navbar-desktop/NavbarDesktop";
import Home from "./Page/Home/Home";

function App() {
  return (
    <Router>
      <div className="container">
        <NavbarDesktop />

        <Routes >
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
