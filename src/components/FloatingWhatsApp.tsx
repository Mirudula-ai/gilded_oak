import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl =
    'https://wa.me/916369929442?text=Hello%20Gilded%20Oak%20Interiors%2C%20I%20would%20like%20to%20discuss%20my%20interior%20project.';

  return (
    <aside aria-label="Quick contact" className="fixed right-4 sm:right-6 z-40 safe-pb-floating pointer-events-auto">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Architect Manikandan on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20ba5a] active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
      >
        {/* Subtle breathing radar ring */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-75 pointer-events-none" />

        {/* WhatsApp Icon */}
        <MessageSquare className="w-7 h-7 fill-white stroke-none relative z-10" />

        {/* Tooltip on desktop hover */}
        <span className="hidden sm:group-hover:flex absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-charcoal text-white text-xs font-medium whitespace-nowrap shadow-xl border border-white/10 items-center gap-1.5 pointer-events-none">
          <span>Chat with Architect Manikandan</span>
          <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block" />
        </span>
      </a>
    </aside>
  );
};
