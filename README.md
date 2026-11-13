# HomeLife — Modern Interior & Home Decor E-Commerce

**HomeLife** is a responsive, RTL-first e-commerce web application crafted for showcasing and selling minimalist furniture, lighting, botanicals, and decorative home accessories. Built with a warm organic palette (olive green, sage, and warm cream), it delivers a fast, self-contained shopping experience with local offline-ready image assets.

---

## Key Features

- **Responsive RTL Architecture**: Tailored for mobile, tablet, and desktop viewports with clean Persian typography (`Vazirmatn`) and smooth navigation.
- **Architectural Hero Stage**: Full-width living room stage with a custom tapered sage-green arch backdrop and quick product exploration.
- **Interactive Category Showcase**: Sculpted banner with overlapping cutout category cards and instant category filtering.
- **Flash Deals & Countdown Section**: Featured discounted products accompanied by a live countdown timer (`Hours : Minutes : Seconds`), discount badges, and carousel controls.
- **Dual Collection Banners**: Custom geometric side-by-side promotional banners highlighting the New Collection and Featured Products.
- **Product Quick-View Modal**: Detailed product specifications, dimensions, color/finish swatches, quantity selector, and instant cart addition.
- **Cart & Multi-Step Checkout Drawer**:
  - Free-shipping threshold progress bar and automatic shipping calculation
  - Delivery recipient form and payment method selection (Online / Cash on Delivery)
  - Instant order confirmation receipt and order status tracking modal
- **Interior Design Journal**: Editorial articles section with a dedicated full-article reader modal.
- **100% Offline-Ready Local Assets**: All banners, transparent product cutouts, category icons, and article covers are stored locally under `public/images/` with zero external image dependencies.

---

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **Lucide React**

---

## Project Structure

```text
├── public/
│   └── images/
│       ├── articles/      # Editorial article cover images
│       ├── banners/       # Hero stage and dual collection banners
│       ├── categories/    # Transparent PNG category cutouts
│       └── products/      # Transparent PNG studio product cutouts
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                    # Top announcement bar, capsule nav, and action buttons
│   │   ├── HeroSection.tsx               # Main architectural hero section
│   │   ├── CategoryShowcaseSection.tsx   # Sculpted banner and category cards carousel
│   │   ├── DiscountedProductsSection.tsx # Flash deals slider with live countdown timer
│   │   ├── CollectionBannersSection.tsx  # Dual sloped promotional collection banners
│   │   ├── ProductGrid.tsx               # Newest products grid with pagination controls
│   │   ├── JournalAndProofSection.tsx    # Interior styling articles and guides
│   │   ├── Overlays.tsx                  # Quick view, cart/checkout drawer, order tracker, and article reader
│   │   ├── StudioImage.tsx               # Image component with graceful fallback handling
│   │   └── Footer.tsx                    # Brand footer and newsletter subscription
│   ├── data/
│   │   └── storeData.ts                  # Product catalog, categories, articles, and price formatters
│   ├── types/
│   │   └── store.ts                      # TypeScript interfaces and enums
│   ├── App.tsx                           # Root application state and layout
│   ├── index.css                         # Global styles and base typography rules
│   └── main.tsx                          # Application entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Getting Started

### Prerequisites
- **Node.js** (v18 or higher recommended)
- **npm** (or **bun** / **pnpm** / **yarn**)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
```
The production-ready bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

### 5. Type-Check (Lint)
```bash
npm run lint
```
