import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-bold mb-4">LocalBiz Web</h3>
            <p className="text-white/80 mb-4">
              Professional websites and digital marketing for power washing companies, 
              electricians, and local service businesses across the United States.
            </p>
            <p className="text-white/80 text-sm">
              Free websites for registered non-profit organizations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-white/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white/80 hover:text-accent transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/80 hover:text-accent transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#lead-form" className="text-white/80 hover:text-accent transition-colors">
                  Get Started
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5 text-accent" />
                <a href="mailto:hello@localbizweb.com" className="text-white/80 hover:text-accent transition-colors">
                  hello@localbizweb.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5 text-accent" />
                <a href="tel:+15551234567" className="text-white/80 hover:text-accent transition-colors">
                  (555) 123-4567
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5 text-accent" />
                <span className="text-white/80">
                  Serving businesses across the USA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} LocalBiz Web. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Schema.org structured data suggestion (add to head via Helmet or similar) */}
        {/* 
        <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "LocalBiz Web",
          "description": "Professional websites for power washing companies and electricians",
          "url": "https://yourdomain.com",
          "telephone": "+1-555-123-4567",
          "email": "hello@localbizweb.com",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US"
          },
          "priceRange": "$299-$799",
          "areaServed": "United States"
        }
        </script>
        */}
      </div>
    </footer>
  );
};

export default Footer;
