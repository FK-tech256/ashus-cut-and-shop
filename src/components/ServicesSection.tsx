
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Palette, Crown, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      name: "Classic Cut",
      description: "Traditional barbering with modern precision",
      price: 824.50,
      duration: "30 min",
      icon: <Scissors className="w-8 h-8" />,
      features: ["Consultation", "Wash & Cut", "Style"]
    },
    {
      id: 2,
      name: "Beard Trim",
      description: "Professional beard shaping and styling",
      price: 549.50,
      duration: "20 min",
      icon: <Palette className="w-8 h-8" />,
      features: ["Trim", "Shape", "Conditioning"]
    },
    {
      id: 3,
      name: "Premium Package",
      description: "Complete grooming experience",
      price: 1374.50,
      duration: "60 min",
      icon: <Crown className="w-8 h-8" />,
      features: ["Cut", "Beard", "Hot Towel", "Massage"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional grooming services tailored to your style
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
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
                  <span className="text-gray-500 block">{service.duration}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center justify-center text-gray-600">
                      <Star className="w-4 h-4 text-orange-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
