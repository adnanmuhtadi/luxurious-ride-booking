
import React from 'react';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-luxury-dark text-foreground">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="luxury-container pt-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gold-500">About Hemel Executive Cars</h1>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Learn more about our professional chauffeur service in Hemel Hempstead, Berkhamsted, Tring, and surrounding areas.
          </p>
        </div>
      </div>
      <AboutSection />
      <Footer />
    </div>
  );
};

export default AboutPage;
