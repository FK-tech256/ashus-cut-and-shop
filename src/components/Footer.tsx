
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">ASHU'S BARBER SHOP</h3>
            <p className="text-gray-300 mb-4">
              Premium barbering services with style, precision, and professionalism. 
              Your style, our expertise.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-blue-400 p-2">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-blue-400 p-2">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button size="sm" variant="ghost" className="text-gray-300 hover:text-blue-400 p-2">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/booking" className="text-gray-300 hover:text-blue-400 transition-colors">Book Now</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Classic Haircut</span></li>
              <li><span className="text-gray-300">Premium Cut & Style</span></li>
              <li><span className="text-gray-300">Beard Trim</span></li>
              <li><span className="text-gray-300">Hot Towel Shave</span></li>
              <li><span className="text-gray-300">Kids Haircut</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">123 Main Street</p>
                  <p className="text-gray-300">Downtown, City</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <p className="text-gray-300">(555) 123-4567</p>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <p className="text-gray-300">info@ashubarbershop.com</p>
              </div>
              
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-blue-400 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-300">Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Ashu's Barber Shop. All rights reserved. Built with precision and care.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
