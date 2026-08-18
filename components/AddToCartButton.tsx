'use client';

import { useState } from 'react';
import type { Product } from '@/data/products';
import { useCart } from '@/context/cart-context';

export default function AddToCartButton({ product, compact = false }: { product: Product; compact?: boolean }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function handleAdd() {
    add(product);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1400);
  }

  return <button type="button" onClick={handleAdd} className={compact ? 'w-full rounded-2xl border border-slate-900 px-4 py-3 text-sm font-bold hover:bg-slate-950 hover:text-white' : 'rounded-2xl bg-slate-950 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-slate-950/20 transition hover:-translate-y-0.5 hover:bg-violet-600'}>{added ? 'Added to cart ✓' : 'Add to cart'}</button>;
}
