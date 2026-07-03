import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronDown, X, ArrowRight, Zap, Shield, Headphones } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { heroData, experiences, facilitiesData, specialOffer, partnerBrands } from '../data/dentalData';
import heroProduct from '../assets/hero_product.png';
import treatmentImg from '../assets/treatment_premium.png';
import bookingImg from '../assets/booking_premium.png';
import facilitiesImg from '../assets/services.png';
import comboLaser from '../assets/combo_laser.png';
import implantMotor from '../assets/implant_motor.png';
import pediatricLaser from '../assets/pediatric_laser.png';
import tripleLaser from '../assets/triple_laser.png';
import curingArray from '../assets/curing_array.png';
import pocketLaser from '../assets/pocket_laser.png';

const featuredProducts = [
  {
    name: "Combo Coherence™",
    tagline: "Dual Wavelength Dental Laser",
    desc: "Advanced laser system combining dual wavelengths for unmatched soft tissue precision and patient comfort.",
    image: comboLaser,
    badge: "Laser Tech"
  },
  {
    name: "Implant Inspired",
    tagline: "Surgery Ready Motor System",
    desc: "High-torque clinical surgical motor system with built-in saline irrigation, fully optimized for implantology.",
    image: implantMotor,
    badge: "Implantology"
  },
  {
    name: "Gentle Photons",
    tagline: "Fearless Kids Laser",
    desc: "Pediatric-focused soft-tissue laser with kid-friendly interface and low-power gentle light modes.",
    image: pediatricLaser,
    badge: "Pediatric Safe"
  },
  {
    name: "Three Wavelengths",
    tagline: "One Unified System",
    desc: "All-in-one console integrating three laser spectra for comprehensive multi-specialty clinical applications.",
    image: tripleLaser,
    badge: "Multi-Wave"
  },
  {
    name: "32 Chip Dual Array",
    tagline: "High-Power TTFL™ Curing",
    desc: "Diagnostic and curing matrix utilizing a 32-chip micro-LED array for deep, uniform polymerization.",
    image: curingArray,
    badge: "Diagnostics"
  },
  {
    name: "Pocket-Size Photonic",
    tagline: "Portable Laser Power",
    desc: "Ultra-compact pen-sized dental laser offering portable photonic energy for fast disinfection and therapy.",
    image: pocketLaser,
    badge: "Portable Tech"
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [tourIndex, setTourIndex] = useState(0);

  // Scroll-triggered reveal
  const sectionRefs = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const tourImages = [
    { img: facilitiesImg, title: "B2B Equipment Showroom", desc: "Showcasing active clinical setups including ergonomically configured treatment units and autoclave sterilization suites." },
    { img: bookingImg, title: "Product Demo & CAD/CAM Lounge", desc: "A dedicated consultation area where dental professionals can test digital intraoral scanners and review 3D dental lab workflows." },
    { img: treatmentImg, title: "Distribution Hub & Inventory Storage", desc: "Highly organized, climate-controlled warehouse facilities housing premium clinical consumables and brand new equipment ready for prompt dispatch." }
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "100% Genuine Products",
      desc: "Only authentic products from globally recognized manufacturers, backed by official warranties."
    },
    {
      icon: Zap,
      title: "Fast Pan-India Delivery",
      desc: "Consumables dispatched within 24 hours. Equipment delivered with professional installation."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      desc: "Certified biomedical engineers for installation, training, and preventive maintenance."
    }
  ];

  return (
    <>
      <header className="hero-section noise-overlay" id="home-section" style={{ display: 'flex', flexDirection: 'column', paddingBottom: 0 }}>
        {/* Animated gradient mesh background */}
        <div className="hero-mesh-bg">
          <div className="mesh-orb mesh-orb-1"></div>
          <div className="mesh-orb mesh-orb-2"></div>
          <div className="mesh-orb mesh-orb-3"></div>
          <div className="mesh-grid"></div>
        </div>

        <div className="container hero-split-container" style={{ paddingBottom: '2.5rem', flex: 1, display: 'grid', alignItems: 'center' }}>
          <div className="fade-in">
            <div className="badge-pill" style={{ marginBottom: '1.5rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'dotPulse 2s ease-in-out infinite' }}></span>
              Trusted Since 2022
            </div>
            <h1 className="hero-title" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, letterSpacing: '-0.02em' }}>
              {heroData.title}
            </h1>
            <p className="hero-subtitle">{heroData.subtitle}</p>
            <div className="hero-buttons">
              <button className="btn-gradient" onClick={() => setIsModalOpen(true)}>
                Explore Portfolio <ArrowRight size={16} />
              </button>

            </div>
          </div>
          <div className="hero-image-wrapper fade-in" style={{ border: 'none' }}>
            <div className="image-frame-creative laser-sweep-container">
              <img src={heroProduct} alt="Premium CBCT 3D Dental Scanner" className="hero-image video-effect-image" style={{ borderRadius: '12px' }} />
            </div>
          </div>
        </div>

        {/* ═══════ INTEGRATED STATS COUNTER BAR ═══════ */}
        <div className="stats-bar reveal-section" ref={(el) => (sectionRefs.current[0] = el)} style={{ 
          width: '100%', 
          marginTop: 'auto', 
          background: 'var(--glass-bg)', 
          backdropFilter: 'var(--glass-blur)',
          WebkitBackdropFilter: 'var(--glass-blur)',
          borderBottom: 'none',
          borderLeft: 'none',
          borderRight: 'none',
          margin: 0,
          zIndex: 2,
          padding: '1.5rem 0'
        }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div className="stat-item" style={{ flex: '1 1 200px' }}>
              <span className="stat-number">500+</span>
              <span className="stat-label">Clinics Equipped</span>
            </div>
            <div className="stat-divider" style={{ height: '40px' }}></div>
            <div className="stat-item" style={{ flex: '1 1 200px' }}>
              <span className="stat-number">8+</span>
              <span className="stat-label">Global Brands</span>
            </div>
            <div className="stat-divider" style={{ height: '40px' }}></div>
            <div className="stat-item" style={{ flex: '1 1 200px' }}>
              <span className="stat-number">2022</span>
              <span className="stat-label">Established</span>
            </div>
            <div className="stat-divider" style={{ height: '40px' }}></div>
            <div className="stat-item" style={{ flex: '1 1 200px' }}>
              <span className="stat-number">100%</span>
              <span className="stat-label">Genuine Products</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content fade-in" onClick={(e) => e.stopPropagation()} style={{
            maxWidth: '650px',
            width: '94%',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <div style={{ padding: '2.5rem', background: 'var(--bg-primary)' }}>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--bg-secondary)', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
              <h2 className="font-title" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{heroData.modal.title}</h2>
              <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary))', marginBottom: '1.5rem', borderRadius: '2px' }}></div>
              <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
                {heroData.modal.desc}
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button
                  className="btn-gradient"
                  onClick={() => {
                    setIsModalOpen(false);
                    navigate('/contact');
                  }}
                >
                  Request Callback
                </button>
                <button
                  className="btn-corporate-outline"
                  onClick={() => {
                    setIsModalOpen(false);
                    navigate('/services');
                  }}
                  style={{ borderRadius: '10px' }}
                >
                  View Products
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="container">

        {/* ═══════ FEATURED PRODUCTS SHOWCASE ═══════ */}
        <section className="corporate-section reveal-section" ref={(el) => (sectionRefs.current[1] = el)}>
          <div className="section-header">
            <h2 className="font-title video-text-effect">Featured Products</h2>
            <p>Explore our cutting-edge dental lasers, surgical motors, and diagnostic systems from global manufacturers.</p>
            <div className="accent-line"></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {featuredProducts.map((product, idx) => (
              <div 
                key={idx}
                className="grid-block"
                style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '1.2rem', 
                  padding: '1.5rem',
                  borderRadius: '16px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  transition: 'var(--transition)',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-elevated)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Product Image with Digital Scanner Effect */}
                <div className="digital-scanner-container" style={{ borderRadius: '10px', height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <span style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'var(--accent-primary)',
                    color: '#fff',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                    zIndex: 3
                  }}>
                    {product.badge}
                  </span>
                </div>

                {/* Product Details */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
                  <h3 className="font-title" style={{ fontSize: '1.25rem', color: 'var(--text-primary)', margin: 0 }}>{product.name}</h3>
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{product.tagline}</span>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6, margin: '0.5rem 0 0' }}>{product.desc}</p>
                </div>

                {/* Action button */}
                <button 
                  className="btn-corporate-text"
                  onClick={() => navigate('/contact')}
                  style={{ alignSelf: 'flex-start', marginTop: 'auto' }}
                >
                  Inquire Now <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ CORE VALUES SECTION ═══════ */}
        <section className="corporate-section reveal-section" ref={(el) => (sectionRefs.current[2] = el)}>
          <div className="section-header">
            <h2 className="font-title video-text-effect">Excellence In Dental Solutions</h2>
            <p>Delivering world-class dental equipment and consumables with unmatched service quality.</p>
            <div className="accent-line"></div>
          </div>
          <div className="responsive-grid">
            {experiences.map(exp => (
              <div key={exp.id} className="grid-block" style={{ textAlign: 'left' }}>
                <div style={{ marginBottom: '1.2rem', color: 'var(--accent-primary)', background: 'var(--bg-secondary)', width: '60px', height: '60px', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                  <exp.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-title" style={{ fontSize: '1.35rem', marginBottom: '0.8rem' }}>{exp.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7 }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ GLOBAL BRAND PARTNERS ═══════ */}
        <section className="corporate-section reveal-section" ref={(el) => (sectionRefs.current[3] = el)}>
          <div className="section-header">
            <h2 className="font-title video-text-effect">Global Brand Partners</h2>
            <p>We represent leading global manufacturers known for clinical precision, quality, and manufacturer warranties.</p>
            <div className="accent-line"></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '1.5rem' }}>
            {partnerBrands.map((brand, idx) => (
              <div 
                key={idx} 
                className="brand-card-premium"
              >
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.2rem',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: '#fff',
                  fontFamily: "'Outfit', sans-serif"
                }}>
                  {brand.name.charAt(0)}
                </div>
                <h3 className="font-title" style={{ fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.3rem' }}>{brand.name}</h3>
                <div style={{ width: '30px', height: '2px', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary))', margin: '0.6rem auto' }}></div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{brand.type}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ FACILITIES SECTION ═══════ */}
        <section className="corporate-section reveal-section" ref={(el) => (sectionRefs.current[4] = el)} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <div className="image-frame-creative laser-sweep-container" style={{ borderRadius: '12px' }}>
              <img src={facilitiesImg} alt="Sarojini Showroom" className="facility-img video-effect-image" style={{ border: 'none', display: 'block' }} />
            </div>
          </div>
          <div className="fade-in">
            <span className="badge-corporate" style={{ marginBottom: '1.2rem' }}>Our Facility</span>
            <h2 className="font-title video-text-effect" style={{ fontSize: '2.2rem', marginBottom: '1.2rem', marginTop: '0.8rem' }}>{facilitiesData.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {facilitiesData.desc}
            </p>
            <button className="btn-corporate" onClick={() => setIsTourOpen(true)}>Explore Our Showroom <ArrowRight size={16} /></button>
          </div>
        </section>

        {/* ═══════ WHY CHOOSE US ═══════ */}
        <section className="corporate-section reveal-section" ref={(el) => (sectionRefs.current[5] = el)}>
          <div className="section-header">
            <h2 className="font-title video-text-effect">Why Choose Sarojini Dental?</h2>
            <p>Your trusted partner for everything dental — from equipment to everyday consumables.</p>
            <div className="accent-line"></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {whyChooseUs.map((item, idx) => (
              <div key={idx} style={{
                padding: '2.5rem 2rem',
                borderRadius: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                transition: 'var(--transition)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.boxShadow = 'var(--shadow-elevated)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.5rem',
                  color: '#fff'
                }}>
                  <item.icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className="font-title" style={{ fontSize: '1.3rem', marginBottom: '0.8rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ CLINIC CONSULTING OFFER ═══════ */}
        <section className="corporate-section reveal-section" ref={(el) => (sectionRefs.current[6] = el)} style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div className="fade-in">
            <span className="badge-corporate" style={{ marginBottom: '1.2rem' }}>Clinic Support</span>
            <h2 className="font-title video-text-effect" style={{ fontSize: '2.2rem', marginBottom: '1.2rem', marginTop: '0.8rem' }}>{specialOffer.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {specialOffer.desc}
            </p>
            <button className="btn-corporate" onClick={() => setIsOfferModalOpen(true)}>View Offer Details <ArrowRight size={16} /></button>
          </div>
          <div>
            <div className="image-frame-creative laser-sweep-container" style={{ borderRadius: '12px' }}>
              <img src={treatmentImg} alt="Clinic Consulting Suite" className="treatment-img video-effect-image" style={{ border: 'none', display: 'block' }} />
            </div>
          </div>
        </section>

        {/* ═══════ CTA BANNER ═══════ */}
        <div className="cta-banner reveal-section" ref={(el) => (sectionRefs.current[7] = el)}>
          <h2 className="font-title">Ready to Upgrade Your Facility?</h2>
          <p>Get a free consultation from our product experts. We'll help you plan your equipment, layout, and consumable needs.</p>
          <button className="btn-gradient" onClick={() => navigate('/contact')}>
            Schedule Free Consultation <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* ═══════ SPECIAL OFFER MODAL ═══════ */}
      {isOfferModalOpen && (
        <div className="modal-overlay" onClick={() => setIsOfferModalOpen(false)}>
          <div className="modal-content fade-in" onClick={(e) => e.stopPropagation()} style={{
            maxWidth: '550px',
            width: '94%',
            padding: '2.5rem',
            position: 'relative'
          }}>
            <button
              onClick={() => setIsOfferModalOpen(false)}
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--bg-secondary)', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Close offer modal"
            >
              <X size={18} />
            </button>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.2rem',
              color: '#fff'
            }}>
              <specialOffer.icon size={28} strokeWidth={1.5} />
            </div>
            <h2 className="font-title" style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{specialOffer.title}</h2>
            <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary))', marginBottom: '1.5rem', borderRadius: '2px' }}></div>
            <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '1.8rem' }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--accent-primary)', fontWeight: '700', marginBottom: '0.5rem' }}>Consultation & Layout Design</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.9rem' }}>{specialOffer.desc}</p>
            </div>
            <button className="btn-gradient" style={{ width: '100%', justifyContent: 'center' }} onClick={() => { setIsOfferModalOpen(false); navigate('/contact'); }}>Request Consultation <ArrowRight size={16} /></button>
          </div>
        </div>
      )}

      {/* ═══════ SHOWROOM TOUR GALLERY MODAL ═══════ */}
      {isTourOpen && (
        <div className="modal-overlay" onClick={() => setIsTourOpen(false)}>
          <div className="modal-content fade-in" onClick={(e) => e.stopPropagation()} style={{
            maxWidth: '750px',
            width: '94%',
            padding: '2rem',
            position: 'relative',
            background: 'var(--bg-primary)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <button
              onClick={() => setIsTourOpen(false)}
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(15,23,42,0.7)', border: 'none', color: 'white', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
              aria-label="Close tour"
            >
              <X size={18} />
            </button>
            <h2 className="font-title" style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Showroom & Facility Tour</h2>
            <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary))', marginBottom: '1.5rem', borderRadius: '2px' }}></div>

            <div style={{ width: '100%', height: '350px', overflow: 'hidden', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '1.5rem', position: 'relative' }}>
              <img src={tourImages[tourIndex].img} alt={tourImages[tourIndex].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(15,23,42,0.85))', color: 'white', padding: '1.5rem', textAlign: 'left' }}>
                <h4 className="font-title" style={{ fontSize: '1.2rem', marginBottom: '0.3rem', color: 'white' }}>{tourImages[tourIndex].title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.5 }}>{tourImages[tourIndex].desc}</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                className="btn-corporate-outline"
                style={{ padding: '0.5rem 1.2rem', fontSize: '0.75rem', borderRadius: '8px' }}
                onClick={() => setTourIndex((tourIndex - 1 + tourImages.length) % tourImages.length)}
              >
                Previous
              </button>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {tourImages.map((_, i) => (
                  <div key={i} onClick={() => setTourIndex(i)} style={{ width: '10px', height: '10px', borderRadius: '50%', background: tourIndex === i ? 'var(--accent-primary)' : 'var(--border-color)', transition: 'all 0.3s ease', cursor: 'pointer', transform: tourIndex === i ? 'scale(1.2)' : 'scale(1)' }} />
                ))}
              </div>
              <button
                className="btn-corporate-outline"
                style={{ padding: '0.5rem 1.2rem', fontSize: '0.75rem', borderRadius: '8px' }}
                onClick={() => setTourIndex((tourIndex + 1) % tourImages.length)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dashboard;
