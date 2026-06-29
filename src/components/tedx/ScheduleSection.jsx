import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { Clock, ChevronDown, Mic, Coffee, Briefcase, Flag, Star } from 'lucide-react';

const scheduleItems = [
  {
    time: '08:00 AM',
    title: 'Registration & Check-In',
    description: 'Badge collection, welcome kits, and your first step into the Uncharted.',
    type: 'logistics',
    icon: Flag,
  },
  {
    time: '09:00 AM',
    title: 'Opening Ceremony',
    description: 'A cinematic opening that sets the stage for a day of discovery. Welcome address by the organizers and introduction to the Uncharted theme.',
    type: 'ceremony',
    icon: Star,
  },
  {
    time: '09:30 AM',
    title: 'Session I — Uncharted Frontiers',
    description: 'Our first block of TEDx talks exploring AI in medicine, precision genomics, and the technologies reshaping healthcare delivery.',
    type: 'talks',
    icon: Mic,
  },
  {
    time: '11:00 AM',
    title: 'Networking Break',
    description: 'Curated networking with fellow attendees over refreshments. Interactive exhibits and innovation showcases.',
    type: 'break',
    icon: Coffee,
  },
  {
    time: '11:30 AM',
    title: 'Session II — Uncharted Journeys',
    description: 'Stories of entrepreneurship, resilience, and the human spirit. Talks that explore what it means to lead without a map.',
    type: 'talks',
    icon: Mic,
  },
  {
    time: '01:00 PM',
    title: 'Lunch & Innovation Exhibits',
    description: 'Explore hands-on exhibits from startups, research labs, and innovators while you refuel.',
    type: 'break',
    icon: Coffee,
  },
  {
    time: '02:00 PM',
    title: 'Interactive Sessions & Workshops',
    description: 'Deep-dive workshops on biotechnology, AI ethics, global health equity, and leadership in uncertainty.',
    type: 'workshop',
    icon: Briefcase,
  },
  {
    time: '03:30 PM',
    title: 'Session III — Uncharted Potential',
    description: 'The final block of TEDx talks focusing on human potential, consciousness, creativity, and the future we dare to imagine.',
    type: 'talks',
    icon: Mic,
  },
  {
    time: '05:00 PM',
    title: 'The Closing Experience',
    description: "A powerful closing that weaves together the day's ideas into a collective vision. Community pledge and farewell.",
    type: 'ceremony',
    icon: Star,
  },
];

const typeStyle = {
  logistics: { bar: 'bg-white/20', label: 'text-white/30' },
  ceremony: { bar: 'bg-ted-red', label: 'text-ted-red' },
  talks: { bar: 'bg-ted-red', label: 'text-ted-red' },
  break: { bar: 'bg-white/15', label: 'text-white/25' },
  workshop: { bar: 'bg-white/30', label: 'text-white/40' },
};

export default function ScheduleSection() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <section id="schedule" className="relative bg-black py-28 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16 items-end">
          <ScrollReveal>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
              The Path<br />
              <span className="text-white/20">Forward</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 text-base leading-relaxed font-light">
              A full day of discovery, dialogue, and transformation. Each waypoint
              curated to challenge, inspire, and connect.
            </p>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent" />

          <div className="space-y-1">
            {scheduleItems.map((item, i) => {
              const isExpanded = expandedIndex === i;
              const Icon = item.icon;
              const styles = typeStyle[item.type];
              return (
                <ScrollReveal key={i} delay={i * 0.04}>
                  <div className="relative flex gap-6">
                    {/* Time column */}
                    <div className="w-[72px] flex-shrink-0 pt-5 text-right">
                      <span className={`text-[10px] font-mono tracking-wider ${styles.label}`}>
                        {item.time.split(' ')[0]}
                        <span className="block text-[8px] opacity-60">{item.time.split(' ')[1]}</span>
                      </span>
                    </div>

                    {/* Node */}
                    <div className="flex-shrink-0 pt-5 relative z-10">
                      <div className={`w-2 h-2 rounded-full mt-1.5 ${
                        item.type === 'talks' || item.type === 'ceremony' ? 'bg-ted-red ring-2 ring-ted-red/20' : 'bg-white/20'
                      }`} />
                    </div>

                    {/* Content */}
                    <button
                      onClick={() => setExpandedIndex(isExpanded ? null : i)}
                      className="flex-1 text-left border border-white/5 hover:border-white/10 bg-[#080808] hover:bg-[#0f0f0f] transition-all duration-300 px-5 py-4 mb-1"
                    >
                      {/* Top bar */}
                      <div className={`w-full h-px mb-4 ${styles.bar}`} />

                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <Icon size={14} className={styles.label} strokeWidth={1.5} />
                          <h3 className="text-white font-semibold text-sm lg:text-base tracking-tight">
                            {item.title}
                          </h3>
                        </div>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-white/20 flex-shrink-0"
                        >
                          <ChevronDown size={14} />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {isExpanded && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-white/40 text-sm leading-relaxed mt-3 pt-3 border-t border-white/5 overflow-hidden"
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}