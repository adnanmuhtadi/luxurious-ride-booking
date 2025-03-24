
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <Services />
      
      {/* Why Choose Us Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background decor */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gold-500 filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold-500 filter blur-3xl"></div>
        </div>
      
        <div className="luxury-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-heading">Why Choose Luxe Rides</h2>
            <p className="section-subheading">
              What sets us apart from other executive transportation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-16">
            {/* Left column - image */}
            <div className="relative animate-on-scroll">
              <div className="aspect-video overflow-hidden rounded-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2049&auto=format&fit=crop" 
                  alt="Executive chauffeur service" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-gold-500 text-luxury-black p-4 lg:p-6 rounded-xl">
                <div className="text-3xl lg:text-4xl font-bold">15+</div>
                <div className="text-sm lg:text-base font-medium">Years of Excellence</div>
              </div>
            </div>
            
            {/* Right column - features */}
            <div className="space-y-8 animate-on-scroll">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gold-500/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold">Professional Chauffeurs</h3>
                </div>
                <p className="text-muted-foreground pl-10">
                  Our chauffeurs are highly trained professionals with extensive experience in luxury transportation, ensuring a smooth and sophisticated journey.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gold-500/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold">Premium Fleet</h3>
                </div>
                <p className="text-muted-foreground pl-10">
                  Our meticulously maintained fleet of luxury vehicles represents the pinnacle of comfort, style, and technological advancement.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gold-500/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold">Reliability & Punctuality</h3>
                </div>
                <p className="text-muted-foreground pl-10">
                  We pride ourselves on our unwavering commitment to timeliness and reliability, ensuring you always arrive at your destination promptly.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-gold-500/10 p-2 rounded-full">
                    <Check className="h-5 w-5 text-gold-500" />
                  </div>
                  <h3 className="text-xl font-bold">Tailored Experience</h3>
                </div>
                <p className="text-muted-foreground pl-10">
                  We customize every aspect of your journey to meet your specific requirements, providing a personalized luxury experience.
                </p>
              </div>
              
              <Link to="/about" className="gold-button inline-flex items-center gap-2">
                <span>Learn More About Us</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-luxury-dark to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-luxury-dark to-transparent"></div>
        
        <div className="luxury-container relative z-10">
          <div className="glass-card rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 xl:p-16 flex flex-col justify-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="gold-gradient-text">Ready to Experience</span><br />
                  <span className="text-white">Unparalleled Luxury?</span>
                </h2>
                
                <p className="text-muted-foreground mb-8 max-w-md">
                  Book your premium ride today and elevate your transportation experience. Our professional team is ready to provide you with exceptional service.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/booking" className="gold-button">
                    Book Your Ride
                  </Link>
                  <Link to="/contact" className="ghost-button">
                    Contact Us
                  </Link>
                </div>
              </div>
              
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1635073908681-b3b8513261a1?q=80&w=2069&auto=format&fit=crop" 
                  alt="Luxury car interior" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent lg:hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
