import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Handshake, Lightbulb, MessageSquare, Layers, Users } from 'lucide-react';

const experiences = [
  {
    icon: Handshake,
    title: 'Networking',
    description: 'Curated spaces for meaningful connections between researchers, clinicians, entrepreneurs, and changemakers. Every conversation is a potential collaboration.',
    image: 'https://media.base44.com/images/public/6a3a5e7dc678c621c4d8d234/b42851de8_generated_899df7dc.png',
    span: 'lg:col-span-2',
  },
  {
    icon: Lightbulb,
    title: 'Workshops',
    description: 'Hands-on sessions led by domain experts diving deep into AI, biotech, design thinking, and health innovation.',
    image: 'https://media.base44.com/images/public/6a3a5e7dc678c621c4d8d234/c67a3bdc7_generated_9fefdaea.png',
    span: 'lg:col-span-1',
  },
  {
    icon: Layers,
    title: 'Innovation Exhibits',
    description: 'Live demonstrations from startups, research labs, and institutions showcasing cutting-edge technologies in healthcare and beyond.',
    image: 'https://media.base44.com/images/public/6a3a5e7dc678c621c4d8d234/b3db54516_generated_521bd486.png',
    span: 'lg:col-span-1',
  },
  {
    icon: MessageSquare,
    title: 'Interactive Discussions',
    description: 'Moderated Q&A sessions and breakout discussions where ideas are challenged, refined, and amplified by a room full of brilliant minds.',
    span: 'lg:col-span-1',
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Join a growing network of innovators committed to pushing the boundaries of healthcare and human potential.',
    span: 'lg:col-span-1',
  },
];

export default function ExperienceSection() {
  return (
    <section className="relative bg-[#060606] py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-ted-red" />
            <p className="text-ted-red text-[11px] tracking-[0.45em] uppercase font-medium">06 — Experience</p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-14 items-end">
          <ScrollReveal>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
              Beyond the<br />
              <span className="text-white/20">Stage</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 text-base leading-relaxed font-light">
              TEDxAIIMSKalyani is more than talks. It's a full-day immersion into ideas,
              connections, and experiences designed to transform how you think.
            </p>
          </ScrollReveal>
        </div>

        {/* Top grid row — image cards */}
        <div className="grid lg:grid-cols-3 gap-3 mb-3">
          {experiences.slice(0, 3).map((exp, i) => {
            const Icon = exp.icon;
            return (
              <ScrollReveal key={exp.title} delay={i * 0.08} className={exp.span}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden border border-white/5 hover:border-ted-red/20 transition-colors duration-500 h-full"
                >
                  {exp.image && (
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={exp.image}
                        alt={exp.title}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/50 to-transparent" />
                    </div>
                  )}
                  <div className="relative p-6 lg:p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <Icon size={16} className="text-ted-red" strokeWidth={1.5} />
                      <h3 className="text-white font-bold text-lg tracking-tight">{exp.title}</h3>
                    </div>
                    <p className="text-white/35 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom grid row — text-only cards */}
        <div className="grid md:grid-cols-2 gap-3">
          {experiences.slice(3).map((exp, i) => {
            const Icon = exp.icon;
            return (
              <ScrollReveal key={exp.title} delay={(i + 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="group bg-[#0f0f0f] border border-white/5 hover:border-ted-red/20 p-8 transition-colors duration-500"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon size={16} className="text-ted-red" strokeWidth={1.5} />
                    <h3 className="text-white font-bold text-lg tracking-tight">{exp.title}</h3>
                  </div>
                  <p className="text-white/35 text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}