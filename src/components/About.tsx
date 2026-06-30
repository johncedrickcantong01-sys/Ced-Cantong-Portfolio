import React from 'react';
import { Film, Clock, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding container-max bg-surface mt-16 border-y border-border/50">
      
      {/* Intro Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32 items-center">
        
        {/* Image */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative aspect-[3/4] w-full border border-border overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop" 
              alt="Editor Portrait" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
            {/* ID Badge overlay */}
            <div className="absolute bottom-6 left-6 flex gap-2">
              <span className="bg-surface/90 backdrop-blur border border-border text-text-main px-4 py-2 text-label">
                MATEO DIAZ
              </span>
              <span className="bg-primary text-background px-4 py-2 text-label font-bold">
                EDITOR
              </span>
            </div>
          </div>
        </div>

        {/* Bio Text */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <h2 className="heading-lg mb-8 uppercase">The Editor's Cut</h2>
          
          <div className="space-y-6 text-body-lg text-text-muted mb-12">
            <p>
              I don't just cut footage; I build reliable content pipelines. I bridge the gap between heavy production and platform-ready distribution. 
            </p>
            <p>
              By streamlining the post-production workflow, I help creative directors and agencies scale their video output without babysitting the timeline.
            </p>
          </div>

          {/* Software stack */}
          <div className="flex flex-wrap gap-4">
            {['Final Cut Pro', 'Motion Tools', 'DaVinci Resolve', 'Asset Automation'].map(software => (
              <span key={software} className="px-6 py-3 border border-border text-label text-text-main hover:border-primary transition-colors cursor-default">
                {software}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Brutalist Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32">
        {[
          { icon: <Film size={32} />, number: '150+', label: 'Videos Delivered' },
          { icon: <Clock size={32} />, number: '48h', label: 'Standard Turnaround' },
          { icon: <Award size={32} />, number: '100%', label: 'Pipeline Reliability' },
        ].map((stat, i) => (
          <div key={i} className="bg-background border border-border p-10 flex flex-col justify-between min-h-[240px] hover:border-primary transition-colors group">
            <div className="text-primary mb-8 transform group-hover:scale-110 transition-transform origin-left">
              {stat.icon}
            </div>
            <div>
              <h3 className="heading-lg mb-2">{stat.number}</h3>
              <p className="text-label text-text-muted">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Process Section */}
      <div>
        <h2 className="heading-md mb-16 pb-6 border-b border-border uppercase tracking-wide">The Process</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="relative">
            <span className="text-primary text-label mb-6 block">01</span>
            <h3 className="heading-md mb-4">Asset Ingestion</h3>
            <p className="text-body-lg text-text-muted">
              Organizing and reviewing raw assets. Establishing the project structure and aligning on the distribution strategy to ensure a frictionless workflow.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="relative">
            <span className="text-primary text-label mb-6 block">02</span>
            <h3 className="heading-md mb-4">Pipeline Execution</h3>
            <p className="text-body-lg text-text-muted">
              The heavy lifting. Rapidly assembling narratives, dialing in the pacing, and executing necessary motion design to maximize viewer retention.
            </p>
          </div>
          
          {/* Step 3 */}
          <div className="relative">
            <span className="text-primary text-label mb-6 block">03</span>
            <h3 className="heading-md mb-4">Final QA & Delivery</h3>
            <p className="text-body-lg text-text-muted">
              Rigorous quality assurance, audio leveling, and format-specific exports. Delivering platform-ready assets directly to your team on schedule.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
