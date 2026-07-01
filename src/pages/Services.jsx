import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, ChevronRight } from 'lucide-react';
import { servicesData } from '../data/dentalData';
import treatmentImg from '../assets/treatment_premium.png';

const Services = () => {
  const navigate = useNavigate();
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);

  return (
    <div className="container" id="treatments-section" style={{ paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: '4rem' }}>
      <header style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 8vw, 5rem)' }}>
        <span className="badge-corporate" style={{ marginBottom: '1rem' }}>Clinical catalog</span>
        <h1 className="font-title" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>{servicesData.title}</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '750px', margin: '0 auto', fontSize: '0.98rem', fontWeight: 400 }}>
          {servicesData.subtitle}
        </p>
      </header>

      {/* Alternating Designed Treatment Rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4rem, 10vw, 8rem)', marginBottom: 'clamp(5rem, 10vw, 8rem)' }}>
        {servicesData.therapies.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index} 
              className="treatment-row-hover"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                gap: '4rem',
                alignItems: 'center',
              }}
            >
              {/* Image Column */}
              <div style={{ order: isEven ? 1 : 2 }}>
                <div className="image-frame-creative digital-scanner-container" style={{ borderRadius: '6px' }}>
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
                  <span style={{ fontFamily: 'Outfit', fontSize: '2.5rem', fontWeight: 800, color: 'var(--accent-primary)', opacity: 0.25 }}>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div style={{ width: '30px', height: '1px', background: 'var(--border-color)' }}></div>
                </div>
                <h3 className="font-title service-title-hover" style={{ fontSize: '1.8rem', margin: 0 }}>
                  {item.title}
                </h3>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {item.price.split(' | ').map((p, i) => (
                    <span key={i} style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-primary)', background: 'var(--bg-secondary)', padding: '0.3rem 0.7rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
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
                  Book Treatment <ChevronRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Corporate Oral Health Club Banner */}
      <section className="responsive-grid glow-wrapper" style={{
        background: 'var(--bg-secondary)',
        borderRadius: '4px',
        overflow: 'hidden',
        alignItems: 'stretch',
        border: '1px solid var(--border-color)',
        padding: '0'
      }}>
        <div className="bg-glow-cyan" style={{ top: '-10%', left: '-10%' }}></div>
        <div className="laser-sweep-container" style={{ overflow: 'hidden', position: 'relative', height: '100%', minHeight: '320px' }}>
          <img src={treatmentImg} alt="Dental chair" className="video-effect-image" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
        </div>
        <div className="mobile-text-center" style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className="badge-corporate" style={{ marginBottom: '1rem', width: 'fit-content' }}>Preventative Health</span>
          <h2 className="font-title" style={{ fontSize: '2rem', marginBottom: '1.2rem', marginTop: '0.5rem' }}>{servicesData.membership.title}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem', lineHeight: 1.6 }}>
            {servicesData.membership.desc}
          </p>
          <button className="btn-corporate" style={{ alignSelf: 'flex-start' }} onClick={() => setIsMemberModalOpen(true)}>Become a Member</button>
        </div>
      </section>

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
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.4rem' }}
              aria-label="Close membership details"
            >
              <X size={20} />
            </button>
            <h2 className="font-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-primary)', textAlign: 'center' }}>Oral Health Club Plans</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2.5rem', textAlign: 'center', fontWeight: 400 }}>Join the Denteal Care Club for preventative wellness benefits and surgical discounts.</p>
            <div style={{ width: '40px', height: '3px', background: 'var(--accent-primary)', margin: '0 auto 2.5rem' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', alignItems: 'stretch', textAlign: 'left' }}>
              {servicesData.membershipTiers.map((tier, idx) => (
                <div key={idx} style={{
                  background: 'var(--bg-secondary)',
                  padding: '2.5rem 1.8rem',
                  borderRadius: '4px',
                  border: '1px solid var(--border-color)',
                  borderTop: idx === 1 ? '4px solid var(--accent-primary)' : '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.2rem',
                  position: 'relative'
                }}>
                  {idx === 1 && (
                    <span style={{
                      position: 'absolute',
                      top: '-13px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--accent-primary)',
                      color: 'var(--bg-primary)',
                      padding: '0.1rem 0.8rem',
                      borderRadius: '2px',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      textTransform: 'uppercase'
                    }}>
                      Recommended
                    </span>
                  )}
                  <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                    <h4 className="font-title" style={{ fontSize: '1.3rem', margin: '0 0 0.5rem 0', color: 'var(--accent-primary)' }}>{tier.name}</h4>
                    <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)' }}>{tier.price}</span>
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    {tier.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <span style={{ color: 'var(--accent-primary)' }}>✓</span> {benefit}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="btn-corporate"
                    style={{
                      width: '100%',
                      justifyContent: 'center',
                      marginTop: 'auto',
                      background: idx === 1 ? 'var(--accent-primary)' : 'transparent',
                      border: '1px solid var(--accent-primary)',
                      color: idx === 1 ? 'var(--bg-primary)' : 'var(--accent-primary)'
                    }}
                    onClick={() => {
                      setIsMemberModalOpen(false);
                      navigate('/contact');
                    }}
                  >
                    Select Plan
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
