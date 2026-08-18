import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 text-2xl font-black text-white">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 22 17 12" />
              </svg>
            </div>
            <span>Lumora<span className="text-violet-400">.</span></span>
          </div>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">Thoughtful tech and everyday essentials designed to make modern spaces calmer, smarter, and more enjoyable.</p>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Explore</h2>
          <div className="mt-4 space-y-2 text-sm">
            <Link className="footer-link" href="/products">All Products</Link>
            <Link className="footer-link" href="/about">Our Story</Link>
            <Link className="footer-link" href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-white">Support</h2>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>Mon–Fri · 9:00–18:00</p>
            <p>hello@lumora.example</p>
            <p>India · Online storefront</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Lumora. Demo assignment project.</span>
          <span>Built with Next.js + TypeScript.</span>
        </div>
      </div>
    </footer>
  );
}

