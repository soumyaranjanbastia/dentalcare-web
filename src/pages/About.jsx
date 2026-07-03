import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { aboutData } from '../data/dentalData';
import bookingImg from '../assets/booking_premium.png';
import teamImg from '../assets/team.png';

const About = () => {
  const [isTeamOpen, setIsTeamOpen] = useState(false);

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
    <div className="container" id="philosophy-section" style={{ paddingTop: 'clamp(7rem, 12vw, 9rem)', paddingBottom: '4rem' }}>
      
      {/* Section 1: Philosophy */}
      <section className="responsive-grid reveal-section" ref={(el) => (sectionRefs.current[0] = el)} style={{ alignItems: 'center', marginBottom: 'clamp(4rem, 8vw, 6rem)', gap: '4rem' }}>
        <div className="mobile-text-center">
          <span className="badge-corporate" style={{ marginBottom: '1.2rem' }}>About Us</span>
          <h1 className="font-title" style={{ fontSize: '2.4rem', marginBottom: '1.5rem', marginTop: '0.8rem', fontFamily: "'Playfair Display', serif" }}>{aboutData.sanctuary.title}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            {aboutData.sanctuary.desc}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {aboutData.features.map((feature, index) => (
              <div key={index} style={{ padding: '1.2rem 0', borderTop: '1px solid var(--border-color)', transition: 'var(--transition)' }}>
                <div style={{ color: index === 0 ? 'var(--accent-primary)' : 'var(--text-secondary)', marginBottom: '0.8rem' }}>
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-title" style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{feature.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img
            src={bookingImg}
            alt="Sarojini Dental Office"
            style={{ width: '100%', borderRadius: '14px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-elevated)' }}
          />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            padding: '1rem 1.5rem',
            borderLeft: '3px solid var(--accent-primary)',
            background: 'var(--bg-primary)',
            borderRadius: '10px',
            border: '1px solid var(--border-color)',
            borderLeftWidth: '3px',
            borderLeftColor: 'var(--accent-primary)',
            boxShadow: 'var(--shadow-card)'
          }}>
            <h3 className="font-title" style={{ color: 'var(--accent-primary)', fontSize: '1.2rem' }}>Since 2022</h3>
            <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '1.5px' }}>Distributor Excellence</p>
          </div>
        </div>
      </section>

      {/* Section 2: Pillars */}
      <section style={{ marginBottom: '6rem' }} className="reveal-section" ref={(el) => (sectionRefs.current[1] = el)}>
        <div className="section-header">
          <h2 className="font-title video-text-effect">Four Pillars of Excellence</h2>
          <p>The principles that drive our commitment to dental professionals.</p>
          <div className="accent-line"></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {aboutData.pillars.map((pillar, index) => (
            <div key={index} className="grid-block mobile-text-center" style={{ textAlign: 'left', padding: '2rem' }}>
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.2rem',
                color: '#fff'
              }}>
                <pillar.icon size={24} strokeWidth={1.8} />
              </div>
              <h3 className="font-title" style={{ fontSize: '1.2rem', marginBottom: '0.6rem' }}>{pillar.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Experts */}
      <section className="responsive-grid reveal-section" ref={(el) => (sectionRefs.current[2] = el)} style={{ alignItems: 'center', gap: '4rem' }}>
        <div className="mobile-text-center">
          <span className="badge-corporate" style={{ marginBottom: '1rem' }}>Our Team</span>
          <h2 className="font-title" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', marginTop: '0.8rem' }}>{aboutData.experts.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '2.2rem' }}>
            {aboutData.experts.desc}
          </p>
          <button className="btn-corporate" onClick={() => setIsTeamOpen(true)}>Meet our Advisors & Engineers <ArrowRight size={16} /></button>
        </div>
        <div>
          <img
            src={teamImg}
            alt="Dental Specialists Team"
            style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '14px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-elevated)' }}
          />
        </div>
      </section>

      {/* Team Bios Modal */}
      {isTeamOpen && (
        <div className="modal-overlay" onClick={() => setIsTeamOpen(false)}>
          <div className="modal-content fade-in" onClick={(e) => e.stopPropagation()} style={{
            maxWidth: '820px',
            width: '94%',
            padding: '2.5rem',
            position: 'relative',
            background: 'var(--bg-primary)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}>
            <button
              onClick={() => setIsTeamOpen(false)}
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'var(--bg-secondary)', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.5rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              aria-label="Close team list"
            >
              <X size={18} />
            </button>
            <h2 className="font-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-primary)', textAlign: 'center' }}>Our Technical & Support Team</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2rem', textAlign: 'center', fontWeight: 400 }}>Meet the technical and business professionals that guide your success.</p>
            <div style={{ width: '50px', height: '3px', background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-tertiary))', margin: '0 auto 2.5rem', borderRadius: '2px' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
              {aboutData.teamMembers.map((member, idx) => (
                <div key={idx} style={{
                  background: 'var(--bg-secondary)',
                  padding: '2rem 1.5rem',
                  borderRadius: '14px',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem',
                  transition: 'var(--transition)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-primary)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: '#fff',
                    fontFamily: "'Outfit', sans-serif",
                    marginBottom: '0.3rem'
                  }}>
                    {member.name.split(' ').pop().charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-title" style={{ fontSize: '1.15rem', margin: '0 0 0.2rem 0', color: 'var(--text-primary)' }}>{member.name}</h4>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{member.desc}</p>
                  <div style={{ marginTop: 'auto', paddingTop: '0.8rem', borderTop: '1px solid var(--border-color)', fontSize: '0.8rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Specialty:</strong> <span style={{ color: 'var(--text-secondary)' }}>{member.specialty}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
