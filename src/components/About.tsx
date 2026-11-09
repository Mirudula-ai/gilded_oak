import React from 'react';
import { Home, Armchair, Layers, CheckCircle, ArrowRight } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-ivory text-charcoal border-b border-beige-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <span className="w-6 h-[1.5px] bg-gold inline-block" />
            <span>Studio &amp; Workshop</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-serif text-charcoal tracking-tight leading-tight">
            About Gilded Oak Interiors
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Architectural Interior Image (about.webp) - NO PEOPLE */}
          <div className="lg:col-span-5">
            <div className="relative w-full max-w-lg mx-auto lg:mx-0">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-2.5 sm:-inset-4 bg-gradient-to-tr from-gold/20 via-beige to-gold/10 rounded-2xl transform -rotate-1 pointer-events-none" />
              
              <div className="relative rounded-2xl overflow-hidden bg-white shadow-xl border border-beige-dark/30">
                <SafeImage
                  src="/images/about.webp"
                  alt="Architectural interior craftsmanship by Gilded Oak Interiors"
                  fallbackCategory="About Our Studio"
                  aspectRatioClass="aspect-[4/3] sm:aspect-[4/5]"
                  className="w-full h-full object-cover"
                />

                {/* Subtle Brand Watermark Tag */}
                <div className="p-4 sm:p-5 bg-beige-light/80 border-t border-beige-dark/30">
                  <p className="text-sm font-serif font-medium text-charcoal">
                    Thoughtful Designs. Quality Craftsmanship.
                  </p>
                  <p className="text-xs text-charcoal/70 mt-0.5">
                    Integrated interior design and in-house manufacturing.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Narrative Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Exact Required Brand Text */}
            <div className="bg-beige/30 p-6 sm:p-8 rounded-2xl border border-beige-dark/40 relative">
              <span className="absolute top-4 right-6 text-4xl font-serif text-gold/20 select-none">“</span>
              <p className="text-base sm:text-lg text-charcoal leading-relaxed font-sans mb-4">
                <strong>Gilded Oak Interiors</strong> is an interior design and execution service focused on creating functional, elegant and personalised interior spaces.
              </p>
              <p className="text-base sm:text-lg text-charcoal/90 leading-relaxed font-sans mb-4">
                We specialise in residential interior solutions, customised furniture and professional 2D and 3D design services. With our own manufacturing facility, we combine creative design, technical expertise and quality craftsmanship to bring ideas to life.
              </p>
              <p className="text-base sm:text-lg text-charcoal/90 leading-relaxed font-sans">
                Our goal is to deliver thoughtfully designed spaces that reflect our clients&apos; lifestyles, preferences and requirements.
              </p>
            </div>

            {/* 3 Small Highlight Badges (No invented statistics) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              <div className="p-4 rounded-xl bg-white border border-beige-dark/30 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-beige flex items-center justify-center text-gold flex-shrink-0">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-charcoal leading-snug">
                    Residential Interiors
                  </h4>
                  <p className="text-[11px] text-charcoal/65 mt-0.5">Personalised Spaces</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-beige-dark/30 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-beige flex items-center justify-center text-gold flex-shrink-0">
                  <Armchair className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-charcoal leading-snug">
                    Custom Furniture
                  </h4>
                  <p className="text-[11px] text-charcoal/65 mt-0.5">In-House Manufacturing</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-beige-dark/30 shadow-sm flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-beige flex items-center justify-center text-gold flex-shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs sm:text-sm text-charcoal leading-snug">
                    2D &amp; 3D Design
                  </h4>
                  <p className="text-[11px] text-charcoal/65 mt-0.5">Visualisation Expertise</p>
                </div>
              </div>
            </div>

            {/* Operational Quality Guarantees */}
            <div className="space-y-2 pt-2">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/80">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Single-point design-to-execution accountability from start to finish.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal/80">
                <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>Own manufacturing facility ensuring strict quality control and precision joinery.</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-gold transition-colors group cursor-pointer"
              >
                <span>Discuss your upcoming interior project with us</span>
                <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
