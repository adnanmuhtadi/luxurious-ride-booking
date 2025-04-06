
import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill all required fields');
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully! We will get back to you soon.');
      console.log('Contact form submission to: adnanmuhtadi@hotmail.com');
      console.log('Form data:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2">
        <form onSubmit={handleSubmit} className="glass-card rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gold-500 mb-6">Send Us a Message</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="luxury-input"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="luxury-input"
                placeholder="name@example.com"
                required
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="phone" className="block mb-2 font-medium">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="luxury-input"
                placeholder="+44 7123 456789"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block mb-2 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="luxury-input"
                placeholder="How can we help you?"
              />
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block mb-2 font-medium">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="luxury-input min-h-[150px]"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="gold-button min-w-[150px] flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              <>
                <span>Send Message</span>
                <Send className="h-4 w-4" />
              </>
            )}
          </button>
        </form>
      </div>
      
      <div className="lg:col-span-1">
        <div className="glass-card rounded-xl p-8 h-full">
          <h3 className="text-2xl font-bold text-gold-500 mb-6">Contact Information</h3>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-gold-500/10 rounded-full p-3">
                <MapPin className="h-6 w-6 text-gold-500" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Our Office</h4>
                <address className="not-italic text-muted-foreground">
                  123 Luxury Street<br />
                  London, W1 9AB<br />
                  United Kingdom
                </address>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-gold-500/10 rounded-full p-3">
                <Phone className="h-6 w-6 text-gold-500" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Phone</h4>
                <p className="text-muted-foreground">24/7 Customer Support</p>
                <a 
                  href="tel:+4407123456789" 
                  className="text-gold-500 hover:text-gold-400 transition-colors"
                >
                  +44 07123 456789
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-gold-500/10 rounded-full p-3">
                <Mail className="h-6 w-6 text-gold-500" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-muted-foreground">For bookings & inquiries</p>
                <a 
                  href="mailto:info@luxerides.com" 
                  className="text-gold-500 hover:text-gold-400 transition-colors"
                >
                  info@luxerides.com
                </a>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="font-bold mb-3">Business Hours</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
              </ul>
              <p className="mt-4 text-sm">
                <span className="text-gold-500">*</span> 24/7 booking available online
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
