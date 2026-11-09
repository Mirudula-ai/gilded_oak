export interface FacilityItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
  detail: string;
}

export const facilityData: FacilityItem[] = [
  {
    id: 'fac-1',
    title: 'Factory Exterior',
    category: 'Facility Infrastructure',
    image: '/images/factory/exterior.webp',
    caption: 'Our modern manufacturing facility dedicated to precision interior fabrication.',
    detail: 'Spanning dedicated raw material storage, seasoning bays, CNC machining zones, and dust-controlled assembly floors.',
  },
  {
    id: 'fac-2',
    title: 'Woodworking Machinery',
    category: 'Advanced Tooling',
    image: '/images/factory/machinery.webp',
    caption: 'High-precision computerized beam saws and automatic multi-station edge-banding machinery.',
    detail: 'Ensures 0.1mm tolerance cuts, seamless edge sealing, and zero moisture entry for high durability.',
  },
  {
    id: 'fac-3',
    title: 'Furniture Manufacturing',
    category: 'Craftsmanship & Assembly',
    image: '/images/factory/manufacturing.webp',
    caption: 'Traditional timber joinery combined with modern structural engineering.',
    detail: 'Experienced craftsmen hand-finishing solid teak and seasoned hardwoods for bespoke dining, pooja, and console units.',
  },
  {
    id: 'fac-4',
    title: 'Finished Modular Furniture',
    category: 'Quality Assurance',
    image: '/images/factory/finished-furniture.webp',
    caption: 'Pre-assembly and stringent multi-point quality check before transit to site.',
    detail: 'Every drawer glide, hinge alignment, and surface finish undergoes rigorous testing prior to dispatch.',
  },
  {
    id: 'fac-5',
    title: 'Customised Wooden Products',
    category: 'Bespoke Artifacts',
    image: '/images/factory/wooden-products.webp',
    caption: 'Customized wooden panels, fluted architectural profiles, and hand-rubbed finishes.',
    detail: 'Creating unique one-of-a-kind furniture pieces that bring warmth, texture, and character to clients’ homes.',
  },
];
