import React, { useEffect } from 'react';
import { X, CheckCircle2, Factory, MessageSquare, Phone } from 'lucide-react';
import type { ServiceItem } from '../data/services';
import { SafeImage } from './SafeImage';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (service) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [service, onClose]);

  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Gilded Oak Interiors, I would like to enquire about "${service.title}" design and execution for my home.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-charcoal-dark/75 backdrop-blur-sm"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 -z-10"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-ivory rounded-2xl shadow-2xl border border-beige-dark/40 overflow-hidden my-auto max-h-[90svh] flex flex-col">
        
        {/* Sticky Header with Large Image & Close Button */}
        <div className="relative h-52 sm:h-72 w-full flex-shrink-0 bg-charcoal overflow-hidden">
          <SafeImage
            src={service.image}
            alt={service.altText || service.title}
            fallbackCategory={service.title}
            aspectRatioClass="h-full w-full"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/40 to-transparent" />
          
          {/* Close button with min 48px tap target */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close service details"
            className="absolute top-3 right-3 min-h-[48px] min-w-[48px] rounded-full bg-charcoal-dark/80 text-white hover:bg-gold hover:text-white backdrop-blur-md flex items-center justify-center transition-colors cursor-pointer z-10"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header Title inside banner */}
          <div className="absolute bottom-4 left-4 right-4 text-white z-10">
            <span className="text-xs uppercase font-semibold tracking-wider text-gold-light">
              Residential Interiors
            </span>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-serif font-medium text-white">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-5 text-charcoal">
          
          {/* Longer description */}
          <p className="text-base text-charcoal/90 leading-relaxed font-sans">
            {service.description}
          </p>

          {/* Key Inclusions / Highlights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-walnut mb-3">
              Key Features &amp; Design Scope
            </h4>
            <div className="space-y-2">
              {service.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-2.5 text-sm text-charcoal/85">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Material Quality Assurance */}
          <div className="bg-beige/40 p-4 rounded-xl border border-beige-dark/30">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-charcoal mb-2">
              Recommended Materials
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {service.materials.map((mat, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-md bg-white border border-beige-dark/40 text-xs font-medium text-charcoal/80"
                >
                  {mat}
                </span>
              ))}
            </div>
          </div>

          {/* Own Manufacturing Facility Advantage */}
          <div className="flex items-start gap-3 p-3.5 rounded-xl bg-gold/10 border border-gold/20">
            <Factory className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-semibold uppercase text-gold-dark tracking-wide">
                Own Manufacturing Facility Advantage
              </p>
              <p className="text-xs text-charcoal/80 mt-0.5">
                {service.factoryAdvantage}
              </p>
            </div>
          </div>

        </div>

        {/* Modal Action Footer */}
        <div className="p-4 sm:p-5 bg-beige-light border-t border-beige-dark/30 flex flex-col sm:flex-row gap-2.5">
          <a
            href={`https://wa.me/916369929442?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] flex-1 flex items-center justify-center gap-2 rounded-xl bg-gold text-white font-medium text-sm hover:bg-gold-dark active:scale-[0.98] transition-all px-4 py-3 cursor-pointer shadow-sm"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Enquire on WhatsApp</span>
          </a>

          <a
            href="tel:+916369929442"
            className="min-h-[48px] sm:w-auto flex items-center justify-center gap-2 rounded-xl bg-charcoal text-white font-medium text-sm hover:bg-charcoal-light active:scale-[0.98] transition-all px-4 py-3 cursor-pointer"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>Call Now</span>
          </a>
        </div>

      </div>
    </div>
  );
};
