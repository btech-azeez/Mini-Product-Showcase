import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/data/products';
import { formatPrice } from '@/data/products';
import AddToCartButton from '@/components/AddToCartButton';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
          {product.badge ? (
            <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-800 shadow-sm">
              {product.badge}
            </span>
          ) : null}
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-violet-600">{product.category}</p>
              <h3 className="mt-1 text-lg font-bold text-slate-950">{product.name}</h3>
            </div>
            <div className="text-right">
              <p className="font-extrabold text-slate-950">{formatPrice(product.price)}</p>
              {product.compareAt ? (
                <p className="text-xs text-slate-400 line-through">{formatPrice(product.compareAt)}</p>
              ) : null}
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
            <span>★ {product.rating}</span>
            <span>·</span>
            <span>{product.reviewCount} reviews</span>
          </div>
        </div>
      </Link>
      <div className="px-5 pb-5">
        <AddToCartButton product={product} compact />
      </div>
    </article>
  );
}

