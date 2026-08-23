import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Handshake, MessageSquare, Users } from 'lucide-react';

const experiences = [
  {
    icon: Handshake,
    number: '01',
    title: 'Networking',
    description: 'Meet clinicians, researchers, innovators, entrepreneurs, artists, and students who believe ideas can change the world',
    image: 'https://media.base44.com/images/public/6a3a5e7dc678c621c4d8d234/b42851de8_generated_899df7dc.png',
  },
  {
    icon: MessageSquare,
    number: '02',
    title: 'Interactive Discussions',
    description: 'Thought-provoking conversations with speakers and fellow attendees beyond the stage.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Community Building',
    description: 'Join a growing network of curious minds united by a passion for learning, collaboration, and meaningful impact',
  },
];

export default function ExperienceSection() {
  const [lead, ...rest] = experiences;
  const LeadIcon = lead.icon;

  return (
    <section className="relative bg-[#060606] py-28 lg:py-40 overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-ted-red/4 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-14 items-end">
          <ScrollReveal>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
              Beyond the<br />
              <span className="text-white/20">Stage</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 text-base leading-relaxed font-light">
              TEDxAIIMS Kalyani is more than talks. It's a full-day immersion into ideas,
              connections, and experiences designed to transform how you think.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-5 gap-3">
          {/* Lead card — large, image-backed */}
          <ScrollReveal className="lg:col-span-3">
            <motion.div
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden border border-white/5 hover:border-ted-red/25 transition-colors duration-500 h-full min-h-[420px] flex flex-col justify-end"
            >
              <div className="absolute inset-0">
                <img
                  src={lead.image}
                  alt={lead.title}
                  className="w-full h-full object-cover opacity-35 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-[#060606]/60 to-transparent" />
              </div>

              <div className="relative p-8 lg:p-10">
                <span className="text-ted-red/50 font-mono text-xs tracking-[0.3em]">{lead.number}</span>
                <div className="flex items-center gap-3 mt-4 mb-3">
                  <LeadIcon size={20} className="text-ted-red" strokeWidth={1.5} />
                  <h3 className="text-white font-bold text-2xl lg:text-3xl tracking-tight">{lead.title}</h3>
                </div>
                <p className="text-white/40 text-sm lg:text-base leading-relaxed max-w-md">{lead.description}</p>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Stacked side cards */}
          <div className="lg:col-span-2 grid gap-3">
            {rest.map((exp, i) => {
              const Icon = exp.icon;
              return (
                <ScrollReveal key={exp.title} delay={(i + 1) * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="group bg-[#0f0f0f] border border-white/5 hover:border-ted-red/25 p-8 transition-colors duration-500 h-full"
                  >
                    <span className="text-ted-red/50 font-mono text-xs tracking-[0.3em]">{exp.number}</span>
                    <div className="flex items-center gap-3 mt-4 mb-3">
                      <Icon size={18} className="text-ted-red" strokeWidth={1.5} />
                      <h3 className="text-white font-bold text-lg tracking-tight">{exp.title}</h3>
                    </div>
                    <p className="text-white/35 text-sm leading-relaxed">{exp.description}</p>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
