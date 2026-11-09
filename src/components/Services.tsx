import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/services';
import type { ServiceItem } from '../data/services';
import { ServiceModal } from './ServiceModal';
import { SafeImage } from './SafeImage';

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-16 sm:py-24 bg-beige-light/50 border-b border-beige-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Turnkey Execution</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-serif text-charcoal tracking-tight leading-tight mb-4">
            Residential Interior Design &amp; Execution
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-sans">
            Personalised residential interior solutions manufactured in our own facility with lifetime durability and refined aesthetics.
          </p>
        </div>

        {/* Mobile-first Cards Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-beige-dark/40 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Wrap using SafeImage with fixed aspect ratio to prevent layout shift */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-beige">
                  <SafeImage
                    src={service.image}
                    alt={service.altText}
                    fallbackCategory={service.title}
                    aspectRatioClass="h-full w-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity pointer-events-none" />

                  {/* Service Number Badge */}
                  <span className="absolute bottom-3 right-3 text-xs font-mono font-semibold text-white/90 bg-charcoal/80 px-2 py-1 rounded-md backdrop-blur-sm pointer-events-none">
                    0{index + 1}
                  </span>
                </div>

                {/* Card Content: Title & One-line description */}
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-medium text-charcoal group-hover:text-gold transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-charcoal/75 leading-relaxed font-sans line-clamp-2">
                    {service.tagline}
                  </p>
                </div>
              </div>

              {/* View More Button: min 48px tap target */}
              <div className="p-5 sm:p-6 pt-0">
                <button
                  type="button"
                  onClick={() => setSelectedService(service)}
                  aria-label={`View more details about ${service.title}`}
                  className="min-h-[48px] w-full flex items-center justify-between px-4 py-3 rounded-xl bg-beige/60 hover:bg-gold hover:text-white text-charcoal text-sm font-semibold transition-all duration-200 cursor-pointer group-hover:bg-gold group-hover:text-white"
                >
                  <span>View More</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
};
