import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Download } from "lucide-react";

const websitePackages = [
  {
    name: "Basic",
    price: "$299",
    description: "Perfect for getting started",
    features: [
      "5-page website",
      "Mobile responsive",
      "Contact form",
      "Google Maps",
      "Basic SEO setup",
      "2 rounds of revisions"
    ],
    popular: false
  },
  {
    name: "Standard",
    price: "$499",
    description: "Most popular choice",
    features: [
      "10-page website",
      "Mobile responsive",
      "Contact & booking forms",
      "Photo gallery",
      "Advanced SEO",
      "Social media links",
      "3 rounds of revisions",
      "1 month support"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "$799",
    description: "For serious growth",
    features: [
      "Unlimited pages",
      "Custom design",
      "Online booking system",
      "Blog setup",
      "Premium SEO package",
      "E-commerce ready",
      "5 rounds of revisions",
      "3 months support"
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
      "5 local citations",
      "Monthly keyword tracking",
      "Monthly performance report"
    ]
  },
  {
    name: "SEO Pro",
    price: "$399/mo",
    features: [
      "Everything in Starter",
      "15 local citations",
      "Content optimization",
      "Competitor analysis",
      "Review management",
      "Bi-weekly reports"
    ]
  }
];

const Pricing = () => {
  const handleDownloadPDF = () => {
    // In production, this would download an actual PDF
    // For now, we'll show a toast notification
    alert("PDF pricing sheet download coming soon! Contact us for detailed pricing.");
  };

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28" id="pricing">
      <div className="container px-4 md:px-6">
        {/* Website Packages */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Simple, Honest Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            No hidden fees. No surprises. Just straightforward pricing that fits your budget.
          </p>
          <Button 
            variant="outline" 
            onClick={handleDownloadPDF}
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Download Full Pricing PDF
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {websitePackages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative border-2 hover:shadow-strong transition-all duration-300 ${
                pkg.popular ? 'border-accent shadow-medium' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <CardTitle className="font-display text-2xl mb-2">{pkg.name}</CardTitle>
                <CardDescription className="text-base">{pkg.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">one-time</span>
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${pkg.popular ? 'bg-accent hover:bg-accent/90' : ''}`}
                  variant={pkg.popular ? "default" : "outline"}
                  onClick={scrollToForm}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEO Packages */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Monthly SEO Services
            </h3>
            <p className="text-lg text-muted-foreground">
              Keep climbing search rankings with ongoing SEO
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {seoPackages.map((pkg, index) => (
              <Card key={index} className="border-2 hover:shadow-medium transition-all">
                <CardHeader>
                  <CardTitle className="font-display text-2xl">{pkg.name}</CardTitle>
                  <div className="mt-2">
                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={scrollToForm}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
