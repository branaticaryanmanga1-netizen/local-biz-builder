import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="container px-4 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">LocalBiz Web</h3>
            <p className="text-white/80 mb-6 leading-relaxed max-w-md">
              Professional websites and digital marketing for power washing companies, 
              electricians, and local service businesses across the United States.
            </p>
            <div className="inline-block bg-success/20 border border-success/40 rounded-lg px-4 py-2">
              <p className="text-success font-semibold text-sm flex items-center gap-2">
                <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
                Free Websites for 501(c)(3) Organizations
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-display">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/80 hover:text-accent transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/80 hover:text-accent transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Pricing
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/80 hover:text-accent transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-accent transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#lead-form" className="text-white/80 hover:text-accent transition-colors flex items-center gap-2 group">
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 font-display">Get in Touch</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@localbizweb.com" className="flex items-start group">
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 hover:text-accent transition-colors break-all">
                    hello@localbizweb.com
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="flex items-start group">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 text-accent group-hover:scale-110 transition-transform" />
                  <span className="text-white/80 hover:text-accent transition-colors">
                    (555) 123-4567
                  </span>
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 text-accent" />
                <span className="text-white/80">
                  Serving businesses nationwide across the USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-8 md:p-10 mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display text-2xl font-bold mb-2">Ready to Grow Your Business?</h4>
              <p className="text-white/80">Get your free homepage mockup in 24 hours</p>
            </div>
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent-hover text-white font-bold shadow-strong flex-shrink-0"
              onClick={scrollToForm}
            >
              Get Free Mockup
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} LocalBiz Web. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-accent transition-colors text-sm">
              Terms of Service
            </a>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-white/60 hover:text-accent hover:bg-white/10"
            >
              <ArrowUp className="h-4 w-4 mr-1" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>

      {/* Schema.org LocalBusiness structured data - Add this to your index.html head */}
      {/* 
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "LocalBiz Web",
        "description": "Professional websites and SEO for power washing companies, electricians, and local service businesses",
        "url": "https://yourdomain.com",
        "logo": "https://yourdomain.com/logo.png",
        "image": "https://yourdomain.com/og-image.jpg",
        "telephone": "+1-555-123-4567",
        "email": "hello@localbizweb.com",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "your-latitude",
          "longitude": "your-longitude"
        },
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "priceRange": "$299-$799",
        "paymentAccepted": "Cash, Credit Card, PayPal",
        "openingHours": "Mo-Fr 09:00-18:00",
        "sameAs": [
          "https://facebook.com/yourpage",
          "https://linkedin.com/company/yourcompany",
          "https://twitter.com/yourhandle"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "50"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Web Design Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Basic Website Package",
                "description": "5-page professional website with mobile responsive design"
              },
              "price": "299",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Standard Website Package",
                "description": "10-page custom website with SEO and booking system"
              },
              "price": "499",
              "priceCurrency": "USD"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Premium Website Package",
                "description": "Unlimited pages with custom design and e-commerce"
              },
              "price": "799",
              "priceCurrency": "USD"
            }
          ]
        }
      }
      </script>
      */}
    </footer>
  );
};

export default Footer;
