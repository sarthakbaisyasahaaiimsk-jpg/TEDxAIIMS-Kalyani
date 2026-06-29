import { motion } from 'framer-motion';
import Navbar from '@/components/tedx/Navbar';
import Footer from '@/components/tedx/Footer';
import ScrollReveal from '@/components/tedx/ScrollReveal';

const teamMembers = [
  { name: 'Team Member 1',  role: 'Licensee / Organizer' },
  { name: 'Team Member 2',  role: 'Co-organizer' },
  { name: 'Team Member 3',  role: 'Curator' },
  { name: 'Team Member 4',  role: 'Speaker Coach' },
  { name: 'Team Member 5',  role: 'Speaker Coach' },
  { name: 'Team Member 6',  role: 'Head of Logistics' },
  { name: 'Team Member 7',  role: 'Head of Marketing' },
  { name: 'Team Member 8',  role: 'Head of Design' },
  { name: 'Team Member 9',  role: 'Head of Sponsorship' },
  { name: 'Team Member 10', role: 'Head of Content' },
  { name: 'Team Member 11', role: 'Logistics Coordinator' },
  { name: 'Team Member 12', role: 'Logistics Coordinator' },
  { name: 'Team Member 13', role: 'Marketing Coordinator' },
  { name: 'Team Member 14', role: 'Marketing Coordinator' },
  { name: 'Team Member 15', role: 'Design Coordinator' },
  { name: 'Team Member 16', role: 'Design Coordinator' },
  { name: 'Team Member 17', role: 'Content Coordinator' },
  { name: 'Team Member 18', role: 'Content Coordinator' },
  { name: 'Team Member 19', role: 'Sponsorship Coordinator' },
  { name: 'Team Member 20', role: 'Sponsorship Coordinator' },
  { name: 'Team Member 21', role: 'Volunteer Lead' },
  { name: 'Team Member 22', role: 'Volunteer Lead' },
  { name: 'Team Member 23', role: 'Volunteer Lead' },
];

const TeamCard = ({ member, index }) => (
  <ScrollReveal delay={0.05 + (index % 6) * 0.05}>
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden bg-[#0f0f0f] border border-white/5 hover:border-ted-red/25 transition-colors duration-500"
    >
      {/* Photo placeholder */}
      <div className="aspect-[3/4] overflow-hidden">
        <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
          <span className="text-white/10 text-xs uppercase tracking-widest">Photo</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      </div>

      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-ted-red text-[10px] tracking-[0.3em] uppercase font-medium mb-1">
          {member.role}
        </p>
        <p className="text-white font-black tracking-tight text-sm">{member.name}</p>
      </div>
    </motion.div>
  </ScrollReveal>
);

const Team = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <main className="pt-32 pb-28 lg:pt-40 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Page label */}
          <ScrollReveal delay={0.05}>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-5 h-px bg-ted-red" />
              <p className="text-ted-red text-[11px] tracking-[0.45em] uppercase font-medium">01 — The Team</p>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white mb-6 max-w-3xl">
              The people behind the ideas.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-20">
              TEDxAIIMSKalyani is built by a driven team of students, clinicians, and creatives who believe that great ideas deserve a stage.
            </p>
          </ScrollReveal>

          {/* Divider */}
          <ScrollReveal delay={0.18}>
            <div className="border-t border-white/5 mb-16" />
          </ScrollReveal>

          {/* Team grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {teamMembers.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
          </div>

          {/* Bottom note */}
          <ScrollReveal delay={0.2}>
            <div className="mt-20 border-t border-white/5 pt-10">
              <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase">
                TEDxAIIMSKalyani 2026 — AIIMS Kalyani, West Bengal
              </p>
            </div>
          </ScrollReveal>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;