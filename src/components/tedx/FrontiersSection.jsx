import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Brain, Microscope, Globe, FlaskConical, Rocket, Users, Sparkles } from 'lucide-react';

const frontiers = [
  {
    icon: Brain,
    num: '01',
    title: 'Artificial Intelligence',
    subtitle: 'Machine minds, human purpose',
    description: 'From diagnostic algorithms that outperform specialists to language models that democratize knowledge — AI is rewriting the rules of what machines can do for humanity.',
  },
  {
    icon: Microscope,
    num: '02',
    title: 'Precision Medicine',
    subtitle: 'Your genome, your therapy',
    description: 'Treatments tailored to your DNA, lifestyle, and environment. Precision medicine promises to end the era of one-size-fits-all healthcare forever.',
  },
  {
    icon: Globe,
    num: '03',
    title: 'Global Health',
    subtitle: 'Equity beyond borders',
    description: 'Pandemics reminded us that health is borderless. The next frontier is building systems resilient enough to protect every community on Earth.',
  },
  {
    icon: FlaskConical,
    num: '04',
    title: 'Biotechnology',
    subtitle: 'Engineering life itself',
    description: 'CRISPR gene editing, lab-grown organs, and synthetic biology — we are entering an era where biology becomes a programmable medium.',
  },
  {
    icon: Rocket,
    num: '05',
    title: 'Entrepreneurship',
    subtitle: 'Ideas that disrupt industries',
    description: 'The most consequential companies of the next decade will solve problems we haven\'t fully understood yet. Entrepreneurship is the engine of the uncharted.',
  },
  {
    icon: Users,
    num: '06',
    title: 'Leadership',
    subtitle: 'Navigating without a map',
    description: 'True leadership emerges when the playbook is blank. We explore how visionaries lead teams, institutions, and nations through uncertainty.',
  },
  {
    icon: Sparkles,
    num: '07',
    title: 'Human Potential',
    subtitle: 'Beyond the measurable',
    description: 'Consciousness, creativity, resilience — the most complex systems in the universe reside within us. What happens when we turn our tools of discovery inward?',
  },
];

export default function FrontiersSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="frontiers" className="relative bg-black py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16 items-end">
          <ScrollReveal>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
              Journey Through<br />
              <span className="text-white/20">the Unknown</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 text-base leading-relaxed font-light">
              Seven frontiers. Seven territories where the next decade's breakthroughs
              are waiting to be discovered. Hover to explore each domain.
            </p>
          </ScrollReveal>
        </div>

        {/* Full-width frontier list */}
        <div className="divide-y divide-white/5 border-t border-white/5">
          {frontiers.map((frontier, i) => {
            const Icon = frontier.icon;
            const isActive = activeIndex === i;
            return (
              <ScrollReveal key={frontier.title} delay={i * 0.05}>
                <motion.div
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(null)}
                  className={`group cursor-pointer py-6 lg:py-7 flex items-start gap-6 lg:gap-10 transition-all duration-400 ${
                    isActive ? 'bg-[#0f0f0f] px-6 -mx-6' : ''
                  }`}
                >
                  {/* Number */}
                  <span className={`font-mono text-[10px] tracking-[0.25em] pt-1 transition-colors duration-300 ${isActive ? 'text-ted-red' : 'text-white/15'}`}>
                    {frontier.num}
                  </span>

                  {/* Icon */}
                  <div className={`p-2 border transition-all duration-400 flex-shrink-0 ${
                    isActive ? 'border-ted-red/30 text-ted-red' : 'border-white/5 text-white/20'
                  }`}>
                    <Icon size={18} strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
                      <h3 className={`font-bold text-lg lg:text-xl tracking-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/70'}`}>
                        {frontier.title}
                      </h3>
                      <span className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${isActive ? 'text-white/40' : 'text-white/15'}`}>
                        {frontier.subtitle}
                      </span>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.p
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 10 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.25 }}
                          className="text-white/45 text-sm leading-relaxed overflow-hidden"
                        >
                          {frontier.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Red arrow indicator */}
                  <motion.div
                    animate={{ x: isActive ? 0 : -6, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-ted-red pt-1 flex-shrink-0"
                  >
                    →
                  </motion.div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}