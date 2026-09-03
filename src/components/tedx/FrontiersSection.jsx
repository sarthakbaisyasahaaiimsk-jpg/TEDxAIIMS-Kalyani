import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Brain, Globe, FlaskConical, Users, Rocket } from 'lucide-react';

const frontiers = [
  {
    icon: Rocket,
    num: '01',
    title: 'Digital Health & Governance',
    subtitle: 'Medicine meets technology',
    description: 'A UPSC AIR 1 holder turned physician-technocrat, Dr. Karthik Adapa bridges medicine, AI and public policy as WHO-SEARO\'s Regional Adviser for Digital Health, shaping equitable, technology-enabled healthcare across nations.',
  },
  
  
  {
    icon: Users,
    num: '02',
    title: 'Social Impact',
    subtitle: 'A voice for the voiceless',
    description: 'From building deaf-friendly institutions to reuniting thousands of families, Gyanendra Purohit\'s work shows how grief can be transformed into a lifelong mission for dignity and inclusion.',
  },
  {
    icon: FlaskConical,
    num: '03',
    title: 'Science & Ethics',
    subtitle: 'Beyond animal models',
    description: 'Dr. Anjana Aggarwal challenges the conventions of biomedical research, advocating a shift toward modern, human-relevant and animal-free methods for the next generation of science.',
  },
  {
    icon: Globe,
    num: '04',
    title: 'Law & Justice',
    subtitle: 'A life on the bench and beyond',
    description: 'From the Supreme Court to becoming India\'s first Lokpal, Justice Pinaki Chandra Ghose\'s career reflects a lifelong engagement with justice, accountability and human rights.',
  },
  {
    icon: Brain,
    num: '05',
    title: 'Health & Caregiving',
    subtitle: 'Even when memories fade',
    description: 'With nearly three decades in dementia care, Nilanjana Maulik\'s work is rooted in a simple belief: even as memory fades, the need for dignity, connection and compassion never does.',
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
              Six voices. Six territories of thought — law, science, social
              impact, care and technology — brought to life on one stage. Hover to explore each speaker.
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
