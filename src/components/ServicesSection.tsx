
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Sparkles, Zap, Star } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      name: "Classic Haircut",
      description: "Traditional barbering with precision cutting and styling",
      price: "$25",
      duration: "30 min",
      icon: <Scissors className="w-6 h-6" />,
      popular: false
    },
    {
      id: 2,
      name: "Premium Cut & Style",
      description: "Complete haircut with wash, styling, and finishing touches",
      price: "$35",
      duration: "45 min",
      icon: <Star className="w-6 h-6" />,
      popular: true
    },
    {
      id: 3,
      name: "Beard Trim & Shape",
      description: "Professional beard trimming and shaping service",
      price: "$20",
      duration: "25 min",
      icon: <Sparkles className="w-6 h-6" />,
      popular: false
    },
    {
      id: 4,
      name: "The Full Service",
      description: "Complete package: haircut, beard trim, hot towel, and styling",
      price: "$50",
      duration: "60 min",
      icon: <Zap className="w-6 h-6" />,
      popular: true
    },
    {
      id: 5,
      name: "Hot Towel Shave",
      description: "Traditional hot towel shave experience with premium products",
      price: "$30",
      duration: "40 min",
      icon: <Sparkles className="w-6 h-6" />,
      popular: false
    },
    {
      id: 6,
      name: "Kids Haircut",
      description: "Gentle and patient haircuts for children under 12",
      price: "$18",
      duration: "25 min",
      icon: <Scissors className="w-6 h-6" />,
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience professional barbering services tailored to your style and preferences. 
            Every service includes our commitment to excellence and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="relative hover:shadow-lg transition-shadow duration-300 border-2 hover:border-blue-200">
              {service.popular && (
                <Badge className="absolute -top-2 -right-2 bg-orange-600 text-white z-10">
                  Popular
                </Badge>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-700">
                    {service.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-700">{service.price}</div>
                    <div className="text-sm text-gray-500">{service.duration}</div>
                  </div>
                </div>
                <CardTitle className="text-xl text-gray-900">{service.name}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
                <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white">
                  Book This Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
