import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com'; // 1. IMPORTS ADICIONADOS
//  import BeforeAfterSlider from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';

import { Menu, X, Home, Wrench, Camera, Phone, MapPin, Mail, MessageCircle, Star, Check, ArrowRight } from 'lucide-react';
import './styles/App.css';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Project {
  title: string;
  before: string;
  after: string;
  beforeImage?: string;
  afterImage?: string;
}

const ZanonRenovationSite: React.FC = () => {
  // const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<string>('Send Message');
  const [feedback, setFeedback] = useState({ type: '', message: '' }); // <-- ADICIONE ESTA LINHA


  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('Sending...');
    setFeedback({ type: '', message: '' });

    if (form.current) {
      // ▼▼▼ PREENCHA SUAS 3 CHAVES DO EMAILJS AQUI ▼▼▼
      emailjs.sendForm(
        'service_uktjwuh',    // Cole o Service ID aqui
        'template_8c8ku4y',   // Cole o Template ID aqui
        form.current,
        'WaXPXqeWtGrYwPTV4'        // Cole o User ID (Public Key) aqui
      )
      .then((result) => {
          console.log(result.text);
          setFeedback({ type: 'success', message: 'Message sent successfully! We will contact you soon.' }); // <-- SUBSTITUI O ALERT DE SUCESSO
          setFormStatus('Send Message');
          form.current?.reset();
      }, (error) => {
          console.log(error.text);
          setFeedback({ type: 'error', message: 'An error occurred, please try again later.' }); // <-- SUBSTITUI O ALERT DE ERRO
          setFormStatus('Send Message');
      });
    }
  };


  const scrollToSection = (sectionId: string): void => {
    setMobileMenuOpen(false);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappNumber: string = "+14752571037";
  const whatsappMessage: string = "Hello! I would like to request a quote for renovation/remodeling.";
  const whatsappUrl: string = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

   const services: Service[] = [
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Custom Carpentry",
      description: "Expert woodworking, cabinets, built-ins, and custom furniture"
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Kitchen Cabinets",
      description: "Custom kitchen cabinetry design and installation"
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Built-in Storage",
      description: "Custom closets, shelving, and storage solutions"
    },
    {
      icon: <Check className="w-8 h-8" />,
      title: "Floors and Trim",
      description: "Hardwood flooring, baseboards, and finish carpentry"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Complete Renovation",
      description: "Full home remodeling with carpentry focus"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Consulting and Design",
      description: "Custom carpentry planning and design services"
    }
  ];

  const projects: Project[] = [
    {
      title: "Modern Kitchen",
      before: "Old kitchen with worn-out furniture",
      after: "Modern kitchen with central island and premium finishes",
      beforeImage: "images/cozinha_antes.png",
      afterImage: "images/cozinha_depois.png"
    },
    {
      title: "Luxury Bathroom",
      before: "Bathroom with outdated tiles",
      after: "Spa bathroom with marble and sophisticated finishes",
      beforeImage: "images/banheiro_antes.png",
      afterImage: "images/banheiro_depois.png"
    },
    {
      title: "Living Room",
      before: "Outdated and dark environment",
      after: "Spacious, bright, and contemporary space",
      beforeImage: "images/sala_antes.png",
      afterImage: "images/sala_depois.png" 
    },
    {
      title: "Office Space",
      before: "Traditional corporate environment",
      after: "Modern and productive workspace",
      beforeImage: "images/escritorio_antes.png",
      afterImage: "images/escritorio_depois.png"
    },
    {
      title: "Master Bedroom",
      before: "Bedroom with inadequate layout",
      after: "Master suite with integrated closet",
      beforeImage: "images/quarto_antes.png",
      afterImage: "images/quarto_depois.png"
    },
    {
      title: "Outdoor Area",
      before: "Backyard without use",
      after: "Cozy and complete leisure area",
      beforeImage: "images/are_antes.png",
      afterImage: "images/area_depois.png"
    }
  ];

  return (
    <div className="site-container">
      {/* Header/Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-content">
            <div className="logo">
              <div className="logo-text">
                Zanon <span className="logo-accent">Renovation</span>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="desktop-menu">
              <button onClick={() => scrollToSection('home')} className="menu-button">Home</button>
              <button onClick={() => scrollToSection('about')} className="menu-button">About</button>
              <button onClick={() => scrollToSection('services')} className="menu-button">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="menu-button">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="menu-button">Contact</button>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="whatsapp-button">WhatsApp</a>
            </div>

            {/* Mobile Menu Button */}
            <div className="mobile-menu-button">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="mobile-menu-button"
                type="button"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-content">
              <button onClick={() => scrollToSection('home')} className="mobile-menu-item-button">Home</button>
              <button onClick={() => scrollToSection('about')} className="mobile-menu-item-button">About</button>
              <button onClick={() => scrollToSection('services')} className="mobile-menu-item-button">Services</button>
              <button onClick={() => scrollToSection('portfolio')} className="mobile-menu-item-button">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="mobile-menu-item-button">Contact</button>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mobile-whatsapp-button" onClick={() => setMobileMenuOpen(false)}>WhatsApp</a>
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          <div className="text-center">
            <h1 className="hero-title">
              Expert <span className="hero-title-accent">Carpentry</span>
              <br />& General Renovation
            </h1>
            <p className="hero-subtitle">
               Specialized in custom carpentry and complete renovations. Fully insured & licensed professionals delivering exceptional craftsmanship.
            </p>
            <div className="hero-buttons">
              <button onClick={() => scrollToSection('contact')} className="cta-button">
                Request a Quote <ArrowRight size={20} />
              </button>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="secondary-button">
                <MessageCircle size={20} /> Contact Us
              </a>
            </div>
          </div>
        </div>


        {/* Featured Services Preview */}
<div className="featured-services">
  <div className="featured-container">
    <div className="featured-grid">
      <div className="featured-item">
        <div className="featured-icon">
          <Home className="icon-lg" />
        </div>
        <h3 className="featured-title">Complete Renovation</h3>
        <p className="featured-description">Total transformation of residential and commercial spaces</p>
      </div>
      <div className="featured-item">
        <div className="featured-icon">
          <Wrench className="icon-lg" />
        </div>
        <h3 className="featured-title">Specific Renovations</h3>
        <p className="featured-description">Kitchens, bathrooms, flooring, and specialized painting</p>
      </div>
      <div className="featured-item">
        <div className="featured-icon">
          <Check className="icon-lg" />
        </div>
        <h3 className="featured-title">Full Guarantee</h3>
        <p className="featured-description">Quality guaranteed in all our services</p>
      </div>
    </div>
  </div>
</div>
</section>

{/* About Section */}
<section id="about" className="about-section">
  <div className="about-container">
    <div className="about-grid">
      <div>
        <h2 className="section-title">
          About <span className="section-title-accent">Zanon Renovation</span>
        </h2>
        <p className="about-text">
          With years of specialized experience in carpentry and general renovation, Zanon General Renovation LLC 
          has established itself as a reference in custom woodwork and quality construction services.
        </p>
        <p className="about-text-small">
         Our mission is to bring your vision to life through expert craftsmanship. We specialize in custom carpentry while offering complete renovation solutions.
         Fully licensed and insured, we work with qualified professionals, premium materials, and always respect deadlines and budgets.
        </p>
        <div className="stats-grid">
          <div className="stat-item">
            <div className="stat-number">10+</div>
            <div className="stat-label">Completed Projects</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
        </div>
      </div>
      <div>
        <div className="why-choose-card">
          <Star className="icon-lg" />
          <h3 className="why-choose-title">Why Choose Us?</h3>
          <ul className="feature-list">
            <li className="feature-item">
              <Check className="icon-sm check-icon" />
              <span>Specialized carpentry expertise</span>
            </li>
            <li className="feature-item">
              <Check className="icon-sm check-icon" />
              <span>Fully licensed and insured</span>
            </li>
            <li className="feature-item">
              <Check className="icon-sm check-icon" />
              <span>Premium materials and craftsmanship</span>
            </li>
            <li className="feature-item">
              <Check className="icon-sm check-icon" />
              <span>Warranty on all services</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Services Section */}
