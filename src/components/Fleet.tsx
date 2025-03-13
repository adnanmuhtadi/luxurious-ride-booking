
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Briefcase, Star } from 'lucide-react';

const fleetData = [
  {
    id: 1,
    name: 'Mercedes-Benz S-Class',
    category: 'Luxury Sedan',
    description: 'The epitome of luxury and comfort for executive travel.',
    image: 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?q=80&w=2070&auto=format&fit=crop',
    features: ['Up to 3 passengers', '2 luggage pieces', 'Wi-Fi', 'Refreshments'],
    passengers: 3,
    luggage: 2,
    rating: 5,
  },
  {
    id: 2,
    name: 'BMW 7 Series',
    category: 'Executive Sedan',
    description: 'Sophisticated design combined with cutting-edge technology.',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2069&auto=format&fit=crop',
    features: ['Up to 3 passengers', '2 luggage pieces', 'Wi-Fi', 'Leather seats'],
    passengers: 3,
    luggage: 2,
    rating: 5,
  },
  {
    id: 3,
    name: 'Mercedes-Benz V-Class',
    category: 'Luxury Van',
    description: 'Spacious luxury for group travel without compromising on style.',
    image: 'https://images.unsplash.com/photo-1551830820-330a71b99659?q=80&w=2070&auto=format&fit=crop',
    features: ['Up to 7 passengers', '5 luggage pieces', 'Wi-Fi', 'Entertainment system'],
    passengers: 7,
    luggage: 5,
    rating: 5,
  },
];

const FleetPreview = () => {
  const [activeVehicle, setActiveVehicle] = useState(fleetData[0]);

  return (
    <section className="py-24 bg-black">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Premium Fleet</h2>
          <p className="section-subheading">
            Experience unrivaled comfort and style with our meticulously maintained luxury vehicles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            {fleetData.map((vehicle) => (
              <div
                key={vehicle.id}
                className={`glass-card p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeVehicle.id === vehicle.id
                    ? 'border-gold-500 bg-gold-500/10'
                    : 'hover:bg-black/40'
                }`}
                onClick={() => setActiveVehicle(vehicle)}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold text-gold-500">{vehicle.name}</h3>
                    <p className="text-sm text-muted-foreground">{vehicle.category}</p>
                  </div>
                  <ChevronRight
                    className={`h-5 w-5 text-gold-500 transition-all ${
                      activeVehicle.id === vehicle.id ? 'rotate-90' : ''
                    }`}
                  />
                </div>
              </div>
            ))}

            <Link to="/fleet" className="gold-button w-full mt-4 text-center block">
              View All Vehicles
            </Link>
          </div>

          <div className="lg:col-span-2 animate-fade-in">
            <div className="glass-card rounded-xl overflow-hidden h-full">
              <div className="h-64 md:h-80 relative">
                <img
                  src={activeVehicle.image}
                  alt={activeVehicle.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-gold-500 text-luxury-black font-bold px-3 py-1 rounded-full text-sm">
                  Premium
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gold-500">{activeVehicle.name}</h3>
                    <p className="text-muted-foreground">{activeVehicle.category}</p>
                  </div>
                  <div className="flex items-center">
                    {[...Array(activeVehicle.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gold-500 fill-gold-500" />
                    ))}
                  </div>
                </div>

                <p className="mb-6 text-foreground">{activeVehicle.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-gold-500" />
                    <span>{activeVehicle.passengers} Passengers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-gold-500" />
                    <span>{activeVehicle.luggage} Luggage</span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <h4 className="font-bold">Features:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {activeVehicle.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-gold-500"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/booking"
                  className="gold-button inline-flex items-center gap-2"
                >
                  <span>Book This Vehicle</span>
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FleetPreview;
