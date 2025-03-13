
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Car, ChevronDown, Check } from 'lucide-react';
import { toast } from 'sonner';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: '1',
    vehicle: '',
    name: '',
    email: '',
    phone: '',
    specialRequirements: '',
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (!formData.pickupLocation || !formData.dropoffLocation || !formData.date || !formData.time) {
        toast.error('Please fill all required fields');
        return;
      }
    }
    
    if (step === 2) {
      if (!formData.name || !formData.email || !formData.phone) {
        toast.error('Please fill all required fields');
        return;
      }
    }
    
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Booking request submitted successfully! We will contact you shortly to confirm your reservation.');
      
      // Reset form
      setFormData({
        pickupLocation: '',
        dropoffLocation: '',
        date: '',
        time: '',
        passengers: '1',
        vehicle: '',
        name: '',
        email: '',
        phone: '',
        specialRequirements: '',
      });
      setStep(1);
    }, 1500);
  };

  const vehicles = [
    { id: 'mercedes-s-class', name: 'Mercedes-Benz S-Class', price: '£120' },
    { id: 'bmw-7', name: 'BMW 7 Series', price: '£110' },
    { id: 'mercedes-v-class', name: 'Mercedes-Benz V-Class', price: '£150' },
  ];

  return (
    <div className="glass-card rounded-xl overflow-hidden w-full max-w-4xl mx-auto">
      <div className="p-2">
        <div className="flex justify-between mb-8">
          <div className="flex items-center w-full">
            <div className={`flex items-center justify-center rounded-full w-10 h-10 ${
              step >= 1 ? 'bg-gold-500 text-luxury-black' : 'bg-muted text-muted-foreground'
            }`}>
              <span className="font-bold">{step > 1 ? <Check className="h-5 w-5" /> : '1'}</span>
            </div>
            <div className={`h-1 flex-1 mx-2 ${
              step > 1 ? 'bg-gold-500' : 'bg-muted'
            }`}></div>
            <div className={`flex items-center justify-center rounded-full w-10 h-10 ${
              step >= 2 ? 'bg-gold-500 text-luxury-black' : 'bg-muted text-muted-foreground'
            }`}>
              <span className="font-bold">{step > 2 ? <Check className="h-5 w-5" /> : '2'}</span>
            </div>
            <div className={`h-1 flex-1 mx-2 ${
              step > 2 ? 'bg-gold-500' : 'bg-muted'
            }`}></div>
            <div className={`flex items-center justify-center rounded-full w-10 h-10 ${
              step >= 3 ? 'bg-gold-500 text-luxury-black' : 'bg-muted text-muted-foreground'
            }`}>
              <span className="font-bold">3</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Journey Details */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-gold-500 mb-6">Journey Details</h3>
              
              <div className="space-y-4">
                <div className="relative">
                  <label htmlFor="pickupLocation" className="block mb-2 font-medium">
                    Pickup Location *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <input
                      type="text"
                      id="pickupLocation"
                      name="pickupLocation"
                      value={formData.pickupLocation}
                      onChange={handleChange}
                      className="luxury-input pl-10"
                      placeholder="Enter pickup address"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="dropoffLocation" className="block mb-2 font-medium">
                    Dropoff Location *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <input
                      type="text"
                      id="dropoffLocation"
                      name="dropoffLocation"
                      value={formData.dropoffLocation}
                      onChange={handleChange}
                      className="luxury-input pl-10"
                      placeholder="Enter destination address"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="date" className="block mb-2 font-medium">
                      Date *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        <Calendar className="h-5 w-5" />
                      </span>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="luxury-input pl-10"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="time" className="block mb-2 font-medium">
                      Time *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        <Clock className="h-5 w-5" />
                      </span>
                      <input
                        type="time"
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="luxury-input pl-10"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="passengers" className="block mb-2 font-medium">
                      Passengers
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        <Users className="h-5 w-5" />
                      </span>
                      <select
                        id="passengers"
                        name="passengers"
                        value={formData.passengers}
                        onChange={handleChange}
                        className="luxury-input pl-10 appearance-none"
                      >
                        {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'passenger' : 'passengers'}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none">
                        <ChevronDown className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="vehicle" className="block mb-2 font-medium">
                      Preferred Vehicle
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                        <Car className="h-5 w-5" />
                      </span>
                      <select
                        id="vehicle"
                        name="vehicle"
                        value={formData.vehicle}
                        onChange={handleChange}
                        className="luxury-input pl-10 appearance-none"
                      >
                        <option value="">Select a vehicle</option>
                        {vehicles.map((vehicle) => (
                          <option key={vehicle.id} value={vehicle.id}>
                            {vehicle.name} - {vehicle.price}
                          </option>
                        ))}
                      </select>
                      <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none">
                        <ChevronDown className="h-5 w-5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 flex justify-end">
                <button
                  type="button"
                  className="gold-button"
                  onClick={handleNext}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Contact Information */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-gold-500 mb-6">Contact Information</h3>
              
              <div className="space-y-4">
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
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="luxury-input"
                      placeholder="+44 7123 456789"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="specialRequirements" className="block mb-2 font-medium">
                    Special Requirements
                  </label>
                  <textarea
                    id="specialRequirements"
                    name="specialRequirements"
                    value={formData.specialRequirements}
                    onChange={handleChange}
                    className="luxury-input min-h-[100px]"
                    placeholder="Any special requests or additional information..."
                  ></textarea>
                </div>
              </div>
              
              <div className="pt-6 flex justify-between">
                <button
                  type="button"
                  className="ghost-button"
                  onClick={handlePrevious}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="gold-button"
                  onClick={handleNext}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <h3 className="text-2xl font-bold text-gold-500 mb-6">Confirm Your Booking</h3>
              
              <div className="glass-card p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-bold">Journey Details</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-muted-foreground block text-sm">Pickup:</span>
                          <span>{formData.pickupLocation}</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <MapPin className="h-5 w-5 text-gold-500 shrink-0 mt-0.5" />
                        <div>
                          <span className="text-muted-foreground block text-sm">Dropoff:</span>
                          <span>{formData.dropoffLocation}</span>
                        </div>
                      </li>
                      <li className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-gold-500 shrink-0" />
                        <span>{formData.date}</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-gold-500 shrink-0" />
                        <span>{formData.time}</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold">Contact Information</h4>
                    <ul className="mt-2 space-y-2">
                      <li><strong>Name:</strong> {formData.name}</li>
                      <li><strong>Email:</strong> {formData.email}</li>
                      <li><strong>Phone:</strong> {formData.phone}</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-bold">Additional Details</h4>
                  <ul className="mt-2 space-y-2">
                    <li><strong>Passengers:</strong> {formData.passengers}</li>
                    <li>
                      <strong>Vehicle:</strong>{' '}
                      {formData.vehicle
                        ? vehicles.find((v) => v.id === formData.vehicle)?.name || formData.vehicle
                        : 'No preference'}
                    </li>
                    {formData.specialRequirements && (
                      <li>
                        <strong>Special Requirements:</strong> {formData.specialRequirements}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              
              <div className="bg-gold-500/10 border border-gold-500/30 rounded-lg p-4">
                <p className="text-sm">
                  By submitting this booking request, you agree to our{' '}
                  <a href="#" className="text-gold-500 hover:underline">
                    Terms and Conditions
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-gold-500 hover:underline">
                    Privacy Policy
                  </a>
                  . We will contact you shortly to confirm your booking.
                </p>
              </div>
              
              <div className="pt-6 flex justify-between">
                <button
                  type="button"
                  className="ghost-button"
                  onClick={handlePrevious}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="gold-button min-w-[150px]"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Submit Booking'
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
