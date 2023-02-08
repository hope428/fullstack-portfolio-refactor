import React from "react";
import '../styles/Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar({ handlePageChange, page }) {
  return (
    <nav className="navbar">
      <h1>Leon Forsythe</h1>
      <ul>
        <li className={page === 'about' ? 'active' : ''}>
          <Link to="/" onClick={() => handlePageChange("about")}>
            About Me
          </Link>
        </li>
        <li className={page === 'work' ? 'active' : ''}>
          <Link to="/work" onClick={() => handlePageChange("work")}>
            Portfolio
          </Link>
        </li>
        <li className={page === 'contact' ? 'active' : ''}>
          <Link to="/contact" onClick={() => handlePageChange("contact")}>
            Contact
          </Link>
        </li>
        <li className={page === 'resume' ? 'active' : ''}>
          <Link to="/resume" onClick={() => handlePageChange("resume")}>
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
}
