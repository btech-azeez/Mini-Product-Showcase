import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CartProvider } from '@/context/cart-context';

export const metadata: Metadata = {
  metadataBase: new URL('https://lumora-demo.example'),
  title: { default: 'Lumora — Modern Tech & Everyday Essentials', template: '%s | Lumora' },
  description: 'Discover thoughtful tech and everyday essentials from Lumora, a responsive mini product showcase built with Next.js and TypeScript.',
  keywords: ['Lumora', 'product showcase', 'technology', 'smart accessories', 'Next.js', 'TypeScript'],
  openGraph: { title: 'Lumora — Modern Tech & Everyday Essentials', description: 'Thoughtful products for modern spaces.', type: 'website', siteName: 'Lumora' }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Lumora',
  url: 'https://lumora-demo.example',
  description: 'Discover thoughtful tech and everyday essentials from Lumora.'
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

