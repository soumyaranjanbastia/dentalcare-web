import { 
  Smile, ShieldAlert, Award, Star, Activity, Sparkles, Heart,
  ShieldCheck, MapPin, Phone, Mail, FileText, ClipboardList
} from 'lucide-react';

import logoImg from '../assets/logo.png';
import bgImg from '../assets/background.png';
import treatmentImg from '../assets/treatment_premium.png';
import bookingImg from '../assets/booking_premium.png';
import servicesImg from '../assets/services.png';
import teamImg from '../assets/team.png';

export const navigationLinks = [
  { path: '/', label: 'Smile Clinic' },
  { path: '/about', label: 'Philosophy' },
  { path: '/services', label: 'Treatments' },
  { path: '/contact', label: 'Bookings' },
];

export const heroData = {
  title: "Sculpting Healthy, Radiant Smiles",
  subtitle: "Experience premium dentistry combining world-class clinical expertise, state-of-the-art technology, and absolute patient comfort.",
  modal: {
    title: "A New Standard of Care",
    desc: "Welcome to Denteal Care. Our customized oral health solutions are tailored to restore functionality and enhance aesthetics in a serene, stress-free clinical environment."
  }
};

export const experiences = [
  {
    id: 1,
    title: "Precision Dentistry",
    desc: "Our advanced 3D diagnostic imaging and micro-dentistry ensure highly accurate, minimally-invasive treatments.",
    icon: ShieldCheck
  },
  {
    id: 2,
    title: "Smile Artistry",
    desc: "We blend medical science with artistic digital design to craft natural, stunning smiles tailored to your face.",
    icon: Sparkles
  },
  {
    id: 3,
    title: "Anxiety-Free Comfort",
    desc: "Enjoy a relaxing treatment session with modern comforts, friendly guidance, and completely gentle techniques.",
    icon: Heart
  }
];

export const facilitiesData = {
  title: "Our World-Class Clinic",
  desc: "From panoramic intraoral scanning suites to ergonomic-designed patient loungers, every corner of Denteal Care is custom-built to ensure your ultimate relaxation and safety. Discover our sterilization and treatment zones."
};

export const specialOffer = {
  title: "Radiant Smile Package",
  desc: "Book your new-patient consultation today and receive a complimentary professional teeth shade matching and 3D intraoral scan with any routine cleaning treatment.",
  icon: Sparkles
};

export const servicesData = {
  title: "Advanced Oral Services",
  subtitle: "We offer a comprehensive selection of clinical, restorative, and cosmetic solutions designed to keep your teeth and gums in optimal health.",
  therapies: [
    {
      title: "Teeth Whitening",
      desc: "Advanced laser whitening that lifts stains and brightens your smile by several shades in just a single session, with zero sensitivity formulas.",
      icon: Sparkles,
      price: "EXPRESS: ₹4500 | ADVANCED LASER: ₹9500",
      image: servicesImg
    },
    {
      title: "Dental Implants",
      desc: "Premium, biocompatible titanium implants that look, feel, and function like natural teeth, restoring your confidence and bite stability.",
      icon: ShieldCheck,
      price: "CONSULTATION: FREE | SINGLE IMPLANT: FROM ₹35000",
      image: treatmentImg
    },
    {
      title: "Cosmetic Veneers",
      desc: "Custom porcelain veneers that mask chips, gaps, and discoloration, providing a flawless and natural-looking smile makeover.",
      icon: Award,
      price: "PORCELAIN (Per Tooth): FROM ₹12000 | COMPOSITE: ₹5000",
      image: bookingImg
    },
    {
      title: "Clear Aligners",
      desc: "Straighten your teeth discreetly with customized invisible aligners, backed by 3D orthodontic planning for optimal and fast results.",
      icon: Smile,
      price: "EVALUATION: ₹1500 | TREATMENT PLAN: FROM ₹80000",
      image: bgImg
    },
    {
      title: "Root Canal Therapy",
      desc: "Painless, single-visit root canal treatments performed under microscopic guidance to rescue damaged teeth from extraction.",
      icon: Activity,
      price: "SINGLE CANAL: ₹6500 | MULTI-CANAL: ₹9000",
      image: treatmentImg
    },
    {
      title: "Routine Care & Scaling",
      desc: "Ultrasonic scaling and polishing to remove plaque and tartar buildup, promoting healthy gums and fresh breath.",
      icon: Heart,
      price: "SCALING & POLISHING: ₹2500 | DEEP CLEANING: ₹4500",
      image: servicesImg
    }
  ],
  membership: {
    title: "Oral Health Club",
    desc: "Maintain your smile effortlessly with our annual wellness plans. Enjoy regular checkups, professional cleanings, and priority access."
  },
  membershipTiers: [
    {
      name: "Preventive Silver",
      price: "₹2,999 / yr",
      benefits: [
        "2 x Scaling & Polishing Sessions",
        "2 x Detailed Dental Checkups",
        "1 x digital X-ray scan (if needed)",
        "10% off any fillings & basic care"
      ]
    },
    {
      name: "Family Gold",
      price: "₹7,999 / yr",
      benefits: [
        "Covers up to 3 family members",
        "2 x Scaling & Cleanings per member",
        "Fluoride therapy for children",
        "15% off all cosmetic & restorative care",
        "Priority emergency appointment slots"
      ]
    },
    {
      name: "Elite Platinum",
      price: "₹14,999 / yr",
      benefits: [
        "Unlimited clinical examinations",
        "3 x Scaling & Stain Removal sessions",
        "1 x Premium Home Teeth Whitening Kit",
        "25% off all surgical & implant care",
        "Direct consultation with head specialist"
      ]
    }
  ]
};

