import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="title"><Link to="/">Pooja Talele</Link></h1>
      <ul className="nav">
        <li className="nav-item"><Link to="/" className="navLink">Home</Link></li>
        <li className="nav-item"><Link to="/contact" className="navLink" target='_blank'>Contact</Link></li>
        <li className="nav-item"><Link to="/skills" className="navLink" target='_blank'>Skills</Link></li>
        <li className="nav-item"><Link to="/projects" className="navLink" target='_blank'>Projects</Link></li>
        <li>|</li>
        <li className="nav-item"><Link to="/about" className="navLink" target='_blank'>About</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
