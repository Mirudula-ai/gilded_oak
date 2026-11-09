import React from 'react';
import { Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: '2D & 3D Design', href: '#b2b-design' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-white pt-16 pb-12 border-t border-beige-dark/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          
          {/* Brand Column (Logo + Tagline + Brief Note) */}
          <div className="lg:col-span-6 flex flex-col space-y-4">
            <div className="inline-block bg-white/95 p-3 rounded-2xl w-fit shadow-md">
              <img
                src="/images/logo.png"
                alt="Gilded Oak Interiors"
                className="h-14 sm:h-16 w-auto object-contain"
                width="240"
                height="132"
                loading="lazy"
              />
            </div>

            <p className="text-xl font-serif italic text-gold-light tracking-wide">
              Thoughtful Designs. Quality Craftsmanship.
            </p>

            <p className="text-sm text-beige/75 font-sans leading-relaxed max-w-md">
              An interior design and execution studio specializing in residential interior solutions, customized furniture, and professional 2D and 3D visualization support.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-sans">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="text-beige/80 hover:text-gold transition-colors inline-block py-1 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info Column: Phone & Email Only */}
          <div className="lg:col-span-3 space-y-4 text-sm font-sans">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Contact
            </h4>

            <div className="flex items-start gap-2.5 text-beige/80">
              <Phone className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">Phone &amp; WhatsApp</p>
                <a href="tel:+916369929442" className="text-gold hover:underline text-xs sm:text-sm">
                  +91 63699 29442
                </a>
              </div>
            </div>

            <div className="flex items-start gap-2.5 text-beige/80">
              <Mail className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-white">Email Address</p>
                <a href="mailto:Gildedoakinteriors@gmail.com" className="text-gold hover:underline text-xs sm:text-sm break-all">
                  Gildedoakinteriors@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Back to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-beige/60 font-sans">
          <p>
            &copy; 2026 Gilded Oak Interiors. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="min-h-[48px] px-3 rounded-lg text-beige/80 hover:text-gold hover:bg-white/5 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4 text-gold" />
          </button>
        </div>

      </div>
    </footer>
  );
};
