
import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-black">
      <div className="luxury-container">
        <div className="text-center mb-16">
          <h2 className="section-heading">Contact Us</h2>
          <p className="section-subheading">
            Get in touch with our team for bookings, inquiries, or any assistance you may need
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
