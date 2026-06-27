"use client";

import { AnimateSection, StaggerContainer, StaggerItem } from "@/app/components/AnimateSection";

const experienceData = [
  {
    role: "Freelance Full-Stack Developer",
    client: "Client — Fintech Dashboard",
    period: "Jan 2024 – Mar 2024",
    outcomes: [
      "Built a real-time analytics dashboard using Next.js and Laravel",
      "Reduced API response time by 35% through query optimization",
      "Delivered ahead of schedule with full test coverage",
    ],
    stack: ["Next.js", "Laravel", "TypeScript", "MySQL"],
  },
  {
    role: "Full-Stack Web Programmer",
    client: "Client — E-Commerce Storefront",
    period: "Oct 2023 – Dec 2023",
    outcomes: [
      "Designed and deployed a high-performance headless commerce frontend",
      "Integrated secure payment gateways and webhook handling logic",
      "Improved mobile responsiveness and accessibility scores to 95+",
    ],
    stack: ["React", "Livewire", "Tailwind CSS", "PostgreSQL"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateSection className="max-w-2xl mb-20">
          <h2 className="text-base font-semibold uppercase tracking-wider text-slate-600">
            Work History
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            My Professional Experience
          </p>
        </AnimateSection>

        <div className="mx-auto max-w-3xl">
          <StaggerContainer className="relative border-l border-slate-200 ml-4 space-y-12">
            {experienceData.map((exp, idx) => (
              <StaggerItem key={idx} className="relative pl-8">
                {/* Timeline node dot */}
                <div className="absolute -left-[6px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-slate-900 shadow-sm" />
                
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1.5">
                  <h3 className="text-lg font-bold text-slate-900">{exp.role}</h3>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-sm font-semibold text-slate-600 mt-1">{exp.client}</p>
                
                <ul className="mt-4 space-y-2 text-sm text-slate-500 leading-relaxed list-disc list-outside pl-4">
                  {exp.outcomes.map((outcome, oIdx) => (
                    <li key={oIdx}>{outcome}</li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-md bg-slate-50 border border-slate-200 px-2 py-1 text-xs font-semibold text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
