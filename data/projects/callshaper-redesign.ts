import { Project } from "@/types";

export const callshaperRedesign: Project = {
  id: "callshaper-redesign",
  title: "CallShaper Website Redesign ",
  category: "WORDPRESS DEVELOPMENT",
  description: "I redesigned CallShaper's corporate WordPress marketing site using Elementor, rebuilding the full page layout for their cloud contact center software platform. The redesign covers their Solutions, Pricing, Demo, Resources, and About sections — while preserving existing CRM and API integration hooks and managing a full domain migration.",
  image: "/callshaper.png",
  metric1: "10+",
  metric1Label: "Pages Redesigned",
  metric2: "Stable",
  metric2Label: "Domain Migration Status",
  clientName: "CallShaper LLC",
  clientIndustry: "Cloud Contact Center Software",
  projectGoal: "Rebuild CallShaper's public marketing website with a refreshed Elementor-based layout that accurately represents their all-in-one cloud contact center platform — covering inbound, outbound, predictive dialing, TAS, and AI agent solutions. Preserve all existing lead form integrations and CRM pipeline hooks while executing a clean domain migration with no downtime on inquiry routing.",
  stackUsed: ["WordPress", "Elementor", "PHP", "JavaScript", "Tailwind CSS"],
  features: [
    {
      title: "Elementor Page Redesign",
      description: "Rebuilt all major marketing pages (Home, Solutions, Pricing, Demo, Resources, About) using Elementor with custom responsive sections — covering CallShaper's full product suite including inbound, outbound, predictive dialing, and AI agent capabilities.",
      image: "/callshaper.png"
    },
    {
      title: "CRM Integration & Domain Migration",
      description: "Preserved all existing contact form webhooks and CRM pipeline hooks during a full domain migration, ensuring zero disruption to lead routing and inquiry flows across the new environment.",
      image: "/callshaper_screenshot.png"
    }
  ],
  featured: false,
  liveUrl: "https://www.callshaper.com"
};
