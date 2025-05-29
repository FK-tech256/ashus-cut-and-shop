import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

interface Service {
  name: string;
  price: string;
  duration: string;
  popular?: boolean;
}

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const services: Service[] = [
    { name: "Classic Haircut", price: "$25", duration: "30 min" },
    { name: "Premium Cut & Style", price: "$35", duration: "45 min", popular: true },
    { name: "Beard Trim & Shape", price: "$20", duration: "25 min" },
    { name: "The Full Service", price: "$50", duration: "60 min", popular: true },
    { name: "Hot Towel Shave", price: "$30", duration: "40 min" },
    { name: "Kids Haircut", price: "$18", duration: "25 min" }
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
    "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
    "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM"
  ];

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    nextStep();
  };

  const handleDateTimeSelect = () => {
    if (selectedDate && selectedTime) {
      nextStep();
    }
  };

  const handleBookingSubmit = () => {
    // Handle booking submission logic here
    nextStep();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
          <p className="text-xl text-blue-100">
            Follow these simple steps to schedule your visit with us
          </p>
        </div>
      </section>

      {/* Progress Indicator */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  currentStep >= step ? 'bg-blue-700 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step ? <CheckCircle className="w-6 h-6" /> : step}
                </div>
                {step < 4 && (
                  <div className={`w-16 md:w-24 h-1 ${
                    currentStep > step ? 'bg-blue-700' : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Service</span>
            <span>Date & Time</span>
            <span>Contact Info</span>
            <span>Confirmation</span>
          </div>
        </div>
      </section>

      {/* Booking Steps */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Step 1: Service Selection */}
          {currentStep === 1 && (
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-blue-700 text-white">
                <CardTitle className="text-2xl">Step 1: Choose Your Service</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <div
                      key={index}
                      onClick={() => handleServiceSelect(service)}
                      className="relative p-6 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-blue-500 transition-colors"
                    >
                      {service.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-orange-600 text-white">
                          Popular
                        </Badge>
                      )}
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                          <p className="text-gray-600 mt-1">{service.duration}</p>
                        </div>
                        <div className="text-2xl font-bold text-blue-700">{service.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Date & Time Selection */}
          {currentStep === 2 && selectedService && (
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-blue-700 text-white">
                <CardTitle className="text-2xl">Step 2: Select Date & Time</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Selected Service:</strong> {selectedService.name} - {selectedService.price} ({selectedService.duration})
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select Date
                    </label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Available Times
                    </label>
                    <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-2 text-sm rounded-md border transition-colors ${
                            selectedTime === time
                              ? "bg-blue-700 text-white border-blue-700"
                              : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button onClick={prevStep} variant="outline">
                    Back
                  </Button>
                  <Button 
                    onClick={handleDateTimeSelect}
                    disabled={!selectedDate || !selectedTime}
                    className="bg-blue-700 hover:bg-blue-800"
                  >
                    Continue
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Contact Information */}
          {currentStep === 3 && selectedService && (
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-blue-700 text-white">
                <CardTitle className="text-2xl">Step 3: Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800">
                    <strong>Booking Summary:</strong> {selectedService.name} on {selectedDate} at {selectedTime}
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={customerInfo.name}
                      onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      value={customerInfo.phone}
                      onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button onClick={prevStep} variant="outline">
                    Back
                  </Button>
                  <Button 
                    onClick={handleBookingSubmit}
                    disabled={!customerInfo.name || !customerInfo.email || !customerInfo.phone}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    Confirm Booking
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && selectedService && (
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <CheckCircle className="w-6 h-6 mr-2" />
                  Booking Confirmed!
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Your appointment has been confirmed!
                  </h3>
                  <p className="text-gray-600">
                    We've sent a confirmation email to {customerInfo.email}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Appointment Details:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-gray-500 mr-3" />
                      <span>{customerInfo.name}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                      <span>{selectedService.name} - {selectedService.price}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-gray-500 mr-3" />
                      <span>{selectedDate} at {selectedTime} ({selectedService.duration})</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-gray-500 mr-3" />
                      <span>123 Main Street, Downtown, City</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 mb-8">
                  <h4 className="font-semibold text-blue-900 mb-2">What to expect:</h4>
                  <ul className="text-blue-800 space-y-1">
                    <li>• Please arrive 10 minutes early</li>
                    <li>• We'll send you a reminder 24 hours before your appointment</li>
                    <li>• If you need to reschedule, please call us at least 4 hours in advance</li>
                    <li>• Payment can be made in-store or online</li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-blue-700 hover:bg-blue-800">
                    Add to Calendar
                  </Button>
                  <Button variant="outline" className="flex-1">
                    View My Bookings
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Booking;
