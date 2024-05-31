import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="title">Pooja Talele</h1>
      <ul className="nav">
        <li className="nav-item"><Link to="/" className="navLink">Home</Link></li>
        <li className="nav-item"><a href="#contact" className="navLink">Contact</a></li>
        <li>|</li>
        <li className="nav-item"><Link to="/about" className="navLink">About</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
