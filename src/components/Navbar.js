import React from 'react';
import { Link } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import logoImage from '../images/Logo.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logoImage} alt="RoadReady Logo" className="navbar-logo-image" />
            <span>RoadReady</span>
          </Link>
        </div>
        <div className="navbar-links">
          <Link to="/login" className="navbar-link">
            <LogOut size={18} />
            <span>Logout</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

