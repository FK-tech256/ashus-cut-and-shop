
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Scissors, Palette, Crown, Star, Clock, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Classic Haircut",
      description: "Traditional barbering with modern precision and attention to detail",
      price: 824.50,
      duration: "30-45 min",
      icon: <Scissors className="w-8 h-8" />,
      features: ["Consultation", "Precision Cut", "Wash & Style", "Finishing Touch"],
      popular: true
    },
    {
      id: 2,
      name: "Beard Trim & Shape",
      description: "Professional beard grooming and styling for the perfect look",
      price: 549.50,
      duration: "20-30 min",
      icon: <Palette className="w-8 h-8" />,
      features: ["Beard Analysis", "Precision Trim", "Shape & Style", "Beard Oil Application"]
    },
    {
      id: 3,
      name: "Premium Full Service",
      description: "Complete grooming experience with luxury treatments",
      price: 1374.50,
      duration: "60-75 min",
      icon: <Crown className="w-8 h-8" />,
      features: ["Haircut", "Beard Service", "Hot Towel Treatment", "Scalp Massage", "Premium Products"],
      premium: true
    },
    {
      id: 4,
      name: "Kids Haircut",
      description: "Gentle and fun haircuts designed specifically for children",
      price: 659.50,
      duration: "20-30 min",
      icon: <Star className="w-8 h-8" />,
      features: ["Kid-Friendly Environment", "Patient Approach", "Fun Experience", "Parent Involvement"]
    },
    {
      id: 5,
      name: "Hot Towel Shave",
      description: "Traditional wet shave with hot towels for the ultimate experience",
      price: 934.50,
      duration: "30-40 min",
      icon: <Scissors className="w-8 h-8" />,
      features: ["Pre-Shave Oil", "Hot Towel Prep", "Traditional Razor", "Post-Shave Care"]
    },
    {
      id: 6,
      name: "Hair Styling",
      description: "Professional styling for special occasions and events",
      price: 714.50,
      duration: "20-30 min",
      icon: <Palette className="w-8 h-8" />,
      features: ["Style Consultation", "Premium Products", "Event Ready", "Photo Perfect"]
    }
  ];

  const addOns = [
    { name: "Eyebrow Trim", price: 274.50 },
    { name: "Nose Hair Trim", price: 164.50 },
    { name: "Scalp Treatment", price: 549.50 },
    { name: "Beard Oil Treatment", price: 384.50 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Professional grooming services crafted with precision and care
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Book an Appointment
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg relative overflow-hidden">
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-orange-600 text-white">
                    Most Popular
                  </Badge>
                )}
                {service.premium && (
                  <Badge className="absolute top-4 right-4 bg-purple-600 text-white">
                    Premium
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{service.name}</CardTitle>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-blue-700">{service.price.toFixed(2)} ETB</span>
                    <div className="flex items-center justify-center mt-2 text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{service.duration}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6 text-left">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Add-On Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enhance your grooming experience with our additional services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{addon.name}</h3>
                  <p className="text-2xl font-bold text-blue-700">{addon.price.toFixed(2)} ETB</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
