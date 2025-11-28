import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { CheckCircle2, Sparkles } from "lucide-react";

const businessTypes = [
  { id: "power-washing", label: "Power Washing / Pressure Cleaning" },
  { id: "electrician", label: "Electrician / Electrical Services" },
  { id: "plumbing", label: "Plumbing Services" },
  { id: "hvac", label: "HVAC / Heating & Cooling" },
  { id: "landscaping", label: "Landscaping / Lawn Care" },
  { id: "ngo", label: "Non-Profit Organization (Free Service)" },
  { id: "other", label: "Other Service Business" }
];

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    businessTypes: [] as string[],
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setShowSuccess(true);
      setIsSubmitting(false);
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          business: "",
          businessTypes: [],
          message: ""
        });
      }, 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleCheckboxChange = (businessTypeId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      businessTypes: checked
        ? [...prev.businessTypes, businessTypeId]
        : prev.businessTypes.filter(id => id !== businessTypeId)
    }));
  };

  if (showSuccess) {
    return (
      <section className="section-spacing bg-secondary/30" id="lead-form">
        <div className="container px-4 md:px-8 max-w-3xl mx-auto">
          <Card className="border-2 border-success shadow-strong bg-success/5">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-12 w-12 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="font-display text-3xl font-bold mb-4">
                You're All Set! 🎉
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
                Thank you for your interest! We'll create your custom homepage mockup and send it to <strong>{formData.email}</strong> within the next 24 hours.
              </p>
              <div className="bg-background p-6 rounded-lg max-w-md mx-auto">
                <h4 className="font-semibold mb-3">What Happens Next?</h4>
                <ul className="text-sm text-left space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Check your email for your personalized mockup</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Review the design and pricing options</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Book a free call if you want to move forward</span>
                  </li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground mt-6">
                P.S. Check your spam folder if you don't see our email!
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="section-spacing bg-secondary/30" id="lead-form">
      <div className="container px-4 md:px-8 max-w-4xl mx-auto">
        <Card className="border-2 shadow-strong">
          <CardHeader className="text-center pb-8 pt-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
            <CardTitle className="font-display text-3xl md:text-4xl mb-4">
              Get Your Free Homepage Mockup
            </CardTitle>
            <CardDescription className="text-lg leading-relaxed max-w-2xl mx-auto">
              No obligation. No pressure. No sales pitch. Just a custom mockup showing exactly what your new website could look like—delivered in 24 hours.
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 md:px-10 pb-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-base font-semibold">Your Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Smith"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-base font-semibold">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-base font-semibold">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 123-4567"
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="business" className="text-base font-semibold">Business Name *</Label>
                  <Input
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    placeholder="Smith's Power Washing"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              {/* Business Type Selection */}
              <div className="space-y-4">
                <Label className="text-base font-semibold">What type of business do you have? *</Label>
                <div className="grid sm:grid-cols-2 gap-4 p-6 bg-muted/30 rounded-lg">
                  {businessTypes.map((type) => (
                    <div key={type.id} className="flex items-start space-x-3">
                      <Checkbox
                        id={type.id}
                        checked={formData.businessTypes.includes(type.id)}
                        onCheckedChange={(checked) => handleCheckboxChange(type.id, checked as boolean)}
                      />
                      <label
                        htmlFor={type.id}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                      >
                        {type.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-base font-semibold">Tell Us About Your Project</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What services do you offer? What goals do you have for your website? Any specific features you need? (Optional but helps us create a better mockup)"
                  rows={6}
                  className="resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="space-y-4">
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent-hover text-white font-bold text-lg py-7 shadow-medium hover:shadow-strong transition-all"
                  disabled={isSubmitting || formData.businessTypes.length === 0}
                  size="lg"
                >
                  {isSubmitting ? "Sending..." : "Get My Free Mockup →"}
                </Button>

                <p className="text-sm text-center text-muted-foreground leading-relaxed">
                  By submitting, you agree to receive our mockup and occasional emails. We hate spam too—unsubscribe anytime. We typically respond within 24 hours.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadForm;
