import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { footerData } from '../data/dentalData';
import logo from '../assets/logo.png';

const FacebookIcon = ({ size = 24, strokeWidth = 2, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size = 24, strokeWidth = 2, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsappIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="0" className="whatsapp-svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.705 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" fill="currentColor" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer glow-wrapper" style={{ 
      position: 'relative', 
      overflow: 'hidden', 
      background: 'var(--glass-bg)', 
      backdropFilter: 'var(--glass-blur)',
      WebkitBackdropFilter: 'var(--glass-blur)',
      borderTop: '1px solid var(--glass-border)', 
      boxShadow: 'var(--glass-shadow)',
      padding: 'clamp(3rem, 10vw, 6rem) 0 3rem' 
    }}>
      <div className="container">
        <div className="responsive-grid" style={{ textAlign: 'left', marginBottom: '4rem', gap: '3rem' }}>
          <div className="mobile-text-center">
            <div style={{ marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }} className="mobile-text-center">
              <Link to="/" className="logo font-playfair" style={{ justifyContent: 'inherit' }}>
                <div className="logo-container" style={{ width: 'fit-content' }}>
                  <img src={logo} alt="Denteal Care Logo" className="logo-img" style={{ height: '40px' }} />
                </div>
                <div className="logo-text-wrapper">
                  <span className="logo-name" style={{ fontSize: '1.1rem' }}>DENTEAL</span>
                  <span className="logo-sub" style={{ fontSize: '0.5rem' }}>CARE CLINIC</span>
                </div>
              </Link>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '400px' }} className="mobile-margin-b">
              {footerData.description}
            </p>
          </div>

          <div className="mobile-text-center">
            <h4 className="font-title" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Our Treatments</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1rem', padding: 0 }}>
              {footerData.services.map((service, idx) => (
                <li key={idx}>
                  <Link to="/services" className="footer-link" style={{ textDecoration: 'none', color: 'var(--text-secondary)', transition: 'all 0.3s ease', display: 'inline-block' }}>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="mobile-text-center">
            <h4 className="font-title" style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>Stay Connected</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'inherit' }}>
              <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'inherit' }}>
                <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', transition: '0.3s' }} className="hover-scale" aria-label="WhatsApp"><WhatsappIcon size={22} /></a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', transition: '0.3s' }} className="hover-scale" aria-label="Facebook"><FacebookIcon size={22} /></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)', transition: '0.3s' }} className="hover-scale" aria-label="Instagram"><InstagramIcon size={22} /></a>
                <a href="mailto:contact@dentealcare.com" style={{ color: 'var(--accent-primary)', transition: '0.3s' }} className="hover-scale" aria-label="Email"><Mail size={22} /></a>
                <a href="tel:+919999999999" style={{ color: 'var(--accent-primary)', transition: '0.3s' }} className="hover-scale" aria-label="Phone"><Phone size={22} /></a>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                {footerData.contact.location}<br />
                {footerData.contact.hours}
              </p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '2.5rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.75rem', opacity: 0.6, letterSpacing: '1px', textTransform: 'uppercase' }}>
            © 2026 DENTEAL CARE CLINIC • ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
