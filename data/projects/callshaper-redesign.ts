import { Project } from "@/types";

export const callshaperRedesign: Project = {
  id: "callshaper-redesign",
  title: "CallShaper Website Redesign",
  category: "WORDPRESS DEVELOPMENT",
  description: "Redesigned CallShaper's SaaS marketing website using Elementor, delivering a modern user experience while ensuring a seamless migration from staging to production.",
  image: "/callshaper.png",
  metric1: "0s",
  metric1Label: "CRM Inquiry Downtime",
  metric2: "100%",
  metric2Label: "CRM Integration Validated",
  clientName: "CallShaper LLC",
  clientIndustry: "Cloud Contact Center Software",
  projectGoal: "Context:\nCallShaper's legacy marketing site no longer reflected their modern SaaS cloud contact center platform, despite being the primary channel for incoming CRM lead inquiries.\n\nTechnical Challenge:\nExecute a complete redesign and rebuild without disrupting active CRM inquiry webhooks, as any downtime would result in direct lead loss.\n\nSolution:\nDeployed the development build on a separate staging subdomain for thorough testing, cutting over the primary domain only after verifying clean CRM webhook integration.\n\nOutcome:\nSuccessfully launched the redesigned website with minimal downtime, providing a modern marketing experience without disrupting existing operations.",
  stackUsed: ["WordPress", "Elementor", "PHP", "JavaScript", "Tailwind CSS"],
  features: [
    {
      title: "Elementor Page Redesign",
      description: "Complete visual redesign of core marketing sections (Home, Solutions, Pricing, Demo, Resources, About) using Elementor.",
      image: "/callshaper.png"
    },
    {
      title: "Zero-Downtime Domain & CRM Migration",
      description: "Validated CRM webhook transmission on a staging environment prior to primary domain DNS switchover.",
      image: "/callshaper_screenshot.png"
    }
  ],
  featured: false,
  liveUrl: "https://www.callshaper.com"
};
