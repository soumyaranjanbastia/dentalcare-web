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
  { path: '/', label: 'Home' },
  { path: '/about', label: 'Company Profile' },
  { path: '/services', label: 'Product Portfolio' },
  { path: '/contact', label: 'Inquiries' },
  { path: 'https://sarojinidental.shop', label: 'E-Store', external: true },
];

export const heroData = {
  title: "Delivering Precision. Inspiring Confidence. Advancing Dentistry.",
  subtitle: "Established in 2022, Sarojini Dental & Co. is a premier distributor of high-end dental equipment, laboratory systems, instruments, and consumables.",
  modal: {
    title: "Excellence in Dental Solutions",
    desc: "We are committed to delivering world-class dental solutions to clinics, hospitals, laboratories, and educational institutions. Combining superior product quality with exceptional customer service, competitive pricing, timely delivery, and dependable after-sales support, we empower dental professionals to achieve outstanding clinical outcomes."
  }
};

export const experiences = [
  {
    id: 1,
    title: "Genuine Brands & Warranty",
    desc: "We supply only authentic products from globally recognized manufacturers, backed by full manufacturer warranties.",
    icon: ShieldCheck
  },
  {
    id: 2,
    title: "Advanced Technology",
    desc: "Bringing digital dentistry, advanced diagnostics, and cutting-edge laboratory systems to your facility.",
    icon: Sparkles
  },
  {
    id: 3,
    title: "Technical & After-Sales Support",
    desc: "Our dedicated technical service team ensures seamless installations, training, and reliable after-sales maintenance.",
    icon: Heart
  }
];

export const facilitiesData = {
  title: "State-of-the-Art Showroom & Warehouse",
  desc: "Explore our modern showroom and inventory hubs housing advanced intraoral scanner demo suites, laboratory CAD/CAM systems, and a comprehensive inventory of clinical consumables. We maintain robust stock levels to ensure prompt deliveries."
};

export const specialOffer = {
  title: "Complete Clinic Setup Consulting",
  desc: "Planning to start a new dental clinic or upgrade your current facility? Schedule a free consulting session with our product experts to map out your equipment and layout needs.",
  icon: Sparkles
};

export const partnerBrands = [
  { name: "Novolase", type: "Dental Lasers & Technology" },
  { name: "Orikam Healthcare India Pvt. Ltd.", type: "Clinical Instruments & Consumables" },
  { name: "GC India Pvt. Ltd.", type: "Restoratives & Glass Ionomer Cements" },
  { name: "Prevest DenPro Limited", type: "World-class Restoratives & Adhesives" },
  { name: "Shofu Dental India Pvt. Ltd.", type: "Precision Abrasives & CAD/CAM Materials" },
  { name: "Aidite India Pvt. Ltd.", type: "CAD/CAM Zirconia Blocks & Lab Tech" },
  { name: "Dürr Dental India Pvt. Ltd.", type: "Imaging, Suction & Air Systems" },
  { name: "Woson India Pvt. Ltd.", type: "Sterilizers & Infection Control" }
];

export const servicesData = {
  title: "Our Curated Product Portfolio",
  subtitle: "We distribute advanced dental technology, precision laboratory equipment, premium instruments, and clinical consumables from leading global brands.",
  therapies: [
    {
      title: "Advanced Dental Equipment",
      desc: "High-end dental treatment units, diagnostic imaging systems, diode lasers, and ergonomic operatory configurations to upgrade clinic productivity.",
      icon: Activity,
      price: "PARTNERS: NOVOLASE | DÜRR DENTAL | WOSON",
      image: servicesImg
    },
    {
      title: "CAD/CAM Laboratory Systems",
      desc: "Precision dental scanners, dry/wet CAD/CAM milling machines, laboratory sintering furnaces, and elite 3D printers for digital workflows.",
      icon: ShieldCheck,
      price: "PARTNERS: AIDITE | SHOFU | ORIKAM",
      image: treatmentImg
    },
    {
      title: "Premium Clinical Instruments",
      desc: "High-speed turbines, handpieces, premium micro-surgical kits, extraction forceps, and diagnostic dental instruments designed for durability.",
      icon: Award,
      price: "PARTNERS: ORIKAM | SHOFU | GC INDIA",
      image: bookingImg
    },
    {
      title: "Restorative Materials",
      desc: "World-class composite restoratives, glass ionomer cements, bonding agents, flowable composites, and clinical cements from recognized brands.",
      icon: Sparkles,
      price: "PARTNERS: GC INDIA | PREVEST DENPRO",
      image: bgImg
    },
    {
      title: "Infection Control & Sterilization",
      desc: "Class B autoclaves, thermal disinfectors, ultrasonic cleaners, and hospital-grade surface disinfectants to meet global safety standards.",
      icon: Heart,
      price: "PARTNERS: WOSON | DÜRR DENTAL",
      image: treatmentImg
    },
    {
      title: "Everyday Clinical Consumables",
      desc: "Micro-applicators, dental bibs, suction tips, sterile syringes, impression trays, and essential disposable clinical items.",
      icon: Smile,
      price: "PARTNERS: PREVEST DENPRO | ORIKAM",
      image: servicesImg
    }
  ],
  membership: {
    title: "Wholesale & AMC Support Programs",
    desc: "Ensure maximum uptime for your clinic or laboratory. Partner with Sarojini Dental & Co. for bulk consumable contracts and Annual Maintenance Services."
  },
  membershipTiers: [
    {
      name: "Clinic Consumables Contract",
      price: "Custom Quote",
      benefits: [
        "Guaranteed stock levels for key consumables",
        "Fixed pricing on monthly consumables",
        "Free delivery on all clinical orders",
        "10% discount on supplementary instruments"
      ]
    },
    {
      name: "Standard Equipment AMC",
      price: "Call for Pricing",
      benefits: [
        "2 x Preventive Maintenance Visits per year",
        "Priority technical service within 24 hours",
        "5% discount on manufacturer spare parts",
        "Free software updates for digital devices"
      ]
    },
    {
      name: "Elite Institutional Partner",
      price: "Custom Solutions",
      benefits: [
        "Complete Annual Maintenance Contract (AMC)",
        "Dedicated on-site support engineer",
        "Replacement backup equipment during repairs",
        "Hands-on training for staff and technicians"
      ]
    }
  ]
};

