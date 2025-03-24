
import React from 'react';
import { Plane, Award, Building, Heart, Clock, Globe, Car, Users, MapPin } from 'lucide-react';

const ServicesData = [
  {
    icon: <Plane className="h-10 w-10 text-gold-500" />,
    title: 'Airport Transfers',
    description: 'Reliable airport transfers to all major UK airports including Heathrow, Gatwick, Luton, Stansted, London City, and Birmingham.',
  },
  {
    icon: <Car className="h-10 w-10 text-gold-500" />,
    title: 'Local Journeys',
    description: 'Professional chauffeur service for journeys within Hemel Hempstead, Berkhamsted, Tring and the surrounding areas.',
  },
  {
    icon: <Building className="h-10 w-10 text-gold-500" />,
    title: 'Corporate Travel',
    description: 'Dedicated service for business professionals with meet and greet service, Wi-Fi equipped vehicles, and professional drivers.',
  },
  {
    icon: <Heart className="h-10 w-10 text-gold-500" />,
    title: 'Wedding Service',
    description: 'Make your special day perfect with our elegant wedding transportation services. Luxury vehicles with professional chauffeurs.',
  },
  {
    icon: <MapPin className="h-10 w-10 text-gold-500" />,
    title: 'Seaport Transfers',
    description: 'Comfortable and reliable transportation to and from all major UK seaports, including Southampton, Dover, and Portsmouth.',
  },
  {
    icon: <Users className="h-10 w-10 text-gold-500" />,
    title: 'Group Travel',
    description: 'Perfect for larger groups with our spacious vehicles. Ideal for family trips, corporate events, or group excursions.',
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-luxury-dark">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Premium Services</h2>
          <p className="section-subheading">
            Professional chauffeur services in Hemel Hempstead and surrounding areas, offering quality, reliability, and comfort.
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
