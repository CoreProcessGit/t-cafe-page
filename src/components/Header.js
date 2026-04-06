import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const isActive = (path) => location.pathname === path ? 'active' : '';

  useEffect(() => { setMenuOpen(false); }, [location]);

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
        <button className={`hamburger${menuOpen ? ' open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
        <div className={`nav-links${menuOpen ? ' show' : ''}`}>
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/support" className={isActive('/support')}>Support</Link>
          <Link to="/privacy-policy" className={isActive('/privacy-policy')}>Privacy</Link>
          <Link to="/terms-of-service" className={isActive('/terms-of-service')}>Terms</Link>
          <a href="https://marketplace.atlassian.com" className="btn-nav" target="_blank" rel="noopener noreferrer">Marketplace</a>
        </div>
      </nav>
      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Header;
