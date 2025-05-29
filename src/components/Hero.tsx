
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white py-20">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img 
            src="/lovable-uploads/608a4400-5443-43c4-8d44-27de9d023e0c.png" 
            alt="Ashu's Barber Shop Logo" 
            className="mx-auto mb-8 w-48 h-48 object-contain"
          />
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            ASHU'S BARBER SHOP
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Experience premium barbering services with style, precision, and professionalism. 
            Book your appointment today and discover the difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-700 text-lg px-8 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              View Services
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Operating Hours</h3>
              <p className="text-blue-100">Mon-Sat: 9:00 AM - 8:00 PM</p>
              <p className="text-blue-100">Sun: 10:00 AM - 6:00 PM</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-blue-100">123 Main Street</p>
              <p className="text-blue-100">Downtown, City</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Calendar className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Online Booking</h3>
              <p className="text-blue-100">24/7 Online</p>
              <p className="text-blue-100">Instant Confirmation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
