import React from 'react';
import {
  Sparkles,
  Factory,
  Compass,
  Award,
  Layers,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      title: 'Personalised Interior Solutions',
      icon: Sparkles,
      desc: 'No cookie-cutter templates. Every design is custom tailored around your family’s routine, cultural traditions, aesthetic tastes, and spatial dynamics.',
    },
    {
      title: 'Own Manufacturing Facility',
      icon: Factory,
      desc: 'Our own manufacturing facility gives us complete control over timber seasoning, precision panel cutting, edge-banding, and schedule reliability.',
    },
    {
      title: 'Functional Space Planning',
      icon: Compass,
      desc: 'Thoughtful ergonomics that optimize everyday movement, natural lighting, ventilation, and concealed storage throughout every room.',
    },
    {
      title: 'Quality Craftsmanship',
      icon: Award,
      desc: 'Uncompromising use of BWP 710 marine plywood, heavy-duty soft-close hardware, PU finishes, and millimeter joinery precision.',
    },
    {
      title: 'Professional 2D & 3D Visualisation',
      icon: Layers,
      desc: 'See exactly what your space will look like before execution begins. Detailed CAD working drawings and photorealistic 3D renders eliminate surprises.',
    },
    {
      title: 'Design-to-Execution Support',
      icon: CheckCircle2,
      desc: 'Single-point turnkey accountability from first site measurement to factory fabrication and final clean installation.',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-ivory text-charcoal border-b border-beige-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <span className="w-6 h-[1.5px] bg-gold inline-block" />
            <span>The Gilded Oak Standard</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-serif text-charcoal tracking-tight leading-tight mb-4">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-sans">
            Here is why homeowners and industry professionals place their trust in Gilded Oak Interiors.
          </p>
        </div>

        {/* 6 Icon Cards Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-2xl bg-white border border-beige-dark/30 shadow-sm hover:shadow-xl hover:border-gold/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 rounded-xl bg-beige flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-white transition-colors duration-200 mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-serif font-medium text-charcoal group-hover:text-gold transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm text-charcoal/75 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-beige-dark/20 flex items-center justify-between text-xs text-gold font-medium">
                  <span>Commitment to Excellence</span>
                  <span className="text-xs font-mono text-charcoal/40">0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA banner */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-charcoal hover:text-gold transition-colors group cursor-pointer"
          >
            <span>Experience the difference. Discuss your dream interior today</span>
            <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
