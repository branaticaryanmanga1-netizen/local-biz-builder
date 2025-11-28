import { Card, CardContent } from "@/components/ui/card";
import { Quote, Play, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "Executive Director",
    organization: "Green Earth Foundation",
    location: "Portland, OR",
    content: "The team created a beautiful website for our environmental non-profit completely free of charge. Their commitment to supporting local organizations is incredible. The site has helped us reach 200+ new volunteers and increased donations by 35% in just three months.",
    logo: "🌍",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    name: "Marcus Johnson",
    role: "Program Coordinator",
    organization: "Youth Education Alliance",
    location: "Chicago, IL",
    content: "Professional, responsive, and genuinely caring. They understood our mission to provide free tutoring and translated it into a website that truly connects with our community. The online registration system they built has been a game-changer. We're grateful for their free NGO program.",
    logo: "📚",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    name: "Dr. Emily Chen",
    role: "Founder & CEO",
    organization: "Community Care Network",
    location: "Austin, TX",
    content: "Exceptional work on our healthcare NGO website. They made the process incredibly easy and delivered a site that beautifully showcases our impact in underserved communities. The free service for non-profits is truly a blessing for small organizations like ours trying to make a big difference.",
    logo: "❤️",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  }
];

const Testimonials = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-spacing bg-background" id="testimonials">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-display font-bold mb-6">
            Giving Back to Our Community
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            We build free websites for registered non-profit organizations making a real difference.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="border-2 hover:shadow-strong hover:border-accent/50 transition-all duration-300 hover-lift animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon and Emoji */}
                <div className="flex items-start justify-between mb-6">
                  <Quote className="h-12 w-12 text-accent/30" strokeWidth={1.5} />
                  <span className="text-5xl">{testimonial.logo}</span>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-muted-foreground mb-8 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="border-t pt-6">
                  <div className="flex items-start gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.name} profile`}
                      className="w-14 h-14 rounded-full bg-muted flex-shrink-0"
                    />
                    <div>
                      <p className="font-bold text-lg leading-tight mb-1">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground mb-2">{testimonial.role}</p>
                      <p className="text-sm font-semibold text-primary">{testimonial.organization}</p>
                      <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonial Placeholder */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 hover:shadow-medium transition-all overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Video Placeholder */}
                <div className="relative bg-gradient-to-br from-primary to-primary-light aspect-video md:aspect-auto flex items-center justify-center group cursor-pointer">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 text-center text-white">
                    <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-strong">
                      <Play className="h-10 w-10 ml-1" fill="currentColor" />
                    </div>
                    <p className="font-semibold text-lg">Watch Mike's Story</p>
                    <p className="text-sm text-white/80">Power Washing Business Owner</p>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <Quote className="h-10 w-10 text-accent/30 mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-4">
                    "My Website Paid for Itself in the First Week"
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Mike from CleanSlate Power Washing shares how his new website brought in 15 new customers in the first month, generating over $8,000 in revenue.
                  </p>
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mike" 
                      alt="Mike profile"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <p className="font-bold">Mike Rodriguez</p>
                      <p className="text-sm text-muted-foreground">CleanSlate Power Washing</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* NGO CTA */}
        <div className="text-center mt-16 max-w-2xl mx-auto bg-accent/5 p-8 md:p-12 rounded-xl border-2 border-accent/20">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Are You a Registered Non-Profit?
          </h3>
          <p className="text-muted-foreground mb-8 text-lg">
            We offer completely free website services to 501(c)(3) organizations. Let's help amplify your mission.
          </p>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent-hover text-white font-bold"
            onClick={scrollToForm}
          >
            Apply for Free Website
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Limited spots available • Verification required
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
