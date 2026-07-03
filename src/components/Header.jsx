import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { navigationLinks } from '../data/dentalData';
import logo from '../assets/logo.png';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // Scroll-aware nav shrink effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}>
      <Link to="/" className="logo font-playfair" onClick={closeMenu}>
        <div className="logo-container">
          <img src={logo} alt="Sarojini Dental & Co. Logo" className="logo-img" />
        </div>
        <div className="logo-text-wrapper">
          <span className="logo-name">SAROJINI</span>
          <span className="logo-sub">DENTAL & CO.</span>
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

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <button 
          onClick={toggleTheme} 
          className="theme-toggle-btn"
          style={{ 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer', 
            color: 'var(--text-primary)', 
            display: 'flex', 
            alignItems: 'center', 
            padding: '0.5rem',
            borderRadius: '8px',
            transition: 'background 0.3s ease'
          }}
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
          className="desktop-only btn-gradient" 
          style={{ 
            padding: '0.6rem 1.4rem', 
            fontSize: '0.72rem', 
            borderRadius: '8px',
            gap: '0.4rem'
          }}
          onClick={() => navigate('/contact')}
        >
          Request Quote <ArrowRight size={14} />
        </button>
      </div>
    </nav>
  );
};

export default Header;
