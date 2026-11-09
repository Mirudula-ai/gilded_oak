import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: '2D & 3D Design', href: '#b2b-design' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-beige-dark/40 py-2.5 sm:py-3'
          : 'bg-ivory/90 backdrop-blur-sm border-b border-beige-dark/20 py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo brand link */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#hero');
            }}
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-gold/50 rounded-lg p-1"
            aria-label="Gilded Oak Interiors - Home"
          >
            <img
              src="/images/logo.png"
              alt="Gilded Oak Interiors"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
              width="218"
              height="120"
              loading="eager"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-md relative ${
                    isActive
                      ? 'text-gold font-semibold'
                      : 'text-charcoal hover:text-gold'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-gold rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA: Gold Enquire Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="inline-flex items-center justify-center min-h-[48px] px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white bg-gold hover:bg-gold-dark active:scale-[0.98] transition-all duration-200 shadow-sm"
            >
              <span>Enquire</span>
            </a>
          </div>

          {/* Mobile Right Controls: WhatsApp Quick Icon & Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="https://wa.me/916369929442?text=Hello%20Gilded%20Oak%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20project."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enquire on WhatsApp"
              className="min-h-[48px] min-w-[48px] p-2.5 rounded-full bg-gold/15 text-gold flex items-center justify-center hover:bg-gold/25 active:scale-95 transition-all"
            >
              <MessageSquare className="w-5 h-5" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="min-h-[48px] min-w-[48px] p-2.5 rounded-lg text-charcoal hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/50 flex items-center justify-center"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Full-screen Mobile Navigation Overlay */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="lg:hidden fixed inset-0 z-50 bg-ivory/98 backdrop-blur-xl flex flex-col justify-between pt-safe pb-safe px-6 overflow-y-auto"
          style={{ height: '100svh' }}
        >
          {/* Header row in mobile overlay */}
          <div className="flex items-center justify-between py-4 border-b border-beige-dark/30">
            <img
              src="/images/logo.png"
              alt="Gilded Oak Interiors"
              className="h-10 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation"
              className="min-h-[48px] min-w-[48px] p-2 rounded-full text-charcoal hover:bg-beige/50 flex items-center justify-center"
            >
              <X className="w-7 h-7" />
            </button>
          </div>

          {/* Links list with 48px+ tap targets */}
          <div className="py-6 flex flex-col space-y-1">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="flex items-center justify-between min-h-[50px] px-3 py-2 text-lg font-serif text-charcoal hover:text-gold hover:bg-beige/40 rounded-lg transition-all"
              >
                <span>{link.label}</span>
                <span className="text-xs font-sans text-gold/80 tracking-widest uppercase">
                  0{idx + 1}
                </span>
              </a>
            ))}
          </div>

          {/* Mobile Footer CTA */}
          <div className="py-6 border-t border-beige-dark/30 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#contact');
              }}
              className="min-h-[50px] w-full flex items-center justify-center gap-2 rounded-xl bg-gold text-white font-medium text-sm hover:bg-gold-dark transition-colors py-3 shadow-md shadow-gold/20"
            >
              <span>Enquire</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
