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
  // AUDIO
  {
    id: 'lm-airwave-01', slug: 'airwave-pro-headphones', name: 'AirWave Pro Headphones', shortName: 'AirWave Pro', category: 'Audio', price: 14999, compareAt: 17999, rating: 4.8, reviewCount: 214, badge: 'Bestseller', image: '/products/airwave.svg', featured: true,
    description: 'Immersive over-ear headphones engineered for long listening sessions, adaptive noise cancellation, and rich studio-grade detail.',
    colors: ['Obsidian', 'Cloud', 'Sage'],
    specifications: { 'Battery': '42 hours', 'Noise Cancellation': 'Adaptive ANC', 'Bluetooth': '5.4', 'Weight': '268 g', 'Charging': 'USB-C fast charge' }
  },
  {
    id: 'lm-buds-04', slug: 'echo-buds-air', name: 'EchoBuds Air', shortName: 'EchoBuds Air', category: 'Audio', price: 6999, compareAt: 7999, rating: 4.5, reviewCount: 304, image: '/products/echobuds.svg', featured: true,
    description: 'Compact wireless earbuds with a balanced sound profile, transparency mode, and a pocket-sized charging case.',
    colors: ['Black', 'White'],
    specifications: { 'Battery': '30 hours with case', 'Noise Cancellation': 'Hybrid ANC', 'Bluetooth': '5.3', 'Water Resistance': 'IPX4', 'Charging': 'USB-C + wireless' }
  },
  {
    id: 'lm-mini-08', slug: 'pixel-mini-speaker', name: 'Pixel Mini Speaker', shortName: 'Pixel Mini', category: 'Audio', price: 3999, rating: 4.4, reviewCount: 61, image: '/products/pixel.svg',
    description: 'A palm-sized wireless speaker that makes small rooms feel fuller without taking over your shelf or workspace.',
    colors: ['Blue', 'Cream', 'Black'],
    specifications: { 'Battery': '18 hours', 'Output': '12W', 'Bluetooth': '5.3', 'Water Resistance': 'IP67', 'Pairing': 'Stereo pair' }
  },
  {
    id: 'lm-soundbar-15', slug: 'studio-monitor-soundbar', name: 'Studio Monitor Soundbar', shortName: 'Studio Soundbar', category: 'Audio', price: 18499, compareAt: 21999, rating: 4.9, reviewCount: 88, badge: 'Pro', image: '/products/airwave.svg',
    description: 'A premium desktop soundbar with dedicated tweeters, deep bass drivers, and multi-host spatial audio connectivity.',
    colors: ['Graphite', 'Silver'],
    specifications: { 'Output': '60W RMS', 'Inputs': 'USB-C / Optical / Bluetooth', 'Frequency': '45Hz–20kHz', 'Dimensions': '48 cm length', 'Warranty': '2 years' }
  },
  {
    id: 'lm-buds-mini-16', slug: 'echobuds-mini', name: 'EchoBuds Mini Wireless', shortName: 'EchoBuds Mini', category: 'Audio', price: 2999, compareAt: 3499, rating: 4.3, reviewCount: 142, image: '/products/echobuds.svg',
    description: 'Ultra-lightweight ergonomic earbuds with instant fast pairing, clear microphone calls, and splash-resistant coating.',
    colors: ['White', 'Navy'],
    specifications: { 'Battery': '24 hours total', 'Drivers': '10mm Dynamic', 'Bluetooth': '5.3', 'Weight': '3.8 g per bud', 'Water Resistance': 'IPX5' }
  },

  // WEARABLES
  {
    id: 'lm-sense-02', slug: 'sense-track-watch', name: 'SenseTrack Smart Watch', shortName: 'SenseTrack', category: 'Wearables', price: 11999, compareAt: 13999, rating: 4.7, reviewCount: 168, badge: 'New', image: '/products/sense.svg', featured: true,
    description: 'A clean, lightweight smart watch for everyday movement, notifications, training metrics, and personal routines.',
    colors: ['Midnight', 'Silver', 'Coral'],
    specifications: { 'Display': '1.9-inch AMOLED', 'Battery': 'Up to 9 days', 'Water Resistance': '5 ATM', 'GPS': 'Dual-band', 'Compatibility': 'iOS + Android' }
  },
  {
    id: 'lm-chrono-12', slug: 'chrono-active-smartwatch', name: 'Chrono Active Smartwatch', shortName: 'Chrono Active', category: 'Wearables', price: 7999, compareAt: 8999, rating: 4.6, reviewCount: 94, image: '/products/sense.svg',
    description: 'An active smartwatch built for outdoor running and fitness tracking with heart-rate monitoring and sleep analysis.',
    colors: ['Space Grey', 'Forest Green'],
    specifications: { 'Display': '1.75-inch HD OLED', 'Battery': '7 days', 'Sensors': 'SpO2 + Heart Rate', 'Water Resistance': 'IP68', 'Strap': 'Breathable Silicone' }
  },
  {
    id: 'lm-pulse-11', slug: 'pulsefit-fitness-band', name: 'PulseFit Fitness Band', shortName: 'PulseFit Band', category: 'Wearables', price: 3499, compareAt: 3999, rating: 4.5, reviewCount: 230, badge: 'Value Pick', image: '/products/sense.svg',
    description: 'A sleek, continuous activity tracker with step counting, sleep quality score, and smartphone vibration alerts.',
    colors: ['Black', 'Rose Gold', 'Cyan'],
    specifications: { 'Display': '1.1-inch Curved OLED', 'Battery': '14 days standby', 'Weight': '22 g', 'Water Resistance': '50 meters', 'App': 'Lumora Health' }
  },

  // DESK
  {
    id: 'lm-desk-03', slug: 'halo-desk-lamp', name: 'Halo Smart Desk Lamp', shortName: 'Halo Lamp', category: 'Desk', price: 5999, compareAt: 6999, rating: 4.6, reviewCount: 92, image: '/products/halo.svg', featured: true,
    description: 'An ambient task lamp with adjustable temperature, dimming, and a focused beam for productive workspaces.',
    colors: ['Pearl', 'Graphite'],
    specifications: { 'Brightness': '1200 lumens', 'Temperature': '2700K–6500K', 'Control': 'Touch + app', 'Power': 'USB-C', 'Materials': 'Aluminium + PC' }
  },
  {
    id: 'lm-key-06', slug: 'form-mechanical-keyboard', name: 'Form Mechanical Keyboard', shortName: 'Form Keyboard', category: 'Desk', price: 8999, rating: 4.8, reviewCount: 76, badge: 'Editor Pick', image: '/products/form.svg',
    description: 'A compact mechanical keyboard built for writers and developers with hot-swappable switches and a refined acoustic feel.',
    colors: ['Stone', 'Charcoal'],
    specifications: { 'Layout': '75% ANSI', 'Switches': 'Hot-swappable', 'Connection': 'USB-C / 2.4G / Bluetooth', 'Battery': 'Up to 80 hours', 'Keycaps': 'PBT double-shot' }
  },
  {
    id: 'lm-desk-09', slug: 'deskpro-standing-mount', name: 'DeskPro Dual Monitor Mount', shortName: 'DeskPro Mount', category: 'Desk', price: 12999, compareAt: 14999, rating: 4.9, reviewCount: 52, badge: 'Top Rated', image: '/products/form.svg',
    description: 'A heavy-duty aluminum dual monitor arm with gas-spring height adjustment, cable management, and 360-degree rotation.',
    colors: ['Matte Black', 'Silver'],
    specifications: { 'Support': 'Dual 17–32 inch monitors', 'Weight Limit': '9 kg per arm', 'VESA': '75x75 / 100x100', 'Material': 'Aircraft-grade Aluminium', 'Clamp': 'Desk clamp + Grommet' }
  },
  {
    id: 'lm-mat-10', slug: 'felt-desk-mat-ultra', name: 'Felt Desk Mat Ultra', shortName: 'Desk Mat Ultra', category: 'Desk', price: 2499, rating: 4.7, reviewCount: 185, image: '/products/halo.svg',
    description: 'A premium merino wool felt desk pad with anti-slip rubber backing for quiet typing and accurate mouse tracking.',
    colors: ['Dark Grey', 'Light Ash'],
    specifications: { 'Dimensions': '900 x 400 mm', 'Thickness': '4 mm', 'Material': 'Merino Wool Felt + Eco Rubber', 'Cleaning': 'Water repellent coating' }
  },

  // ACCESSORIES
  {
    id: 'lm-dock-05', slug: 'grid-3in1-charging-dock', name: 'Grid 3-in-1 Charging Dock', shortName: 'Grid Dock', category: 'Accessories', price: 4499, rating: 4.7, reviewCount: 121, image: '/products/grid.svg',
    description: 'One tidy charging station for your phone, watch, and earbuds, designed to clear cable clutter from your desk.',
    colors: ['Graphite', 'Sand'],
    specifications: { 'Output': 'Up to 30W', 'Devices': '3 simultaneous', 'Connector': 'USB-C input', 'Foldable': 'Yes', 'Protection': 'Thermal + surge' }
  },
  {
    id: 'lm-pack-07', slug: 'orbit-everyday-backpack', name: 'Orbit Everyday Backpack', shortName: 'Orbit Pack', category: 'Accessories', price: 7499, rating: 4.6, reviewCount: 54, image: '/products/orbit.svg',
    description: 'A structured everyday carry with a padded laptop sleeve, quick-access pockets, and a weather-resistant shell.',
    colors: ['Ink', 'Olive'],
    specifications: { 'Capacity': '20 L', 'Laptop': 'Up to 16-inch', 'Material': 'Recycled nylon', 'Weather': 'Water resistant', 'Warranty': '2 years' }
  },
  {
    id: 'lm-protravel-13', slug: 'protravel-leather-suite', name: 'ProTravel Leather Tech Suite', shortName: 'ProTravel Suite', category: 'Accessories', price: 14499, compareAt: 16999, rating: 4.9, reviewCount: 41, badge: 'Luxury', image: '/products/orbit.svg',
    description: 'Handcrafted full-grain leather folio with modular magnetic organizer slots for tablet, cables, powerbank, and passport.',
    colors: ['Cognac Tan', 'Midnight Black'],
    specifications: { 'Material': 'Full-grain Italian Leather', 'Tablet Pocket': 'Up to 13-inch', 'Closure': 'YKK Excella Zipper', 'Includes': 'Cable organizer + Passport sleeve' }
  },
  {
    id: 'lm-magsafe-14', slug: 'magsafe-magnetic-stand', name: 'MagHold Magnetic Desktop Stand', shortName: 'MagHold Stand', category: 'Accessories', price: 2499, rating: 4.6, reviewCount: 110, image: '/products/grid.svg',
    description: 'A solid weighted aluminum desktop phone stand with strong N52 magnets and adjustable viewing angle.',
    colors: ['Space Grey', 'Silver'],
    specifications: { 'Compatibility': 'MagSafe iPhones + Android with magnetic ring', 'Material': 'CNC Machined Aluminium', 'Angle Adjustment': '180-degree tilt', 'Weight': '210 g' }
  }
];

export const categories: Category[] = ['Audio', 'Wearables', 'Desk', 'Accessories'];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
}

