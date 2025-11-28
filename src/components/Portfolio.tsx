import { Button } from "@/components/ui/button";
import { ExternalLink, Smartphone, Monitor } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "SparklePro Power Washing",
    category: "Power Washing",
    description: "Complete website redesign with booking system",
    results: "40% increase in leads in first month",
    tech: ["Booking System", "Before/After Gallery", "SEO"]
  },
  {
    image: portfolio2,
    title: "Elite Electrical Services",
    category: "Electrical Contractor",
    description: "SEO-optimized site with service area pages",
    results: "Ranked #1 for 'electrician near me'",
    tech: ["Local SEO", "Service Pages", "Lead Forms"]
  },
  {
    image: portfolio3,
    title: "HomeFix Contractors",
    category: "General Contractor",
    description: "Modern portfolio site with project gallery",
    results: "3x more quote requests",
    tech: ["Photo Gallery", "Testimonials", "Mobile-First"]
  },
  {
    image: portfolio4,
    title: "Hope Community Outreach",
    category: "Non-Profit (Free)",
    description: "Free website for local NGO",
    results: "2x volunteer signups",
    tech: ["Donation System", "Event Calendar", "Blog"]
  },
  {
    image: portfolio5,
    title: "QuickFix Home Services",
    category: "Multi-Service",
    description: "Custom booking and pricing calculator",
    results: "50+ bookings in first 2 weeks",
    tech: ["Online Booking", "Instant Quotes", "Live Chat"]
  },
  {
    image: portfolio6,
    title: "RapidFlow Plumbing",
    category: "Plumbing Services",
    description: "Emergency service focused design",
    results: "24/7 lead capture enabled",
    tech: ["Emergency Form", "Service Area Map", "Reviews"]
  }
];

const Portfolio = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-spacing bg-secondary/30" id="portfolio">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display font-bold mb-6">
            Recent Client Success Stories
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Real websites for real local businesses. See the results we deliver.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-medium hover:shadow-strong transition-all duration-500 hover-lift animate-slide-up bg-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container with Overlay */}
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={`${item.title} website mockup showing desktop and mobile views`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Hover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex items-center gap-2 mb-3">
                    <Monitor className="h-4 w-4" />
                    <Smartphone className="h-4 w-4" />
                    <span className="text-xs font-semibold">Desktop + Mobile Optimized</span>
                  </div>
                  
                  <p className="text-sm mb-3 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {item.tech.map((tech, idx) => (
                      <span key={idx} className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-bold text-success flex items-center gap-1">
                    <ExternalLink className="h-4 w-4" />
                    {item.results}
                  </p>
                </div>
              </div>

              {/* Default Visible Content */}
              <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-xs font-semibold text-accent uppercase tracking-wide mb-2 block">
                  {item.category}
                </span>
                <h3 className="font-display text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center max-w-2xl mx-auto bg-card p-8 md:p-12 rounded-xl shadow-medium border-2">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            Let's build a website that brings you real results, just like these.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-hover text-white font-bold text-lg px-10 py-6"
            onClick={scrollToForm}
          >
            Get Your Free Mockup
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            See your business online in 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
