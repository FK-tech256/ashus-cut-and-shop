
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, CreditCard, CheckCircle } from "lucide-react";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<any>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedBarber, setSelectedBarber] = useState("");

  const services = [
    { id: 1, name: "Classic Haircut", price: 824.50, duration: "30-45 min" },
    { id: 2, name: "Beard Trim & Shape", price: 549.50, duration: "20-30 min" },
    { id: 3, name: "Premium Full Service", price: 1374.50, duration: "60-75 min" },
    { id: 4, name: "Kids Haircut", price: 659.50, duration: "20-30 min" },
    { id: 5, name: "Hot Towel Shave", price: 934.50, duration: "30-40 min" },
    { id: 6, name: "Hair Styling", price: 714.50, duration: "20-30 min" }
  ];

  const barbers = [
    { id: 1, name: "Ashu", specialty: "Classic Cuts & Styling", experience: "10+ years" },
    { id: 2, name: "Mike", specialty: "Beard Specialist", experience: "8+ years" },
    { id: 3, name: "David", specialty: "Modern Styles", experience: "6+ years" }
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM"
  ];

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Appointment</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Schedule your grooming session in just a few simple steps
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-4">
            {[1, 2, 3, 4].map((num) => (
              <div key={num} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                  step >= num ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step > num ? <CheckCircle className="w-6 h-6" /> : num}
                </div>
                {num < 4 && (
                  <div className={`w-16 h-1 mx-2 ${
                    step > num ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            <span className="text-sm text-gray-600">
              Step {step} of 4: {
                step === 1 ? 'Select Service' :
                step === 2 ? 'Choose Date & Time' :
                step === 3 ? 'Select Barber' :
                'Confirm & Pay'
              }
            </span>
          </div>
        </div>

        {/* Step Content */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              {step === 1 && <><User className="mr-2" /> Select Your Service</>}
              {step === 2 && <><Calendar className="mr-2" /> Choose Date & Time</>}
              {step === 3 && <><User className="mr-2" /> Select Your Barber</>}
              {step === 4 && <><CreditCard className="mr-2" /> Confirm & Payment</>}
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedService?.id === service.id
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <h3 className="font-semibold text-lg">{service.name}</h3>
                    <p className="text-gray-600">{service.duration}</p>
                    <p className="text-xl font-bold text-blue-600">{service.price.toFixed(2)} ETB</p>
                  </div>
                ))}
              </div>
            )}

            {/* Step 2: Date & Time Selection */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="date">Select Date</Label>
                  <Input
                    id="date"
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
                
                <div>
                  <Label>Select Time</Label>
                  <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        onClick={() => setSelectedTime(time)}
                        className="w-full"
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Barber Selection */}
            {step === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {barbers.map((barber) => (
                  <div
                    key={barber.id}
                    onClick={() => setSelectedBarber(barber.name)}
                    className={`p-6 border-2 rounded-lg cursor-pointer transition-all text-center ${
                      selectedBarber === barber.name
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    <h3 className="font-semibold text-lg">{barber.name}</h3>
                    <p className="text-gray-600 text-sm">{barber.specialty}</p>
                    <Badge variant="secondary" className="mt-2">{barber.experience}</Badge>
                  </div>
                ))}
              </div>
            )}

            {/* Step 4: Confirmation */}
            {step === 4 && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg mb-4">Appointment Summary</h3>
                  <div className="space-y-2">
                    <p><span className="font-medium">Service:</span> {selectedService?.name}</p>
                    <p><span className="font-medium">Date:</span> {selectedDate}</p>
                    <p><span className="font-medium">Time:</span> {selectedTime}</p>
                    <p><span className="font-medium">Barber:</span> {selectedBarber}</p>
                    <p><span className="font-medium">Duration:</span> {selectedService?.duration}</p>
                    <div className="border-t pt-2 mt-4">
                      <p className="text-xl font-bold">Total: {selectedService?.price.toFixed(2)} ETB</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-semibold text-lg">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone" />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <Button variant="outline" onClick={prevStep}>
                  Previous
                </Button>
              )}
              
              {step < 4 ? (
                <Button
                  onClick={nextStep}
                  disabled={
                    (step === 1 && !selectedService) ||
                    (step === 2 && (!selectedDate || !selectedTime)) ||
                    (step === 3 && !selectedBarber)
                  }
                  className="ml-auto bg-blue-600 hover:bg-blue-700"
                >
                  Next
                </Button>
              ) : (
                <Button className="ml-auto bg-orange-600 hover:bg-orange-700">
                  Confirm & Pay {selectedService?.price.toFixed(2)} ETB
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  );
};

export default Booking;