export const aboutData = {
  sanctuary: {
    title: "Our Background",
    desc: "Sarojini Dental & Co. was established in 2022 as a premier distributor of high-end dental equipment, laboratory systems, instruments, and consumables. Headquartered in Odisha, we serve dental clinics, hospitals, laboratories, and educational institutions with a dedication to delivering world-class technology and reliable after-sales support."
  },
  pillars: [
    { icon: ShieldCheck, title: "Premium Quality", desc: "Authentic products from world-class manufacturers." },
    { icon: Heart, title: "Service Focus", desc: "Dedicated consultation, delivery, and warranty support." },
    { icon: Sparkles, title: "Modern Tech", desc: "Advanced dental technology and digital lab solutions." },
    { icon: Smile, title: "Long-term Trust", desc: "Building sustainable partnerships based on excellence." }
  ],
  features: [
    {
      icon: ShieldCheck,
      title: "Genuine Brands",
      desc: "Authorized channel partner representing GC, Shofu, Aidite, Dürr Dental, Woson, Novolase, Orikam, and Prevest DenPro."
    },
    {
      icon: Award,
      title: "Expert Consultants",
      desc: "Professional guidance to select systems tailored to your clinical volume and laboratory needs."
    }
  ],
  experts: {
    title: "Technical & Advisory Experts",
    desc: "Our corporate structure includes trained biomedical service engineers and dental product specialists who ensure that every product supplied meets the highest standards of operation and reliability."
  },
  teamMembers: [
    {
      name: "Mr. R. K. Mohanty",
      role: "Director & Founder",
      desc: "Guiding Sarojini Dental & Co. since 2022 with over 18 years of B2B healthcare distribution expertise across Eastern India.",
      specialty: "Corporate Partnerships & Strategic Growth"
    },
    {
      name: "Er. Debasis Panda",
      role: "Chief Service Engineer",
      desc: "Certified technician specialized in CAD/CAM dental scanners, dry/wet milling configurations, and high-frequency dental X-ray calibration.",
      specialty: "Biomedical Installations & AMC Maintenance"
    },
    {
      name: "Ms. Suchitra Sen",
      role: "Product Consultant",
      desc: "Specialist in clinical restoratives, impression systems, and digital workflow integrations, aiding dentists in choosing ideal consumables.",
      specialty: "Clinical Guidance & Lab Systems"
    }
  ]
};

export const contactData = {
  title: "Connect with Sarojini Dental & Co.",
  subtitle: "Ready to equip your clinic, hospital, or laboratory? Reach out to our B2B consultation team and our product coordinators will coordinate a prompt callback.",
  info: [
    {
      icon: MapPin,
      title: "Corporate Showroom & Office",
      desc: "Plot No. 452, Commercial District,\nJayadev Vihar, Bhubaneswar,\nOdisha 751013"
    },
    {
      icon: Phone,
      title: "B2B Sales Helpline",
      desc: "+91 91781 78178\n+91 97781 78178\n+91 90901 78178"
    },
    {
      icon: Mail,
      title: "Official Correspondence",
      desc: "sarojinidental@gmail.com\nsales@sarojinidental.com\nsupport@sarojinidental.com"
    }
  ],
  treatmentTypes: [
    "Dental Equipment",
    "CAD/CAM Lab Systems",
    "Premium Instruments",
    "Restorative Materials",
    "Infection Control Systems",
    "Everyday Consumables"
  ]
};

export const footerData = {
  description: "Established in 2022, Sarojini Dental & Co. is a premier distributor of high-end dental equipment, laboratory systems, instruments, and consumables, serving institutions across India.",
  services: [
    "Advanced Equipment",
    "CAD/CAM Lab Systems",
    "Premium Instruments",
    "Restorative Materials"
  ],
  contact: {
    location: "Bhubaneswar, Odisha, India",
    hours: "Mon - Sat: 9:30 AM - 6:30 PM | Sun: Closed"
  }
};
