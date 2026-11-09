import React, { useState, useEffect, useRef, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, MessageSquare, SlidersHorizontal } from 'lucide-react';
import type { Project } from '../data/projects';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { SafeImage } from './SafeImage';

interface LightboxModalProps {
  project: Project | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ project, onClose }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const images = project?.images && project.images.length > 0 ? project.images : [];

  const nextImage = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIdx((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevImage = useCallback(() => {
    if (images.length === 0) return;
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && !showBeforeAfter) nextImage();
      if (e.key === 'ArrowLeft' && !showBeforeAfter) prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [project, showBeforeAfter, nextImage, prevImage, onClose]);

  if (!project) return null;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isSwipeLeft = distance > 40;
    const isSwipeRight = distance < -40;

    if (isSwipeLeft && !showBeforeAfter) {
      nextImage();
    }
    if (isSwipeRight && !showBeforeAfter) {
      prevImage();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Gilded Oak Interiors, I would like to enquire about the "${project.name}" (${project.category}) project.`
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${project.name} Gallery`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-dark/95 backdrop-blur-md overflow-y-auto p-2 sm:p-4"
    >
      {/* Background click to dismiss */}
      <div className="fixed inset-0 -z-10" onClick={onClose} aria-hidden="true" />

      {/* Main Container */}
      <div className="relative w-full max-w-5xl bg-charcoal rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col my-auto max-h-[96svh]">
        
        {/* Top Bar: Title, Category, Counter & Close Button */}
        <div className="p-4 sm:p-5 bg-charcoal-light/80 border-b border-white/10 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <span className="text-xs text-gold-light uppercase tracking-wider font-semibold">
              {project.category}
            </span>
            <h3 className="text-lg sm:text-2xl font-serif text-white truncate mt-0.5">
              {project.name}
            </h3>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            {project.beforeAfter && (
              <button
                type="button"
                onClick={() => setShowBeforeAfter(!showBeforeAfter)}
                className={`min-h-[48px] px-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer ${
                  showBeforeAfter
                    ? 'bg-gold text-white'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span className="hidden sm:inline">
                  {showBeforeAfter ? 'View Photos' : 'Before / After'}
                </span>
                <span className="sm:hidden">
                  {showBeforeAfter ? 'Photos' : 'B/A'}
                </span>
              </button>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Close Lightbox"
              className="min-h-[48px] min-w-[48px] rounded-xl bg-white/10 hover:bg-gold hover:text-white text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Center Media Area */}
        <div
          className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] sm:min-h-[450px] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {showBeforeAfter && project.beforeAfter ? (
            <div className="p-4 sm:p-6 w-full max-w-3xl mx-auto">
              <BeforeAfterSlider
                before={project.beforeAfter.before}
                after={project.beforeAfter.after}
                caption={project.beforeAfter.caption}
              />
            </div>
          ) : (
            <div className="relative w-full h-full flex items-center justify-center select-none p-2 sm:p-4">
              <SafeImage
                src={images[currentIdx]}
                alt={`${project.name} - Photo ${currentIdx + 1}`}
                fallbackCategory={project.category}
                aspectRatioClass="max-h-[60svh] w-auto max-w-full"
                className="max-h-[60svh] w-auto max-w-full object-contain mx-auto"
                priority={true}
              />

              {/* Counter Pill in corner */}
              <div className="absolute top-4 right-4 text-xs font-mono font-medium text-white bg-charcoal-dark/80 px-2.5 py-1 rounded-full backdrop-blur-sm pointer-events-none">
                {currentIdx + 1} / {images.length}
              </div>

              {/* Mobile swipe helper tooltip */}
              {images.length > 1 && (
                <div className="sm:hidden absolute bottom-3 left-1/2 -translate-x-1/2 text-[11px] text-beige/70 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm pointer-events-none">
                  Swipe left / right
                </div>
              )}

              {/* Prev / Next controls */}
              {images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
                    aria-label="Previous photo"
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 min-h-[48px] min-w-[48px] rounded-full bg-black/60 hover:bg-gold text-white flex items-center justify-center transition-colors backdrop-blur-sm cursor-pointer z-10"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    type="button"
                    onClick={nextImage}
                    aria-label="Next photo"
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 min-h-[48px] min-w-[48px] rounded-full bg-black/60 hover:bg-gold text-white flex items-center justify-center transition-colors backdrop-blur-sm cursor-pointer z-10"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Bottom Details & Action */}
        <div className="p-4 sm:p-5 bg-charcoal-light/80 border-t border-white/10 flex flex-col gap-3">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="text-xs sm:text-sm text-beige/85 max-w-2xl font-sans">
              <p className="line-clamp-2">{project.description}</p>
              {project.details?.material && (
                <p className="text-[11px] text-gold-light mt-1">
                  <strong>Materials:</strong> {project.details.material} &bull;{' '}
                  <strong>Finish:</strong> {project.details.finish}
                </p>
              )}
            </div>

            <a
              href={`https://wa.me/916369929442?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gold hover:bg-gold-dark text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer flex-shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Thumbnails row */}
          {!showBeforeAfter && images.length > 1 && (
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-2 border-t border-white/5">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIdx(idx)}
                  className={`min-h-[48px] min-w-[56px] h-14 w-18 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                    currentIdx === idx ? 'border-gold scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
