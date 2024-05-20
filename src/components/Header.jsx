import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation
import '../App.css'
import { FaUserPlus } from 'react-icons/fa';
function Header() {
  return (
    <header className="header bg-dark text-white ">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <Link to="/" className="text-white text-decoration-none">
            <h1>E-Product</h1>
          </Link>
        </div>
        <nav className="nav">
          <ul className="nav-list d-flex list-unstyled">
            <li className="nav-item mx-3">
              <Link to="/home" className="text-white text-decoration-none">Home</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/about" className="text-white text-decoration-none">About</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/services" className="text-white text-decoration-none">Services</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/contact" className="text-white text-decoration-none">Contact</Link>
            </li>
            <li className="nav-item mx-3">
              <Link to="/" className="text-white text-decoration-none"><FaUserPlus /></Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
