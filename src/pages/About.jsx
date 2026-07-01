import React, { useState } from 'react';
import { X } from 'lucide-react';
import { aboutData } from '../data/dentalData';
import bookingImg from '../assets/booking_premium.png';
import teamImg from '../assets/team.png';

const About = () => {
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  return (
    <div className="container" id="philosophy-section" style={{ paddingTop: 'clamp(4rem, 10vw, 7rem)', paddingBottom: '4rem' }}>
      {/* Section 1: Philosophy */}
      <section className="responsive-grid" style={{ alignItems: 'center', marginBottom: 'clamp(4rem, 8vw, 6rem)', gap: '4rem' }}>
        <div className="mobile-text-center">
          <span className="badge-corporate" style={{ marginBottom: '1rem' }}>Our Background</span>
          <h1 className="font-title" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>{aboutData.sanctuary.title}</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            {aboutData.sanctuary.desc}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            {aboutData.features.map((feature, index) => (
              <div key={index} style={{ padding: '1rem 0', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ color: index === 0 ? 'var(--accent-primary)' : 'var(--text-secondary)', marginBottom: '0.8rem' }}>
                  <feature.icon size={24} strokeWidth={1.5} />
                </div>
                <h4 className="font-title" style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{feature.title}</h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <img
            src={bookingImg}
            alt="Clinic Office"
            style={{ width: '100%', borderRadius: '4px', border: '1px solid var(--border-color)' }}
          />
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            padding: '0.8rem 1.5rem',
            borderLeft: '3px solid var(--accent-primary)',
            background: 'var(--bg-primary)',
            borderRadius: '2px',
            border: '1px solid var(--border-color)',
            borderLeftWidth: '3px',
            boxShadow: 'var(--shadow-subtle)'
          }}>
            <h3 className="font-title" style={{ color: 'var(--accent-primary)', fontSize: '1.1rem' }}>Since 2018</h3>
            <p style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: 600 }}>Clinical Excellence</p>
          </div>
        </div>
      </section>

      {/* Section 2: Pillars (Clean, open, borderless columns) */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div style={{ marginBottom: '0.8rem' }}>
            <span className="badge-corporate">Foundations</span>
          </div>
          <h2 className="font-title video-text-effect" style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>Four Pillars of Denteal Care</h2>
        </div>
        <div className="responsive-grid" style={{ gap: '3rem' }}>
          {aboutData.pillars.map((pillar, index) => (
            <div key={index} className="mobile-text-center" style={{ textAlign: 'left' }}>
              <div style={{ color: 'var(--accent-primary)', marginBottom: '1.2rem', display: 'inline-flex' }}>
                <pillar.icon size={30} strokeWidth={1.5} />
              </div>
              <h3 className="font-title" style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>{pillar.title}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Experts */}
      <section className="responsive-grid" style={{ alignItems: 'center', gap: '4rem' }}>
        <div className="mobile-text-center">
          <span className="badge-corporate" style={{ marginBottom: '1rem' }}>Our Doctors</span>
          <h2 className="font-title" style={{ fontSize: '2.2rem', marginBottom: '1.5rem', marginTop: '0.5rem' }}>{aboutData.experts.title}</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '2.2rem' }}>
            {aboutData.experts.desc}
          </p>
          <button className="btn-corporate" onClick={() => setIsTeamOpen(true)}>Meet the Clinicians</button>
        </div>
        <div>
          <img
            src={teamImg}
            alt="Dental Specialists"
            style={{ width: '100%', height: '350px', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--border-color)' }}
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
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.4rem' }}
              aria-label="Close team list"
            >
              <X size={20} />
            </button>
            <h2 className="font-title" style={{ fontSize: '1.8rem', marginBottom: '0.5rem', color: 'var(--text-primary)', textAlign: 'center' }}>Our Clinical Team</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '2.5rem', textAlign: 'center', fontWeight: 400 }}>Meet the specialized hands that guide you to optimum dental health.</p>
            <div style={{ width: '40px', height: '3px', background: 'var(--accent-primary)', margin: '0 auto 2.5rem' }}></div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', textAlign: 'left' }}>
              {aboutData.teamMembers.map((member, idx) => (
                <div key={idx} style={{
                  background: 'var(--bg-secondary)',
                  padding: '1.8rem 1.5rem',
                  borderRadius: '4px',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.8rem'
                }}>
                  <div>
                    <h4 className="font-title" style={{ fontSize: '1.2rem', margin: '0 0 0.2rem 0', color: 'var(--text-primary)' }}>{member.name}</h4>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>{member.desc}</p>
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
