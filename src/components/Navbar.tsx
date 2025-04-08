import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(
    () => {
      // Close mobile menu when route changes
      setIsMenuOpen(false);
    },
    [location.pathname]
  );

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-luxury-dark/95 backdrop-blur-md py-2 shadow-md"
        : "bg-transparent py-4"}`}
    >
      <div className="luxury-container flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold font-serif"
        >
          <span className="gold-gradient-text">Benz</span>
          <span className="text-white">Cabz</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map(link =>
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`link-underline py-2 transition-colors ${location.pathname ===
                  link.path
                    ? "text-gold-500"
                    : "text-foreground hover:text-gold-500"}`}
                >
                  {link.name}
                </Link>
              </li>
            )}
          </ul>
          <Link to="/booking" className="gold-button flex items-center gap-2">
            <span>Book Now</span>
          </Link>
        </div>

        {/* Phone Number - Desktop */}
        <div className="hidden md:flex items-center">
          <a
            href="tel:+4407123456789"
            className="flex items-center gap-2 text-gold-500 hover:text-gold-400 transition-colors"
          >
            <PhoneCall className="h-4 w-4" />
            <span className="font-medium">+44 07123 456789</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen
            ? <X className="h-6 w-6" />
            : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 md:hidden bg-luxury-black transition-transform duration-300 ease-in-out ${isMenuOpen
            ? "translate-x-0"
            : "translate-x-full"}`}
        >
          <div className="flex flex-col h-full overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-8">
              <Link
                to="/"
                className="flex items-center gap-2 text-2xl font-bold font-serif"
                onClick={toggleMenu}
              >
                <span className="gold-gradient-text">Benz</span>
                <span className="text-white">Cabz</span>
              </Link>
              <button
                className="text-foreground p-2"
                onClick={toggleMenu}
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <ul className="flex flex-col gap-4 mb-8">
              {navLinks.map(link =>
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`block py-3 text-lg font-medium border-b border-gold-500/20 ${location.pathname ===
                    link.path
                      ? "text-gold-500"
                      : "text-foreground"}`}
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              )}
            </ul>
            <Link
              to="/booking"
              className="gold-button text-center mb-6"
              onClick={toggleMenu}
            >
              Book Now
            </Link>
            <a
              href="tel:+4407123456789"
              className="flex items-center justify-center gap-2 text-gold-500 hover:text-gold-400 transition-colors"
            >
              <PhoneCall className="h-4 w-4" />
              <span className="font-medium">+44 07902 394939</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
