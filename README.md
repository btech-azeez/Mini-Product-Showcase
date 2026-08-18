# Lumora — Mini Product Showcase

A submission-ready public product showcase built with **Next.js 16.2**, **React 19**, **TypeScript**, **Tailwind CSS**, and the **App Router**.

## Features

- Responsive public storefront with polished hero section and featured products
- Product listing route with live search, category filter, price filter, and sorting
- Product detail pages with gallery, description, specifications, ratings, and related products
- Cart with persistent client-side state, quantity updates, removal, subtotal, shipping threshold, and guest checkout messaging
- Login page with demo guest/user handling using browser storage (no backend required)
- Account status shown in the global header
- About and Contact content
- SEO metadata, canonical URLs, semantic sections, heading hierarchy, Open Graph metadata, and `robots.txt` / `sitemap.xml`
- Accessible buttons, form labels, focus states, responsive layouts, and keyboard-friendly controls
- Local SVG product artwork so the project works without an image CDN or external API

## Project Setup

### Requirements

- Node.js 20.9+
- npm 10+

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open http://localhost:3000.

### Production build

```bash
npm run build
npm start
```

## Routes

- `/` — Home
- `/products` — Search/filter/sort product catalog
- `/products/[slug]` — Product detail
- `/cart` — Shopping cart
- `/login` — Demo login and guest handling
- `/about` — About Lumora
- `/contact` — Contact form demo
- `/robots.txt` — SEO robots file
- `/sitemap.xml` — SEO sitemap

## Architecture Decisions

### App Router
The application uses the Next.js App Router so routes are colocated with their UI and server-rendered pages can export route-level metadata. Dynamic product pages use `app/products/[slug]/page.tsx` and `generateStaticParams()` for the static catalog.

### Server + Client component split
Product data and SEO metadata are handled in server components. Interactive pieces such as search/filter controls, cart operations, and login state are client components. This keeps browser-only state isolated while retaining a fast server-rendered shell.

### State management
A lightweight React Context + `useReducer` store is used for the cart, with a browser-storage effect for persistence. Authentication is intentionally represented as a small demo session stored in `localStorage` because the assignment allows static data and does not require a backend.

### Reusable components
Common elements live under `/components`:

- `Header`
- `Footer`
- `ProductCard`
- `ProductGrid`
- `ProductFilters`
- `AddToCartButton`
- `CartClient`
- `LoginForm`
- `CartProvider`

### Data layer
The catalog is a typed local data file in `data/products.ts`. Replacing it with a REST/GraphQL client later does not require rewriting the UI layer because components consume the `Product` type.

## SEO Implementation

- Global title template and description in `app/layout.tsx`
- Route-specific metadata for Products, Product Detail, Cart, Login, About, and Contact pages
- Dynamic product titles/descriptions using `generateMetadata()`
- Open Graph metadata
- Canonical URL support
- `robots.ts`
- `sitemap.ts`
- Semantic `header`, `main`, `section`, `article`, `nav`, and `footer` elements
- Single meaningful H1 per primary page with H2/H3 for hierarchy

## AI Tools / Platforms Utilized

- ChatGPT — application planning, component generation, TypeScript review, accessibility/SEO checks, and README drafting
- Next.js documentation — framework/API verification

## Assumptions and Limitations

- Authentication is demo-only and does not provide real identity verification.
- Contact submission is a front-end success state and does not send email.
- Products, pricing, inventory, ratings, and specifications are static sample data.
- No payment gateway is connected.
- Cart is persisted in browser `localStorage` and is not synchronized across devices.

## Suggested Git Submission

```bash
git init
git add .
git commit -m "complete lumora product showcase"
git branch -M main
git remote add origin https://github.com/btech-azeez/Mini-Product-Showcase
git push -u origin main
```

## Evaluation Mapping

| Evaluation Area | Implementation |
|---|---|
| Next.js fundamentals | App Router, nested routes, dynamic segments, metadata, route handlers for SEO files |
| TypeScript | Typed models, props, reducer actions, context values, page params |
| Reusability | Shared header/footer/cards/filters/cart/auth components |
| SEO & performance | Server rendering, metadata, static product params, semantic HTML, robots/sitemap |
| UX | Responsive layout, empty states, filters, persistent cart, guest checkout messaging |
| AI-assisted development | Documented in README with explicit tooling disclosure |
