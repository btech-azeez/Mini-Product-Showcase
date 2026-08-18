import type { Metadata } from 'next';
import CartClient from '@/components/CartClient';
export const metadata: Metadata = { title: 'Cart', description: 'Review your Lumora cart and continue as a guest or demo customer.' };
export default function CartPage() { return <main className="container-shell py-14"><CartClient /></main>; }
