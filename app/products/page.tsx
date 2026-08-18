import type { Metadata } from 'next';
import ProductGrid from '@/components/ProductGrid';
export const metadata: Metadata = { title: 'Products', description: 'Browse Lumora products with search, category filters, price filters, and sorting.' };
export default function ProductsPage() { return <main className="container-shell py-14"><div className="max-w-2xl"><p className="eyebrow">The collection</p><h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Find your next favorite.</h1><p className="mt-4 text-lg leading-8 text-slate-500">Search the catalog, narrow it by category or price, and sort the products around what matters to you.</p></div><div className="mt-10"><ProductGrid /></div></main>; }
