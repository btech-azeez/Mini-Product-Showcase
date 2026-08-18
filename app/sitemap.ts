import type { MetadataRoute } from 'next';
import { products } from '@/data/products';
const base = 'https://lumora-demo.example';
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: base, changeFrequency: 'weekly', priority: 1 }, { url: `${base}/products`, changeFrequency: 'weekly', priority: .9 }, { url: `${base}/about`, changeFrequency: 'monthly', priority: .5 }, { url: `${base}/contact`, changeFrequency: 'monthly', priority: .5 }, ...products.map((p) => ({ url: `${base}/products/${p.slug}`, changeFrequency: 'weekly' as const, priority: .8 }))]; }
