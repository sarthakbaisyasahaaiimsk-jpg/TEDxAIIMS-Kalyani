import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import purohit from '@/assets/purohit.jpg';
import anjana from '@/assets/anjana.PNG';
import debarati from '@/assets/debarati.jpeg'
import justice from '@/assets/justice.jpeg'
//import geneva from '@/assets/geneva.png'

const speakers = [
  {
    name: 'Gyanendra Purohit',
    role: 'Advocate, Social Activist & Founder, Anand Service Society',
    category: 'Social Impact',
    image: purohit,
    topic: 'A Voice for the Voiceless',
  },

  {
    name: 'Dr. Anjana Aggarwal',
    role: 'Scientist & Research Policy Advisor',
    category: 'Science & Ethics',
    image: anjana,
    topic: "Science's Next Frontier: Beyond Animal Models",
  },

  {
    name: 'Hon’ble Justice Pinaki Chandra Ghose ',
    role: 'Former Judge, Supreme Court of India & First Lokpal of India',
    category: 'Law & Justice',
    image: justice,
    topic: "Upholding Justice: A Life on the Bench and Beyond",
  },
  
];

const comingSoonCount = 3;

export default function SpeakersSection() {
  return (
    <section id="speakers" className="relative bg-[#060606] py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        

        <div className="mb-14">
          <ScrollReveal>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
              The Speakers
            </h2>
          </ScrollReveal>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          <AnimatePresence mode="popLayout">
            {speakers.map((speaker, i) => (
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

            {Array.from({ length: comingSoonCount }).map((_, i) => (
              <motion.div
                key={`coming-soon-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: (speakers.length + i) * 0.06 }}
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden bg-[#0f0f0f] border border-white/5 hover:border-ted-red/25 transition-colors duration-500 aspect-[3/4] flex flex-col items-center justify-center text-center px-6"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
                  <span className="text-white/20 text-5xl font-black tracking-tight">?</span>
                  <p className="mt-4 text-white/60 text-sm tracking-[0.2em] uppercase font-medium">
                    More Speakers
                  </p>
                  <p className="text-ted-red text-[10px] tracking-[0.3em] uppercase mt-1">
                    Coming Soon
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
