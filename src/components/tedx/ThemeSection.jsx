import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const themeCards = [
  {
    title: 'Uncharted\nHealthcare',
    description: 'From AI-powered diagnostics to regenerative medicine, the frontiers of healing are being redrawn by those who refuse to accept limitations.',
  },
  {
    title: 'Uncharted\nTechnologies',
    description: 'Quantum computing, brain-computer interfaces, and synthetic biology — technologies once confined to science fiction become the tools of tomorrow.',
  },
  {
    title: 'Uncharted\nScience',
    description: 'The next Nobel Prize may come from a question nobody has thought to ask. Breakthroughs begin at the edge of what we know.',
  },
  {
    title: 'Uncharted\nJourneys',
    description: 'Behind every innovation is a human story of risk, resilience, and the audacity to pursue an idea when the path forward was invisible.',
  },
  {
    title: 'Uncharted\nPotential',
    description: 'The greatest frontier is within. We explore the untapped capacity of human will, empathy, and creativity to reshape the world.',
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
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-ted-red" />
            <p className="text-ted-red text-[11px] tracking-[0.45em] uppercase font-medium">02 — Theme</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-20 items-end">
          <ScrollReveal>
            <h2 className="text-6xl lg:text-8xl font-black text-white tracking-tight leading-none">
              Why<br />
              <span className="text-ted-red">Uncharted</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/45 text-lg leading-relaxed font-light">
              Because the most transformative ideas are born where maps end and courage
              begins. "Uncharted" is an invitation to step beyond the familiar and explore
              the territories that define what comes next — in medicine, science, and the
              human story.
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