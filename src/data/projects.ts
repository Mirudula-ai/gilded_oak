export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  images: string[];
  description: string;
  beforeAfter?: {
    before: string;
    after: string;
    caption?: string;
  };
  details?: {
    finish?: string;
    material?: string;
  };
}

export type ProjectCategory =
  | 'All'
  | 'Modular Kitchens'
  | 'Wardrobes'
  | 'Living Rooms'
  | 'TV Units'
  | 'Bedrooms'
  | 'Pooja Units'
  | '3D Rendered Projects';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'All',
  'Modular Kitchens',
  'Wardrobes',
  'Living Rooms',
  'TV Units',
  'Bedrooms',
  'Pooja Units',
  '3D Rendered Projects',
];

/**
 * ALL PROJECT DATA AND IMAGE PATHS ARE STORED LOCALLY HERE
 * To replace images, simply overwrite the corresponding file in /public/images/projects/
 * without needing to change this code.
 */
export const projectsData: Project[] = [
  {
    id: 'proj-kitchen-01',
    name: 'Champagne & Fluted Oak Island Kitchen',
    category: 'Modular Kitchens',
    images: [
      '/images/projects/kitchen-1.webp',
      '/images/projects/kitchen-2.webp',
      '/images/projects/kitchen-3.webp',
    ],
    description: 'An open parallel modular kitchen crafted with anti-scratch acrylic shutters, concealed gola profiles, tandem drawers, and quartz countertops with integrated LED task lighting.',
    beforeAfter: {
      before: '/images/projects/before-1.webp',
      after: '/images/projects/after-1.webp',
      caption: 'Civil bare-shell transformed into an ergonomic parallel modular kitchen',
    },
    details: {
      finish: 'Matte Acrylic & Natural Fluted Oak',
      material: 'BWP Marine Ply 710 Grade + Soft-close Hardware',
    },
  },
  {
    id: 'proj-wardrobe-01',
    name: 'Floor-to-Ceiling Tinted Glass & Walnut Wardrobe',
    category: 'Wardrobes',
    images: [
      '/images/projects/wardrobe-1.webp',
      '/images/projects/wardrobe-2.webp',
      '/images/projects/wardrobe-3.webp',
    ],
    description: 'Full-height walk-in wardrobe featuring slim bronze aluminium frames, fluted glass shutters, integrated sensor illumination, and custom organiser drawers.',
    details: {
      finish: 'Smoked Glass & Rich Walnut Carcass',
      material: 'High Density Moisture Resistant Core + 2mm Edgeband',
    },
  },
  {
    id: 'proj-living-01',
    name: 'Grand Ivory & Teak Architectural Living Space',
    category: 'Living Rooms',
    images: [
      '/images/projects/living-1.webp',
      '/images/projects/living-2.webp',
      '/images/projects/living-3.webp',
    ],
    description: 'Generous architectural proportions with custom acoustic fluted panels, brass inlay borders, curved bespoke seating, and ambient cove illumination.',
    beforeAfter: {
      before: '/images/projects/before-1.webp',
      after: '/images/projects/living-1.webp',
      caption: 'From plain civil shell to an architectural living retreat',
    },
    details: {
      finish: 'Natural Veneer with Polyurethane (PU) Matte Clear Coat',
      material: 'Calibrated Plywood + Solid Teak Accents',
    },
  },
  {
    id: 'proj-tv-01',
    name: 'Minimalist Travertine & Backlit TV Media Wall',
    category: 'TV Units',
    images: [
      '/images/projects/tv-1.webp',
      '/images/projects/tv-2.webp',
      '/images/projects/tv-3.webp',
    ],
    description: 'Floating media console with concealed wiring channels, porcelain backdrop, acoustic fabric louvers for media equipment, and indirect perimeter glow.',
    details: {
      finish: 'Matte Charcoal PU + Slim Porcelain Slab',
      material: 'Moisture Resistant Core + Heavy-Duty Concealed Cleats',
    },
  },
  {
    id: 'proj-bedroom-01',
    name: 'Serene Master Suite with Fluted Headboard Wall',
    category: 'Bedrooms',
    images: [
      '/images/projects/bedroom-1.webp',
      '/images/projects/bedroom-2.webp',
      '/images/projects/bedroom-3.webp',
    ],
    description: 'An oasis of serenity featuring a custom upholstered headboard wall, floating cantilevered bedside pedestals, and reading sconces calibrated for eye comfort.',
    details: {
      finish: 'Suede Upholstery + Walnut Grain Accents',
      material: 'Calibrated Core & High Density Foam Framing',
    },
  },
  {
    id: 'proj-pooja-01',
    name: 'Contemporary Teak & Brass Pooja Sanctum',
    category: 'Pooja Units',
    images: [
      '/images/projects/pooja-1.webp',
      '/images/projects/pooja-2.webp',
      '/images/projects/pooja-3.webp',
    ],
    description: 'Honoring sacred traditions with modern craftsmanship: precision CNC lattice screen, solid teak pillars, brass bell fittings, and built-in prasad pull-out tray.',
    details: {
      finish: 'Natural Teak Melamine Polish & Solid Brass Accents',
      material: 'Seasoned Teakwood & Marble Inlay Counter',
    },
  },
  {
    id: 'proj-render-01',
    name: 'Photorealistic 3D Architectural Visualisation',
    category: '3D Rendered Projects',
    images: [
      '/images/projects/render-1.webp',
      '/images/projects/render-2.webp',
      '/images/projects/render-3.webp',
    ],
    description: 'High-fidelity photorealistic rendering commissioned for architectural presentations, featuring ray-traced lighting studies, photometric profiles, and millimeter-accurate modeling.',
    details: {
      finish: 'Ultra-HD 4K CGI Visualisation',
      material: 'Raytraced Day/Night Lighting Simulation',
    },
  },
];
