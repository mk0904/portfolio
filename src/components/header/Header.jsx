import { useState } from "react";
import "./Header.css";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <a href="/">
        <span className="nav-logo">mk</span>
      </a>

      <div className={`nav-items ${isOpen && "open"}`}>
        <a className="nav-logo" href="/">
          <span>mk</span>
        </a>
        <a href="/projects">projects</a>
        <a href="/skills">skills</a>
        <a href="/aboutme">about me</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;
