import { Project } from "@/types";

export const valmanhwa: Project = {
  id: "valmanhwa",
  title: "ValManhwa - Manga & Manhwa Reader",
  category: "FULL-STACK WEB APP",
  description: "Built a high-performance comic reader platform featuring a premium dark mode glassmorphism UI, integrated content scraping engine, and frictionless user experience with instant page transitions.",
  image: "/valmanhwa_home.png", // TBD: Please replace with actual screenshot
  metric1: "Instant",
  metric1Label: "Navigation (Phantom UI)",
  metric2: "Integrated",
  metric2Label: "Admin Scraping Engine",
  clientName: "Personal Project",
  clientIndustry: "Entertainment & Media",
  projectGoal: "Context:\nComic readers often suffer from slow image loading, poor UI/UX, and broken responsive designs. Managing content manually is also tedious and time-consuming.\n\nTechnical Challenge:\nBuild a highly responsive reader with instant page transitions, strict premium aesthetics, and an integrated backend to scrape and serve comic chapters efficiently.\n\nSolution:\nDeveloped a Next.js 16 (App Router) application leveraging React 19 Server Components for data fetching, Tailwind CSS v4 for a strict dark-mode zinc palette, and Prisma with Supabase PostgreSQL. Integrated 'Phantom UI' for skeleton streaming and Cheerio for an admin scraping module.\n\nOutcome:\nA highly performant, visually stunning reading platform with robust social features (bookmarks, ratings, nested comments) and an admin dashboard for effortless content management.",
  stackUsed: ["Next.js 16", "React 19", "Tailwind CSS v4", "Prisma", "Supabase (PostgreSQL)", "Auth.js", "Cheerio", "Phantom UI"],
  features: [
    {
      title: "Premium Glassmorphism UI",
      description: "A visually stunning dark-mode interface tailored for reading, featuring infinite scrolling, instant skeleton loading (Phantom UI), and reading history tracking.",
      image: "/valmanhwa_reader.png" // TBD
    },
    {
      title: "Admin Scraping Dashboard",
      description: "A comprehensive admin panel equipped with a Cheerio-based scraping engine (Kiryuu Tracker) to easily fetch and update series data with a single click.",
      image: "/valmanhwa_admin.png" // TBD
    },
    {
      title: "Interactive Social Features",
      description: "Fully featured user engagement system including bookmarks, ratings, and nested comments using Next.js Server Actions.",
      image: "/valmanhwa_social.png" // TBD
    }
  ],
  featured: true,
  liveUrl: "https://valmanhwa.web.id"
};
