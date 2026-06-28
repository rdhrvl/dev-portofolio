import { Project } from "@/types";

export const eHotelPpkd: Project = {
  id: "e-hotel-ppkd",
  title: "Hotel Management System",
  category: "FULL-STACK WEB APP",
  description: "I engineered a full-stack Hotel Management System using Laravel Livewire and Tailwind CSS. The system handles end-to-end hotel operations — room inventory, guest reservations, check-in/out states, billing, housekeeping scheduling, and upfront payment settlement — optimized for high-speed front desk workflows.",
  image: "/ppkd_dashboard.png",
  metric1: "< 3",
  metric1Label: "Actions to Complete Checkout",
  metric2: "4",
  metric2Label: "Staff Role Modules",
  clientName: "PPKD Project",
  clientIndustry: "Hospitality & Hotel Operations",
  projectGoal: "Build a high-performance, end-to-end Hotel Management System for front office staff, admin/managers, housekeeping, and finance teams. The system needed to minimize clicks across all primary workflows, provide high-contrast room and booking state indicators to prevent human errors, and display transparent payment breakdowns (room totals, deposits, settlements) to reduce guest disputes.",
  stackUsed: ["Laravel", "Livewire", "Tailwind CSS", "PHP", "JavaScript", "MySQL"],
  features: [
    {
      title: "Room Inventory & Reservation Management",
      description: "Real-time room state tracking with high-contrast status badges (available, occupied, dirty, out-of-order) and a fast reservation flow completable in under 3 actions for front desk staff.",
      image: "/room-availability.png"
    },
    {
      title: "Billing, Deposits & Housekeeping Scheduling",
      description: "Transparent invoice breakdowns showing room totals, upfront deposits, and settlement amounts as individual line items. Includes a dynamic housekeeping task scheduler reviewable from mobile and tablet devices on the floor.",
      image: "/bookings.png"
    }
  ],
  featured: false,
  liveUrl: "https://ppkd-hotel.vercel.app"
};
