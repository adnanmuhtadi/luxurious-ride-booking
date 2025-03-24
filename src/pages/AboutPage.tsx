
import React from 'react';
import AboutSection from '../components/AboutSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-luxury-dark text-foreground pt-20">
      <div className="max-w-7xl mx-auto pt-8 pb-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gold-500">About Hemel Executive Cars</h1>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          Learn more about our professional chauffeur service in Hemel Hempstead, Berkhamsted, Tring, and surrounding areas.
        </p>
      </div>
      <AboutSection />
    </div>
  );
};

export default AboutPage;
