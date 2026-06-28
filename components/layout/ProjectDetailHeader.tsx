import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
  id: string;
}

interface ProjectDetailHeaderProps {
  navLinks: NavLink[];
  logoId?: string;
}

export default function ProjectDetailHeader({
  navLinks,
  logoId = "logo_subnav",
}: ProjectDetailHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-slate-50/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-6">
        <Link href="/" id={logoId} className="flex items-center gap-2">
          <svg
            className="h-6 w-6 text-slate-900"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M16 18l6-6-6-6M8 6L2 12l6 6" />
          </svg>
          <span className="font-bold tracking-tight text-slate-900">reval.dev</span>
        </Link>

        <nav className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              id={link.id}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
