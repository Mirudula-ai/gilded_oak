import React from 'react';
import {
  Layers,
  Box,
  Compass,
  Palette,
  Eye,
  Wrench,
  MessageSquare,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { SafeImage } from './SafeImage';

export const DesignServices2D3D: React.FC = () => {
  const b2bList = [
    {
      title: '2D Floor Plans',
      icon: Compass,
      desc: 'Precision CAD architectural floor layouts with millimeter dimensions, door/window schedules, and structural partitions.',
    },
    {
      title: 'Furniture Layouts',
      icon: Box,
      desc: 'Optimized furniture spatial planning ensuring unobstructed circulation paths, ergonomic clearances, and balanced layouts.',
    },
    {
      title: 'Interior Space Planning',
      icon: Layers,
      desc: 'Zoning residential and commercial spaces for maximum utility, natural illumination, and functional comfort.',
    },
    {
      title: '3D Interior Modelling',
      icon: Box,
      desc: 'Accurate 3D models built to exact site dimensions with custom millwork, detailed cabinetry, and custom geometry.',
    },
    {
      title: 'Photorealistic 3D Rendering',
      icon: Eye,
      desc: 'Ray-traced photorealistic interior CGI visuals with calibrated natural daylighting, artificial fixture glows, and realistic textures.',
    },
    {
      title: 'Material & Colour Visualisation',
      icon: Palette,
      desc: 'Accurate simulation of specific laminate catalogs, veneer grain directions, marble veining, brass trims, and paint tones.',
    },
    {
      title: 'Customised Design Development',
      icon: Wrench,
      desc: 'Production-ready shop drawings, joinery details, and cutting lists formatted for modular manufacturing plants.',
    },
  ];

  const whatsappMessage = encodeURIComponent(
    'Hello Gilded Oak Interiors, I would like to enquire about your 2D drafting and 3D visualization design support services for my projects.'
  );

  return (
    <section id="b2b-design" className="py-16 sm:py-24 bg-charcoal text-white relative overflow-hidden">
      {/* Background architectural grid pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#B8892B 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold-light mb-3">
            <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
            <span>B2B Collaboration</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-serif text-white tracking-tight leading-tight mb-4">
            Your Design Vision, Our Visualisation Expertise.
          </h2>
          <p className="text-base sm:text-lg text-beige/85 leading-relaxed font-sans mb-3">
            We collaborate with interior professionals and vendors by providing reliable 2D drafting, 3D modelling and realistic rendering services to support their projects.
          </p>
          {/* Required Audience Line */}
          <p className="text-xs sm:text-sm text-gold-light/90 font-medium tracking-wide uppercase font-sans">
            Tailored for architects, interior designers, contractors and interior vendors.
          </p>
        </div>

        {/* Visual Showcase: Showing floorplan-2d.webp and render-3d.webp */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* 2D Floor Plan Showcase */}
          <div className="rounded-2xl overflow-hidden bg-charcoal-light/70 border border-white/10 p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/40 mb-4">
                <SafeImage
                  src="/images/floorplan-2d.webp"
                  alt="Professional 2D Floor Plan and CAD Drafting"
                  fallbackCategory="2D Floor Plan"
                  aspectRatioClass="h-full w-full"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-medium text-white mb-1.5">
                Detailed 2D CAD Drafting
              </h3>
              <p className="text-xs sm:text-sm text-beige/75 font-sans leading-relaxed">
                Millimeter-accurate working drawings, electrical layouts, false ceiling profiles, and joinery sections ready for execution.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gold font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>AutoCAD DWG &amp; Print-Ready PDF</span>
            </div>
          </div>

          {/* 3D Photorealistic Render Showcase */}
          <div className="rounded-2xl overflow-hidden bg-charcoal-light/70 border border-white/10 p-4 sm:p-5 flex flex-col justify-between">
            <div>
              <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-black/40 mb-4">
                <SafeImage
                  src="/images/render-3d.webp"
                  alt="Photorealistic 3D Architectural Interior Rendering"
                  fallbackCategory="3D Photorealistic Render"
                  aspectRatioClass="h-full w-full"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-serif font-medium text-white mb-1.5">
                Photorealistic 3D CGI Renders
              </h3>
              <p className="text-xs sm:text-sm text-beige/75 font-sans leading-relaxed">
                High-definition realistic imagery depicting day and night scenarios, material textures, and accurate lighting reflections.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gold font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Ultra-HD 4K Renders</span>
            </div>
          </div>
        </div>

        {/* 7 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12">
          {b2bList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-charcoal-light/60 border border-white/10 hover:border-gold/50 transition-all duration-300 hover:bg-charcoal-light/90 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-charcoal-dark transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-beige/50 font-medium">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-medium text-white group-hover:text-gold-light transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-beige/75 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center gap-2 text-xs text-gold/80 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                  <span>Production-Grade Delivery</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* B2B Action Banner: Button "Get Design Support" */}
        <div className="p-6 sm:p-8 rounded-2xl bg-charcoal-dark border border-gold/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="text-xl sm:text-2xl font-serif text-white mb-1">
              Need reliable design support for an upcoming project?
            </h4>
            <p className="text-sm text-beige/70 font-sans">
              Connect on WhatsApp to share CAD plans, 3D scopes, or sample references for a prompt quote.
            </p>
          </div>

          <a
            href={`https://wa.me/916369929442?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[50px] w-full md:w-auto px-8 py-3.5 rounded-xl bg-gold text-white font-semibold text-sm hover:bg-gold-dark active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-gold/20 cursor-pointer flex-shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Get Design Support</span>
          </a>
        </div>

      </div>
    </section>
  );
};
