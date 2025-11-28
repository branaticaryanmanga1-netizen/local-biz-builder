import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Green Earth Foundation",
    role: "Environmental NGO",
    content: "The team created a beautiful website for our non-profit completely free of charge. Their commitment to supporting local organizations is incredible. The site has helped us reach more volunteers and donors.",
    logo: "🌍"
  },
  {
    name: "Youth Education Alliance",
    role: "Education Non-Profit",
    content: "Professional, responsive, and genuinely caring. They understood our mission and translated it into a website that connects with our community. We're grateful for their free NGO program.",
    logo: "📚"
  },
  {
    name: "Community Care Network",
    role: "Healthcare Non-Profit",
    content: "Exceptional work on our NGO website. They made the process easy and delivered a site that showcases our impact. The free service for non-profits is a game-changer for small organizations like ours.",
    logo: "❤️"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28" id="testimonials">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Supporting Our Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're proud to build free websites for local non-profit organizations making a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="h-10 w-10 text-accent/20" />
                  <span className="text-4xl">{testimonial.logo}</span>
                </div>

                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-lg">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Are you a registered non-profit? <a href="#lead-form" className="text-accent font-semibold hover:underline">Contact us about free website services</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
