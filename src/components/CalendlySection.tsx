import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CalendlySection = () => {
  const openCalendly = () => {
    // In production, this would open actual Calendly widget
    // For demo purposes, we'll use a placeholder
    window.open("https://calendly.com", "_blank");
  };

  return (
    <section className="py-20 md:py-28 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Calendar className="h-16 w-16 mx-auto mb-6 text-accent" />
          
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Ready to Talk? Let's Schedule a Call
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation. We'll discuss your business goals, 
            answer your questions, and show you exactly how we can help.
          </p>

          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-8 py-6 shadow-strong"
            onClick={openCalendly}
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Your Free Call
          </Button>

          <p className="text-white/70 mt-6 text-sm">
            No sales pitch. Just honest advice about growing your business online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CalendlySection;
