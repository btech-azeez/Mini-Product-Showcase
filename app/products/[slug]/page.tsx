import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AddToCartButton from '@/components/AddToCartButton';
import ProductCard from '@/components/ProductCard';
import { formatPrice, getProductBySlug, products } from '@/data/products';

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: 'Product not found' };
  return {
    title: product.name,
    description: product.description,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: { title: product.name, description: product.description, images: [{ url: product.image, alt: product.name }] }
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: product.rating,
      reviewCount: product.reviewCount
    }
  };

  return (
    <main className="container-shell py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
        <Link href="/products" className="hover:text-slate-950">Products</Link>
        <span className="mx-2">/</span>
        <span>{product.name}</span>
      </nav>

      <section className="mt-8 grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[2rem] bg-slate-100">
          <Image src={product.image} alt={product.name} width={1000} height={750} priority className="h-auto w-full" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-violet-700">{product.category}</span>
            {product.badge ? <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-black uppercase tracking-wide text-white">{product.badge}</span> : null}
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">{product.name}</h1>
          <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
            <span className="font-bold text-slate-900">★ {product.rating}</span>
            <span>({product.reviewCount} reviews)</span>
          </div>
          <p className="mt-6 text-lg leading-8 text-slate-600">{product.description}</p>
          <div className="mt-7 flex items-end gap-3">
            <span className="text-3xl font-black">{formatPrice(product.price)}</span>
            {product.compareAt ? <span className="pb-1 text-sm text-slate-400 line-through">{formatPrice(product.compareAt)}</span> : null}
          </div>
          <div className="mt-6">
            <p className="text-sm font-bold text-slate-800">Available finishes</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.colors.map((color) => <span key={color} className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600">{color}</span>)}
            </div>
          </div>
          <div className="mt-8 max-w-sm">
            <AddToCartButton product={product} />
          </div>
          <p className="mt-3 text-xs text-slate-500">Free shipping over ₹20,000 · Demo checkout · Guest-friendly</p>
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[1fr_.75fr]">
        <div>
          <h2 className="text-2xl font-black">Product description</h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-600">{product.description} The Lumora collection is designed around simple interactions, practical specifications, and a calm visual language that fits modern homes and workspaces.</p>
        </div>
        <div>
          <h2 className="text-2xl font-black">Specifications</h2>
          <dl className="mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="grid grid-cols-2 gap-4 border-b border-slate-100 px-5 py-4 last:border-0">
                <dt className="text-sm text-slate-500">{key}</dt>
                <dd className="text-right text-sm font-bold text-slate-900">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {related.length ? (
        <section className="mt-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="eyebrow">You may also like</p>
              <h2 className="mt-2 text-2xl font-black">More from {product.category}</h2>
            </div>
            <Link href="/products" className="text-sm font-bold text-violet-600">See all</Link>
          </div>
          <div className="mt-7 grid gap-6 md:grid-cols-3">
            {related.map((item) => <ProductCard key={item.id} product={item} />)}
          </div>
        </section>
      ) : null}
    </main>
  );
}

