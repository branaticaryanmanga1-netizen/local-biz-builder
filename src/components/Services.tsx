import { Globe, Search, Palette } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description: "Mobile-friendly websites that look professional and convert visitors into customers. Built specifically for service businesses.",
    features: ["Responsive Design", "Fast Loading", "Contact Forms", "Google Maps Integration"]
  },
  {
    icon: Search,
    title: "Local SEO",
    description: "Get found by customers searching for your services in your area. Dominate local search results and beat your competition.",
    features: ["Google My Business", "Local Keywords", "Citation Building", "Monthly Reports"]
  },
  {
    icon: Palette,
    title: "Logo & Branding",
    description: "Professional logo design and brand identity that makes your business stand out and builds trust with customers.",
    features: ["Custom Logo Design", "Brand Colors", "Business Cards", "Vehicle Wraps"]
  }
];

const Services = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30" id="services">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to Grow Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No fluff. No complicated packages. Just the services that actually help local businesses get more customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-strong transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent mr-2 font-bold">✓</span>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
