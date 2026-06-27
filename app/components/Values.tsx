"use client";

import { AnimateSection, StaggerContainer, StaggerItem } from "@/app/components/AnimateSection";

export default function Values() {
  return (
    <section id="values" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimateSection className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold uppercase tracking-wider text-slate-600">My Standards</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Professional Development Values
          </p>
        </AnimateSection>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <StaggerContainer className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            <StaggerItem className="flex flex-col">
              <dt className="text-lg font-semibold leading-7 text-slate-900">
                Pixel-Perfect Coding
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-sm leading-relaxed text-slate-500">
                <p className="flex-auto">
                  I do not use generic template drag-and-drop structures. Every layout I implement is coded line by line to ensure correct responsive breakpoints, high performance, and identical rendering across major browsers.
                </p>
              </dd>
            </StaggerItem>
            <StaggerItem className="flex flex-col">
              <dt className="text-lg font-semibold leading-7 text-slate-900">
                Performance-First Focus
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-sm leading-relaxed text-slate-500">
                <p className="flex-auto">
                  By strictly adhering to modern Next.js conventions, optimizing static/dynamic rendering splits, and minifying bundle sizes, I build web properties that load in milliseconds to drive engagement.
                </p>
              </dd>
            </StaggerItem>
            <StaggerItem className="flex flex-col">
              <dt className="text-lg font-semibold leading-7 text-slate-900">
                Maintainable Architecture
              </dt>
              <dd className="mt-4 flex flex-auto flex-col text-sm leading-relaxed text-slate-500">
                <p className="flex-auto">
                  I write clean, modular, and self-documenting code with comprehensive TypeScript checking. This guarantees that your technical platform remains easily extendable by other developers in the future.
                </p>
              </dd>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
