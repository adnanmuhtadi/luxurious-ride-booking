
import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'James Wilson',
    position: 'CEO, TechVision',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2049&auto=format&fit=crop',
    quote: 'Absolutely outstanding service. The chauffeur was professional, punctual, and the vehicle was immaculate. Our clients were thoroughly impressed.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Emily Richardson',
    position: 'Event Manager',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2076&auto=format&fit=crop',
    quote: 'We use BenzCabz for all our corporate events. The consistency and quality of service is unmatched. Highly recommended for business travel.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Robert Chen',
    position: 'Finance Director',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2048&auto=format&fit=crop',
    quote: 'Punctual, professional, and pristine vehicles. Makes a significant difference to my busy schedule knowing transportation is one less thing to worry about.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    position: 'Marketing Executive',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop',
    quote: 'The attention to detail and personal service is what sets BenzCabz apart. From the moment you book until drop-off, everything is handled with care.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let interval;
    
    if (autoplay) {
      interval = setInterval(() => {
        setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-luxury-dark">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Client Testimonials</h2>
          <p className="section-subheading">
            Hear from our valued clients about their experiences with our executive transportation services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-full px-4">
                  <div className="testimonial-card">
                    <Quote className="h-12 w-12 text-gold-500/20 absolute top-6 left-6" />
                    
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold-500">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start mb-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-gold-500 fill-gold-500" />
                          ))}
                        </div>
                        
                        <p className="italic text-lg mb-4">"{testimonial.quote}"</p>
                        
                        <div>
                          <h4 className="text-gold-500 font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  current === i ? 'bg-gold-500 w-6' : 'bg-muted hover:bg-gold-500/50'
                }`}
                onClick={() => {
                  setAutoplay(false);
                  setCurrent(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
              ></button>
            ))}
          </div>

          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-luxury-black p-2 rounded-full text-gold-500 hover:bg-gold-500 hover:text-luxury-black transition-all z-10"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-4 md:translate-x-12 bg-luxury-black p-2 rounded-full text-gold-500 hover:bg-gold-500 hover:text-luxury-black transition-all z-10"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
