"use client";

import { AnimateSection } from "@/app/components/AnimateSection";

export default function Logobar() {
  return (
    <section id="stack" aria-label="Technology stack">
      <AnimateSection className="border-y border-slate-200 bg-white py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
          Core Frameworks and Deployment Environments
        </p>
        <div className="mx-auto mt-8 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-6 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-6 text-center">
          <div className="col-span-2 flex justify-center lg:col-span-1">
            <span className="text-lg font-bold text-slate-400 tracking-tight">REACT.JS</span>
          </div>
          <div className="col-span-2 flex justify-center lg:col-span-1">
            <span className="text-lg font-bold text-slate-400 tracking-tight">NEXT.JS</span>
          </div>
          <div className="col-span-2 flex justify-center lg:col-span-1">
            <span className="text-lg font-bold text-slate-400 tracking-tight">LARAVEL</span>
          </div>
          <div className="col-span-2 flex justify-center lg:col-span-1">
            <span className="text-lg font-bold text-slate-400 tracking-tight">LIVEWIRE</span>
          </div>
          <div className="col-span-2 flex justify-center lg:col-span-1">
            <span className="text-lg font-bold text-slate-400 tracking-tight">NODE.JS</span>
          </div>
          <div className="col-span-2 flex justify-center lg:col-span-1">
            <span className="text-lg font-bold text-slate-400 tracking-tight">VERCEL & AWS</span>
          </div>
        </div>
      </div>
      </AnimateSection>
    </section>
  );
}
