import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-logo">
          <Link to="/" className="logo-link">
            <span className="logo-placeholder">
              {/* Replace with: <img src="/logo.png" alt="T-CAFE" /> */}
            </span>
            <span className="logo-text">T-CAFE</span>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/support" className={isActive('/support')}>Support</Link>
          <Link to="/privacy-policy" className={isActive('/privacy-policy')}>Privacy</Link>
          <Link to="/terms-of-service" className={isActive('/terms-of-service')}>Terms</Link>
          <a href="https://marketplace.atlassian.com" className="btn-nav" target="_blank" rel="noopener noreferrer">Marketplace</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
