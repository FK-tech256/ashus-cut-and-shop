
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Scissors, Sparkles, Zap, Star, Clock, Calendar } from "lucide-react";

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Classic Haircut",
      description: "Traditional barbering with precision cutting and styling. Includes consultation, wash, cut, and basic styling.",
      price: "$25",
      duration: "30 min",
      icon: <Scissors className="w-8 h-8" />,
      popular: false,
      features: ["Hair consultation", "Precision cutting", "Basic styling", "Hot towel finish"]
    },
    {
      id: 2,
      name: "Premium Cut & Style",
      description: "Complete haircut experience with wash, advanced styling, and premium finishing touches for the perfect look.",
      price: "$35",
      duration: "45 min",
      icon: <Star className="w-8 h-8" />,
      popular: true,
      features: ["Hair wash & condition", "Precision cutting", "Advanced styling", "Premium products", "Hot towel finish"]
    },
    {
      id: 3,
      name: "Beard Trim & Shape",
      description: "Professional beard trimming and shaping service to maintain your facial hair with precision and style.",
      price: "$20",
      duration: "25 min",
      icon: <Sparkles className="w-8 h-8" />,
      popular: false,
      features: ["Beard consultation", "Precision trimming", "Shape & styling", "Moisturizing treatment"]
    },
    {
      id: 4,
      name: "The Full Service",
      description: "The ultimate barbering experience combining haircut, beard trim, hot towel treatment, and premium styling.",
      price: "$50",
      duration: "60 min",
      icon: <Zap className="w-8 h-8" />,
      popular: true,
      features: ["Complete haircut", "Beard trim & shape", "Hot towel treatment", "Premium styling", "Face moisturizer"]
    },
    {
      id: 5,
      name: "Hot Towel Shave",
      description: "Traditional hot towel shave experience with premium products for the smoothest, most comfortable shave.",
      price: "$30",
      duration: "40 min",
      icon: <Sparkles className="w-8 h-8" />,
      popular: false,
      features: ["Pre-shave oil", "Hot towel preparation", "Traditional razor shave", "Post-shave balm", "Face massage"]
    },
    {
      id: 6,
      name: "Kids Haircut",
      description: "Gentle and patient haircuts for children under 12, ensuring a comfortable and fun experience.",
      price: "$18",
      duration: "25 min",
      icon: <Scissors className="w-8 h-8" />,
      popular: false,
      features: ["Child-friendly approach", "Patient & gentle service", "Fun atmosphere", "Styling gel included"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Professional barbering services tailored to your style and preferences. 
            Experience the difference with our skilled barbers and premium products.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="relative hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
                {service.popular && (
                  <Badge className="absolute -top-3 -right-3 bg-orange-600 text-white z-10 text-sm px-3 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-blue-700">{service.price}</div>
                      <div className="flex items-center text-gray-500 mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 mb-2">{service.name}</CardTitle>
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full bg-blue-700 hover:bg-blue-800 text-white text-lg py-3">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book This Service
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Next Great Look?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Book your appointment today and experience the finest barbering services in town.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-3"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Appointment
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-700 text-lg px-8 py-3"
            >
              Call Us: (555) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
