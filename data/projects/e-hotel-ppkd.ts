import { Project } from "@/types";

export const eHotelPpkd: Project = {
  id: "e-hotel-ppkd",
  title: "Hotel Management System",
  category: "FULL-STACK WEB APP",
  description: "Built a full-stack hotel management system that replaced manual front desk workflows with a centralized real-time dashboard, streamlining guest check-ins, room management, and operational visibility.",
  image: "/ppkd_dashboard.png",
  metric1: "Real-Time",
  metric1Label: "Livewire State Synchronization",
  metric2: "Zero",
  metric2Label: "Duplicate Booking Conflicts",
  clientName: "PPKD Project",
  clientIndustry: "Hospitality & Hotel Operations",
  projectGoal: "Context:\nFront desk staff relied on paper records to manage room availability, guest check-ins, and operational updates, leading to delays and inconsistent information.\n\nTechnical Challenge:\nReplace fragmented manual workflows with a centralized system while keeping room status synchronized in real time across all users.\n\nSolution:\nDeveloped a Laravel Livewire application with role-based access, real-time state synchronization, and an integrated reservation workflow.\n\nOutcome:\nThe hotel now operates through a centralized dashboard that improves operational visibility, reduces booking conflicts, and streamlines check-in and check-out processes.",
  stackUsed: ["Laravel", "Livewire", "Tailwind CSS", "PHP", "JavaScript", "MySQL"],
  features: [
    {
      title: "Room Inventory & Reservation Management",
      description: "Centralized room inventory tracking with real-time status badges for fast front-desk operation.",
      image: "/room-availability.png"
    },
    {
      title: "Billing & Housekeeping Operations",
      description: "Transparent invoice line items paired with a housekeeping task scheduler directly linked to current room states.",
      image: "/bookings.png"
    }
  ],
  featured: true,
  liveUrl: "https://github.com/rdhrvl/e-hotel-ppkd"
};
