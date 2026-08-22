import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

// Drop your logo files into src/assets/partners/ and import them here.
// Example:
import petalogo from '@/assets/petalogo.png';
import edufabricalogo from '@/assets/edufabricalogo.png';
//import tiramisulogo from '@/assets/letstiramisu.png';
import reflecto from '@/assets/reflecto.png';

const partners = [
  {
    name: 'Peta',
    role: 'Associate Partner',
    logo: petalogo, // replace with imported logo, e.g. petaLogo
  },
  {
    name: 'EduFabrica',
    role: 'Education Partner',
    logo: edufabricalogo, // replace with imported logo, e.g. edufabricaLogo
  },
  {
    name: "Let's Tiramisu",
    role: 'Dessert Partner',
    logo: letstiramisu, // replace with imported logo, e.g. tiramisuLogo
  },
  {
    name: 'Reflecto Productions',
    role: 'Media Partner',
    logo: reflecto, // replace with imported logo, e.g. reflectoLogo
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
              
                href="mailto:tedxaiimskalyani@gmail.com"
                className="text-ted-red text-[10px] tracking-[0.25em] uppercase border border-ted-red/30 px-6 py-3 hover:bg-ted-red hover:text-white transition-all duration-300 inline-block text-center font-medium"
              >
                Email Us →
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {partners.map((partner, i) => (
            <ScrollReveal key={partner.name} delay={i * 0.08}>
              <motion.div
                whileHover={{ borderColor: 'rgba(235,0,40,0.3)', scale: 1.01 }}
                className="group bg-[#0a0a0a] border border-white/5 flex flex-col items-center justify-center min-h-[140px] px-6 py-8 transition-all duration-400 cursor-default"
              >
                {partner.logo ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-14 w-auto object-contain grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-300 mb-3"
                  />
                ) : (
                  <span className="text-white/20 group-hover:text-white/70 text-base font-semibold tracking-wider uppercase text-center transition-colors duration-300 mb-3">
                    {partner.name}
                  </span>
                )}
                <span className="text-white/25 text-[9px] tracking-[0.25em] uppercase font-medium">
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
