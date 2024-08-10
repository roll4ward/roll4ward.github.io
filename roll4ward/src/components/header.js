// src/components/Header.js
import React from "react";
import { Link } from "gatsby";

const Header = () => (
  <header style={{ background: '#333', padding: '10px 0' }}>
    <nav style={{ display: 'flex', justifyContent: 'space-around', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
      <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About Us</Link>
      <Link to="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</Link>
      <Link to="/join" style={{ color: '#fff', textDecoration: 'none' }}>Join Us</Link>
    </nav>
  </header>
);

export default Header;
