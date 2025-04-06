import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import BookingForm from '../components/BookingForm';
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
      
      {/* Booking Form Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        <div className="luxury-container relative z-10">
          <div className="text-center mb-16">
            <h2 className="section-heading">Book Your Ride</h2>
            <p className="section-subheading">
              Reserve your professional chauffeur service with ease
            </p>
          </div>
          
          <BookingForm />
        </div>
      </section>
      
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
    </main>
  );
};

export default Index;
