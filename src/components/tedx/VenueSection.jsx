import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { MapPin, Train, Plane, Car } from 'lucide-react';

const travelInfo = [
  {
    icon: Plane,
    title: 'By Air',
    description: 'Netaji Subhas Chandra Bose International Airport (CCU) — 75 km. Taxi and cab services readily available.',
  },
  {
    icon: Train,
    title: 'By Rail',
    description: 'Kalyani Station on the Sealdah–Ranaghat line. Auto-rickshaws to the AIIMS campus (5 min).',
  },
  {
    icon: Car,
    title: 'By Road',
    description: 'National Highway 12 connects Kalyani to Kolkata. Well-connected via public and private transport.',
  },
];

export default function VenueSection() {
  return (
    <section id="venue" className="relative bg-black py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-14 items-end">
          <ScrollReveal>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
              AIIMS<br />
              <span className="text-ted-red">Kalyani</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 text-base leading-relaxed font-light">
              One of India's premier medical institutions — a campus where clinical excellence
              meets cutting-edge research. The perfect launchpad for uncharted ideas.
              <br /><br />
              <span className="text-white/25 text-sm flex items-center gap-2">
                <MapPin size={11} className="text-ted-red flex-shrink-0" />
                Kalyani, West Bengal · 23.4°N 88.4°E
              </span>
            </p>
          </ScrollReveal>
        </div>

        {/* Hero image */}
        <ScrollReveal>
          <div className="relative overflow-hidden mb-12 border border-white/5 group">
            <img
              src="https://media.base44.com/images/public/6a3a5e7dc678c621c4d8d234/ea8e6afad_generated_cc71bf36.png"
              alt="AIIMS Kalyani campus"
              className="w-full aspect-[21/9] object-cover opacity-60 group-hover:opacity-75 group-hover:scale-[1.02] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />

            {/* Corner label */}
            <div className="absolute top-5 right-5 border border-white/10 bg-black/50 backdrop-blur-sm px-3 py-1.5">
              <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-mono">AIIMS Kalyani</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Map */}
        <ScrollReveal>
          <div className="mb-12 border border-white/5 overflow-hidden relative">
            <div className="absolute top-3 left-3 z-10 bg-black/70 backdrop-blur-sm border border-white/10 px-3 py-1.5 flex items-center gap-2">
              <MapPin size={11} className="text-ted-red" />
              <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-mono">AIIMS Kalyani</span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.123!2d88.434!3d23.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8a0!2sAIIMS%20Kalyani!5e0!3m2!1sen!2sin!4v1700000000"
              width="100%"
              height="320"
              style={{ border: 0, filter: 'grayscale(100%) invert(90%) contrast(80%) brightness(40%)' }}
              allowFullScreen
              loading="lazy"
              title="AIIMS Kalyani Map"
            />
          </div>
        </ScrollReveal>

        {/* Travel cards */}
        <div className="grid md:grid-cols-3 gap-3">
          {travelInfo.map((info, i) => {
            const Icon = info.icon;
            return (
              <ScrollReveal key={info.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group bg-[#0f0f0f] border border-white/5 hover:border-ted-red/20 p-7 transition-colors duration-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={16} className="text-ted-red" strokeWidth={1.5} />
                    <h3 className="text-white font-bold tracking-tight">{info.title}</h3>
                  </div>
                  <p className="text-white/35 text-sm leading-relaxed">{info.description}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}