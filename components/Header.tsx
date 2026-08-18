'use client';

import Link from 'next/link';
import { useState, useSyncExternalStore } from 'react';
import { useCart } from '@/context/cart-context';

function subscribeUser(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener('lumora-auth', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('lumora-auth', callback);
  };
}

function getUserSnapshot() {
  return typeof window !== 'undefined' ? localStorage.getItem('lumora-user') : null;
}

function getUserServerSnapshot() {
  return null;
}

export default function Header() {
  const { itemCount } = useCart();
  const user = useSyncExternalStore(subscribeUser, getUserSnapshot, getUserServerSnapshot);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="container-shell flex h-18 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2.5 text-2xl font-black tracking-tight text-slate-950 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-950 text-white shadow-md shadow-slate-950/20 transition group-hover:bg-violet-600">
            <svg className="h-5 w-5 text-violet-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 22 17 12" />
            </svg>
          </div>
          <span>Lumora<span className="text-violet-600">.</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          <Link className="nav-link flex items-center gap-1.5" href="/">
            <svg className="h-4 w-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <Link className="nav-link" href="/products">Products</Link>
          <Link className="nav-link" href="/about">About</Link>
          <Link className="nav-link" href="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/login" className="hidden rounded-full px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 sm:block">
            {user ? `Hi, ${user}` : 'Login'}
          </Link>
          <Link href="/cart" className="relative rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800" aria-label={`Cart with ${itemCount} items`}>
            Cart {itemCount > 0 ? <span className="ml-1 rounded-full bg-violet-500 px-2 py-0.5 text-xs">{itemCount}</span> : null}
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white p-5 md:hidden">
          <nav aria-label="Mobile navigation" className="flex flex-col space-y-4">
            <Link onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-2 text-base font-bold text-slate-800 hover:text-violet-600" href="/">
              <svg className="h-4 w-4 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Link>
            <Link onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-violet-600" href="/products">Products</Link>
            <Link onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-violet-600" href="/about">About</Link>
            <Link onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-violet-600" href="/contact">Contact</Link>
            <div className="pt-2 border-t border-slate-100">
              <Link onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-bold text-violet-600" href="/login">
                {user ? `Signed in as ${user}` : 'Sign in / Register'}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

