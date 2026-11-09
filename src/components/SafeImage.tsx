import React, { useState } from 'react';
import { Home } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackCategory?: string;
  aspectRatioClass?: string;
  priority?: boolean;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackCategory = 'Interior Design',
  aspectRatioClass = 'aspect-[16/10]',
  priority = false,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-beige-light via-beige to-beige-dark/40 border border-beige-dark/30 text-charcoal/80 select-none ${aspectRatioClass} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold mb-2 shadow-inner">
          <Home className="w-5 h-5 text-gold" />
        </div>
        <span className="text-xs font-serif font-medium tracking-wide text-charcoal/90 text-center">
          {fallbackCategory}
        </span>
        <span className="text-[10px] uppercase font-sans tracking-widest text-gold-dark mt-0.5">
          Gilded Oak Interiors
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${className}`}>
      {/* Subtle skeleton shimmer until loaded */}
      {!isLoaded && !priority && (
        <div className="absolute inset-0 bg-beige animate-pulse" />
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded || priority ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
};
