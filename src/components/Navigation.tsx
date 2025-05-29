
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/608a4400-5443-43c4-8d44-27de9d023e0c.png" 
              alt="Ashu's Barber Shop Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-blue-700">ASHU'S BARBER SHOP</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Services
            </Link>
            <Link to="/store" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Store
            </Link>
            <Link to="/booking" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Book Now
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Contact
            </Link>
            <Button className="bg-orange-600 hover:bg-orange-700 text-white">
              Book Appointment
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/store"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
                onClick={toggleMenu}
              >
                Store
              </Link>
              <Link
                to="/booking"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
                onClick={toggleMenu}
              >
                Book Now
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-700 font-medium"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="px-3 py-2">
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                  Book Appointment
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
