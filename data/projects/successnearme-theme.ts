import { Project } from "@/types";

export const successNearMeTheme: Project = {
  id: "successnearme-theme",
  title: "SuccessNearMe Custom Theme",
  category: "WORDPRESS DEVELOPMENT",
  description: "I converted Success Near Me's static marketing site into a fully functional custom WordPress theme. The site serves small businesses under $10M in revenue across industries including retail, professional services, and construction. I structured multi-page PHP templates, integrated a Free Strategy Session lead capture flow, and optimized performance across all devices.",
  image: "/successnearme.jpg",
  metric1: "7",
  metric1Label: "Custom Page Templates",
  metric2: "100%",
  metric2Label: "Static to WordPress Conversion",
  clientName: "Success Near Me",
  clientIndustry: "Small Business Growth & Strategy Consulting",
  projectGoal: "Convert a static HTML site into a scalable custom WordPress theme for a consulting firm offering Business Plans, Marketing Strategies, and Financial Reviews powered by AI assistance. Key requirement was implementing a Free Strategy Session application flow as the primary lead capture CTA, alongside building reusable PHP templates for 7 pages: Home, Why Choose Us, Services, Meet Our Team, Expertise, Blog, and Contact.",
  stackUsed: ["WordPress", "PHP", "Bootstrap 5", "HTML5", "CSS3", "JavaScript"],
  features: [
    {
      title: "Multi-Page Custom PHP Templates",
      description: "Built 7 fully custom WordPress PHP templates (Home, Why Choose Us, Services, Meet Our Team, Expertise, Blog, Contact) from static HTML — each utilizing the WordPress loop, custom page metadata, and reusable header/footer partials.",
      image: "/successnearme.jpg"
    },
    {
      title: "Free Strategy Session Lead Capture",
      description: "Implemented the primary conversion flow — a Free Strategy Session application page with a structured intake form, routing consultation requests directly to the client's pipeline for small business owners seeking growth strategy.",
      image: "/freestrategy.png"
    }
  ],
  featured: true,
  liveUrl: "https://successnearme.com"
};
