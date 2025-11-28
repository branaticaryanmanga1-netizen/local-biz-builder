import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Download, Star, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const websitePackages = [
  {
    name: "Basic",
    price: "$299",
    description: "Perfect for getting started online",
    features: [
      "5-page professional website",
      "Mobile responsive design",
      "Contact form integration",
      "Google Maps embedded",
      "Basic SEO optimization",
      "2 rounds of revisions",
      "1 week support"
    ],
    popular: false
  },
  {
    name: "Standard",
    price: "$499",
    description: "Best value for local businesses",
    features: [
      "10-page custom website",
      "Mobile & tablet optimized",
      "Advanced contact forms",
      "Photo gallery showcase",
      "Complete SEO package",
      "Social media integration",
      "Online booking setup",
      "3 rounds of revisions",
      "1 month priority support"
    ],
    popular: true,
    badge: "Most Popular"
  },
  {
    name: "Premium",
    price: "$799",
    description: "For businesses ready to dominate",
    features: [
      "Unlimited pages",
      "100% custom design",
      "Advanced booking system",
      "Blog & content management",
      "Premium SEO + local citations",
      "E-commerce capabilities",
      "Email marketing setup",
      "Video integration",
      "5 rounds of revisions",
      "3 months priority support"
    ],
    popular: false
  }
];

const seoPackages = [
  {
    name: "SEO Starter",
    price: "$199/mo",
    features: [
      "Google My Business optimization",
      "5 local business citations",
      "Monthly keyword tracking",
      "Monthly performance report",
      "Basic competitor analysis"
    ]
  },
  {
    name: "SEO Pro",
    price: "$399/mo",
    features: [
      "Everything in Starter",
      "15 premium citations",
      "Monthly content optimization",
      "In-depth competitor analysis",
      "Review management system",
      "Weekly ranking updates",
      "Bi-weekly strategy calls"
    ]
  }
];

const faqs = [
  {
    question: "What's your revision policy?",
    answer: "Each package includes multiple revision rounds. We'll work with you until you're completely satisfied. Additional revisions beyond your package are available at $50 per round."
  },
  {
    question: "How long does it take to build my website?",
    answer: "Basic sites: 1 week. Standard sites: 2 weeks. Premium sites: 2-3 weeks. We'll give you a detailed timeline during our kickoff call."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes! If you're not satisfied after the first design mockup, we offer a 100% money-back guarantee. Once we move to revisions, all sales are final."
  },
  {
    question: "Will I be able to update the website myself?",
    answer: "Absolutely. We'll provide training and documentation so you can make simple updates yourself. We also offer affordable monthly maintenance packages."
  },
  {
    question: "Do you help with domain and hosting?",
    answer: "Yes! We can help you purchase a domain ($15/year) and set up reliable hosting ($10-20/month). Or we can work with your existing hosting."
  }
];

const Pricing = () => {
  const handleDownloadPDF = () => {
    alert("PDF pricing sheet download coming soon! Contact us for detailed pricing breakdown with add-on services.");
  };

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-spacing bg-background" id="pricing">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            No hidden fees. No surprises. Choose the package that fits your budget and goals.
          </p>
          <Button 
            variant="outline" 
            onClick={handleDownloadPDF}
            className="gap-2 hover:shadow-medium transition-all"
            size="lg"
          >
            <Download className="h-4 w-4" />
            Download Full Pricing PDF
          </Button>
        </div>

        {/* Website Packages */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {websitePackages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative border-2 transition-all duration-300 hover-lift ${
                pkg.popular 
                  ? 'border-accent shadow-strong ring-4 ring-accent/10 scale-105' 
                  : 'hover:border-accent/50 hover:shadow-medium'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-accent text-white px-6 py-2 rounded-full text-sm font-bold shadow-medium flex items-center gap-1">
                    <Star className="h-4 w-4 fill-current" />
                    {pkg.badge}
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-10">
                <CardTitle className="font-display text-2xl mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.description}</CardDescription>
                <div className="mt-6">
                  <span className="text-5xl font-extrabold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
              </CardHeader>

              <CardContent className="pb-8">
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-success mr-3 flex-shrink-0 mt-1" strokeWidth={2.5} />
                      <span className="text-sm font-medium leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full font-bold text-base py-6 ${
                    pkg.popular 
                      ? 'bg-accent hover:bg-accent-hover shadow-medium' 
                      : 'border-2'
                  }`}
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={scrollToForm}
                  size="lg"
                >
                  Get Started
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-3">
                  No contract required
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEO Packages */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Monthly SEO Services
            </h3>
            <p className="text-lg text-muted-foreground">
              Keep climbing search rankings month after month
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seoPackages.map((pkg, index) => (
              <Card key={index} className="border-2 hover:shadow-medium hover:border-accent/50 transition-all hover-lift">
                <CardHeader className="pb-4">
                  <CardTitle className="font-display text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-extrabold text-primary">{pkg.price}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-success mr-3 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full border-2 font-semibold"
                    onClick={scrollToForm}
                    size="lg"
                  >
                    Learn More
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-3">
                    Cancel anytime
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HelpCircle className="h-8 w-8 text-accent" />
              <h3 className="font-display text-3xl font-bold">
                Common Questions
              </h3>
            </div>
            <p className="text-lg text-muted-foreground">
              Everything you need to know before getting started
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-2 mb-4 rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-base hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Still have questions? Let's talk.
            </p>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToForm}
              className="border-2 font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
