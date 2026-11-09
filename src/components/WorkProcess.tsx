import React from 'react';
import { Sparkles, MessageSquare, Ruler, Layers, CheckSquare, Hammer } from 'lucide-react';

export const WorkProcess: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Consultation & Requirements',
      icon: MessageSquare,
      summary: 'Understanding your aspirations, lifestyle, budget, and functional priorities.',
      detail: 'Initial deep-dive consultation to map out room-by-room requirements, design aesthetics, and milestone expectations.',
    },
    {
      step: '02',
      title: 'Site Measurement & Planning',
      icon: Ruler,
      summary: 'Laser precision site measuring, structural inspection & spatial alignment.',
      detail: 'Conducting millimeter-accurate laser dimensioning, column/beam mapping, electrical conduit checking, and spatial orientation.',
    },
    {
      step: '03',
      title: '2D Design & 3D Visualisation',
      icon: Layers,
      summary: 'Detailed CAD layouts, furniture ergonomics & photorealistic 3D renders.',
      detail: 'Iterative design phase where you review 2D space planning, realistic 3D views, material combinations, and customized furniture proportions.',
    },
    {
      step: '04',
      title: 'Material Selection & Quotation',
      icon: CheckSquare,
      summary: 'Transparent itemized pricing with physical material swatches & hardware.',
      detail: 'Reviewing actual acrylic finishes, veneers, laminates, and hardware samples with transparent, zero-hidden-cost commercial estimates.',
    },
    {
      step: '05',
      title: 'Manufacturing & Execution',
      icon: Hammer,
      summary: 'Precision factory production in our facility followed by clean installation.',
      detail: 'Precision CNC cutting, edge-sealing, and quality inspection in our own facility, delivered directly for rapid, clean installation and final handover.',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-beige-light/30 border-b border-beige-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Methodical Execution</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-serif text-charcoal tracking-tight leading-tight mb-4">
            Our Work Process
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-sans">
            A transparent 5-step journey ensuring seamless translation from concept to finished living space.
          </p>
        </div>

        {/* Mobile Vertical Timeline (hidden on lg/desktop) */}
        <div className="lg:hidden relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-6 bottom-6 left-6 w-0.5 bg-gradient-to-b from-gold via-beige-dark to-gold" />

          <div className="space-y-8 relative">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="flex items-start gap-4 sm:gap-6">
                  {/* Step Number Circle */}
                  <div className="relative z-10 w-12 h-12 rounded-full bg-charcoal text-gold font-mono font-bold text-sm flex items-center justify-center border-2 border-gold shadow-md flex-shrink-0">
                    {item.step}
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-white p-5 sm:p-6 rounded-2xl border border-beige-dark/30 shadow-sm">
                    <div className="flex items-center gap-2 text-xs font-semibold text-gold uppercase tracking-wider mb-1">
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>Phase {item.step}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-medium text-charcoal mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm font-medium text-charcoal/80 mb-2 font-sans">
                      {item.summary}
                    </p>

                    <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop Horizontal Process Layout (visible on lg+) */}
        <div className="hidden lg:block">
          {/* Progress Bar Line */}
          <div className="relative mb-12">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-beige-dark/60 -translate-y-1/2 z-0" />
            
            <div className="relative z-10 grid grid-cols-5 gap-4">
              {steps.map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-charcoal text-gold border-2 border-gold flex items-center justify-center font-mono font-bold text-base shadow-lg transition-transform hover:scale-110">
                    {item.step}
                  </div>
                  <span className="text-xs font-semibold text-gold uppercase tracking-wider mt-3">
                    Phase {item.step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid under the timeline */}
          <div className="grid grid-cols-5 gap-4">
            {steps.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="bg-white p-5 rounded-2xl border border-beige-dark/30 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-beige/60 flex items-center justify-center text-gold mb-3">
                      <Icon className="w-4 h-4" />
                    </div>

                    <h3 className="text-base font-serif font-medium text-charcoal mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs font-medium text-charcoal/80 mb-2 font-sans">
                      {item.summary}
                    </p>

                    <p className="text-xs text-charcoal/65 leading-relaxed font-sans">
                      {item.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
