import { motion } from 'framer-motion';
import Navbar from '@/components/tedx/Navbar';
import Footer from '@/components/tedx/Footer';
import ScrollReveal from '@/components/tedx/ScrollReveal';
import chiefCoordinator from "@/assets/team/chief-coordinator.jpg";
import managementCoordinator from "@/assets/team/management-coordinator.jpg";
import eventManagementHead from "@/assets/team/event-management-head.jpg";
import stageLead from "@/assets/team/stage-lead.jpg";
import decorationLead from "@/assets/team/decoration-lead.jpg";
import ticketingRegistrationLead from "@/assets/team/ticketing-registration-lead.jpg";
import auditoriumLead from "@/assets/team/auditorium-lead.jpg";
import seatingLead from "@/assets/team/seating-lead.jpg";
import programmeSchedulingLead from "@/assets/team/programme-scheduling-lead.jpg";
import photographyVideographyHead from "@/assets/team/photography-videography-head.jpg";
import speakerRelationsHead from "@/assets/team/speaker-relations-head.jpg";
import speakerQueryCoordinationLead from "@/assets/team/speaker-query-coordination-lead.jpg";
import contentCurationHead from "@/assets/team/content-curation-head.jpg";
import proofreadingLead from "@/assets/team/proofreading-lead.jpg";
import editorialLead from "@/assets/team/editorial-lead.jpg";
import itPrHead from "@/assets/team/it-pr-head.jpg";
import lightsSoundHead from "@/assets/team/lights-sound-head.jpg";
import designHead from "@/assets/team/design-head.jpg";
import socialMediaHead from "@/assets/team/social-media-head.jpg";
import websiteHead from "@/assets/team/website-head.jpg";
import digitalTicketingHead from "@/assets/team/digital-ticketing-head.jpg";
import culturalHead from "@/assets/team/cultural-head.jpg";
import hospitalityHead from "@/assets/team/hospitality-head.jpg";
import logisticsHead from "@/assets/team/logistics-head.jpg";
import transportationLead from "@/assets/team/transportation-lead.jpg";
import accommodationLead from "@/assets/team/accommodation-lead.jpg";
import volunteerHead from "@/assets/team/volunteer-head.jpg";
import foodCateringLead from "@/assets/team/food-catering-lead.jpg";
import securityHead from "@/assets/team/security-head.jpg";

const teamMembers = [
  { name: "Name", role: "Chief Coordinator", photo: chiefCoordinator },
  { name: "Name", role: "Management Coordinator", photo: managementCoordinator },
  { name: "Name", role: "Event Management Head", photo: eventManagementHead },
  { name: "Name", role: "Stage Lead", photo: stageLead },
  { name: "Name", role: "Decoration Lead", photo: decorationLead },
  { name: "Name", role: "Ticketing & Registration Lead", photo: ticketingRegistrationLead },
  { name: "Name", role: "Auditorium Lead", photo: auditoriumLead },
  { name: "Name", role: "Seating Lead", photo: seatingLead },
  { name: "Name", role: "Programme Scheduling Lead", photo: programmeSchedulingLead },
  { name: "Name", role: "Photography & Videography Head", photo: photographyVideographyHead },
  { name: "Name", role: "Speaker Relations Head", photo: speakerRelationsHead },
  { name: "Name", role: "Speaker Query & Coordination Lead", photo: speakerQueryCoordinationLead },
  { name: "Name", role: "Content & Curation Head", photo: contentCurationHead },
  { name: "Name", role: "Proofreading Lead", photo: proofreadingLead },
  { name: "Name", role: "Editorial Lead", photo: editorialLead },
  { name: "Name", role: "IT & PR Head", photo: itPrHead },
  { name: "Name", role: "Lights & Sound Head", photo: lightsSoundHead },
  { name: "Name", role: "Design Head", photo: designHead },
  { name: "Name", role: "Social Media Head", photo: socialMediaHead },
  { name: "Name", role: "Website Head", photo: websiteHead },
  { name: "Name", role: "Digital Ticketing Head", photo: digitalTicketingHead },
  { name: "Name", role: "Cultural Head", photo: culturalHead },
  { name: "Name", role: "Hospitality Head", photo: hospitalityHead },
  { name: "Name", role: "Logistics Head", photo: logisticsHead },
  { name: "Name", role: "Transportation Lead", photo: transportationLead },
  { name: "Name", role: "Accommodation Lead", photo: accommodationLead },
  { name: "Name", role: "Volunteer Head", photo: volunteerHead },
  { name: "Name", role: "Food & Catering Lead", photo: foodCateringLead },
  { name: "Name", role: "Security Head", photo: securityHead },
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