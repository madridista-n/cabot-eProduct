import React from 'react';
import { Link } from 'react-router-dom'; 
import '../App.css'
function Header() {
  return (
    <header className="header text-dark">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
            <h2>Shopify</h2>
        </div>
        <nav className="nav">
          <ul className="nav-list d-flex list-unstyled">
            <li className="nav-item mx-3">
              <Link to="/">
                <i class="fa fa-sign-out" aria-hidden="true" title='Sign Out'></i>
                </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
