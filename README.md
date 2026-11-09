# Gilded Oak Interiors — Official Website

A premium, mobile-first website for **Gilded Oak Interiors**, an interior design and execution studio.

- **Stack:** React 19 + Vite + TypeScript + Tailwind CSS + Lucide React.
- **Brand Tagline:** *Thoughtful Designs. Quality Craftsmanship.*
- **Phone / WhatsApp:** +91 63699 29442
- **Email:** Gildedoakinteriors@gmail.com

---

## How to Run the Project

### Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser. On your local Wi-Fi, you can also access it on mobile via the Network IP shown in the console.

### Production Build
```bash
npm run build
```
Generates a fully optimized static build in the `/dist` directory.

### Preview Production Build
```bash
npm run preview
```

---

## How to Replace Images (No Code Changes Needed)

Every image on the website is hosted locally in `/public/images/`. To replace any image with actual project or studio photographs, simply replace the file with a WebP (or PNG for logo) image matching the exact filename below:

### 1. Brand Logo
- `/public/images/logo.png` — Logo mark with house & oak leaf and brand name.

### 2. Primary Sections
- `/public/images/hero.webp` — Full-screen luxury living room background.
- `/public/images/about.webp` — Interior studio & architectural finish showcase.
- `/public/images/design-2d3d.webp` — 2D/3D design service banner.
- `/public/images/floorplan-2d.webp` — Detailed 2D CAD floor plan.
- `/public/images/render-3d.webp` — 3D architectural photorealistic render.

### 3. Services (`/public/images/services/`)
- `modular-kitchen.webp`
- `wardrobe.webp`
- `tv-unit.webp`
- `bedroom.webp`
- `living-room.webp`
- `pooja-unit.webp`
- `crockery-unit.webp`
- `study-unit.webp`
- `custom-furniture.webp`
- `complete-home.webp`

### 4. Projects Gallery (`/public/images/projects/`)
- **Modular Kitchens:** `kitchen-1.webp`, `kitchen-2.webp`, `kitchen-3.webp`
- **Wardrobes:** `wardrobe-1.webp`, `wardrobe-2.webp`, `wardrobe-3.webp`
- **Living Rooms:** `living-1.webp`, `living-2.webp`, `living-3.webp`
- **TV Units:** `tv-1.webp`, `tv-2.webp`, `tv-3.webp`
- **Bedrooms:** `bedroom-1.webp`, `bedroom-2.webp`, `bedroom-3.webp`
- **Pooja Units:** `pooja-1.webp`, `pooja-2.webp`, `pooja-3.webp`
- **3D Rendered Projects:** `render-1.webp`, `render-2.webp`, `render-3.webp`
- **Before & After:** `before-1.webp` and `after-1.webp`

### 5. Manufacturing Facility (`/public/images/factory/`)
- `exterior.webp` — Factory exterior & facility
- `machinery.webp` — Precision woodworking machinery & CNC
- `manufacturing.webp` — Furniture manufacturing & joinery
- `finished-furniture.webp` — Finished modular furniture inspection
- `wooden-products.webp` — Customized solid wood products

> **Image Tip:** Recommended width is **1600px** for `hero.webp` and **900px** for all other images. Save them in **WebP** format at 80% quality for optimal speed on mobile devices.

---

## Project Structure

```
├── public/
│   ├── favicon.png
│   └── images/
│       ├── logo.png
│       ├── hero.webp
│       ├── about.webp
│       ├── floorplan-2d.webp
│       ├── render-3d.webp
│       ├── services/       # 10 service images
│       ├── projects/       # 23 project & before/after images
│       └── factory/        # 5 manufacturing facility images
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── ServiceModal.tsx
│   │   ├── DesignServices2D3D.tsx
│   │   ├── ProjectsGallery.tsx
│   │   ├── LightboxModal.tsx
│   │   ├── BeforeAfterSlider.tsx
│   │   ├── ManufacturingFacility.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── WorkProcess.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingWhatsApp.tsx
│   │   └── SafeImage.tsx       # Error boundary fallback tile for images
│   ├── data/
│   │   ├── projects.ts         # Centralized project catalog
│   │   ├── services.ts         # Centralized service catalog
│   │   └── facility.ts         # Centralized factory catalog
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```
