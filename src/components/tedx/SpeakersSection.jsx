import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const speakers = [
  {
    name: 'Dr. Ananya Sharma',
    role: 'AI & Diagnostics Researcher',
    category: 'Technology',
    image: 'https://media.base44.com/images/public/6a3a5e7dc678c621c4d8d234/bcfd84920_generated_8ac45b79.png',
    topic: 'When Machines See What Doctors Miss',
  },
  {
    name: 'Dr. Priya Menon',
    role: 'Surgical Oncologist',
    category: 'Healthcare',
    image: 'https://media.base44.com/images/public/6a3a5e7dc678c621c4d8d234/11ba6e7fc_generated_0ab8db57.png',
    topic: 'Rewriting the Rules of Cancer Care',
  },
  {
    name: 'Arjun Kapoor',
    role: 'Biotech Entrepreneur',
    category: 'Entrepreneurship',
    image: 'https://media.base44.com/images/public/6a3a5e7dc678c621c4d8d234/79150be4b_generated_3d57950c.png',
    topic: 'Building the Impossible in Biotech',
  },
  {
    name: 'Prof. Kavita Das',
    role: 'Neuroscience Researcher',
    category: 'Research',
    image: 'https://media.base44.com/images/public/6a3a5e7dc678c621c4d8d234/5f6a3dfda_generated_d1fec550.png',
    topic: 'Mapping the Uncharted Brain',
  },
  {
    name: 'Dr. Meera Iyer',
    role: 'Global Health Advocate',
    category: 'Policy',
    image: 'https://media.base44.com/images/public/6a3a5e7dc678c621c4d8d234/591aa6908_generated_2c43ad3c.png',
    topic: 'Healthcare Without Borders',
  },
  {
    name: 'Prof. Rajesh Nair',
    role: 'Genomics Pioneer',
    category: 'Research',
    image: 'https://media.base44.com/images/public/6a3a5e7dc678c621c4d8d234/36b9f6c70_generated_3c7ad93d.png',
    topic: 'Your DNA Is a Map — Learn to Read It',
  },
];

const categories = ['All', 'Healthcare', 'Technology', 'Research', 'Entrepreneurship', 'Policy'];

export default function SpeakersSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? speakers
    : speakers.filter(s => s.category === activeCategory);

  return (
    <section id="speakers" className="relative bg-[#060606] py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-ted-red" />
            <p className="text-ted-red text-[11px] tracking-[0.45em] uppercase font-medium">04 — Speakers</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-8">
          <ScrollReveal>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
              The Explorers
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[10px] tracking-[0.2em] uppercase px-4 py-2 transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-ted-red text-white'
                      : 'text-white/35 border border-white/8 hover:text-white hover:border-white/25'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((speaker, i) => (
              <motion.div
                key={speaker.name}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden bg-[#0f0f0f] border border-white/5 hover:border-ted-red/25 transition-colors duration-500"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-ted-red text-[9px] tracking-[0.35em] uppercase font-medium">
                      {speaker.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mt-1 tracking-tight">{speaker.name}</h3>
                    <p className="text-white/45 text-sm mt-0.5">{speaker.role}</p>
                    <div className="mt-3 pt-3 border-t border-white/8">
                      <p className="text-white/25 text-xs font-light italic">"{speaker.topic}"</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <ScrollReveal>
          <div className="mt-14 pt-10 border-t border-white/5 flex items-center justify-between">
            <p className="text-white/25 text-sm tracking-wide">
              More speakers to be announced.
            </p>
            <span className="text-ted-red text-xs tracking-[0.25em] uppercase font-medium">Stay tuned →</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}