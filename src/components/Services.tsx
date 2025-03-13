
import React from 'react';
import { Plane, Award, Building, Heart, Clock, Globe } from 'lucide-react';

const ServicesData = [
  {
    icon: <Plane className="h-10 w-10 text-gold-500" />,
    title: 'Airport Transfers',
    description: 'Reliable and punctual airport pickup and drop-off services across all major airports.',
  },
  {
    icon: <Building className="h-10 w-10 text-gold-500" />,
    title: 'Corporate Travel',
    description: 'Impress clients and ensure executives arrive refreshed with our premium corporate service.',
  },
  {
    icon: <Heart className="h-10 w-10 text-gold-500" />,
    title: 'Wedding Service',
    description: 'Make your special day even more memorable with our elegant wedding transportation.',
  },
  {
    icon: <Clock className="h-10 w-10 text-gold-500" />,
    title: 'Hourly Hire',
    description: 'Flexible hourly booking for meetings, events, or city tours with dedicated chauffeurs.',
  },
  {
    icon: <Award className="h-10 w-10 text-gold-500" />,
    title: 'VIP Services',
    description: 'Exclusive transportation solutions for celebrities, executives, and distinguished guests.',
  },
  {
    icon: <Globe className="h-10 w-10 text-gold-500" />,
    title: 'City Tours',
    description: 'Private guided tours of the city with knowledgeable chauffeurs and luxurious comfort.',
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-luxury-dark">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Premium Services</h2>
          <p className="section-subheading">
            Experience transportation excellence with our range of tailored premium services designed to meet your every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServicesData.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-8 rounded-xl transition-all duration-300 hover:bg-gold-500/5 hover:border-gold-500/50 animate-on-scroll"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-gold-500">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
