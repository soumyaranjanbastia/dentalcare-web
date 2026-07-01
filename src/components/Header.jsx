import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { navigationLinks } from '../data/dentalData';
import logo from '../assets/logo.png';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="nav">
      <Link to="/" className="logo font-playfair" onClick={closeMenu}>
        <div className="logo-container">
          <img src={logo} alt="Denteal Care Logo" className="logo-img" />
        </div>
        <div className="logo-text-wrapper">
          <span className="logo-name">DENTEAL</span>
          <span className="logo-sub">CARE CLINIC</span>
        </div>
      </Link>
      
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {navigationLinks.map(link => (
          <li key={link.path}>
            <Link 
              to={link.path} 
              onClick={closeMenu}
              className={location.pathname === link.path ? 'active-link' : ''}
              style={{ 
                color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--text-secondary)',
                fontWeight: location.pathname === link.path ? '700' : '500',
                textDecoration: 'none'
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button 
          onClick={toggleTheme} 
          className="theme-toggle-btn"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', padding: '0.5rem' }}
          aria-label="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-primary)' }}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <button 
          className="desktop-only" 
          style={{ 
            background: 'none', 
            border: '1.5px solid var(--accent-primary)', 
            color: 'var(--accent-primary)', 
            padding: '0.5rem 1.2rem', 
            fontSize: '0.75rem', 
            fontWeight: '600', 
            borderRadius: '4px', 
            cursor: 'pointer', 
            textTransform: 'uppercase', 
            letterSpacing: '0.05em', 
            fontFamily: 'Outfit, sans-serif',
            transition: 'all 0.3s ease' 
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-primary)';
            e.currentTarget.style.color = 'var(--bg-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'var(--accent-primary)';
          }}
          onClick={() => navigate('/contact')}
        >
          Book Appointment
        </button>
      </div>
    </nav>
  );
};

export default Header;
