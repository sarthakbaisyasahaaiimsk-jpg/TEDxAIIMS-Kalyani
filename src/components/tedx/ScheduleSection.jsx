import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { ChevronDown, Mic, Coffee, Flag, Star, Users, Music, Award } from 'lucide-react';

const scheduleItems = [
  {
    time: '9:00 - 10:00',
    title: 'Security and Pass Collection',
    description: 'Security check-in and badge collection, your first step into the Uncharted.',
    type: 'logistics',
    icon: Flag,
  },
  {
    time: '10:00 - 10:20',
    title: 'Seating & Speaker Entry',
    description: 'Attendees take their seats in the Auditorium as our speakers make their entry.',
    type: 'logistics',
    icon: Users,
  },
  {
    time: '10:20 - 10:50',
    title: 'Opening Ceremony',
    description: 'Introduction; National Anthem; Lamp Lighting; Felicitation of Guests; Address by Executive Director; Photograph Session.',
    type: 'ceremony',
    icon: Star,
  },
  {
    time: '10:50 - 11:00',
    title: 'TEDx Intro & Video',
    description: 'A cinematic introduction to TEDx, setting the stage for the talks ahead.',
    type: 'ceremony',
    icon: Star,
  },
  {
    time: '11:00 - 11:30',
    title: 'Talk 1',
    description: 'Our first TEDx talk of the day, followed by felicitation of the speaker.',
    type: 'talks',
    icon: Mic,
  },
  {
    time: '11:30 - 12:00',
    title: 'Talk 2',
    description: 'Our second TEDx talk of the day, followed by felicitation of the speaker.',
    type: 'talks',
    icon: Mic,
  },
  {
    time: '12:00 - 12:30',
    title: 'Talk 3',
    description: 'Our third TEDx talk of the day, followed by felicitation of the speaker.',
    type: 'talks',
    icon: Mic,
  },
  {
    time: '12:30 - 1:45',
    title: 'Lunch Break & Meet and Greet',
    description: 'A break to refuel and network with fellow attendees, speakers, and guests.',
    type: 'break',
    icon: Coffee,
  },
  {
    time: '2:00 - 2:30',
    title: 'Talk 4',
    description: 'Our fourth TEDx talk of the day, followed by felicitation of the speaker.',
    type: 'talks',
    icon: Mic,
  },
  {
    time: '2:30 - 3:00',
    title: 'Talk 5',
    description: 'Our fifth TEDx talk of the day, followed by felicitation of the speaker.',
    type: 'talks',
    icon: Mic,
  },
  {
    time: '3:00 - 3:30',
    title: 'Talk 6',
    description: 'Our sixth and final TEDx talk of the day, followed by felicitation of the speaker.',
    type: 'talks',
    icon: Mic,
  },
  {
    time: '3:30 - 4:00',
    title: 'Closing Ceremony',
    description: 'A heartfelt closing to the day\'s proceedings.',
    type: 'ceremony',
    icon: Award,
  },
  {
    time: '4:00 - 5:00',
    title: 'High Tea',
    description: 'High tea to close out the event and continue conversations from the day.',
    type: 'break',
    icon: Coffee,
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
              <span className="text-ted-red">Forward</span>
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
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/8 to-transparent" />

          <div className="space-y-1">
            {scheduleItems.map((item, i) => {
              const isExpanded = expandedIndex === i;
              const Icon = item.icon;
              const styles = typeStyle[item.type];
              return (
                <ScrollReveal key={i} delay={i * 0.04}>
                  <div className="relative flex gap-6">
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
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <span className={`text-xs font-medium tracking-tight ${styles.label}`}>
                            {item.time}
                          </span>
                          <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-white/20"
                          >
                            <ChevronDown size={14} />
                          </motion.div>
                        </div>
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
