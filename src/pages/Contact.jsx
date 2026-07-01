import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Phone, Mail, Clock, ChevronRight, Stethoscope, ShieldCheck, Star, Send, ArrowRight } from 'lucide-react';
import { contactData, servicesData } from '../data/dentalData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    treatment: servicesData.therapies[0].title,
    message: ''
  });

  const [activeCard, setActiveCard] = useState(null);
  const [formStep, setFormStep] = useState(0); // 0 = personal, 1 = appointment
  const sectionRefs = useRef([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('contact-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.date) {
      alert("Please fill in your Name and Preferred Date to proceed with the booking.");
      return;
    }

    const whatsappNumber = "919999999999";
    const messageLines = [
      "🦷 *New Dental Consultation Booking* 🦷",
      "",
      `*Name:* ${formData.name}`,
      `*Email:* ${formData.email || 'Not provided'}`,
      `*Phone:* ${formData.phone || 'Not provided'}`,
      `*Preferred Date:* ${formData.date}`,
      `*Treatment Type:* ${formData.treatment}`,
      `*Additional Notes:* ${formData.message || 'None'}`,
      "",
      "Please review and confirm this clinic appointment! ✨"
    ];

    const message = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Visit Our Clinic",
      detail: "123, Aesthetic Dental Tower,\nSuite 4B, Sector 5,\nBhubaneswar, Odisha 751024",
      accent: '#0ea5e9',
      bg: 'linear-gradient(135deg, #0ea5e9, #06b6d4)'
    },
    {
      icon: Phone,
      title: "Call Us Now",
      detail: "+91 99999 99999\n+91 88888 88888",
      accent: '#8b5cf6',
      bg: 'linear-gradient(135deg, #8b5cf6, #a78bfa)'
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "contact@dentealcare.com\nappointments@dentealcare.com",
      accent: '#f43f5e',
      bg: 'linear-gradient(135deg, #f43f5e, #fb7185)'
    }
  ];

  const workingHours = [
    { day: 'Monday', hours: '9:00 AM - 8:00 PM', isOpen: true },
    { day: 'Tuesday', hours: '9:00 AM - 8:00 PM', isOpen: true },
    { day: 'Wednesday', hours: '9:00 AM - 8:00 PM', isOpen: true },
    { day: 'Thursday', hours: '9:00 AM - 8:00 PM', isOpen: true },
    { day: 'Friday', hours: '9:00 AM - 8:00 PM', isOpen: true },
    { day: 'Saturday', hours: '10:00 AM - 6:00 PM', isOpen: true },
    { day: 'Sunday', hours: 'Closed', isOpen: false }
  ];

  const todayIndex = new Date().getDay();
  // JS getDay(): 0=Sun, so we remap: Mon=0 in our array
  const todayMapped = todayIndex === 0 ? 6 : todayIndex - 1;

  const features = [
    { icon: ShieldCheck, text: "100% Sterilized Equipment" },
    { icon: Stethoscope, text: "Board-Certified Dentists" },
    { icon: Star, text: "5-Star Patient Reviews" },
    { icon: Clock, text: "Same-Day Appointments" }
  ];

  return (
    <div className="contact-page">
      {/* ═══════ HERO BANNER ═══════ */}
      <section className="contact-hero" ref={(el) => (sectionRefs.current[0] = el)}>
        <div className="contact-hero-bg">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
          <div className="hero-grid-pattern"></div>
        </div>
        <div className="container contact-hero-content">
          <div className="contact-hero-badge">
            <span className="badge-dot"></span>
            Accepting New Patients
          </div>
          <h1 className="contact-hero-title font-title">
            Let's Create Your<br />
            <span className="contact-hero-highlight">Perfect Smile</span>
          </h1>
          <p className="contact-hero-subtitle">
            Schedule your consultation today and take the first step towards 
            a healthier, more confident smile with our expert dental team.
          </p>
          <div className="contact-hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">15K+</span>
              <span className="hero-stat-label">Happy Patients</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">12+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">98%</span>
              <span className="hero-stat-label">Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ CONTACT CARDS ═══════ */}
      <section className="contact-cards-section" ref={(el) => (sectionRefs.current[1] = el)}>
        <div className="container">
          <div className="contact-cards-grid">
            {contactCards.map((card, idx) => (
              <div
                key={idx}
                className={`contact-card-item ${activeCard === idx ? 'contact-card-active' : ''}`}
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
                style={{ '--card-accent': card.accent, animationDelay: `${idx * 0.15}s` }}
              >
                <div className="contact-card-icon-wrap" style={{ background: card.bg }}>
                  <card.icon size={24} color="#fff" strokeWidth={2} />
                </div>
                <h3 className="contact-card-title font-title">{card.title}</h3>
                <p className="contact-card-detail">{card.detail}</p>
                <div className="contact-card-arrow">
                  <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BOOKING FORM + FEATURES ═══════ */}
      <section className="contact-booking-section" ref={(el) => (sectionRefs.current[2] = el)}>
        <div className="container">
          <div className="contact-booking-grid">
            {/* Left: Info & Features */}
            <div className="contact-booking-info">
              <span className="contact-section-tag">BOOK APPOINTMENT</span>
              <h2 className="contact-booking-title font-title">
                Your Dental Health<br />Journey Starts Here
              </h2>
              <p className="contact-booking-desc">
                Fill out the form and our patient coordinator will personally 
                reach out within 30 minutes to confirm your appointment and 
                answer any questions.
              </p>

              <div className="contact-features-list">
                {features.map((feat, idx) => (
                  <div key={idx} className="contact-feature-item" style={{ animationDelay: `${idx * 0.1}s` }}>
                    <div className="contact-feature-icon">
                      <feat.icon size={18} strokeWidth={2.5} />
                    </div>
                    <span>{feat.text}</span>
                  </div>
                ))}
              </div>

              {/* Working Hours */}
              <div className="contact-hours-box">
                <h4 className="contact-hours-title font-title">
                  <Clock size={18} /> Working Hours
                </h4>
                <div className="contact-hours-list">
                  {workingHours.map((item, idx) => (
                    <div
                      key={idx}
                      className={`contact-hour-row ${idx === todayMapped ? 'contact-hour-today' : ''} ${!item.isOpen ? 'contact-hour-closed' : ''}`}
                    >
                      <span className="contact-hour-day">
                        {idx === todayMapped && <span className="today-dot"></span>}
                        {item.day}
                      </span>
                      <span className="contact-hour-time">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-container">
              <div className="contact-form-header">
                <h3 className="font-title">Request Consultation</h3>
                <p>Free initial consultation for new patients</p>
              </div>

              {/* Step Indicators */}
              <div className="contact-form-steps">
                <button
                  className={`form-step-btn ${formStep === 0 ? 'form-step-active' : ''}`}
                  onClick={() => setFormStep(0)}
                  type="button"
                >
                  <span className="step-number">1</span>
                  Personal Info
                </button>
                <div className="step-connector">
                  <div className={`step-connector-fill ${formStep >= 1 ? 'step-connector-done' : ''}`}></div>
                </div>
                <button
                  className={`form-step-btn ${formStep === 1 ? 'form-step-active' : ''}`}
                  onClick={() => setFormStep(1)}
                  type="button"
                >
                  <span className="step-number">2</span>
                  Appointment
                </button>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                {/* Step 1: Personal Info */}
                <div className={`form-step-panel ${formStep === 0 ? 'form-step-panel-active' : ''}`}>
                  <div className="contact-field">
                    <label className="contact-label">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Email Address</label>
                    <input
                      type="email"
                      placeholder="name@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="contact-input"
                    />
                  </div>
                  <button
                    type="button"
                    className="contact-next-btn"
                    onClick={() => setFormStep(1)}
                  >
                    Next: Appointment Details <ChevronRight size={18} />
                  </button>
                </div>

                {/* Step 2: Appointment */}
                <div className={`form-step-panel ${formStep === 1 ? 'form-step-panel-active' : ''}`}>
                  <div className="contact-field">
                    <label className="contact-label">Preferred Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Treatment Type</label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="contact-input"
                    >
                      {servicesData.therapies.map((therapy, idx) => (
                        <option key={idx} value={therapy.title}>
                          {therapy.title} — {therapy.price.split('|')[0].trim()}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Additional Notes</label>
                    <textarea
                      placeholder="Any concerns, allergies, or specific requests..."
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="contact-input contact-textarea"
                    ></textarea>
                  </div>
                  <div className="contact-form-actions">
                    <button
                      type="button"
                      className="contact-back-btn"
                      onClick={() => setFormStep(0)}
                    >
                      Back
                    </button>
                    <button type="submit" className="contact-submit-btn">
                      <Send size={16} /> Book via WhatsApp
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ EMERGENCY CTA ═══════ */}
      <section className="contact-emergency-section" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="container">
          <div className="contact-emergency-banner">
            <div className="emergency-pulse"></div>
            <div className="emergency-content">
              <div className="emergency-icon-wrap">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="font-title emergency-title">Dental Emergency?</h3>
                <p className="emergency-desc">
                  For urgent dental issues, our emergency line is available 24/7. 
                  Don't wait — call us immediately for same-day emergency care.
                </p>
              </div>
            </div>
            <a href="tel:+919999999999" className="emergency-call-btn">
              <Phone size={18} /> Call Emergency Line
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
