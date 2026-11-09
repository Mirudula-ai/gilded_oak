import React, { useState, useMemo } from 'react';
import { Sparkles, Images, SlidersHorizontal } from 'lucide-react';
import { projectsData, PROJECT_CATEGORIES } from '../data/projects';
import type { ProjectCategory, Project } from '../data/projects';
import { LightboxModal } from './LightboxModal';
import { SafeImage } from './SafeImage';

export const ProjectsGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return projectsData;
    return projectsData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-16 sm:py-24 bg-ivory text-charcoal border-b border-beige-dark/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-3">
            <Sparkles className="w-4 h-4 text-gold flex-shrink-0" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-serif text-charcoal tracking-tight leading-tight mb-4">
            Projects Gallery
          </h2>
          <p className="text-base sm:text-lg text-charcoal/80 leading-relaxed font-sans">
            A curated showcase of our residential interior completions and 3D architectural visualisations.
          </p>
        </div>

        {/* Horizontally scrollable filter chips on mobile */}
        <div className="mb-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1 touch-pan-x">
            {PROJECT_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`min-h-[48px] px-4.5 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer flex-shrink-0 flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-charcoal text-white shadow-md'
                      : 'bg-beige/60 text-charcoal/80 hover:bg-beige hover:text-charcoal'
                  }`}
                  aria-pressed={isSelected}
                >
                  <span>{cat}</span>
                  {isSelected && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of project cards (project name and category only; NO location) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => {
            const photoCount = project.images ? project.images.length : 1;
            const coverImage = project.images && project.images.length > 0 ? project.images[0] : '';

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-beige-dark/30 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-beige">
                    <SafeImage
                      src={coverImage}
                      alt={project.name}
                      fallbackCategory={project.category}
                      aspectRatioClass="h-full w-full"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark/75 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity pointer-events-none" />

                    {/* Photo count indicator */}
                    <span className="absolute top-3 right-3 text-[11px] font-sans font-medium text-white bg-charcoal/80 px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1 pointer-events-none">
                      <Images className="w-3.5 h-3.5 text-gold" />
                      <span>{photoCount}</span>
                    </span>

                    {/* Before / After Available Pill */}
                    {project.beforeAfter && (
                      <span className="absolute bottom-3 left-3 text-[10px] font-semibold uppercase tracking-wider text-charcoal bg-beige/95 px-2.5 py-1 rounded-md backdrop-blur-sm flex items-center gap-1 shadow-sm pointer-events-none">
                        <SlidersHorizontal className="w-3 h-3 text-walnut" />
                        <span>Before &bull; After</span>
                      </span>
                    )}
                  </div>

                  {/* Text Details: Project name and category only; NO location */}
                  <div className="p-5">
                    <span className="text-xs text-gold uppercase tracking-wider font-semibold block mb-1">
                      {project.category}
                    </span>

                    <h3 className="text-xl font-serif font-medium text-charcoal group-hover:text-gold transition-colors line-clamp-1">
                      {project.name}
                    </h3>
                  </div>
                </div>

                {/* Footer strip: Tap to view */}
                <div className="px-5 pb-5 pt-0">
                  <div className="min-h-[44px] flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-charcoal/80 pt-3 border-t border-beige-dark/20 group-hover:text-gold transition-colors">
                    <span>View Project</span>
                    <span className="text-gold">&rarr;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedProject && (
        <LightboxModal
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
