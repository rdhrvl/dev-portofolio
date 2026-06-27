export interface ProjectFeature {
  title: string;
  description: string;
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  metric1: string;
  metric1Label: string;
  metric2: string;
  metric2Label: string;
  clientName: string;
  clientIndustry: string;
  projectGoal: string;
  stackUsed: string[];
  features: ProjectFeature[];
  featured?: boolean;
  liveUrl?: string;
}

export const projectsData: Project[] = [
  {
    id: "vertex-dashboard",
    title: "Vertex Business Dashboard",
    category: "FINTECH PRODUCT",
    description: "I engineered a fully responsive client-side interface allowing financial analysts to model and track investment streams in real time. The solution reduced dashboard data load times from 8 seconds to 250 milliseconds.",
    image: "/project_saas.png",
    metric1: "250ms",
    metric1Label: "Data Load Speed",
    metric2: "34%",
    metric2Label: "Efficiency Increase",
    clientName: "Vertex Analytics Inc.",
    clientIndustry: "Financial Technology & Wealth Management",
    projectGoal: "Build a highly responsive analytics dashboard replacing an older legacy web portal. The goal was to render complex real-time datasets without blocking browser main threads or causing memory leaks.",
    stackUsed: ["Next.js", "TypeScript", "Zustand", "Recharts", "Tailwind CSS", "PostgreSQL"],
    features: [
      {
        title: "Real-time Investment Stream Tracking",
        description: "Interactive line charts and metrics dynamically showing portfolio growth rate, user deposits, and withdrawal activities over a rolling timeline.",
        image: "/vertex_detail_1.png"
      },
      {
        title: "Modular Dash Widgets",
        description: "Draggable widgets that customize the analytics panels, enabling analysts to sort cards according to priority workflows.",
        image: "/vertex_detail_2.png"
      }
    ],
    featured: true
  },
  {
    id: "nordic-storefront",
    title: "Nordic Living Storefront",
    category: "LUXURY RETAIL",
    description: "A high-end headless storefront using Shopify API for catalog management and a custom-designed Next.js frontend. Fully localized for multi-currency markets with dynamic content blocks.",
    image: "/project_ecom.png",
    metric1: "120%",
    metric1Label: "Mobile Conversions",
    metric2: "98",
    metric2Label: "Lighthouse SEO Score",
    clientName: "Nordic Living Ltd.",
    clientIndustry: "Premium Home Decor & Furniture E-Commerce",
    projectGoal: "Develop a lightning-fast shopping experience prioritizing mobile conversions. The system needed static page speed metrics alongside dynamic checkout validation and localized currency features.",
    stackUsed: ["Next.js", "Shopify API", "Stripe Elements", "Tailwind CSS", "Prisma", "Vercel"],
    features: [
      {
        title: "Sleek Checkout & Payment Interface",
        description: "Custom multi-step checkout form utilizing Stripe Elements API, enabling quick credit card entries with validation overlays.",
        image: "/nordic_detail_1.png"
      },
      {
        title: "Dynamic Desktop & Mobile Storefront Grid",
        description: "Fully responsive, optimized grid layout presenting product catalogs with instant filters and product detail overlays.",
        image: "/project_ecom.png"
      }
    ],
    featured: true
  },
  {
    id: "successnearme-theme",
    title: "SuccessNearMe Custom Theme",
    category: "WORDPRESS DEVELOPMENT",
    description: "I converted Success Near Me's marketing site into a custom WordPress theme. Restructured the core layouts into PHP templates, integrated lead routing, and optimized page speed to support local business strategic consultations.",
    image: "/successnearme_screenshot.png",
    metric1: "98",
    metric1Label: "Lighthouse Score",
    metric2: "Theme",
    metric2Label: "Static to WordPress Conversion",
    clientName: "Success Near Me",
    clientIndustry: "Business Consulting & Digital Strategy",
    projectGoal: "Convert the consulting firm's static layouts into a highly responsive, custom WordPress theme. Integrate strategy scheduling flows and automate client lead captures while optimizing performance scores.",
    stackUsed: ["WordPress", "PHP", "Bootstrap 5", "HTML5", "CSS3", "JavaScript"],
    features: [
      {
        title: "WordPress Template Refactoring",
        description: "Restructuring static HTML layouts into standard templates (header, footer, sidebar, single, page) utilizing the loop for dynamic queries.",
        image: "/successnearme_screenshot.png"
      },
      {
        title: "Bootstrap Grid Integration",
        description: "Re-engineering layout grids with responsive Bootstrap classes to render directory listings across all major screen sizes.",
        image: "/nordic_detail_1.png"
      }
    ],
    featured: true,
    liveUrl: "https://successnearme.com"
  },
  {
    id: "callshaper-redesign",
    title: "WordPress Redesign (CallShaper)",
    category: "WORDPRESS DEVELOPMENT",
    description: "I redesigned CallShaper's corporate WordPress platform by applying a brand-new layout utilizing Elementor. The implementation preserves lead forms integrated with Zoho CRM API pipelines while transitioning the system securely to a new domain environment.",
    image: "/callshaper_screenshot.png",
    metric1: "100%",
    metric1Label: "CRM Integration Hook Stability",
    metric2: "Stable",
    metric2Label: "Domain Migration Status",
    clientName: "CallShaper LLC",
    clientIndustry: "Cloud Contact Center & VoIP SaaS",
    projectGoal: "Re-engineer CallShaper's public marketing website with updated layout files using the Elementor page builder. Maintain automated inquiry collection templates routing leads to Zoho CRM pipelines and manage domain redirects during migration.",
    stackUsed: ["WordPress", "Elementor", "Zoho CRM", "PHP", "Tailwind CSS", "JavaScript"],
    features: [
      {
        title: "Elementor Layout Implementation",
        description: "Refactoring UI wireframe files into custom responsive drag-and-drop Elementor layout sections for future editorial ease.",
        image: "/callshaper_screenshot.png"
      },
      {
        title: "Zoho CRM Pipeline Hooking",
        description: "Preserving backend contact webhook triggers and form actions so that all new inquiries flow directly into Zoho CRM pipelines.",
        image: "/nordic_detail_1.png"
      }
    ],
    featured: false,
    liveUrl: "https://www.callshaper.com"
  }
];
