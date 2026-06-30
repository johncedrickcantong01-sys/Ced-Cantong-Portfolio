import React from 'react';
import { Scissors, Video, Palette, Check } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="section-padding container-max border-b border-border/50">
      
      {/* Services Header */}
      <div className="flex flex-col items-center text-center mb-24">
        <span className="text-label text-primary mb-4 block">Capabilities</span>
        <h2 className="heading-lg max-w-4xl">Turnkey post-production for episodic shows, direct-response video sales letters, and highly engaging social clips. Built for consistency and scale.</h2>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white/5 border border-white/10 p-10 flex flex-col hover:border-white/40 transition-colors group">
          <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-8 text-text-main group-hover:bg-primary group-hover:text-background transition-colors">
            <Scissors size={28} />
          </div>
          <h3 className="heading-md mb-4">Short-Form Assets</h3>
          <p className="text-body-lg text-text-muted mb-8 flex-grow">
            Punchy, engaging cuts optimized for TikTok, Reels, and YouTube Shorts. Maximizing retention with dynamic pacing and motion graphics.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/5 border border-white/10 p-10 flex flex-col hover:border-white/40 transition-colors group">
          <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-8 text-text-main group-hover:bg-primary group-hover:text-background transition-colors">
            <Video size={28} />
          </div>
          <h3 className="heading-md mb-4">VSLs & Commercials</h3>
          <p className="text-body-lg text-text-muted mb-8 flex-grow">
            High-converting Video Sales Letters and commercial spots. Focused on narrative continuity and direct-response structure.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/5 border border-white/10 p-10 flex flex-col hover:border-white/40 transition-colors group">
          <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mb-8 text-text-main group-hover:bg-primary group-hover:text-background transition-colors">
            <Palette size={28} />
          </div>
          <h3 className="heading-md mb-4">Podcast Post-Production</h3>
          <p className="text-body-lg text-text-muted mb-8 flex-grow">
            Multi-camera switching, audio leveling, and final master delivery for episodic video podcasts. Reliable and consistent.
          </p>
        </div>
      </div>
    </section>
  );
}
