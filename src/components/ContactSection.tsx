
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-on-scroll">
            <h3 className="text-2xl font-bold text-gold-500">Reach Out to Us</h3>
            <p className="text-muted-foreground">
              Our dedicated team is available to assist you with any inquiries or provide information about our services.
              Feel free to contact us through any of the channels below or fill out the contact form.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Main Office</h4>
                  <p className="text-muted-foreground">
                    123 Luxury Drive, Mayfair<br />
                    London, W1J 7NT<br />
                    United Kingdom
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Phone</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:+442012345678" className="hover:text-gold-500 transition-colors">
                      +44 (0) 20 1234 5678
                    </a><br />
                    <span className="text-sm">24/7 Booking Hotline</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:bookings@luxerides.com" className="hover:text-gold-500 transition-colors">
                      bookings@luxerides.com
                    </a><br />
                    <a href="mailto:info@luxerides.com" className="hover:text-gold-500 transition-colors">
                      info@luxerides.com
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-gold-500/10 p-3 rounded-full">
                  <Clock className="h-6 w-6 text-gold-500" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 8:00 PM<br />
                    Saturday - Sunday: 9:00 AM - 6:00 PM<br />
                    <span className="text-sm">24/7 Booking & Support Available</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-xl animate-on-scroll">
            <h3 className="text-2xl font-bold text-gold-500 mb-6">Send Us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
