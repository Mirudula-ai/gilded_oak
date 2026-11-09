export interface ServiceItem {
  id: string;
  title: string;
  altText: string;
  tagline: string;
  image: string;
  description: string;
  highlights: string[];
  materials: string[];
  factoryAdvantage: string;
}

/**
 * ALL SERVICE DATA AND IMAGE PATHS ARE STORED LOCALLY HERE
 * To replace images, simply overwrite the corresponding file in /public/images/services/
 * without needing to change this code.
 */
export const servicesData: ServiceItem[] = [
  {
    id: 'modular-kitchen',
    title: 'Modular Kitchen',
    altText: 'Contemporary parallel modular kitchen with champagne cabinets, quartz countertop, and warm LED profile lighting',
    tagline: 'Ergonomic, heat-resistant & clutter-free culinary spaces tailored to Indian cooking.',
    image: '/images/services/modular-kitchen.webp',
    description: 'Every kitchen we craft balances the classic work triangle (sink, stove, refrigerator) with maximum vertical efficiency. Precision-built in our own manufacturing facility with water-proof marine plywood, German hardware, and easy-to-clean surfaces.',
    highlights: [
      'L-Shape, Parallel, Island & U-Shape configurations',
      'Anti-scratch Acrylic, PU lacquer, or High-gloss laminates',
      'Soft-close tandem drawers & corner carousels',
      'Heat & stain-resistant quartz or granite countertops',
      'Integrated LED profiles under wall cabinets',
    ],
    materials: ['BWP 710 Marine Grade Plywood', 'Quartz/Granite', 'German Tandem Boxes', 'Anti-steam Acrylic'],
    factoryAdvantage: 'Computerized CNC edge-banding ensures zero moisture seepage and lifetime structural stability.',
  },
  {
    id: 'wardrobe-design',
    title: 'Wardrobe Design',
    altText: 'Floor-to-ceiling tinted glass and walnut walk-in wardrobe with internal sensor lighting',
    tagline: 'Custom floor-to-ceiling storage with intelligent accessories and refined finishes.',
    image: '/images/services/wardrobe.webp',
    description: 'From sleek sliding glass wardrobes to timeless hinged panel closets, our wardrobes are designed around your personal wardrobe habits, with dedicated zones for clothes, accessories, footwear, and valuables.',
    highlights: [
      'Sliding, Hinged, Walk-in, & Open wardrobe configurations',
      'Tinted fluted glass, fabric laminates, and real wood veneer',
      'Concealed motion sensor internal illumination',
      'Velvet jewelry organizers, pull-out trouser racks & tie trays',
      'Concealed digital safe integration options',
    ],
    materials: ['High Density Water-Resistant Core', '2mm Heavy-duty Edgeband', 'Aluminum Profiles', 'Toughened Glass'],
    factoryAdvantage: 'Pre-machined bored holes for shelf adjustability and precision track alignment.',
  },
  {
    id: 'tv-entertainment-units',
    title: 'TV & Entertainment Units',
    altText: 'Minimalist floating TV entertainment console wall with fluted panels and indirect perimeter lighting',
    tagline: 'Striking focal walls with concealed conduits, accent lighting, and acoustic styling.',
    image: '/images/services/tv-unit.webp',
    description: 'Transform your living or bedroom entertainment zone with floating consoles, marble-look slab backdrops, fluted wooden louvers, and hidden channels for zero-visible-wire aesthetics.',
    highlights: [
      'Floating wall consoles with push-to-open acoustic fabric drawers',
      'Bookmatched porcelain, marble, or acoustic charcoal louvers',
      'Concealed conduit passages for HDMI, power, and soundbars',
      'Dimmable warm perimeter backlighting',
      'Integrated display shelves for collectibles and speakers',
    ],
    materials: ['Moisture-resistant Core', 'Porcelain Slabs', 'Acoustic Felt', 'Aluminum Extrusions'],
    factoryAdvantage: 'Sturdy concealed French cleat mounting hardware tested for up to 85" screens.',
  },
  {
    id: 'bedroom-interiors',
    title: 'Bedroom Interiors',
    altText: 'Serene master bedroom interior with custom fluted headboard wall and floating bedside tables',
    tagline: 'Peaceful personal sanctuaries calibrated for rest, privacy, and calm aesthetics.',
    image: '/images/services/bedroom.webp',
    description: 'We curate cohesive bedroom atmospheres where upholstered acoustic headboard walls, floating nightstands, ergonomic dressers, and calming color palettes work together in quiet harmony.',
    highlights: [
      'Custom upholstered wall panels with velvet, bouclé, or suede',
      'Cantilevered nightstands with built-in charging points & switches',
      'Dresser & vanity tables with mirror backlit aura',
      'Thoughtful bed orientation and restful sightlines',
      'Layered ambient, task, and accent lighting plans',
    ],
    materials: ['High Density Foam Core', 'Premium Upholstery Fabrics', 'Calibrated Ply', 'Veneer/PU Coat'],
    factoryAdvantage: 'Custom bed frames with hydraulic storage manufactured to millimeter mattress sizes.',
  },
  {
    id: 'living-room-interiors',
    title: 'Living Room Interiors',
    altText: 'Luxury architectural living room interior with custom wood panelling and bespoke seating',
    tagline: 'Grand, welcoming spaces that express your lifestyle with architectural balance.',
    image: '/images/services/living-room.webp',
    description: 'The social heart of your home designed with intentional flow, statement false ceiling details, bespoke seating layouts, partition screens, and warm material layering.',
    highlights: [
      'Architectural space planning for effortless flow and conversation',
      'Custom brass, wood, and fluted glass partition screens',
      'False ceiling lighting layouts with magnetic track lights & coves',
      'Bespoke coffee tables, consoles, and accent display elements',
      'Wall paneling with veneer, lime wash textures, and brass inlays',
    ],
    materials: ['Natural Teak & Oak Veneer', 'Solid Brass Inlays', 'Precision Gypsum', 'PU Finishes'],
    factoryAdvantage: 'All paneling pre-finished in dust-controlled factory booths for flawless surface sheen.',
  },
  {
    id: 'pooja-units',
    title: 'Pooja Units',
    altText: 'Wooden and marble pooja unit mandir with brass lamps, bells and deity idol',
    tagline: 'Sacred sanctums honoring traditions with refined architectural grace.',
    image: '/images/services/pooja-unit.webp',
    description: 'Rooted in spiritual tradition, our pooja mandirs combine auspicious alignment, brass accents, intricate CNC jaali cutouts, and smoke-resistant finishes.',
    highlights: [
      'Auspicious orientations and proportions',
      'Custom CNC cut jaali backdrops with auspicious motifs',
      'Brass bells, brass lotus inlays, and warm spotlight illumination',
      'Pull-out brass or marble trays for prasad and diya offerings',
      'Storage drawers for agarbatti, sacred items, and utensils',
    ],
    materials: ['Seasoned Teakwood', 'White Marble Inlay', 'Solid Brass Accents', 'Fire-retardant Core'],
    factoryAdvantage: 'Hand-carved and CNC-routed components crafted with fine joinery in our own facility.',
  },
  {
    id: 'crockery-display-units',
    title: 'Crockery & Display Units',
    altText: 'Glass-fronted crockery display unit with backlit shelves and fine dinnerware',
    tagline: 'Sophisticated vitrines for dinnerware, crystal, and cherished family curios.',
    image: '/images/services/crockery-unit.webp',
    description: 'Connecting the dining area with elegance. Features tinted glass shutters, ambient spotlighting, stemware holders, and serving ledges.',
    highlights: [
      'Slim profile aluminium framed tinted or bronze reflective glass doors',
      'Integrated vertical LED strip lighting along inner cabinet styles',
      'Stemware hanging racks with buffet serving ledge',
      'Velvet-cushioned cutlery organizers and soft-close drawers',
    ],
    materials: ['Euro-profile Aluminum', 'Bronze Fluted Glass', 'Rich Walnut Veneer', 'Quartz Countertop'],
    factoryAdvantage: 'Zero-wobble precision glass door hinges tested for over 50,000 opening cycles.',
  },
  {
    id: 'study-units',
    title: 'Study Units',
    altText: 'Ergonomic study desk unit with overhead bookshelves and concealed cable management',
    tagline: 'Ergonomic, distraction-free home offices and study nooks for focused productivity.',
    image: '/images/services/study-unit.webp',
    description: 'Designed for professionals and students: ergonomic desk heights, concealed cable raceways, magnetic pin boards, and overhead floating book ledges.',
    highlights: [
      'Ergonomic desk heights with chamfered wrist edges for comfort',
      'Concealed cable raceways, grommets, and surge-protected power bays',
      'Open book ledges paired with closed storage for files and equipment',
      'Acoustic felt pin boards for task planning',
    ],
    materials: ['Scratch-resistant Laminate', 'Solid Wood Edge', 'Powder-coated Steel'],
    factoryAdvantage: 'Heavy-duty structural ribbing to support multi-monitor setups without desktop sag.',
  },
  {
    id: 'customised-furniture',
    title: 'Customised Furniture',
    altText: 'Handcrafted solid timber dining table and bespoke console furniture',
    tagline: 'Artisan crafted dining tables, credenzas, and consoles made to your exact dimensions.',
    image: '/images/services/custom-furniture.webp',
    description: 'Why settle for mass-market catalog furniture that compromises on fit and timber quality? We build custom furniture at our own manufacturing facility to match your exact home geometry.',
    highlights: [
      'Solid wood & marble top dining tables with custom seating',
      'Foyer consoles with carved architectural fluting and brass handles',
      'Accent lounge chairs upholstered in handpicked designer fabrics',
      'Bedside tables and multi-tier shoe storage cabinets',
    ],
    materials: ['Seasoned Teakwood', 'White Ash / Oak', 'Composite Marble', 'Brass Hardware'],
    factoryAdvantage: 'Kiln-dried seasoned timber guarantees zero warping or cracking over time.',
  },
  {
    id: 'complete-home-interiors',
    title: 'Complete Home Interiors',
    altText: 'Holistic turnkey residential home interior design and execution',
    tagline: 'Turnkey architectural interior solutions from 2D concepts to final handover.',
    image: '/images/services/complete-home.webp',
    description: 'A seamless, stress-free end-to-end journey. From spatial planning and 3D walkthroughs to modular factory production, electrical, painting, and clean final installation.',
    highlights: [
      'Single-point accountability from design to handover',
      'Comprehensive 2D working drawings & photorealistic 3D renders',
      'Factory-manufactured modular interiors directly from our own facility',
      'Ceiling details, electrical planning & premium painting',
      'Strict milestone timeline with regular updates',
    ],
    materials: ['Complete Architectural Material Palette with Grade Certification'],
    factoryAdvantage: 'Direct manufacturer pricing eliminates contractor markups and ensures uncompromised quality.',
  },
];
