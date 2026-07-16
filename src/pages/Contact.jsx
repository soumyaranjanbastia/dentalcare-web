import React, { useState, useEffect, useRef } from 'react';
import { Calendar, MapPin, Phone, Mail, Clock, ChevronRight, ChevronDown, Download, Stethoscope, ShieldCheck, Star, Send, ArrowRight } from 'lucide-react';
import { contactData, servicesData } from '../data/dentalData';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    institution: '',
    clientType: 'Dental Clinic',
    date: '',
    treatment: servicesData.therapies[0].title,
    message: ''
  });

  const [activeCard, setActiveCard] = useState(null);
  const [formStep, setFormStep] = useState(0); // 0 = personal/institutional, 1 = inquiry details
  const [openFaq, setOpenFaq] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  
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
    if (!formData.name || !formData.date || !formData.institution) {
      alert("Please fill in Name, Institution, and Preferred Date to proceed with the inquiry.");
      return;
    }

    const whatsappNumber = "919178178178";
    const messageLines = [
      "🏢 *New B2B Dental Inquiry - Sarojini Dental & Co.* 🏢",
      "",
      `*Name:* ${formData.name}`,
      `*Institution Name:* ${formData.institution}`,
      `*Institution Type:* ${formData.clientType}`,
      `*Email:* ${formData.email || 'Not provided'}`,
      `*Phone/WhatsApp:* ${formData.phone || 'Not provided'}`,
      `*Preferred Demo/Consultation Date:* ${formData.date}`,
      `*Product Category:* ${formData.treatment}`,
      `*Requirement Notes:* ${formData.message || 'None'}`,
      "",
      "Please review and contact this institutional prospect! ✨"
    ];

    const message = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleDownloadCatalog = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      alert("Thank you! The Sarojini Dental & Co. 2026 Product Portfolio Catalog has been loaded.");
      window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '_blank');
    }, 1200);
  };

  const contactCards = [
    {
      icon: MapPin,
      title: "Visit Our Showroom",
      detail: "Plot No. 452, Commercial District,\nJayadev Vihar, Bhubaneswar,\nOdisha 751013",
      accent: '#0ea5e9',
      bg: 'linear-gradient(135deg, #0ea5e9, #06b6d4)'
    },
    {
      icon: Phone,
      title: "Call B2B Sales",
      detail: "+91 91781 78178\n+91 97781 78178\n+91 90901 78178",
      accent: '#8b5cf6',
      bg: 'linear-gradient(135deg, #8b5cf6, #a78bfa)'
    },
    {
      icon: Mail,
      title: "Email Us",
      detail: "sarojinidental@gmail.com\nsales@sarojinidental.com\nsupport@sarojinidental.com",
      accent: '#f43f5e',
      bg: 'linear-gradient(135deg, #f43f5e, #fb7185)'
    }
  ];

  const workingHours = [
    { day: 'Monday', hours: '9:30 AM - 6:30 PM', isOpen: true },
    { day: 'Tuesday', hours: '9:30 AM - 6:30 PM', isOpen: true },
    { day: 'Wednesday', hours: '9:30 AM - 6:30 PM', isOpen: true },
    { day: 'Thursday', hours: '9:30 AM - 6:30 PM', isOpen: true },
    { day: 'Friday', hours: '9:30 AM - 6:30 PM', isOpen: true },
    { day: 'Saturday', hours: '9:30 AM - 6:30 PM', isOpen: true },
    { day: 'Sunday', hours: 'Closed', isOpen: false }
  ];

  const todayIndex = new Date().getDay();
  // JS getDay(): 0=Sun, so we remap: Mon=0 in our array
  const todayMapped = todayIndex === 0 ? 6 : todayIndex - 1;

  const features = [
    { icon: ShieldCheck, text: "100% Genuine Brands & Warranty" },
    { icon: Stethoscope, text: "Professional Biomedical Engineers" },
    { icon: Star, text: "Trusted Dealer Since 2022" },
    { icon: Clock, text: "Dependable Technical Support" }
  ];

  const faqs = [
    {
      q: "What are your standard delivery timelines across India?",
      a: "Consumables are dispatched within 24 hours and delivered within 2-5 business days. Heavy equipment and CAD/CAM laboratory systems depend on installation readiness and usually take 7-14 business days."
    },
    {
      q: "Do you provide on-site installation and staff training?",
      a: "Yes, all advanced dental equipment and lab machinery include free professional installation and hands-on calibration by our certified biomedical engineers, along with operational training for your clinical team."
    },
    {
      q: "How does the warranty service work for imported brands?",
      a: "As the authorized channel partner, we handle all warranty claims directly. We supply 100% genuine manufacturer spare parts and coordinate technical maintenance to keep your equipment under official warranty protocols."
    },
    {
      q: "Do you offer demo sessions for intraoral scanners and lab mills?",
      a: "Absolutely. You can request a physical demonstration at our Bhubaneswar showroom or arrange a virtual live demo session with our product experts by filling out the inquiry form above."
    },
    {
      q: "What are the payment terms for institutional bulk purchases?",
      a: "We offer tailored financing support, institutional lines of credit, and flexible structured payment milestones for bulk consumable agreements and complete clinic setups. Get in touch with our sales desk for custom quotes."
    }
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
            B2B Dental Solutions
          </div>
          <h1 className="contact-hero-title font-title">
            Equipping Your Facility<br />
            <span className="contact-hero-highlight">With Precision</span>
          </h1>
          <p className="contact-hero-subtitle">
            Partner with Sarojini Dental & Co. to access premium dental equipment, 
            lab systems, and clinical consumables backed by manufacturer warranties.
          </p>
          <div className="contact-hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">500+</span>
              <span className="hero-stat-label">Clinics Equipped</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">Since 2022</span>
              <span className="hero-stat-label">Established Year</span>
            </div>
            <div className="hero-stat-divider"></div>
            <div className="hero-stat">
              <span className="hero-stat-number">100%</span>
              <span className="hero-stat-label">Genuine Products</span>
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
                <p className="contact-card-detail" style={{ whiteSpace: 'pre-line' }}>{card.detail}</p>
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
              <span className="contact-section-tag">SUBMIT INQUIRY</span>
              <h2 className="contact-booking-title font-title">
                Get a Customized<br />Product Quote
              </h2>
              <p className="contact-booking-desc">
                Fill out the form below. Our dedicated B2B product consultants 
                will reach out within 2 hours with product specifications, 
                pricing details, and catalog options.
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
                <h3 className="font-title">Request a Quote / Demo</h3>
                <p>Free consulting & catalog guidance</p>
              </div>

              {/* Step Indicators */}
              <div className="contact-form-steps">
                <button
                  className={`form-step-btn ${formStep === 0 ? 'form-step-active' : ''}`}
                  onClick={() => setFormStep(0)}
                  type="button"
                >
                  <span className="step-number">1</span>
                  Personal & Institutional Info
                </button>
                <div className="step-connector">
                  <div className={`step-connector-fill ${formStep >= 1 ? 'step-connector-done' : ''}`}></div>
                </div>
                <button
                  className={`form-step-btn ${formStep === 1 ? 'form-step-active' : ''}`}
                  onClick={() => {
                    if (formData.name && formData.institution && formData.phone) {
                      setFormStep(1);
                    } else {
                      alert("Please fill in Name, Institution Name, and Phone to proceed.");
                    }
                  }}
                  type="button"
                >
                  <span className="step-number">2</span>
                  Inquiry Details
                </button>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                {/* Step 1: Personal & Institutional Info */}
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
                    <label className="contact-label">Institution / Clinic Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. City Dental Hospital"
                      required
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Institution Type</label>
                    <select
                      value={formData.clientType}
                      onChange={(e) => setFormData({ ...formData, clientType: e.target.value })}
                      className="contact-input"
                    >
                      <option value="Dental Clinic">Dental Clinic</option>
                      <option value="Hospital">Hospital</option>
                      <option value="Dental Laboratory">Dental Laboratory</option>
                      <option value="Educational Institution">Educational Institution</option>
                      <option value="Other">Other</option>
                    </select>
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
                    <label className="contact-label">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="contact-input"
                    />
                  </div>
                  <button
                    type="button"
                    className="contact-next-btn"
                    onClick={() => {
                      if (!formData.name || !formData.institution || !formData.phone) {
                        alert("Please fill in Name, Institution Name, and Phone to proceed.");
                        return;
                      }
                      setFormStep(1);
                    }}
                  >
                    Next: Inquiry Details <ChevronRight size={18} />
                  </button>
                </div>

                {/* Step 2: Inquiry Details */}
                <div className={`form-step-panel ${formStep === 1 ? 'form-step-panel-active' : ''}`}>
                  <div className="contact-field">
                    <label className="contact-label">Preferred Demo / Consultation Date *</label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="contact-input"
                    />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Product Category of Interest</label>
                    <select
                      value={formData.treatment}
                      onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                      className="contact-input"
                    >
                      {servicesData.therapies.map((therapy, idx) => (
                        <option key={idx} value={therapy.title}>
                          {therapy.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Requirement Details</label>
                    <textarea
                      placeholder="Specify items needed, model numbers, volume, or setup requests..."
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
                      <Send size={16} /> Submit via WhatsApp
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* ═══════ CATALOG DOWNLOAD CARD ═══════ */}
          <div className="catalog-download-card">
            <h3 className="font-title catalog-title">Download Product Portfolio Catalog</h3>
            <p className="catalog-desc">
              Get detailed tech sheets, catalog options, and complete pricing checklists for our entire portfolio of high-end equipment, lab systems, and premium consumables.
            </p>
            <button 
              className="btn-corporate catalog-btn"
              onClick={handleDownloadCatalog}
              disabled={isDownloading}
            >
              <Download size={18} /> {isDownloading ? 'Preparing Download...' : 'Download 2026 Catalog (PDF)'}
            </button>
          </div>

        </div>
      </section>

      {/* ═══════ B2B FAQ ACCORDION SECTION ═══════ */}
      <section className="contact-faq-section" ref={(el) => (sectionRefs.current[3] = el)}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 className="font-title video-text-effect" style={{ fontSize: '2.2rem', marginTop: '0.5rem' }}>Frequently Asked Questions</h2>
            <p style={{ color: 'var(--text-secondary)', marginTop: '0.8rem', fontSize: '0.95rem' }}>Find quick answers about distribution, installation support, warranties, and orders.</p>
          </div>

          <div className="faq-grid">
            {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${openFaq === idx ? 'faq-item-active' : ''}`}
              >
                <button 
                  className="faq-question" 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className="faq-icon" size={18} />
                </button>
                <div className="faq-answer">
                  <p style={{ margin: 0 }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ TECHNICAL SUPPORT SERVICE CTA ═══════ */}
      <section className="contact-emergency-section" ref={(el) => (sectionRefs.current[4] = el)}>
        <div className="container">
          <div className="contact-emergency-banner" style={{ background: 'linear-gradient(135deg, #0f172a, #1e293b)' }}>
            <div className="emergency-pulse" style={{ backgroundColor: 'var(--accent-primary)' }}></div>
            <div className="emergency-content">
              <div className="emergency-icon-wrap" style={{ background: 'var(--accent-primary)' }}>
                <Clock size={28} />
              </div>
              <div>
                <h3 className="font-title emergency-title">Need Technical Service?</h3>
                <p className="emergency-desc">
                  For equipment breakdowns, calibrations, or installation assistance, 
                  our certified biomedical engineers are available for prompt site visits.
                </p>
              </div>
            </div>
            <a href="tel:+919178178178" className="emergency-call-btn" style={{ background: 'var(--accent-primary)' }}>
              <Phone size={18} /> Contact Technical Service
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
