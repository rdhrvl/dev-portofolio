export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
          </svg>
          <span className="text-sm font-bold tracking-tight text-white">reval.dev</span>
        </div>
        <p className="text-xs">
          © 2026 Reval. All rights reserved. Custom crafted engineering.
        </p>
      </div>
    </footer>
  );
}
