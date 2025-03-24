
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Hemel Executive Cars</h2>
          <p className="section-subheading">
            Your trusted chauffeur service in Hemel Hempstead and surrounding areas
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?q=80&w=2071&auto=format&fit=crop"
                alt="Luxury chauffeur service"
                className="rounded-xl shadow-xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-5 -right-5 bg-gold-500 text-luxury-black p-4 rounded-xl">
                <div className="text-2xl font-bold">Est. 2003</div>
                <div className="text-sm">20+ Years of Service</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-on-scroll">
            <h3 className="text-2xl font-bold text-gold-500">Who We Are</h3>
            <p className="text-muted-foreground">
              Hemel Executive Cars is a professional chauffeur service based in Hemel Hempstead, covering all surrounding areas 
              including Berkhamsted, Tring, Kings Langley, and beyond. With over 20 years of experience, we provide reliable, 
              punctual, and professional service to all our clients.
            </p>
            
            <h3 className="text-2xl font-bold text-gold-500">Our Promise</h3>
            <p className="text-muted-foreground">
              We understand the importance of reliability and punctuality, especially for airport transfers and business travel. 
              That's why we monitor all flights and adjust pickup times accordingly at no extra cost. Our aim is to provide a 
              stress-free, comfortable journey every time.
            </p>
            
            <h3 className="text-2xl font-bold text-gold-500">Why Choose Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-bold text-gold-500 mb-2">Experienced</h4>
                <p className="text-sm text-muted-foreground">20+ years of professional chauffeur service experience</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-bold text-gold-500 mb-2">Reliable</h4>
                <p className="text-sm text-muted-foreground">Punctual service with flight monitoring for all airport transfers</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-bold text-gold-500 mb-2">Professional</h4>
                <p className="text-sm text-muted-foreground">Smart, courteous drivers with excellent local knowledge</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-bold text-gold-500 mb-2">Comfortable</h4>
                <p className="text-sm text-muted-foreground">Modern, well-maintained vehicles for a comfortable journey</p>
              </div>
            </div>
            
            <a href="#services" className="gold-button inline-flex items-center gap-2 mt-4">
              <span>Explore Our Services</span>
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
