'use client';

import { useMemo, useState } from 'react';
import { categories, products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function ProductGrid() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [price, setPrice] = useState('all');
  const [sort, setSort] = useState('featured');

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const result = products.filter((product) => {
      const matchesQuery = !normalized || `${product.name} ${product.category} ${product.description}`.toLowerCase().includes(normalized);
      const matchesCategory = category === 'All' || product.category === category;
      const matchesPrice = price === 'all' || (price === 'under5' ? product.price < 5000 : price === '5to10' ? product.price >= 5000 && product.price <= 10000 : product.price > 10000);
      return matchesQuery && matchesCategory && matchesPrice;
    });
    return [...result].sort((a, b) => sort === 'price-low' ? a.price - b.price : sort === 'price-high' ? b.price - a.price : sort === 'rating' ? b.rating - a.rating : Number(b.featured) - Number(a.featured));
  }, [query, category, price, sort]);

  return <div className="space-y-8">
    <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1.5fr_repeat(3,1fr)]">
      <label className="block"><span className="field-label">Search</span><input value={query} onChange={(e) => setQuery(e.target.value)} className="field" placeholder="Search products..." /></label>
      <label className="block"><span className="field-label">Category</span><select value={category} onChange={(e) => setCategory(e.target.value)} className="field"><option>All</option>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
      <label className="block"><span className="field-label">Price</span><select value={price} onChange={(e) => setPrice(e.target.value)} className="field"><option value="all">Any price</option><option value="under5">Under ₹5,000</option><option value="5to10">₹5,000–₹10,000</option><option value="over10">Over ₹10,000</option></select></label>
      <label className="block"><span className="field-label">Sort</span><select value={sort} onChange={(e) => setSort(e.target.value)} className="field"><option value="featured">Featured</option><option value="rating">Top rated</option><option value="price-low">Price: low to high</option><option value="price-high">Price: high to low</option></select></label>
    </div>
    <div className="flex items-center justify-between"><p className="text-sm text-slate-500">Showing <strong className="text-slate-900">{filtered.length}</strong> of {products.length} products</p><button type="button" onClick={() => { setQuery(''); setCategory('All'); setPrice('all'); setSort('featured'); }} className="text-sm font-bold text-violet-600 hover:underline">Clear filters</button></div>
    {filtered.length ? <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="rounded-3xl border border-dashed border-slate-300 p-14 text-center"><h2 className="text-xl font-bold">No products found</h2><p className="mt-2 text-slate-500">Try a different search term or clear your filters.</p></div>}
  </div>;
}
