
import React from 'react';
import Navbar from '../components/Navbar';
import BookingForm from '../components/BookingForm';
import Footer from '../components/Footer';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-luxury-dark text-foreground">
      <Navbar />
      <div className="pt-20">
        <div className="luxury-container pt-8 pb-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-gold-500">Book Your Executive Car</h1>
          <p className="text-center mb-8 max-w-3xl mx-auto">
            Complete the form below to book your professional chauffeur service in Hemel Hempstead, Berkhamsted, Tring, and surrounding areas.
            We specialize in airport transfers, local journeys, corporate travel, and special occasions.
          </p>
          <BookingForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
