import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          TadaBot
        </Link>
        
        <nav className="nav-menu">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/features" className="nav-link">Features</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
