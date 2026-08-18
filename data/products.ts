export type Category = 'Audio' | 'Wearables' | 'Desk' | 'Accessories';

export type Product = {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  category: Category;
  price: number;
  compareAt?: number;
  rating: number;
  reviewCount: number;
  badge?: string;
  description: string;
  image: string;
  colors: string[];
  specifications: Record<string, string>;
  featured?: boolean;
};

export const products: Product[] = [
  {
    id: 'lm-airwave-01', slug: 'airwave-pro-headphones', name: 'AirWave Pro Headphones', shortName: 'AirWave Pro', category: 'Audio', price: 14999, compareAt: 17999, rating: 4.8, reviewCount: 214, badge: 'Bestseller', image: '/products/airwave.svg', featured: true,
    description: 'Immersive over-ear headphones engineered for long listening sessions, adaptive noise cancellation, and rich studio-grade detail.',
    colors: ['Obsidian', 'Cloud', 'Sage'],
    specifications: { 'Battery': '42 hours', 'Noise Cancellation': 'Adaptive ANC', 'Bluetooth': '5.4', 'Weight': '268 g', 'Charging': 'USB-C fast charge' }
  },
  {
    id: 'lm-sense-02', slug: 'sense-track-watch', name: 'SenseTrack Smart Watch', shortName: 'SenseTrack', category: 'Wearables', price: 11999, compareAt: 13999, rating: 4.7, reviewCount: 168, badge: 'New', image: '/products/sense.svg', featured: true,
    description: 'A clean, lightweight smart watch for everyday movement, notifications, training metrics, and personal routines.',
    colors: ['Midnight', 'Silver', 'Coral'],
    specifications: { 'Display': '1.9-inch AMOLED', 'Battery': 'Up to 9 days', 'Water Resistance': '5 ATM', 'GPS': 'Dual-band', 'Compatibility': 'iOS + Android' }
  },
  {
    id: 'lm-desk-03', slug: 'halo-desk-lamp', name: 'Halo Smart Desk Lamp', shortName: 'Halo Lamp', category: 'Desk', price: 5999, compareAt: 6999, rating: 4.6, reviewCount: 92, image: '/products/halo.svg', featured: true,
    description: 'An ambient task lamp with adjustable temperature, dimming, and a focused beam for productive workspaces.',
    colors: ['Pearl', 'Graphite'],
    specifications: { 'Brightness': '1200 lumens', 'Temperature': '2700K–6500K', 'Control': 'Touch + app', 'Power': 'USB-C', 'Materials': 'Aluminium + PC' }
  },
  {
    id: 'lm-buds-04', slug: 'echo-buds-air', name: 'EchoBuds Air', shortName: 'EchoBuds Air', category: 'Audio', price: 6999, compareAt: 7999, rating: 4.5, reviewCount: 304, image: '/products/echobuds.svg', featured: true,
    description: 'Compact wireless earbuds with a balanced sound profile, transparency mode, and a pocket-sized charging case.',
    colors: ['Black', 'White'],
    specifications: { 'Battery': '30 hours with case', 'Noise Cancellation': 'Hybrid ANC', 'Bluetooth': '5.3', 'Water Resistance': 'IPX4', 'Charging': 'USB-C + wireless' }
  },
  {
    id: 'lm-dock-05', slug: 'grid-3in1-charging-dock', name: 'Grid 3-in-1 Charging Dock', shortName: 'Grid Dock', category: 'Accessories', price: 4499, rating: 4.7, reviewCount: 121, image: '/products/grid.svg',
    description: 'One tidy charging station for your phone, watch, and earbuds, designed to clear cable clutter from your desk.',
    colors: ['Graphite', 'Sand'],
    specifications: { 'Output': 'Up to 30W', 'Devices': '3 simultaneous', 'Connector': 'USB-C input', 'Foldable': 'Yes', 'Protection': 'Thermal + surge' }
  },
  {
    id: 'lm-key-06', slug: 'form-mechanical-keyboard', name: 'Form Mechanical Keyboard', shortName: 'Form Keyboard', category: 'Desk', price: 8999, rating: 4.8, reviewCount: 76, badge: 'Editor Pick', image: '/products/form.svg',
    description: 'A compact mechanical keyboard built for writers and developers with hot-swappable switches and a refined acoustic feel.',
    colors: ['Stone', 'Charcoal'],
    specifications: { 'Layout': '75% ANSI', 'Switches': 'Hot-swappable', 'Connection': 'USB-C / 2.4G / Bluetooth', 'Battery': 'Up to 80 hours', 'Keycaps': 'PBT double-shot' }
  },
  {
    id: 'lm-pack-07', slug: 'orbit-everyday-backpack', name: 'Orbit Everyday Backpack', shortName: 'Orbit Pack', category: 'Accessories', price: 7499, rating: 4.6, reviewCount: 54, image: '/products/orbit.svg',
    description: 'A structured everyday carry with a padded laptop sleeve, quick-access pockets, and a weather-resistant shell.',
    colors: ['Ink', 'Olive'],
    specifications: { 'Capacity': '20 L', 'Laptop': 'Up to 16-inch', 'Material': 'Recycled nylon', 'Weather': 'Water resistant', 'Warranty': '2 years' }
  },
  {
    id: 'lm-mini-08', slug: 'pixel-mini-speaker', name: 'Pixel Mini Speaker', shortName: 'Pixel Mini', category: 'Audio', price: 3999, rating: 4.4, reviewCount: 61, image: '/products/pixel.svg',
    description: 'A palm-sized wireless speaker that makes small rooms feel fuller without taking over your shelf or workspace.',
    colors: ['Blue', 'Cream', 'Black'],
    specifications: { 'Battery': '18 hours', 'Output': '12W', 'Bluetooth': '5.3', 'Water Resistance': 'IP67', 'Pairing': 'Stereo pair' }
  }
];

export const categories: Category[] = ['Audio', 'Wearables', 'Desk', 'Accessories'];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}
