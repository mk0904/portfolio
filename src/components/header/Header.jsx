import { useState } from "react";
import "./Header.css";
import { BrowserRouter, Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <BrowserRouter>
      <div className="Navbar">
      <Link style={{textDecoration:'none', color:"white", }} to="/"><span className="nav-logo">mk</span></Link>

      <div className={`nav-items ${isOpen && "open"}`}>
          <Link to="/" className="nav-logo"><span>mk</span></Link>
          <Link to="/projects">projects</Link>
          <Link to="/skills">skills</Link>
          <Link to="/aboutme">about me</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
    </BrowserRouter>
  );
};

export default Header;
