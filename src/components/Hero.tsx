import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          {/* Alternative Headlines (uncomment to use different options):
            Option 2: "Your Power Washing Business Deserves a Powerful Website"
            Option 3: "Local Electricians: Get Found Online. Get More Jobs."
          */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in text-balance">
            Get More Customers with a Website That Actually Works
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Professional websites built for power washing companies and electricians. 
            Fast turnaround. Fair pricing. Real results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              variant="default"
              className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 shadow-strong"
              onClick={scrollToForm}
            >
              Get Your Free Mockup
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6"
              onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Pricing
            </Button>
          </div>

          <p className="text-white/80 mt-8 text-sm">
            ✓ No contracts • ✓ Fast 2-week delivery • ✓ Free NGO websites available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
