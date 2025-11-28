import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Clock, Phone, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 hero-gradient opacity-95" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-8 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          {/* 
            HEADLINE OPTIONS (choose one):
            
            Option 1 (Power Washing Focus): 
            "Power Washing Companies: Get a Website That Brings in 20+ Calls Per Month"
            
            Option 2 (Electrician Focus):
            "Electricians: Stop Losing Jobs to Competitors with Better Websites"
            
            Option 3 (General - Currently Active):
            "Local Service Businesses: Get More Customers with a Website That Actually Works"
          */}
          <h1 className="font-display font-extrabold text-white mb-6 animate-slide-up text-balance">
            Local Service Businesses: Get More Customers with a Website That Actually Works
          </h1>
          
          {/* 
            SUBHEADLINE OPTIONS:
            
            Option 1 (ROI Focus - Currently Active):
            "Professional websites that pay for themselves in 2-3 jobs. Built for power washing & electrical businesses."
            
            Option 2 (Lead Focus):
            "Turn your website into a 24/7 lead generator. Get 10-30 qualified leads per month on autopilot."
          */}
          <p className="text-xl md:text-2xl text-white/95 mb-10 animate-slide-up lead max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
            Professional websites that pay for themselves in 2-3 jobs. Built for power washing & electrical businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up mb-10" style={{ animationDelay: "0.2s" }}>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-hover text-white font-bold text-lg px-10 py-7 shadow-strong hover:shadow-glow transition-all text-base sm:text-lg group"
              onClick={scrollToForm}
            >
              Get Free Mockup
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white/90 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary font-semibold text-lg px-10 py-7 transition-all"
              onClick={scrollToPricing}
            >
              See Pricing
            </Button>
          </div>

          {/* Micro-copy for trust */}
          <p className="text-white/80 text-sm mb-8 animate-slide-up" style={{ animationDelay: "0.25s" }}>
            No contract. No pressure. Just results.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-white/90 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-success" />
              <span className="text-sm font-medium">US-Based Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-success" />
              <span className="text-sm font-medium">2-Week Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-success" />
              <span className="text-sm font-medium">50+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-success" />
              <span className="text-sm font-medium">Free NGO Websites</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48H1440V0C1440 0 1140 48 720 48C300 48 0 0 0 0V48Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