<section id="services" className="services-section">
  <div className="services-container">
    <div className="section-header">
      <h2 className="section-title">
        Our <span className="section-title-accent">Services</span>
      </h2>
      <p className="section-subtitle">
        We offer complete solutions to transform your space
      </p>
    </div>

    <div className="services-grid">
      {services.map((service: Service, index: number) => (
        <div key={index} className="service-card">
          <div className="service-icon">
            {service.icon}
          </div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>

    <div className="section-cta">
      <button 
        onClick={() => scrollToSection('contact')}
        className="cta-button"
      >
        Request a Quote
      </button>
    </div>
  </div>
</section>

{/* Portfolio Section */}
<section id="portfolio" className="portfolio-section">
  <div className="portfolio-container">
    <div className="section-header">
      <h2 className="section-title">
        Our <span className="section-title-accent">Portfolio</span>
      </h2>
      <p className="section-subtitle">
        Check out some of our completed projects
      </p>
    </div>

    <div className="portfolio-grid">
      {projects.map((project: Project, index: number) => (
        <div key={index} className="project-card">
          <div className="project-image">
            {project.beforeImage && project.afterImage ? (
              // If images exist, show before/after slider
              <div className="before-after-slider">
                <div className="image-container">
                  <img 
                    src={project.beforeImage} 
                    alt={`${project.title} - Before`}
                    className="project-img before-img"
                  />
                  <img 
                    src={project.afterImage} 
                    alt={`${project.title} - After`}
                    className="project-img after-img"
                  />
                  <div className="slider-handle"></div>
                </div>
                <div className="image-labels">
                  <span className="label-before">BEFORE</span>
                  <span className="label-after">AFTER</span>
                </div>
              </div>
            ) : (
              // Placeholder when no images available
              <div className="project-placeholder">
                <div className="text-center">
                  <Camera className="icon-lg" />
                  <p>Project Photo</p>
                </div>
              </div>
            )}
            <div className="project-badge">
              Before & After
            </div>
          </div>
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-details">
              <p className="project-detail">
                <span className="detail-before">Before:</span> {project.before}
              </p>
              <p className="project-detail">
                <span className="detail-after">After:</span> {project.after}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Contact Section */}
<section id="contact" className="contact-section">
  <div className="contact-container">
    <div className="section-header">
      <h2 className="section-title">
        Get in <span className="section-title-accent">Touch</span>
      </h2>
      <p className="section-subtitle">
        Ready to transform your space? Contact us today!
      </p>
    </div>

    <div className="contact-grid">
      {/* Contact Form */}
      {/* COLE ESTE CÓDIGO NOVO NO LUGAR */}
<div className="contact-form">
  <h3 className="form-title">Request a Quote</h3>
  <form ref={form} onSubmit={sendEmail}>
    <div className="form-group">
      <label htmlFor="fullName" className="form-label">Full Name</label>
      <input type="text" id="fullName" name="fullName" className="form-input" placeholder="Your full name" required />
    </div>
    <div className="form-group">
      <label htmlFor="email" className="form-label">Email</label>
      <input type="email" id="email" name="email" className="form-input" placeholder="your@email.com" required />
    </div>
    <div className="form-group">
      <label htmlFor="phone" className="form-label">Phone</label>
      <input type="tel" id="phone" name="phone" className="form-input" placeholder="(000) 000-0000" />
    </div>
    <div className="form-group">
      <label htmlFor="message" className="form-label">Message</label>
      <textarea id="message" name="message" rows={4} className="form-textarea" placeholder="Describe your project..." required />
    </div>
    <button type="submit" className="form-button">
      {formStatus}
    </button>
  </form>
  {feedback.message && <p className={`feedback-message ${feedback.type}`}>{feedback.message}</p>}
  
</div>

      {/* Contact Info */}
      <div className="contact-info">
        <div>
          <h3 className="contact-details-title">Contact Information</h3>
          <div className="contact-details">
            <div className="contact-item">
              <div className="contact-icon">
                <Phone className="icon-md" />
              </div>
              <div>
                <h4 className="contact-item-title">Phone</h4>
                <p className="contact-item-text">(475) 257-1037</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Mail className="icon-md" />
              </div>
              <div>
                <h4 className="contact-item-title">Email</h4>
                <p className="contact-item-text">zanongeneralrenovationllc@gmail.com</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <MapPin className="icon-md" />
              </div>
              <div>
                <h4 className="contact-item-title">Location</h4>
                <p className="contact-item-text">Serving the entire metropolitan area</p>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="whatsapp-cta">
          <div className="whatsapp-header">
            <MessageCircle className="icon-lg" />
            <div>
              <h4 className="whatsapp-title">Quick Service</h4>
              <p className="whatsapp-subtitle">Chat with us on WhatsApp</p>
            </div>
          </div>
          <a 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button-large"
          >
            <MessageCircle className="icon-sm" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Business Hours */}
        <div className="business-hours">
          <h4 className="business-hours-title">Business Hours</h4>
          <div className="hours-list">
            <p>Monday to Friday: 8:00 AM - 6:00 PM</p>
            <p>Saturday: 8:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Footer */}
<footer className="footer">
  <div className="footer-container">
    <div className="footer-grid">
      <div>
        <div className="footer-logo">
          Zanon <span className="logo-accent">Renovation</span>
        </div>
        <p className="footer-description">
          Expert carpentry and general renovation services. Fully licensed, insured, and committed to quality craftsmanship.
        </p>
      </div>
      <div>
        <h4 className="footer-section-title">Services</h4>
        <ul className="footer-list">
          <li>Custom Carpentry</li>
          <li>Complete Renovation</li>
          <li>Kitchen Remodeling</li>
          <li>Bathroom Remodeling</li>
          <li>Flooring & Tiling</li>
          <li>Professional Painting</li>
        </ul>
      </div>
      <div>
        <h4 className="footer-section-title">Contact</h4>
        <ul className="footer-list">
          <li>contact@zanonrenovation.com</li>
          <li>(000) 000-0000</li>
          <li>Service Hours: Mon-Fri 8AM-6PM</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2025 Zanon General Renovation LLC. All rights reserved.</p>
    </div>
  </div>
</footer>

{/* Floating WhatsApp Button */}
<a 
  href={whatsappUrl} 
  target="_blank" 
  rel="noopener noreferrer"
  className="floating-whatsapp"
  title="Chat with us on WhatsApp"
>
  <MessageCircle size={24} />
</a>

    </div>
  );
};

export default ZanonRenovationSite;