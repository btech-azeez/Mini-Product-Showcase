'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/data/products';
import { useCart } from '@/context/cart-context';

export default function CartClient() {
  const { state, subtotal, increment, decrement, remove, clear } = useCart();
  const shipping = subtotal >= 20000 || subtotal === 0 ? 0 : 499;
  const total = subtotal + shipping;

  if (!state.hydrated) return <div className="rounded-3xl border border-slate-200 bg-white p-10 text-center text-slate-500">Loading cart…</div>;

  if (!state.items.length) return <div className="rounded-[2rem] border border-slate-200 bg-white px-6 py-16 text-center shadow-sm"><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-3xl">🛒</div><h1 className="mt-6 text-2xl font-black">Your cart is empty</h1><p className="mx-auto mt-2 max-w-md text-slate-500">Explore the collection and add a few things you love. Your cart will stay saved in this browser.</p><Link href="/products" className="mt-7 inline-flex rounded-2xl bg-slate-950 px-6 py-3 font-bold text-white hover:bg-violet-600">Browse products</Link></div>;

  return <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
    <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"><div className="flex items-center justify-between border-b border-slate-200 p-6"><div><h1 className="text-2xl font-black">Your cart</h1><p className="mt-1 text-sm text-slate-500">{state.items.length} product{state.items.length === 1 ? '' : 's'} · {state.items.reduce((sum, item) => sum + item.quantity, 0)} item{state.items.reduce((sum, item) => sum + item.quantity, 0) === 1 ? '' : 's'}</p></div><button onClick={clear} className="text-sm font-bold text-slate-500 hover:text-red-600">Clear all</button></div>
      <div className="divide-y divide-slate-100">{state.items.map(({ product, quantity }) => <article key={product.id} className="flex gap-4 p-5 sm:p-6"><div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-slate-100"><Image src={product.image} alt={product.name} fill className="object-cover" sizes="96px" /></div><div className="min-w-0 flex-1"><div className="flex justify-between gap-4"><div><Link href={`/products/${product.slug}`} className="font-bold text-slate-950 hover:text-violet-600">{product.name}</Link><p className="mt-1 text-sm text-slate-500">{product.category}</p></div><p className="font-extrabold text-slate-950">{formatPrice(product.price * quantity)}</p></div><div className="mt-4 flex items-center justify-between"><div className="flex items-center rounded-xl border border-slate-200"><button aria-label={`Decrease ${product.name}`} onClick={() => decrement(product.id)} className="px-3 py-1.5 text-lg hover:bg-slate-50">−</button><span className="min-w-8 text-center text-sm font-bold">{quantity}</span><button aria-label={`Increase ${product.name}`} onClick={() => increment(product.id)} className="px-3 py-1.5 text-lg hover:bg-slate-50">+</button></div><button onClick={() => remove(product.id)} className="text-sm font-bold text-slate-400 hover:text-red-600">Remove</button></div></div></article>)}</div>
    </section>
    <aside className="h-fit rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl"><h2 className="text-xl font-black">Order summary</h2><div className="mt-6 space-y-4 text-sm"><div className="flex justify-between"><span className="text-slate-400">Subtotal</span><span>{formatPrice(subtotal)}</span></div><div className="flex justify-between"><span className="text-slate-400">Shipping</span><span>{shipping ? formatPrice(shipping) : 'Free'}</span></div><div className="border-t border-white/10 pt-4"><div className="flex justify-between text-base"><span className="font-bold">Total</span><span className="font-black">{formatPrice(total)}</span></div></div></div><div className="mt-6 rounded-2xl bg-white/5 p-4 text-sm text-slate-300">{shipping ? `Add ${formatPrice(20000 - subtotal)} more for free shipping.` : 'You unlocked free standard shipping.'}</div><Link href="/login" className="mt-6 block rounded-2xl bg-white px-5 py-3 text-center text-sm font-black text-slate-950 hover:bg-violet-200">Continue as guest / Sign in</Link><p className="mt-3 text-center text-xs text-slate-500">Demo checkout flow — no payment is collected.</p></aside>
  </div>;
}
