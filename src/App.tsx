import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { DesignServices2D3D } from './components/DesignServices2D3D';
import { ProjectsGallery } from './components/ProjectsGallery';
import { ManufacturingFacility } from './components/ManufacturingFacility';
import { WhyChooseUs } from './components/WhyChooseUs';
import { WorkProcess } from './components/WorkProcess';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Track active section for navbar indicators
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'services',
      'b2b-design',
      'projects',
      'facility',
      'why-us',
      'process',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-ivory text-charcoal font-sans flex flex-col relative selection:bg-gold selection:text-white">
      {/* Sticky Header with logo and navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content: Semantic sections in precise ordered sequence */}
      <main className="flex-1 w-full">
        {/* 1. HERO */}
        <Hero />

        {/* 2. ABOUT US */}
        <About />

        {/* 3. SERVICES */}
        <Services />

        {/* 4. 2D & 3D DESIGN SERVICES (B2B) */}
        <DesignServices2D3D />

        {/* 5. PROJECTS GALLERY */}
        <ProjectsGallery />

        {/* 6. MANUFACTURING FACILITY */}
        <ManufacturingFacility />

        {/* 7. WHY CHOOSE US */}
        <WhyChooseUs />

        {/* 8. WORK PROCESS */}
        <WorkProcess />

        {/* 9. CONTACT */}
        <ContactSection />
      </main>

      {/* 10. FOOTER */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
