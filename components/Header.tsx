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
        <Link href="/" className="text-2xl font-black tracking-tight text-slate-950">
          Lumora<span className="text-violet-600">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          <Link className="nav-link" href="/">Home</Link>
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
            <Link onClick={() => setMobileMenuOpen(false)} className="text-base font-bold text-slate-800 hover:text-violet-600" href="/">Home</Link>
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

