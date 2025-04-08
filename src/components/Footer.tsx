import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Linkedin,
  Twitter
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-luxury-dark border-t border-gold-500/20">
      <div className="luxury-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold font-serif mb-6"
            >
              <span className="gold-gradient-text">BENZ</span>
              <span className="text-white">CABZ</span>
            </Link>
            <p className="text-muted-foreground mb-6">
              Providing premium executive transportation services with
              uncompromising luxury, reliability, and discretion.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted rounded-full p-2 text-muted-foreground hover:bg-gold-500 hover:text-luxury-black transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted rounded-full p-2 text-muted-foreground hover:bg-gold-500 hover:text-luxury-black transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted rounded-full p-2 text-muted-foreground hover:bg-gold-500 hover:text-luxury-black transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted rounded-full p-2 text-muted-foreground hover:bg-gold-500 hover:text-luxury-black transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/fleet"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Our Fleet
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Book Now
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Corporate Travel
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Wedding Transportation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Hourly Chauffeur
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  VIP Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  City Tours
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Corporate Travel
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Wedding Transportation
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Hourly Chauffeur
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  VIP Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  City Tours
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold-500 shrink-0" />
                <a
                  href="tel:+44 07902 394939"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  +44 07902 394939
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold-500 shrink-0" />
                <a
                  href="mailto:info@luxerides.com"
                  className="text-muted-foreground hover:text-gold-500 transition-colors"
                >
                  Benzcabz247@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
