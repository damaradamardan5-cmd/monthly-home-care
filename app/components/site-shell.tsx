import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-50 border-b border-blue-100/80 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 text-sm font-semibold text-white shadow-lg shadow-blue-600/20">
              HK
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-slate-900">
                HomeKeep
              </p>
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-blue-600">
                by SALAH
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/pricing"
            className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Start Free Trial
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200/80 bg-white/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 text-sm text-slate-600 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-slate-900">HomeKeep</p>
            <p className="mt-1">Premium monthly home care and home watching services.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/pricing" className="transition hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/contact" className="transition hover:text-blue-600">
              Contact
            </Link>
            <Link href="/faq" className="transition hover:text-blue-600">
              FAQ
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
