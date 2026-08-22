import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
// Drop your logo files into src/assets/partners/ and import them here.
// Example:
import petalogo from '@/assets/petalogo.png';
import edufabricalogo from '@/assets/edufabricalogo.png';
import tiramisulogo from '@/assets/letstiramisu.png';
import reflecto from '@/assets/reflecto.png';
import horizon from '@/assets/horizon.png';
import ramen from '@/assets/ramen.png';
const partners = [
  {
    name: 'Peta',
    role: 'Associate Partner',
    logo: petalogo,
  },
  {
    name: 'EduFabrica',
    role: 'Education Partner',
    logo: edufabricalogo,
  },
  {
    name: "Let's Tiramisu",
    role: 'Dessert Partner',
    logo: tiramisulogo,
  },
  {
    name: 'Reflecto Productions',
    role: 'Media Partner',
    logo: reflecto,
  },
  {
    name: 'Horizon Sponsorship Group',
    role: 'Supporting Partner',
    logo: horizon,
  },
  {
    name: 'Hoshi Ramen',
    role: 'Food Partner',
    logo: ramen,
  },
];
export default function SponsorsSection() {
  return (
    <section id="sponsors" className="relative bg-[#060606] py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <ScrollReveal>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
              Our Partners
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col gap-2">
              <p className="text-white/30 text-sm max-w-xs font-light">
                Interested in partnering with TEDxAIIMS Kalyani?
              </p>
              <a
                href="mailto:tedxaiimskalyani2026@gmail.com"
                className="text-ted-red text-[10px] tracking-[0.25em] uppercase border border-ted-red/30 px-6 py-3 hover:bg-ted-red hover:text-white transition-all duration-300 inline-block text-center font-medium"
              >
                Email Us →
              </a>
            </div>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {partners.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ borderColor: 'rgba(235,0,40,0.3)', scale: 1.01 }}
                className="group bg-[#0a0a0a] border border-white/5 flex flex-col items-center justify-center min-h-[240px] px-8 py-10 transition-all duration-400 cursor-default"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-24 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300 mb-6"
                  />
                ) : (
                  <span className="text-white/20 group-hover:text-white/70 text-xl font-semibold tracking-wider uppercase text-center transition-colors duration-300 mb-6">
                    {partner.name}
                  </span>
                )}
                <div className="w-10 h-px bg-white/10 mb-4" />
                <h3 className="text-white font-bold text-lg tracking-tight text-center mb-1.5">
                  {partner.name}
                </h3>
                <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase font-medium text-center">
                  {partner.role}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
