import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const themeCards = [
  {
    title: 'Medicine\nBeyond\nBoundaries',
    description: 'Healing, Humanity & Innovation',
  },
  {
    title: 'Science\n&\nDiscovery',
    description: 'Questioning What we Know',
  },
  {
    title: 'Leadership',
    description: 'Leading Through Uncertainty',
  },
  {
    title: 'Innovation',
    description: 'Ideas that Change Lives',
  },
  {
    title: 'Entrepreneurship',
    description: 'Building the Impossible',
  },
  {
    title: 'Arts & Storytelling',
    description: 'Narratives that Trasnform',
  },
  {
    title: 'Human\nPotential',
    description: 'The Courage to Become',
  },
];

export default function ThemeSection() {
  return (
    <section id="theme" className="relative bg-[#060606] py-28 lg:py-40 overflow-hidden">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span
          className="font-black text-white/[0.025] tracking-tighter leading-none"
          style={{ fontSize: 'clamp(8rem, 28vw, 30rem)', letterSpacing: '-0.06em' }}
        >
          UNCHARTED
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-20 items-end">
          <ScrollReveal>
            <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tight leading-none">
              Why<br />
              <span className="text-ted-red">Uncharted</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/45 text-lg leading-relaxed font-light">
              Uncharted is often imagined as a place beyond the map; untouched, unseen, and unexplored. We believe it is something greater. It is not a destination but a mindset: a willingness to step into uncertainty, challenge convention, and discover possibilities where others see only the unknown.
              Guided by our motto,
             "Unbound. Unmarked. Unravelling.", TEDxAIIMS Kalyani celebrates individuals who have chosen paths without precedent, refused to be defined by expectations, and transformed bold ideas into lasting impact. Their journeys remind us that the greatest frontiers are not geographical, but intellectual, personal, and profoundly human. 
            </p>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="flex lg:grid lg:grid-cols-5 gap-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory">
          {themeCards.map((card, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6, borderColor: 'rgba(235,0,40,0.35)' }}
                className="group min-w-[240px] lg:min-w-0 snap-center bg-[#0f0f0f] border border-white/6 p-7 lg:p-8 flex flex-col h-full cursor-default transition-colors duration-500"
              >
                <div className="text-white/15 font-mono text-[10px] tracking-[0.3em] uppercase mb-5">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-white text-base font-bold mb-4 tracking-tight leading-snug whitespace-pre-line">
                  {card.title}
                </h3>
                <p className="text-white/35 text-xs leading-relaxed flex-1">
                  {card.description}
                </p>
                <div className="w-0 group-hover:w-full h-px bg-ted-red mt-6 transition-all duration-500" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}