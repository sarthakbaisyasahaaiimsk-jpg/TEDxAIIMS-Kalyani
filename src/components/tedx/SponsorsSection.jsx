import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const sponsorTiers = [
  {
    tier: 'Title Partner',
    description: 'Presenting sponsors with maximum visibility',
    sponsors: ['Innovate Health Corp', 'TechVision India'],
    size: 'text-lg',
    cols: 'grid-cols-2',
    minH: 'min-h-[100px]',
  },
  {
    tier: 'Innovation Partner',
    description: 'Driving the frontiers of technology',
    sponsors: ['NeuroLab AI', 'BioGenesis', 'DataMed Solutions'],
    size: 'text-sm',
    cols: 'grid-cols-3',
    minH: 'min-h-[80px]',
  },
  {
    tier: 'Healthcare Partner',
    description: 'Champions of medical advancement',
    sponsors: ['MedEquip Global', 'PharmaStar', 'HealthBridge Foundation'],
    size: 'text-sm',
    cols: 'grid-cols-3',
    minH: 'min-h-[72px]',
  },
  {
    tier: 'Community Partner',
    description: 'Building the ecosystem together',
    sponsors: ['AIIMS Alumni Network', 'Startup Bengal', 'Research India', 'Open Science Collective'],
    size: 'text-xs',
    cols: 'grid-cols-2 md:grid-cols-4',
    minH: 'min-h-[64px]',
  },
];

export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative bg-[#060606] py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-ted-red" />
            <p className="text-ted-red text-[11px] tracking-[0.45em] uppercase font-medium">08 — Partners</p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <ScrollReveal>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
              Our Partners
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-2">
              <p className="text-white/30 text-sm max-w-xs font-light">
                Interested in partnering with TEDxAIIMSKalyani?
              </p>
              <a
                href="#register"
                className="text-ted-red text-[10px] tracking-[0.25em] uppercase border border-ted-red/30 px-6 py-3 hover:bg-ted-red hover:text-white transition-all duration-300 inline-block text-center font-medium"
              >
                Become a Partner →
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="space-y-10">
          {sponsorTiers.map((tier, tierIndex) => (
            <ScrollReveal key={tier.tier} delay={tierIndex * 0.08}>
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <p className="text-white/20 text-[10px] tracking-[0.35em] uppercase font-medium">{tier.tier}</p>
                  <div className="flex-1 h-px bg-white/5" />
                  <p className="text-white/10 text-[9px] tracking-widest uppercase hidden lg:block">{tier.description}</p>
                </div>
                <div className={`grid ${tier.cols} gap-2`}>
                  {tier.sponsors.map((sponsor) => (
                    <motion.div
                      key={sponsor}
                      whileHover={{ borderColor: 'rgba(235,0,40,0.3)', scale: 1.01 }}
                      className={`group bg-[#0a0a0a] border border-white/5 flex items-center justify-center ${tier.minH} px-6 transition-all duration-400 cursor-default`}
                    >
                      <span className={`text-white/20 group-hover:text-white/70 ${tier.size} font-semibold tracking-wider uppercase text-center transition-colors duration-300`}>
                        {sponsor}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}