
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const OnePage = () => {
  useEffect(() => {
    // Trigger animations on scroll
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.classList.add('appear');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on initial load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section when clicking on navigation links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Handle initial hash on page load
    setTimeout(handleHashChange, 100);

    // Add click event listeners to all internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const href = link.getAttribute('href');
        if (href) {
          window.history.pushState({}, '', href);
          const section = document.querySelector(href);
          if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-luxury-dark text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* FAQ Section */}
      <FAQSection />
      
      {/* Booking Section */}
      <section id="booking" className="py-24 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold-500 filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-500 filter blur-3xl"></div>
        </div>
      
        <div className="luxury-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-heading">Book Your Ride</h2>
            <p className="section-subheading">
              Experience unparalleled luxury and convenience with our premium transportation services
            </p>
          </div>
          
          <div className="animate-on-scroll">
            <iframe
              src="/booking"
              title="Booking Form"
              className="w-full min-h-[700px] glass-card rounded-xl border-0"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OnePage;
