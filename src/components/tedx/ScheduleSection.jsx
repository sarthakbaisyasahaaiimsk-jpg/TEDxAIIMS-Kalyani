import React from 'react';
import ScrollReveal from './ScrollReveal';

const scheduleItems = [
  { time: 'Till 10:00 AM', event: 'Registration for all Passes' },
  { time: '10:00 – 10:30 AM', event: 'General Seating' },
  { time: '10:30 – 10:45 AM', event: 'VIP & Premium Seating' },
  { time: '10:45 – 11:00 AM', event: 'Entry of Speakers & Guests' },
  { time: '11:00 – 11:05 AM', event: 'Introduction by Anchor + General Guidelines' },
  { time: '11:05 – 11:12 AM', event: 'Lamp Lighting' },
  { time: '11:12 – 11:15 AM', event: 'National Anthem' },
  { time: '11:15 – 11:45 AM', event: 'Opening Ceremony + ED Address' },
  { time: '11:45 – 11:50 AM', event: 'Introduction by Ajinkya' },
  { time: '11:50 – 11:53 AM', event: 'TEDx Introduction' },
  { time: '11:53 AM – 12:18 PM', event: 'Talk 1' },
  { time: '12:18 – 12:43 PM', event: 'Talk 2' },
  { time: '12:43 – 1:08 PM', event: 'Talk 3' },
  { time: '1:08 – 1:15 PM', event: 'Announcements & Transition to Lunch' },
  { time: '1:15 – 2:15 PM', event: 'Lunch Break' },
  { time: '2:25 – 2:50 PM', event: 'Talk 4' },
  { time: '2:50 – 3:15 PM', event: 'Talk 5' },
  { time: '3:25 – 4:00 PM', event: 'Drama' },
  { time: '4:10 – 4:35 PM', event: 'Talk 6' },
  { time: '4:35 – 5:00 PM', event: 'Felicitation of Speakers' },
  { time: '5:00 – 5:20 PM', event: 'Vote of Thanks' },
  { time: '5:20 – 5:30 PM', event: 'High Tea' },
];

export default function ScheduleSection() {
  return (
    <section id="schedule" className="relative bg-black py-28 lg:py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-14 items-end">
          <ScrollReveal>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
              Event<br />
              <span className="text-ted-red">Schedule</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 text-base leading-relaxed font-light">
              Tentative Programme — TEDxAIIMSKalyani 2.0
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal>
          <div className="border border-white/8 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-white/5">
                    <th className="text-left text-white/40 text-[10px] tracking-[0.25em] uppercase font-semibold px-5 py-4 border-b border-white/8 whitespace-nowrap">
                      Time
                    </th>
                    <th className="text-left text-white/40 text-[10px] tracking-[0.25em] uppercase font-semibold px-5 py-4 border-b border-white/8">
                      Event
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {scheduleItems.map((item, i) => (
                    <tr
                      key={i}
                      className={
                        "border-b border-white/5 last:border-b-0 hover:bg-white/[0.03] transition-colors duration-200 " +
                        (i % 2 === 1 ? "bg-white/[0.015]" : "")
                      }
                    >
                      <td className="px-5 py-3.5 text-ted-red text-sm font-semibold whitespace-nowrap align-top">
                        {item.time}
                      </td>
                      <td className="px-5 py-3.5 text-white/70 text-sm align-top">
                        {item.event}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="text-white/20 text-xs mt-6 font-light italic">
            Note: Timings are tentative and subject to change.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
