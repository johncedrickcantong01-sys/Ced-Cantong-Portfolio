import React, { useState } from 'react';
import { Play } from 'lucide-react';

// Template data for projects
const PROJECTS = [
  {
    id: 1,
    title: 'Neon Nights - Automotive',
    category: 'Commercial / VSL',
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2070&auto=format&fit=crop',
    tags: ['Editing', 'Color Grading'],
  },
  {
    id: 2,
    title: 'Raw Power - Apparel',
    category: 'Shorts/Reels',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop',
    tags: ['Motion Graphics', 'Sound Design'],
  },
  {
    id: 3,
    title: 'Cyberpunk Reality Shift',
    category: 'VFX / Polish',
    image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop',
    tags: ['VFX', 'Transitions'],
  },
  {
    id: 4,
    title: 'Autumn Hues Reel',
    category: 'Cinematic Trailer',
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop',
    tags: ['Color Grading', 'Editing'],
  },
];

const FILTERS = ['All', 'Shorts/Reels', 'Commercial / VSL', 'Cinematic Trailer', 'VFX / Polish'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding container-max">
      
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <span className="text-[10px] tracking-[0.3em] uppercase opacity-40 font-semibold mb-2 block">Portfolio Index</span>
          <h2 className="heading-lg mb-4">
            SELECTED <span className="font-medium italic opacity-80">WORKS</span>
          </h2>
          <p className="text-body-lg text-text-muted max-w-xl">
            A curated collection of recent edits, commercial spots, and cinematic trailers. Precision cut for maximum impact.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-8 text-[11px] tracking-widest uppercase font-semibold opacity-60">
          {FILTERS.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`hover:opacity-100 transition-opacity ${
                activeFilter === filter ? 'border-b border-white/40 pb-1 text-text-main opacity-100' : 'pb-1 text-text-main'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProjects.map((project, index) => (
          <article 
            key={project.id} 
            className={`group cursor-pointer bg-white/5 border border-white/10 p-4 flex flex-col justify-between ${index % 2 !== 0 ? 'md:mt-8' : 'md:-mt-8'}`} 
          >
            {/* Image Container */}
            <div className="relative w-full aspect-[16/9] overflow-hidden mb-6 border border-border/50">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                loading="lazy"
              />
              
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center text-text-main transform scale-75 group-hover:scale-100 transition-transform duration-300">
                  <Play size={20} fill="currentColor" />
                </div>
              </div>

              {/* Tags overlay */}
              <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                {project.tags.map(tag => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-xs uppercase tracking-wider font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-[10px] opacity-40 uppercase">
                  {project.category}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[9px] uppercase opacity-40">0{project.id}</span>
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-24 flex justify-center">
        <button className="btn-secondary">
          Load More Projects
        </button>
      </div>

    </section>
  );
}
