import React from "react";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-luxury-dark text-foreground">
      <Navbar />
      <div className="pt-20 pb-12">
        <div className="luxury-container pt-8">
          <h1 className="text-4xl font-bold text-center mb-8 text-gold-500">
            Contact Us
          </h1>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Reach out to us with any inquiries about our executive car services
            in Hemel Hempstead, Berkhamsted, Tring, and surrounding areas.
          </p>
        </div>
      </div>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default ContactPage;
