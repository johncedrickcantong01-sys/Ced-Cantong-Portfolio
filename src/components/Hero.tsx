import React from 'react';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-start text-left container-max pt-32 pb-16">
      
      {/* Availability Indicator */}
      <div className="flex items-center gap-3 mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        <span className="text-label text-text-main">Available for Q3 Freelance Projects & Retainers</span>
      </div>

      {/* Main Headline */}
      <h1 className="heading-xl text-text-main max-w-5xl mb-8 leading-[0.85]">
        High-Retention Editing for Multi-Format <br/><span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>Video Pipelines</span>.
      </h1>

      {/* Subheadline */}
      <p className="text-body-lg text-text-muted max-w-2xl mb-12">
        Transforming raw assets into clean podcasts, high-performing VSLs, and sharp short-form content. Focused on narrative continuity, precise pacing, and zero-headache asset delivery.
      </p>

      {/* CTA */}
      <a href="#projects" className="btn-primary group">
        View Showreel
        <Play size={14} className="ml-4 group-hover:translate-x-1 transition-transform" fill="currentColor" />
      </a>

      {/* Trusted By Logos (Template) */}
      <div className="mt-32 w-full pt-12 border-t border-border opacity-50 hover:opacity-100 transition-opacity duration-500">
        <p className="text-label text-text-muted mb-8 text-left">Trusted By</p>
        <div className="flex flex-wrap justify-start items-center gap-8 md:gap-16 grayscale opacity-40">
          {/* Placeholder for logos - replace src with actual client logos later */}
          <span className="font-display text-xl font-bold tracking-widest text-text-muted">NOMAD</span>
          <span className="font-display text-xl font-bold tracking-widest text-text-muted">ECHO_STUDIOS</span>
          <span className="font-display text-xl font-bold tracking-widest text-text-muted">VISIONARY</span>
          <span className="font-display text-xl font-bold tracking-widest text-text-muted">KINETIC</span>
        </div>
      </div>
    </section>
  );
}
