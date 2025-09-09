import React, { useState } from 'react';
import { Menu, X, Home, Info, Wrench, Camera, Phone, MapPin, Mail, MessageCircle, Star, Check, ArrowRight } from 'lucide-react';
import './styles/App.css'; // Import CSS file

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
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const scrollToSection = (sectionId: string): void => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappNumber: string = "+1234567890";
  const whatsappMessage: string = "Hello! I would like to request a quote for renovation/remodeling.";
  const whatsappUrl: string = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const services: Service[] = [
    {
      icon: <Home className="icon-lg" />,
      title: "Complete Renovation",
      description: "Full transformation of homes and commercial establishments"
    },
    {
      icon: <Wrench className="icon-lg" />,
      title: "Kitchen Remodeling",
      description: "Complete modernization with functional and elegant design"
    },
    {
      icon: <MapPin className="icon-lg" />,
      title: "Bathroom Renovation",
      description: "Full renovation with top-quality materials"
    },
    {
      icon: <Check className="icon-lg" />,
      title: "Floors and Coatings",
      description: "Installation and renovation of floors, tiles, and coatings"
    },
    {
      icon: <Star className="icon-lg" />,
      title: "Professional Painting",
      description: "Interior and exterior painting with flawless finish"
    },
    {
      icon: <Camera className="icon-lg" />,
      title: "Consulting and Design",
      description: "Planning and personalized design for your project"
    }
  ];

  const projects: Project[] = [
    {
      title: "Modern Kitchen",
      before: "Old kitchen with worn-out furniture",
      after: "Modern kitchen with central island and premium finishes",
      beforeImage: "../public/images/cozinha_antes.png",
      afterImage: "../public/images/cozinha_depois.png"
    },
    {
      title: "Luxury Bathroom",
      before: "Bathroom with outdated tiles",
      after: "Spa bathroom with marble and sophisticated finishes",
      beforeImage: "../public/images/banheiro_antes.png",
      afterImage: "../public/images/banheiro_depois.png"
    },
    {
      title: "Living Room",
      before: "Outdated and dark environment",
      after: "Spacious, bright, and contemporary space",
      beforeImage: "../public/images/sala_antes.png",
      afterImage: "../public/images/sala_depois.png" 
    },
    {
      title: "Office Space",
      before: "Traditional corporate environment",
      after: "Modern and productive workspace",
      beforeImage: "../public/images/escritorio_antes.png",
      afterImage: "../public/images/escritorio_depois.png"
    },
    {
      title: "Master Bedroom",
      before: "Bedroom with inadequate layout",
      after: "Master suite with integrated closet",
      beforeImage: "../public/images/quarto_antes.png",
      afterImage: "../public/images/quarto_depois.png"
    },
    {
      title: "Outdoor Area",
      before: "Backyard without use",
      after: "Cozy and complete leisure area",
      beforeImage: "../public/images/are_antes.png",
      afterImage: "../public/images/area_depois.png"
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
              Transforming <span className="hero-title-accent">Spaces</span>
              <br />with Quality
            </h1>
            <p className="hero-subtitle">
              Specialists in residential and commercial renovations. Experience, reliability, and exceptional results.
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
          With years of experience in the renovation and remodeling market, Zanon General Renovation LLC
          has established itself as a reference in quality and reliability in space transformation.
        </p>
        <p className="about-text-small">
          Our mission is to turn dreams into reality, offering complete solutions for residential
          and commercial renovations. We work with qualified professionals, top-quality materials,
          and always respecting deadlines and budgets.
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
              <span>Experienced and certified professionals</span>
            </li>
            <li className="feature-item">
              <Check className="icon-sm check-icon" />
              <span>High-quality materials</span>
            </li>
            <li className="feature-item">
              <Check className="icon-sm check-icon" />
              <span>Strictly respected deadlines</span>
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
      <div className="contact-form">
        <h3 className="form-title">Request a Quote</h3>
        <div>
          <div className="form-group">
            <label className="form-label">
              Full Name
            </label>
            <input 
              type="text" 
              className="form-input"
              placeholder="Your full name"
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              Email
            </label>
            <input 
              type="email" 
              className="form-input"
              placeholder="your@email.com"
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              Phone
            </label>
            <input 
              type="tel" 
              className="form-input"
              placeholder="(000) 000-0000"
            />
          </div>
          <div className="form-group">
            <label className="form-label">
              Message
            </label>
            <textarea 
              rows={4}
              className="form-textarea"
              placeholder="Describe your project..."
            />
          </div>
          <button className="form-button">
            Send Message
          </button>
        </div>
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
                <p className="contact-item-text">(000) 000-0000</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <Mail className="icon-md" />
              </div>
              <div>
                <h4 className="contact-item-title">Email</h4>
                <p className="contact-item-text">contact@zanonrenovation.com</p>
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
          Transforming spaces with quality, reliability, and excellence for over 15 years.
        </p>
      </div>
      <div>
        <h4 className="footer-section-title">Services</h4>
        <ul className="footer-list">
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