
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-speed') || '0.5';
        const yPos = -(window.scrollY * parseFloat(speed));
        element.setAttribute('style', `transform: translateY(${yPos}px)`);
      });

      // Trigger animations on scroll
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if (elementPosition < screenPosition) {
          element.classList.add('appear');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background image with parallax effect */}
      <div 
        className="absolute inset-0 z-0 parallax" 
        data-speed="0.2"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1605515298946-d893ecea1640?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="luxury-container pt-20 md:pt-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="gold-gradient-text">Luxury </span>
            <span className="text-white">Transportation</span>
            <br />
            <span className="text-white">For The </span>
            <span className="gold-gradient-text">Discerning</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in">
            Experience unparalleled comfort and elegance with our premium executive car service.
            Your journey deserves nothing less than perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Link to="/booking" className="gold-button flex items-center justify-center gap-2">
              <span>Book Your Ride</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/fleet" className="ghost-button">
              Explore Our Fleet
            </Link>
          </div>
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="text-gold-500 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