export const aboutData = {
  sanctuary: {
    title: "Our Philosophy",
    desc: "Denteal Care was established with the vision that dental treatment should be a pleasant, soothing journey. Located in the heart of Bhubaneswar, our clinic blends modern medical excellence with patient-centric luxury, transforming oral care into a wellness ritual."
  },
  pillars: [
    { icon: ShieldCheck, title: "Sterilization", desc: "Exceeding FDA and international protocols." },
    { icon: Heart, title: "Gentle Touch", desc: "Anxiety-free treatments using micro-techniques." },
    { icon: Sparkles, title: "Aesthetics", desc: "Merging facial analysis with dental harmony." },
    { icon: Smile, title: "Wellness", desc: "Restoring systemic health by optimizing oral health." }
  ],
  features: [
    { 
      icon: ShieldCheck, 
      title: "Biocompatible", 
      desc: "We use only premium, non-toxic materials for filling and restoration." 
    },
    { 
      icon: Award, 
      title: "Specialists", 
      desc: "Our board-certified dentists possess decades of collective clinical experience." 
    }
  ],
  experts: {
    title: "Our Dental Clinicians",
    desc: "Our medical team consists of highly qualified, specialized practitioners who stay at the forefront of dental science. From dental surgery to aesthetic restoration, we work in unison to provide impeccable care."
  },
  teamMembers: [
    {
      name: "Dr. Yash Vardhan",
      role: "Senior Implantologist",
      desc: "With over 15 years of clinical practice, Dr. Yash specializes in complex bone grafts, sinus lifts, and full-mouth reconstructions using advanced dental implants.",
      specialty: "Dental Implants, Oral Reconstruction"
    },
    {
      name: "Dr. Sneha Rao",
      role: "Aesthetic Dentist & Orthodontist",
      desc: "Dr. Sneha trained extensively in Digital Smile Design and cosmetic veneers. She is certified in clear aligners and specializes in teeth straightening.",
      specialty: "Invisible Aligners, Veneers & Cosmetic Bonding"
    },
    {
      name: "Dr. David Chen",
      role: "Micro-Endodontist",
      desc: "Dr. David focuses on saving natural teeth through painless root canal therapy under microscope magnification and state-of-the-art dental lasers.",
      specialty: "Painless Root Canal, Micro-Restorations"
    }
  ]
};

export const contactData = {
  title: "Schedule a Consultation",
  subtitle: "Ready to take control of your smile? Fill out our consultation request and our patient concierge will call to organize your appointment.",
  info: [
    { 
      icon: MapPin, 
      title: "Our Clinic Location", 
      desc: "123, Aesthetic Dental Tower,\nSuite 4B, Sector 5, Medical Zone,\nBhubaneswar, Odisha 751024" 
    },
    { 
      icon: Phone, 
      title: "Patient Helpline", 
      desc: "+91 99999 99999\n+91 88888 88888" 
    },
    { 
      icon: Mail, 
      title: "Email Support", 
      desc: "contact@dentealcare.com" 
    }
  ],
  treatmentTypes: [
    "Teeth Whitening",
    "Dental Implants",
    "Cosmetic Veneers",
    "Clear Aligners / Orthodontics",
    "Root Canal Treatment",
    "Scaling & Routine Cleaning"
  ]
};

export const footerData = {
  description: "Experience premium dentistry at Denteal Care. We combine elite clinical expertise with a relaxing, modern environment to craft healthy, radiant smiles.",
  services: [
    "Teeth Whitening",
    "Dental Implants",
    "Clear Aligners",
    "Root Canal Therapy"
  ],
  contact: {
    location: "Bhubaneswar, Odisha",
    hours: "Mon - Sat: 9:00 AM - 8:00 PM | Sun: Closed"
  }
};
