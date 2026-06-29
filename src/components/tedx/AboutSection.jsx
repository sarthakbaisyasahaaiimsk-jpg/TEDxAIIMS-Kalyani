import React from 'react';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-black py-28 lg:py-40 overflow-hidden">
      {/* Subtle vertical rail */}
      <div className="absolute left-[38%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/4 to-transparent hidden xl:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-14">
            <span className="w-5 h-px bg-ted-red" />
            <p className="text-ted-red text-[11px] tracking-[0.45em] uppercase font-medium">01 — About</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 mb-28">
          {/* Left — wide */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <h2 className="text-5xl lg:text-6xl font-black text-white tracking-tight leading-none mb-10">
                Ideas Worth<br />
                <span className="text-ted-red">Spreading</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6 font-light">
                TED is a nonprofit organization devoted to Ideas Worth Spreading —
                usually in the form of short, powerful talks by today's leading thinkers
                and doers. TED's mission: make great ideas accessible and spark
                conversations that change lives.
              </p>
              <p className="text-white/35 text-base leading-relaxed font-light">
                TEDx is a grassroots initiative created in the spirit of TED's mission.
                It brings the power of TED to local communities worldwide through
                independently organized events — each a stage for voices that might
                otherwise go unheard.
              </p>
            </ScrollReveal>
          </div>

          {/* Right — mission card */}
          <div className="lg:col-span-2">
            <ScrollReveal delay={0.15}>
              <motion.div
                whileHover={{ y: -3 }}
                className="relative bg-[#0f0f0f] border border-white/6 p-8 lg:p-10 h-full"
              >
                {/* Red corner accent */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-ted-red/40" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-ted-red/20" />

                <span className="text-ted-red text-[10px] tracking-[0.35em] uppercase font-medium block mb-4">
                  Our Mission
                </span>
                <h3 className="text-white text-2xl font-bold tracking-tight mb-5 leading-tight">
                  TEDxAIIMSKalyani
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">
                  A platform where medical professionals, researchers, technologists,
                  and visionaries converge to share ideas that challenge the status quo.
                  Rooted in one of India's premier medical institutions, we bridge
                  clinical excellence with bold innovation.
                </p>
                <p className="text-white/30 text-sm leading-relaxed">
                  From the operating theatre to the research lab, from policy corridors
                  to startup garages — we amplify voices that dare to imagine a different
                  future for healthcare and humanity.
                </p>
                <div className="w-12 h-0.5 bg-ted-red mt-8" />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>

        {/* Stats row */}
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {[
              { end: 12, suffix: '+', label: 'Speakers' },
              { end: 500, suffix: '+', label: 'Attendees' },
              { end: 30, suffix: '+', label: 'Institutions' },
              { end: 50, suffix: '+', label: 'Innovation Leaders' },
            ].map((stat) => (
              <div key={stat.label} className="bg-black py-10 px-6">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} label={stat.label} />
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}