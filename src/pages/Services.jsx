import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronRight, ArrowRight, Check } from 'lucide-react';
import { servicesData } from '../data/dentalData';

const Services = () => {
  const navigate = useNavigate();
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);

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

  return (
    <div className="container" id="treatments-section" style={{ paddingTop: 'clamp(7rem, 12vw, 9rem)', paddingBottom: '4rem' }}>
      <header className="section-header reveal-section" ref={(el) => (sectionRefs.current[0] = el)}>
        <span className="badge-pill" style={{ marginBottom: '1rem' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-primary)', display: 'inline-block' }}></span>
          Product Portfolio
        </span>
        <h1 className="font-title" style={{ fontSize: '2.4rem', marginBottom: '1rem', fontFamily: "'Playfair Display', serif" }}>{servicesData.title}</h1>
        <p>{servicesData.subtitle}</p>
        <div className="accent-line"></div>
      </header>

      {/* Alternating Product Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4rem, 10vw, 7rem)', marginBottom: 'clamp(5rem, 10vw, 8rem)' }}>
        {servicesData.therapies.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index} 
              className="treatment-row-hover reveal-section"
              ref={(el) => (sectionRefs.current[index + 1] = el)}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                gap: '4rem',
                alignItems: 'center',
              }}
            >
              {/* Image Column */}
              <div style={{ order: isEven ? 1 : 2 }}>
                <div className="image-frame-creative digital-scanner-container" style={{ borderRadius: '14px' }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="video-effect-image" 
                    style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block' }} 
                  />
                </div>
              </div>

              {/* Text Column */}
              <div className="fade-in" style={{ order: isEven ? 2 : 1, display: 'flex', flexDirection: 'column', gap: '1.2rem', textAlign: 'left' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ 
                    fontFamily: "'Outfit', sans-serif", 
                    fontSize: '3rem', 
                    fontWeight: 900, 
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    opacity: 0.3,
                    lineHeight: 1
                  }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div style={{ width: '30px', height: '2px', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary))', borderRadius: '1px' }}></div>
                </div>
                <h3 className="font-title service-title-hover" style={{ fontSize: '1.8rem', margin: 0 }}>
                  {item.title}
                </h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {item.price.split(' | ').map((p, i) => (
                    <span key={i} style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-primary)', background: 'var(--bg-secondary)', padding: '0.35rem 0.8rem', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
                      {p}
                    </span>
                  ))}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>
                  {item.desc}
                </p>
                <button
                  className="btn-corporate-text"
                  onClick={() => navigate('/contact')}
                  style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}
                >
                  Inquire Now <ChevronRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Support Programs Banner */}
      <section className="reveal-section" ref={(el) => (sectionRefs.current[7] = el)} style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        background: 'var(--bg-secondary)',
        borderRadius: '16px',
        overflow: 'hidden',
        alignItems: 'stretch',
        border: '1px solid var(--border-color)',
        position: 'relative'
      }}>
        <div className="laser-sweep-container" style={{ overflow: 'hidden', position: 'relative', height: '100%', minHeight: '320px' }}>
          <img src={servicesData.therapies[1].image} alt="Dental equipment" className="video-effect-image" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div className="mobile-text-center" style={{ padding: 'clamp(2rem, 4vw, 3rem) 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className="badge-corporate" style={{ marginBottom: '1.2rem', width: 'fit-content' }}>Support & Contracts</span>
          <h2 className="font-title" style={{ fontSize: '2rem', marginBottom: '1.2rem', marginTop: '0.5rem' }}>{servicesData.membership.title}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.7 }}>
            {servicesData.membership.desc}
          </p>
          <button className="btn-corporate" style={{ alignSelf: 'flex-start' }} onClick={() => setIsMemberModalOpen(true)}>
            Explore Partner Programs <ArrowRight size={16} />
          </button>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-banner reveal-section" ref={(el) => (sectionRefs.current[8] = el)}>
        <h2 className="font-title">Need a Custom Equipment Package?</h2>
        <p>Our product experts will build a tailored solution for your clinic, lab, or institution.</p>
        <button className="btn-gradient" onClick={() => navigate('/contact')}>
          Get Custom Quote <ArrowRight size={16} />
        </button>
      </div>

      {/* Membership Tiers Modal */}
      {isMemberModalOpen && (
        <div className="modal-overlay" onClick={() => setIsMemberModalOpen(false)}>
          <div className="modal-content fade-in" onClick={(e) => e.stopPropagation()} style={{
            maxWidth: '900px',
            width: '94%',
            padding: '2.5rem',
            position: 'relative',
            background: 'var(--bg-primary)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <button
              onClick={() => setIsMemberModalOpen(false)}
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--bg-secondary)', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Close membership details"
            >
              <X size={18} />
            </button>
            <h2 className="font-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-primary)', textAlign: 'center' }}>B2B Client Support Programs</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 400 }}>Partner with Sarojini Dental & Co. for wholesale contracts and equipment maintenance services.</p>
            <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary))', margin: '0 auto 2.5rem', borderRadius: '2px' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', alignItems: 'stretch', textAlign: 'left' }}>
              {servicesData.membershipTiers.map((tier, idx) => (
                <div key={idx} style={{
                  background: 'var(--bg-secondary)',
                  padding: '2.5rem 1.8rem',
                  borderRadius: '16px',
                  border: idx === 1 ? '2px solid var(--accent-primary)' : '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  position: 'relative',
                  transition: 'var(--transition)'
                }}>
                  {idx === 1 && (
                    <span style={{
                      position: 'absolute',
                      top: '-12px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
                      color: '#fff',
                      padding: '0.2rem 1rem',
                      borderRadius: '50px',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      Recommended
                    </span>
                  )}
                  <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                    <h4 className="font-title" style={{ fontSize: '1.2rem', margin: '0 0 0.5rem 0', color: 'var(--accent-primary)' }}>{tier.name}</h4>
                    <span style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>{tier.price}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {tier.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                        <div style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '1px'
                        }}>
                          <Check size={12} color="#fff" strokeWidth={3} />
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                  <button
                    className={idx === 1 ? 'btn-gradient' : 'btn-corporate-outline'}
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      marginTop: 'auto',
                      borderRadius: '10px'
                    }}
                    onClick={() => {
                      setIsMemberModalOpen(false);
                      navigate('/contact');
                    }}
                  >
                    Inquire About Program
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
