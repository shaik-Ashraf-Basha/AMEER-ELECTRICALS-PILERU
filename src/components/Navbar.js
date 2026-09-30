import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Ameer Electricals</h2>
      <ul>
        <li><Link to="/">Welcome</Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/address">Address</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
