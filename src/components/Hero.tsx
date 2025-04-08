import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll(".parallax");
      parallaxElements.forEach(element => {
        const speed = element.getAttribute("data-speed") || "0.5";
        const yPos = -(window.scrollY * parseFloat(speed));
        element.setAttribute("style", `transform: translateY(${yPos}px)`);
      });

      // Trigger animations on scroll
      const animatedElements = document.querySelectorAll(".animate-on-scroll");
      animatedElements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
          element.classList.add("appear");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Background image with parallax effect */}
      <div
        className="absolute inset-0 z-0 parallax"
        data-speed="0.2"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1605515298946-d893ecea1640?q=80&w=2070&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/50" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <div className="luxury-container pt-20 md:pt-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in">
            <span className="gold-gradient-text">Professional </span>
            <span className="text-white">Chauffeur</span>
            <br />
            <span className="text-white">Service in </span>
            <span className="gold-gradient-text">
              Watford and Hemel Hempstead
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in">
            Providing executive car services and airport transfers in Hemel
            Hempstead, Berkhamsted, Tring and surrounding areas. Reliable,
            punctual, and professional.
          </p>

          {/* Removed "Book Your Ride" button
          <div className="flex justify-center animate-fade-in">
            <Link to="/fleet" className="ghost-button">
              Explore Our Fleet
            </Link>
          </div>
          */}
        </div>
      </div>

      {/* Scrolling indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float">
        <span className="text-gold-500 text-sm mb-2">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
