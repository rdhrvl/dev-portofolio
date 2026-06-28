export const skillCardsData = [
  {
    id: "fe",
    label: "Frontend Stack",
    abbr: "FE",
    description:
      "High proficiency in building dynamic user interfaces and handling state synchronization.",
    skills: [
      { name: "TypeScript", level: 95 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "CSS3 & HTML5", level: 90 },
    ],
    footer: "React • Next.js • Tailwind CSS",
    featured: false,
  },
  {
    id: "fs",
    label: "Backend & Fullstack",
    abbr: "FS",
    description:
      "Designing scalable backend architectures, database schemas, and modular Laravel and Livewire codebases.",
    skills: [
      { name: "Laravel & Livewire", level: 90 },
      { name: "Node.js", level: 90 },
      { name: "SQL (PostgreSQL / MySQL)", level: 85 },
    ],
    footer: "Laravel • Livewire • Node.js • Postgres",
    featured: true,
  },
  {
    id: "ops",
    label: "DevOps & Tooling",
    abbr: "OPS",
    description:
      "Managing continuous integration pipelines, containerized deployments, and hosting.",
    skills: [
      { name: "Git & GitHub CI", level: 95 },
      { name: "Docker", level: 75 },
      { name: "AWS (S3 / EC2)", level: 70 },
    ],
    footer: "GitHub Actions • Docker • Vercel",
    featured: false,
  },
];
