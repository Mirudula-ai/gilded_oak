import React from 'react';
import { Factory, Cog, CheckCircle2, ShieldCheck } from 'lucide-react';
import { facilityData } from '../data/facility';
import { SafeImage } from './SafeImage';

export const ManufacturingFacility: React.FC = () => {
  return (
    <section id="facility" className="py-16 sm:py-24 bg-beige-light/40 border-b border-beige-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <Factory className="w-4 h-4 text-gold flex-shrink-0" />
            <span>In-House Production</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-serif text-charcoal tracking-tight leading-tight mb-4">
            From Design to Craftsmanship.
          </h2>
          <p className="text-base sm:text-lg text-charcoal/85 leading-relaxed font-sans">
            Our own manufacturing facility enables us to provide customised furniture and interior solutions with a focus on quality, precision and craftsmanship.
          </p>
        </div>

        {/* 5 Facility Image Cards Grid: Mobile first (1 col on mobile, 2 on tablet, 3 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {facilityData.map((item, index) => (
            <div
              key={item.id}
              className={`group bg-white rounded-2xl overflow-hidden border border-beige-dark/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${
                index === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Image Container with SafeImage */}
                <div
                  className={`relative w-full overflow-hidden bg-beige ${
                    index === 0 ? 'aspect-[16/9] sm:aspect-[21/9]' : 'aspect-[16/10]'
                  }`}
                >
                  <SafeImage
                    src={item.image}
                    alt={item.title}
                    fallbackCategory={item.title}
                    aspectRatioClass="h-full w-full"
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/75 via-transparent to-transparent opacity-60 pointer-events-none" />

                  {/* Number Badge */}
                  <span className="absolute top-3 right-3 text-xs font-mono text-white/90 bg-charcoal/80 px-2 py-1 rounded-md backdrop-blur-sm pointer-events-none">
                    0{index + 1}
                  </span>

                  {/* Bottom category badge inside image */}
                  <div className="absolute bottom-3 left-3 right-3 text-white pointer-events-none">
                    <span className="text-[11px] uppercase tracking-wider text-gold-light font-semibold block">
                      {item.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif font-medium text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <p className="text-sm font-medium text-charcoal mb-1 font-sans">
                    {item.caption}
                  </p>
                  <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                    {item.detail}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-0">
                <div className="flex items-center gap-2 text-xs text-gold font-medium pt-3 border-t border-beige-dark/20">
                  <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" />
                  <span>Quality Inspected</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Highlights Pill Bar */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-beige-dark/30 shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
              <Cog className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-charcoal">Precision CNC Machining</h4>
              <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                Computer-controlled cutting eliminates human error and guarantees millimeter-accurate joinery and durable edge sealing.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-sm text-charcoal">Direct In-House Control</h4>
              <p className="text-xs text-charcoal/70 mt-1 leading-relaxed">
                Complete internal control over seasoned timber, plywood standards, hardware testing, and finishing standards.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
