import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { heroData, experiences, facilitiesData, specialOffer } from '../data/dentalData';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import bg from '../assets/background.png';
import treatmentImg from '../assets/treatment_premium.png';
import bookingImg from '../assets/booking_premium.png';
import facilitiesImg from '../assets/services.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [tourIndex, setTourIndex] = useState(0);

  const tourImages = [
    { img: facilitiesImg, title: "Surgical & Sterilization Suites", desc: "Equipped with positive-pressure HEPA air filtration and premium shadowless surgical dental lamps." },
    { img: bookingImg, title: "Clinical Consultation Lounge", desc: "A quiet, modern space to discuss custom digital smile alignments and view 3D orthodontic scans." },
    { img: treatmentImg, title: "State-of-the-Art Care Suites", desc: "Featuring premium ergonomic dental loungers and micro-dentistry tools for absolute patient relaxation." }
  ];

  return (
    <>
      {/* Split Hero Section with Coding Video Pan & Laser Scan Effects */}
      <header className="hero-section" id="home-section">
        <div className="container hero-split-container">
          <div className="fade-in">
            <div style={{ marginBottom: '1.2rem' }}>
              <span className="badge-corporate">✦ Leading Dental Clinic</span>
            </div>
            <h1 className="hero-title video-text-effect">{heroData.title}</h1>
            <p className="hero-subtitle">{heroData.subtitle}</p>
            <button className="btn-corporate" onClick={() => setIsModalOpen(true)}>
              Explore Treatments <ChevronRight size={16} />
            </button>
          </div>
          <div className="hero-image-wrapper fade-in" style={{ border: 'none' }}>
            <div className="image-frame-creative laser-sweep-container">
              <img src={bg} alt="Clinic Reception" className="hero-image video-effect-image" style={{ borderRadius: '6px' }} />
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
            border: '1px solid var(--border-color)',
            borderRadius: '6px',
            position: 'relative'
          }}>
            <div style={{ padding: '2.5rem', background: 'var(--bg-primary)' }}>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.4rem' }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              <h2 className="font-title" style={{ fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{heroData.modal.title}</h2>
              <div style={{ width: '40px', height: '3px', background: 'var(--accent-primary)', marginBottom: '1.5rem' }}></div>
              <p style={{ marginBottom: '2rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                {heroData.modal.desc}
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button
                  className="btn-corporate"
                  onClick={() => {
                    setIsModalOpen(false);
                    navigate('/contact');
                  }}
                >
                  Book Appointment
                </button>
                <button
                  className="btn-corporate btn-corporate-outline"
                  onClick={() => {
                    setIsModalOpen(false);
                    navigate('/services');
                  }}
                >
                  View Services
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="container">
        {/* Core Values Section */}
        <section className="corporate-section">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ marginBottom: '1.2rem' }}>
              <span className="badge-corporate">Clinical Standards</span>
            </div>
            <h2 className="font-title video-text-effect" style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>The Standards of Care</h2>
          </div>
          <div className="responsive-grid">
            {experiences.map(exp => (
              <div key={exp.id} className="grid-block" style={{ textAlign: 'left' }}>
                <div style={{ marginBottom: '1.2rem', color: 'var(--accent-primary)', background: 'var(--bg-secondary)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)' }}>
                  <exp.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="font-title" style={{ fontSize: '1.4rem', marginBottom: '0.8rem' }}>{exp.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>{exp.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Facilities Section with Coding Video Pan & Laser Scan Effects */}
        <section className="corporate-section" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div>
            <div className="image-frame-creative laser-sweep-container" style={{ borderRadius: '6px' }}>
              <img src={facilitiesImg} alt="Dental Facilities" className="facility-img video-effect-image" style={{ border: 'none', display: 'block' }} />
            </div>
          </div>
          <div className="fade-in">
            <div style={{ marginBottom: '1.2rem' }}>
              <span className="badge-corporate">Our Infrastructure</span>
            </div>
            <h2 className="font-title video-text-effect" style={{ fontSize: '2.2rem', marginBottom: '1.2rem', marginTop: '0.5rem' }}>{facilitiesData.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {facilitiesData.desc}
            </p>
            <button className="btn-corporate" onClick={() => setIsTourOpen(true)}>Take a Virtual Tour</button>
          </div>
        </section>

        {/* Offer Section with Coding Video Pan & Laser Scan Effects */}
        <section className="corporate-section" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div className="fade-in">
            <div style={{ marginBottom: '1.2rem' }}>
              <span className="badge-corporate">Patient Incentive</span>
            </div>
            <h2 className="font-title video-text-effect" style={{ fontSize: '2.2rem', marginBottom: '1.2rem', marginTop: '0.5rem' }}>{specialOffer.title}</h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {specialOffer.desc}
            </p>
            <button className="btn-corporate" onClick={() => setIsOfferModalOpen(true)}>View Offer Details</button>
          </div>
          <div>
            <div className="image-frame-creative laser-sweep-container" style={{ borderRadius: '6px' }}>
              <img src={treatmentImg} alt="Dental Chair Suite" className="treatment-img video-effect-image" style={{ border: 'none', display: 'block' }} />
            </div>
          </div>
        </section>
      </main>

      {/* Embedded Subsections */}
      <About />
      <Services />
      <Contact />

      {/* Special Offer Modal */}
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
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', padding: '0.4rem' }}
              aria-label="Close offer modal"
            >
              <X size={20} />
            </button>
            <div style={{ color: 'var(--accent-primary)', marginBottom: '1.2rem' }}>
              <specialOffer.icon size={44} strokeWidth={1.5} />
            </div>
            <h2 className="font-title" style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>{specialOffer.title}</h2>
            <div style={{ width: '45px', height: '3px', background: 'var(--accent-primary)', marginBottom: '1.5rem' }}></div>
            <div style={{ background: 'var(--bg-secondary)', padding: '1.2rem', borderRadius: '4px', border: '1px solid var(--border-color)', marginBottom: '1.8rem' }}>
              <p style={{ fontSize: '0.95rem', color: 'var(--accent-primary)', fontWeight: '600', marginBottom: '0.4rem' }}>Exclusive New Patient Package</p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.5, fontSize: '0.9rem' }}>{specialOffer.desc}</p>
            </div>
            <button className="btn-corporate" style={{ width: '100%', justifyContent: 'center' }} onClick={() => setIsOfferModalOpen(false)}>Claim This Offer</button>
          </div>
        </div>
      )}

      {/* Virtual Tour Gallery Modal */}
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
              style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(15,23,42,0.6)', border: 'none', color: 'white', cursor: 'pointer', padding: '0.4rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
              aria-label="Close tour"
            >
              <X size={20} />
            </button>
            <h2 className="font-title" style={{ fontSize: '1.6rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Clinic Virtual Tour</h2>
            <div style={{ width: '40px', height: '3px', background: 'var(--accent-primary)', marginBottom: '1.5rem' }}></div>

            <div style={{ width: '100%', height: '350px', overflow: 'hidden', borderRadius: '4px', border: '1px solid var(--border-color)', marginBottom: '1.5rem', position: 'relative' }}>
              <img src={tourImages[tourIndex].img} alt={tourImages[tourIndex].title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(15,23,42,0.85))', color: 'white', padding: '1.5rem', textAlign: 'left' }}>
                <h4 className="font-title" style={{ fontSize: '1.2rem', marginBottom: '0.2rem', color: 'white' }}>{tourImages[tourIndex].title}</h4>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.4 }}>{tourImages[tourIndex].desc}</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button
                className="btn-corporate btn-corporate-outline"
                style={{ padding: '0.5rem 1.2rem', fontSize: '0.75rem' }}
                onClick={() => setTourIndex((tourIndex - 1 + tourImages.length) % tourImages.length)}
              >
                Previous
              </button>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {tourImages.map((_, i) => (
                  <div key={i} style={{ width: '8px', height: '8px', borderRadius: '50%', background: tourIndex === i ? 'var(--accent-primary)' : 'var(--border-color)', transition: 'background-color 0.2s' }} />
                ))}
              </div>
              <button
                className="btn-corporate btn-corporate-outline"
                style={{ padding: '0.5rem 1.2rem', fontSize: '0.75rem' }}
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
