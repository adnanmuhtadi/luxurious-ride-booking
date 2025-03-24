
import React from 'react';
import BookingForm from '../components/BookingForm';

const BookingPage = () => {
  return (
    <div className="min-h-screen bg-transparent p-4">
      <div className="max-w-7xl mx-auto pt-8 pb-12">
        <h1 className="text-4xl font-bold text-center mb-8 text-gold-500">Book Your Luxury Ride</h1>
        <p className="text-center mb-8 max-w-3xl mx-auto">
          Complete the form below to book your luxury transportation. All booking requests will be 
          reviewed by our team, and we'll contact you shortly to confirm your reservation.
        </p>
        <BookingForm />
      </div>
    </div>
  );
};

export default BookingPage;
