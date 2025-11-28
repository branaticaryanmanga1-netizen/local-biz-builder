import { Globe, Search, Palette, X, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    oneLiner: "Websites that look professional and convert visitors into paying customers",
    description: "Mobile-friendly websites built specifically for service businesses. Every element designed to turn visitors into customers.",
    features: ["Mobile-First Design", "Fast 2-Second Load", "Lead Capture Forms", "Google Maps Integration"]
  },
  {
    icon: Search,
    title: "Local SEO",
    oneLiner: "Get found by customers actively searching for your services",
    description: "Dominate local search results and beat your competition. We optimize your site to rank #1 in your service area.",
    features: ["Google Business Profile", "Local Keyword Targeting", "Citation Building", "Monthly Performance Reports"]
  },
  {
    icon: Palette,
    title: "Logo & Branding",
    oneLiner: "Stand out from competitors with professional branding that builds trust",
    description: "Professional logo design and brand identity that makes your business memorable and trustworthy to customers.",
    features: ["Custom Logo Design", "Brand Color Palette", "Business Card Design", "Vehicle Wrap Templates"]
  }
];

const comparison = [
  {
    category: "Design Quality",
    diy: "Template-based, looks generic",
    us: "Custom, stands out from competition"
  },
  {
    category: "Mobile Optimization",
    diy: "Often broken on phones",
    us: "Perfect on all devices"
  },
  {
    category: "SEO Setup",
    diy: "Basic or missing",
    us: "Optimized to rank locally"
  },
  {
    category: "Time to Launch",
    diy: "2-6 months of your time",
    us: "2 weeks, hands-off"
  },
  {
    category: "Ongoing Support",
    diy: "You're on your own",
    us: "Included with every package"
  }
];

const Services = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-spacing bg-secondary/30" id="services">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display font-bold mb-6">
            Everything You Need to Grow Your Business
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            No fluff. No complicated packages. Just the services that get you more customers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-2 hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-slide-up hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="bg-accent/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" strokeWidth={2.5} />
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-3">
                  {service.title}
                </h3>

                <p className="text-base font-semibold text-primary mb-4 italic">
                  {service.oneLiner}
                </p>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-success mr-3 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* DIY vs Hiring Us Comparison */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl font-bold mb-4">
              Why Hire Us Instead of DIY?
            </h3>
            <p className="text-lg text-muted-foreground">
              Your time is worth money. Focus on what you do best—we'll handle your website.
            </p>
          </div>

          <Card className="border-2 shadow-medium overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left p-4 md:p-6 font-semibold text-base md:text-lg">Feature</th>
                      <th className="text-center p-4 md:p-6 font-semibold text-base md:text-lg">
                        <div className="flex items-center justify-center gap-2">
                          <X className="h-5 w-5 text-destructive" />
                          <span>DIY/Freelancer</span>
                        </div>
                      </th>
                      <th className="text-center p-4 md:p-6 font-semibold text-base md:text-lg bg-accent/5">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="h-5 w-5 text-success" />
                          <span>Hiring Us</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-4 md:p-6 font-medium">{row.category}</td>
                        <td className="p-4 md:p-6 text-center text-muted-foreground text-sm md:text-base">{row.diy}</td>
                        <td className="p-4 md:p-6 text-center font-medium bg-accent/5 text-sm md:text-base">{row.us}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-10">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white font-bold text-lg px-10 py-6"
              onClick={scrollToForm}
            >
              Get Started Today
            </Button>
            <p className="text-sm text-muted-foreground mt-3">Free mockup • No obligation</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
