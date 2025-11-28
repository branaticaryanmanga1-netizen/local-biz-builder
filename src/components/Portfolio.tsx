import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Power Washing Pro",
    category: "Power Washing",
    description: "Complete website redesign with booking system"
  },
  {
    image: portfolio2,
    title: "Elite Electricians",
    category: "Electrical Services",
    description: "SEO-optimized site with service area pages"
  },
  {
    image: portfolio3,
    title: "Local Contractor Co",
    category: "General Contractor",
    description: "Modern portfolio site with gallery"
  },
  {
    image: portfolio4,
    title: "Community Helpers",
    category: "Non-Profit",
    description: "Free website for local NGO"
  },
  {
    image: portfolio5,
    title: "Home Services Plus",
    category: "Multi-Service",
    description: "Custom booking and pricing system"
  },
  {
    image: portfolio6,
    title: "Quick Plumbing",
    category: "Plumbing Services",
    description: "Emergency service focused design"
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary/30" id="portfolio">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Recent Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real websites for real local businesses. See what we can do for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioItems.map((item, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-medium hover:shadow-strong transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <span className="text-sm font-semibold text-accent mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="font-display text-2xl font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
