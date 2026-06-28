import { Project } from "@/types";

export const vertexDashboard: Project = {
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
  featured: false
};
