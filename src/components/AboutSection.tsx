
import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">About Luxe Rides</h2>
          <p className="section-subheading">
            Experience luxury transportation with a commitment to excellence and attention to detail
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
                <div className="text-2xl font-bold">Est. 2008</div>
                <div className="text-sm">Legacy of Excellence</div>
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-on-scroll">
            <h3 className="text-2xl font-bold text-gold-500">Our Story</h3>
            <p className="text-muted-foreground">
              Founded in 2008, Luxe Rides has established itself as the premier provider of luxury transportation services. 
              With a commitment to excellence and an unwavering focus on customer satisfaction, we have earned a reputation 
              for reliability, professionalism, and refined luxury.
            </p>
            
            <h3 className="text-2xl font-bold text-gold-500">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide an unparalleled transportation experience that exceeds expectations through meticulous attention 
              to detail, exceptional service, and sophisticated luxury, while ensuring safety and reliability for every client.
            </p>
            
            <h3 className="text-2xl font-bold text-gold-500">Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-bold text-gold-500 mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">Pursuing the highest standards in every aspect of our service</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-bold text-gold-500 mb-2">Reliability</h4>
                <p className="text-sm text-muted-foreground">Consistently delivering on our promises with punctuality</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-bold text-gold-500 mb-2">Discretion</h4>
                <p className="text-sm text-muted-foreground">Ensuring privacy and confidentiality for all our clients</p>
              </div>
              <div className="glass-card p-4 rounded-lg">
                <h4 className="font-bold text-gold-500 mb-2">Innovation</h4>
                <p className="text-sm text-muted-foreground">Continuously improving our services with modern solutions</p>
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
