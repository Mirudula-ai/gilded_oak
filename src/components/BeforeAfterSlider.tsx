import React, { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  caption?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  before,
  after,
  caption,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const width = rect.width;
      const position = Math.max(0, Math.min(100, (x / width) * 100));
      setSliderPosition(position);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full flex flex-col space-y-2 select-none">
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden cursor-ew-resize border border-beige-dark/30 shadow-md bg-charcoal"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full width base) */}
        <img
          src={after}
          alt="After Execution"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Before Image (Clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={before}
            alt="Before Execution"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{
              width: containerWidth > 0 ? `${containerWidth}px` : '100%',
              height: '100%',
            }}
            loading="lazy"
          />
        </div>

        {/* Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-2xl z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Draggable Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-gold border-2 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold pointer-events-none">
            &harr;
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded bg-black/75 text-[11px] font-semibold text-white tracking-wider uppercase pointer-events-none backdrop-blur-sm">
          Before
        </div>
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded bg-gold/90 text-[11px] font-semibold text-white tracking-wider uppercase pointer-events-none backdrop-blur-sm">
          After (Gilded Oak)
        </div>
      </div>

      {caption && (
        <p className="text-xs text-charcoal/70 italic text-center px-2">
          {caption} (Drag the slider to compare)
        </p>
      )}
    </div>
  );
};
