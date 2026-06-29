import React from 'react';
import { motion } from 'framer-motion';
import TopographicBackground from './TopographicBackground';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
      

      {/* Layered gradients for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      {/* Red glow ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-ted-red/8 blur-[120px] rounded-full pointer-events-none" />

      {/* Coordinate markers */}
      <div className="absolute top-28 left-8 hidden xl:block">
        <p className="text-white/10 text-[9px] tracking-[0.4em] uppercase font-mono" style={{ writingMode: 'vertical-lr' }}>
          23.4°N · 88.4°E · AIIMS KALYANI
        </p>
      </div>
      <div className="absolute bottom-28 right-8 hidden xl:block">
        <p className="text-white/10 text-[9px] tracking-[0.4em] uppercase font-mono" style={{ writingMode: 'vertical-lr' }}>
          TEDx · INDEPENDENTLY ORGANIZED · 2026
        </p>
      </div>

      {/* Horizontal rule top */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent origin-left"
      />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32 pb-24">

        

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <h1
            className="font-heading font-black tracking-tight leading-none"
            style={{
              fontSize: 'clamp(4rem, 14vw, 13rem)',
              letterSpacing: '-0.05em',
              lineHeight: 0.88,
            }}
          >
            <span className="text-white">UN</span>
            <span className="text-ted-red">CHART</span>
            <span className="text-white">ED</span>
          </h1>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-24 h-px bg-white/15 mb-8 origin-left"
        />

        {/* Subheadlines */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="text-white/75 text-lg lg:text-xl max-w-2xl leading-relaxed mb-4 font-light tracking-wide"
        >
          Exploring ideas beyond boundaries. Discovering the future of healthcare,
          innovation, technology, and human potential.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.72 }}
          className="text-white/35 text-sm lg:text-base max-w-xl leading-relaxed mb-14 font-light"
        >
          TEDxAIIMSKalyani brings together thinkers, innovators, researchers, clinicians,
          entrepreneurs, and changemakers who dare to venture into unexplored territories.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#register"
            className="group inline-flex items-center justify-center gap-3 bg-ted-red text-white text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:bg-white hover:text-black transition-all duration-400 font-semibold"
          >
            Apply to Attend
            <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 inline-block">→</span>
          </a>
          <a
            href="#sponsors"
            className="group inline-flex items-center justify-center gap-3 border border-white/20 text-white text-[11px] tracking-[0.25em] uppercase px-10 py-4 hover:border-white/60 hover:bg-white/5 transition-all duration-400 font-medium"
          >
            Partner With Us
          </a>
        </motion.div>

        {/* Event meta strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-wrap items-center gap-6 mt-16 pt-8 border-t border-white/5"
        >
          {[
            { label: 'Date', value: '2026 · TBD' },
            { label: 'Venue', value: 'AIIMS Kalyani' },
            { label: 'Format', value: 'In Person' },
          ].map((meta) => (
            <div key={meta.label} className="flex items-center gap-2">
              <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase">{meta.label}</span>
              <span className="text-white/10">·</span>
              <span className="text-white/50 text-[11px] tracking-wider">{meta.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-white/20 text-[9px] tracking-[0.4em] uppercase font-mono">Scroll</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <ArrowDown size={13} className="text-ted-red" />
        </motion.div>
      </motion.div>
    </section>
  );
}