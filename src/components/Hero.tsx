import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { SafeImage } from './SafeImage';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full flex flex-col justify-between overflow-hidden bg-charcoal-dark text-white"
      style={{ minHeight: '100svh' }}
    >
      {/* Background Luxury Living Room Image with dark architectural overlay */}
      <div className="absolute inset-0 z-0">
        <SafeImage
          src="/images/hero.webp"
          alt="Luxury living room designed by Gilded Oak Interiors"
          fallbackCategory="Luxury Living Interior"
          aspectRatioClass="h-full w-full"
          className="w-full h-full object-cover object-center transform scale-102"
          priority={true}
        />
        {/* Dark architectural gradient overlays to ensure optimal legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/75 to-charcoal-dark/45" />
        <div className="absolute inset-0 bg-black/35 backdrop-blur-[0.5px]" />
      </div>

      {/* Decorative architectural grid lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="max-w-7xl mx-auto h-full grid grid-cols-2 md:grid-cols-4 border-x border-gold">
          <div className="border-r border-gold" />
          <div className="border-r border-gold hidden md:block" />
          <div className="border-r border-gold hidden md:block" />
        </div>
      </div>

      {/* Spacer for sticky navbar */}
      <div className="h-20 sm:h-24 w-full" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl">
          
          {/* Brand Logo Presentation in Hero */}
          <div className="mb-6 inline-block bg-white/95 p-3 rounded-2xl shadow-lg border border-gold/30">
            <img
              src="/images/logo.png"
              alt="Gilded Oak Interiors"
              className="h-12 sm:h-14 w-auto object-contain"
              width="230"
              height="126"
            />
          </div>

          {/* Primary H1 Heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.12] tracking-tight text-white mb-6">
            Designing Spaces.{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-beige">
              Creating Experiences.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-beige/90 font-light leading-relaxed mb-8 max-w-2xl">
            At Gilded Oak Interiors, we transform everyday spaces into functional, elegant and
            personalised environments through thoughtful design and quality craftsmanship.
          </p>

          {/* Action Buttons: 48px+ tap targets */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="min-h-[50px] px-7 py-3.5 rounded-xl bg-gold text-white font-medium text-base tracking-wide hover:bg-gold-dark active:scale-[0.98] transition-all duration-200 shadow-lg shadow-gold/20 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Explore Our Projects</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="min-h-[50px] px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-[0.98] border border-white/30 backdrop-blur-md text-white font-medium text-base tracking-wide transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Discuss Your Project</span>
            </button>
          </div>

          {/* Value Badges: 3 highlight counters / badges */}
          <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 pt-4 border-t border-white/15 max-w-xl">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-beige/85">
              <span className="w-2 h-2 rounded-full bg-gold inline-block flex-shrink-0" />
              <span>Residential Interiors</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-beige/85">
              <span className="w-2 h-2 rounded-full bg-gold inline-block flex-shrink-0" />
              <span>Customised Furniture</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-beige/85">
              <span className="w-2 h-2 rounded-full bg-gold inline-block flex-shrink-0" />
              <span>2D &amp; 3D Design Services</span>
            </div>
          </div>

        </div>
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-10 w-full border-t border-white/10 bg-charcoal-dark/60 backdrop-blur-md py-3 px-4 safe-bottom">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-beige/70">
          <span>Thoughtful Designs &bull; Quality Craftsmanship</span>
          
          <button
            type="button"
            onClick={() => scrollTo('about')}
            className="flex items-center gap-1.5 hover:text-gold transition-colors py-1 cursor-pointer"
            aria-label="Scroll to About Us"
          >
            <span>Learn More</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
