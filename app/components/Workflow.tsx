"use client";

import { AnimateSection, StaggerContainer, StaggerItem } from "@/app/components/AnimateSection";

export default function Workflow() {
  return (
    <section id="process" className="bg-white border-y border-slate-200 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateSection className="mx-auto max-w-2xl text-center mb-20">
          <h2 className="text-base font-semibold uppercase tracking-wider text-slate-600">The Blueprint</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            My Engineering Workflow
          </p>
        </AnimateSection>
        <StaggerContainer className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <StaggerItem className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors duration-300">
            <span className="text-3xl font-bold text-slate-300">01</span>
            <h4 className="mt-4 text-base font-bold text-slate-900">Audit & Design</h4>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Reviewing design system mockups, structuring data schemas, and mapping required REST/GraphQL endpoints.
            </p>
          </StaggerItem>
          <StaggerItem className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors duration-300">
            <span className="text-3xl font-bold text-slate-300">02</span>
            <h4 className="mt-4 text-base font-bold text-slate-900">Clean Coding</h4>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Implementing pixel-perfect, accessible React components with strict TypeScript linting and checking.
            </p>
          </StaggerItem>
          <StaggerItem className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors duration-300">
            <span className="text-3xl font-bold text-slate-300">03</span>
            <h4 className="mt-4 text-base font-bold text-slate-900">API Integration</h4>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Connecting frontends to databases, setting up server actions, webhook triggers, and third-party APIs.
            </p>
          </StaggerItem>
          <StaggerItem className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors duration-300">
            <span className="text-3xl font-bold text-slate-300">04</span>
            <h4 className="mt-4 text-base font-bold text-slate-900">Testing & Launch</h4>
            <p className="mt-2 text-sm text-slate-500 leading-relaxed">
              Running static builds, verifying responsiveness, and launching to optimized edge networks.
            </p>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}
