import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, ArrowRight, MapPin } from 'lucide-react';
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

const SocialLink = ({ href, label, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    aria-label={label}
    style={{ 
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      background: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-secondary)',
      transition: 'all 0.3s ease',
      textDecoration: 'none'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = 'var(--accent-primary)';
      e.currentTarget.style.color = '#fff';
      e.currentTarget.style.borderColor = 'var(--accent-primary)';
      e.currentTarget.style.transform = 'translateY(-3px)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = 'var(--bg-secondary)';
      e.currentTarget.style.color = 'var(--text-secondary)';
      e.currentTarget.style.borderColor = 'var(--border-color)';
      e.currentTarget.style.transform = 'translateY(0)';
    }}
  >
    {children}
  </a>
);

const Footer = () => {
  return (
    <footer className="footer" style={{ 
      position: 'relative', 
      overflow: 'hidden', 
      background: 'var(--bg-secondary)', 
      borderTop: 'none',
      padding: '0'
    }}>
      {/* Gradient top accent line */}
      <div style={{ 
        height: '3px', 
        background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary), var(--accent-primary))',
        backgroundSize: '200% 100%',
        animation: 'shimmer 4s linear infinite'
      }}></div>

      {/* Newsletter CTA Strip */}
      <div style={{
        background: 'var(--bg-card)',
        borderBottom: '1px solid var(--border-color)',
        padding: 'clamp(2rem, 4vw, 3rem) 0'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
          <div className="mobile-text-center">
            <h3 className="font-title" style={{ fontSize: '1.3rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>
              Stay Updated With Latest Arrivals
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
              Get notified about new dental equipment, brand launches, and exclusive B2B offers.
            </p>
          </div>
          <a 
            href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20receive%20product%20updates%20from%20Sarojini%20Dental"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gradient"
            style={{ flexShrink: 0, textDecoration: 'none', fontSize: '0.78rem', padding: '0.8rem 1.8rem' }}
          >
            Get Updates on WhatsApp <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* Main Footer Content */}
      <div style={{ padding: 'clamp(3rem, 8vw, 5rem) 0 2.5rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '3rem', textAlign: 'left', marginBottom: '3.5rem' }}>
            
            {/* Company Info */}
            <div className="mobile-text-center">
              <div style={{ marginBottom: '1.5rem' }}>
                <Link to="/" className="logo font-playfair" style={{ justifyContent: 'inherit' }}>
                  <div className="logo-container" style={{ width: 'fit-content' }}>
                    <img src={logo} alt="Sarojini Dental Logo" className="logo-img" style={{ height: '38px' }} />
                  </div>
                  <div className="logo-text-wrapper">
                    <span className="logo-name" style={{ fontSize: '1.1rem' }}>SAROJINI</span>
                    <span className="logo-sub" style={{ fontSize: '0.5rem' }}>DENTAL & CO.</span>
                  </div>
                </Link>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '350px' }} className="mobile-margin-b">
                {footerData.description}
              </p>
            </div>

            {/* Product Portfolio */}
            <div className="mobile-text-center">
              <h4 className="font-title" style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem' }}>Product Portfolio</h4>
              <ul style={{ listStyle: 'none', fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0 }}>
                {footerData.services.map((service, idx) => (
                  <li key={idx}>
                    <Link to="/services" className="footer-link" style={{ textDecoration: 'none', color: 'var(--text-secondary)', transition: 'all 0.3s ease', display: 'inline-block' }}>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="mobile-text-center">
              <h4 className="font-title" style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.8rem', padding: 0 }}>
                <li><Link to="/about" className="footer-link" style={{ textDecoration: 'none', color: 'var(--text-secondary)', transition: 'all 0.3s ease', display: 'inline-block' }}>Company Profile</Link></li>
                <li><Link to="/services" className="footer-link" style={{ textDecoration: 'none', color: 'var(--text-secondary)', transition: 'all 0.3s ease', display: 'inline-block' }}>Our Products</Link></li>
                <li><Link to="/contact" className="footer-link" style={{ textDecoration: 'none', color: 'var(--text-secondary)', transition: 'all 0.3s ease', display: 'inline-block' }}>B2B Inquiries</Link></li>
              </ul>
            </div>

            {/* Connect */}
            <div className="mobile-text-center">
              <h4 className="font-title" style={{ fontSize: '1rem', marginBottom: '1.5rem', color: 'var(--text-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem' }}>Connect</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', alignItems: 'inherit' }}>
                <div style={{ display: 'flex', gap: '0.6rem', justifyContent: 'inherit', flexWrap: 'wrap' }}>
                  <SocialLink href="https://wa.me/919999999999" label="WhatsApp"><WhatsappIcon size={18} /></SocialLink>
                  <SocialLink href="https://www.facebook.com" label="Facebook"><FacebookIcon size={18} /></SocialLink>
                  <SocialLink href="https://www.instagram.com" label="Instagram"><InstagramIcon size={18} /></SocialLink>
                  <SocialLink href="mailto:sales@sarojinidental.com" label="Email"><Mail size={18} /></SocialLink>
                  <SocialLink href="tel:+919999999999" label="Phone"><Phone size={18} /></SocialLink>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  <MapPin size={14} style={{ flexShrink: 0, marginTop: '2px', color: 'var(--accent-primary)' }} />
                  <span>{footerData.contact.location}</span>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  {footerData.contact.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.5px' }}>
              © 2026 SAROJINI DENTAL & CO. ALL RIGHTS RESERVED.
            </p>
            <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
              Bhubaneswar, Odisha, India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
