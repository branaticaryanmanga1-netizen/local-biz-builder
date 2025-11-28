import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, CheckCircle } from "lucide-react";

const CalendlySection = () => {
  const openCalendly = () => {
    // In production, this would open actual Calendly widget
    window.open("https://calendly.com", "_blank");
  };

  return (
    <section className="section-spacing bg-gradient-to-br from-primary via-primary to-primary-dark text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-accent/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
      
      <div className="container px-4 md:px-8 max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6 backdrop-blur-sm">
            <Calendar className="h-10 w-10 text-accent" strokeWidth={2} />
          </div>
          
          <h2 className="font-display font-bold mb-6">
            Ready to Talk? Let's Schedule a Free Call
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute consultation. We'll discuss your business goals, 
            answer all your questions, and show you exactly how we can help you get more customers.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <Clock className="h-8 w-8 text-accent mb-4" />
            <h3 className="font-bold text-lg mb-2">30 Minutes</h3>
            <p className="text-white/80 text-sm">Quick, focused conversation—no time wasted</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <Video className="h-8 w-8 text-accent mb-4" />
            <h3 className="font-bold text-lg mb-2">Video or Phone</h3>
            <p className="text-white/80 text-sm">Your choice—whatever works best for you</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <CheckCircle className="h-8 w-8 text-accent mb-4" />
            <h3 className="font-bold text-lg mb-2">Zero Pressure</h3>
            <p className="text-white/80 text-sm">Honest advice, not a sales pitch</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-hover text-white font-bold text-lg px-12 py-7 shadow-strong hover:shadow-glow transition-all"
            onClick={openCalendly}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Your Free Call Now
          </Button>

          <p className="text-white/70 mt-6 text-sm">
            Available Monday-Friday, 9 AM - 6 PM EST • Book your preferred time slot
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
