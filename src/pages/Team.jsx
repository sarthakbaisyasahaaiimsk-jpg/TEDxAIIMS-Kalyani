import { motion } from 'framer-motion';
import Navbar from '@/components/tedx/Navbar';
import Footer from '@/components/tedx/Footer';
import ScrollReveal from '@/components/tedx/ScrollReveal';
import chiefCoordinator from "@/assets/team/aritra.PNG";
import managementCoordinator from "@/assets/team/shazeb.PNG";
import eventManagementHead from "@/assets/team/sarthak.PNG";
import eventManagementHead2 from "@/assets/team/sandesh.PNG";
import eventManagementHead3 from "@/assets/team/devdas.PNG";
//import stageLead from "@/assets/team/stage-lead.PNG";
import decorationLead from "@/assets/team/minnoli.PNG";
//import ticketingRegistrationLead from "@/assets/team/ticketing-registration-lead.PNG";
import auditoriumLead from "@/assets/team/sejal.PNG";
//import seatingLead from "@/assets/team/seating-lead.PNG";
//import programmeSchedulingLead from "@/assets/team/programme-scheduling-lead.PNG";
import photographyVideographyHead from "@/assets/team/saswata.PNG";
import speakerRelationsHead from "@/assets/team/charan.PNG";
//import speakerQueryCoordinationLead from "@/assets/team/speaker-query-coordination-lead.PNG";
import contentCurationHead from "@/assets/team/arham.PNG";
//import proofreadingLead from "@/assets/team/proofreading-lead.PNG";
import editorialLead from "@/assets/team/moumita.PNG";
import curator1 from "@/assets/team/shreyas.PNG";
import curator2 from "@/assets/team/agam.PNG";
import curator3 from "@/assets/team/arnav.PNG";
import itPrHead from "@/assets/team/aryan.PNG";
//import lightsSoundHead from "@/assets/team/sarthak.PNG";
import designHead from "@/assets/team/bighnaraj.PNG";
import socialMediaHead from "@/assets/team/fidha.PNG";
import websiteHead from "@/assets/team/sarthak.PNG";
import websiteHead2 from "@/assets/team/aritra.PNG";
import sponsorship1 from "@/assets/team/sulagna.PNG";
import sponsorship2 from "@/assets/team/simran.PNG";
//import digitalTicketingHead from "@/assets/team/digital-ticketing-head.PNG";
import culturalHead from "@/assets/team/mahima.PNG";
import hospitalityHead from "@/assets/team/agam.PNG";
import hospitalityHead2 from "@/assets/team/aneesha.PNG";
import logisticsHead from "@/assets/team/amaan.PNG";
import transportationLead from "@/assets/team/londhe.PNG";
import accommodationLead from "@/assets/team/aneesha.PNG";
import hospitalityTeam from "@/assets/team/liya.PNG";
import foodCateringLead from "@/assets/team/dhruthi.PNG";
import securityHead from "@/assets/team/londhe.PNG";
import securityHead2 from "@/assets/team/sreejita.PNG";
import licensee from "@/assets/team/ajinkya2.PNG";
import coorganiser from "@/assets/team/arnav.PNG";
import host from "@/assets/team/aastha.PNG";

const teamMembers = [
  { name: "Ajinkya Budle", role: "Licensee & Organiser", photo: licensee },
  { name: "Arnav Priyadarshi", role: "Co-Organiser", photo: coorganiser },
  { name: "Aastha N. Raj", role: "Host", photo: host },
  { name: "Aritra Roy", role: "Chief Coordinator", photo: chiefCoordinator },
  { name: "Shazeb Eyad", role: "Compliance Coordinator", photo: managementCoordinator },
  { name: "Sarthak Baisya Saha", role: "Joint Secretary", photo: eventManagementHead },
  { name: "Sandesh Sonune", role: "Joint Secretary", photo: eventManagementHead2 },
  { name: "Devdas Peenak Jayanteya", role: "Executive Producer", photo: eventManagementHead3 },
  { name: "Sejal Jha", role: "Venue Lead", photo: auditoriumLead },
 // { name: "Sarthak Baisya Saha", role: "Lights & Sound Lead", photo: lightsSoundHead },
  { name: "Minnoli Nath", role: "Decorartion Lead", photo: decorationLead },
 // { name: "Name", role: "Venue Lead", photo: stageLead },
 // { name: "Name", role: "Stage Light & Sound Lead", photo: lightsSoundHead },
 // { name: "Name", role: "Ticketing & Registration Lead", photo: ticketingRegistrationLead },
  { name: "Saswata Saha", role: "Photography & Videography Lead", photo: photographyVideographyHead },
 // { name: "Name", role: "Auditorium Lead", photo: auditoriumLead },
 // { name: "Name", role: "Seating Lead", photo: seatingLead },
 // { name: "Name", role: "Programme Scheduling Lead", photo: programmeSchedulingLead },
 // { name: "Name", role: "Speaker Query & Coordination Lead", photo: speakerQueryCoordinationLead },
  { name: "Arham Jain", role: "Chief Curator", photo: contentCurationHead },
  { name: "Charan Teja", role: "Speaker Relations Lead", photo: speakerRelationsHead },
 // { name: "Name", role: "Proofreading Lead", photo: proofreadingLead },
  { name: "Moumita De", role: "Editorial Lead", photo: editorialLead },
  { name: "Shreyas Ray", role: "Curator", photo: curator1 },
 // { name: "Agam Gao", role: "Curator", photo: curator2 },
 // { name: "Arnav Priyadarshi", role: "Curator", photo: curator3 },
  { name: "Aryan Kumar", role: "IT & PR Head", photo: itPrHead },
 // { name: "Name", role: "Lights & Sound Head", photo: lightsSoundHead },
  { name: "Bighnaraj Mohapatra", role: "Design Lead", photo: designHead },
  { name: "Fidha K C", role: "Social Media Lead", photo: socialMediaHead },
 // { name: "Sarthak Baisya Saha", role: "Website Lead", photo: websiteHead },
 // { name: "Aritra Roy", role: "Website Lead", photo: websiteHead2 },

  { name: "Sulagna Pradhan", role: "Sponsorship & Marketing Head", photo: sponsorship1 },
  { name: "Simran Kaushik", role: "Sponsorship & Marketing Head", photo: sponsorship2 },
 // { name: "Name", role: "Digital Ticketing Head", photo: digitalTicketingHead },
  { name: "Mahima Raj", role: "Cultural Head", photo: culturalHead },
  { name: "Agam Gao", role: "Hospitality Head", photo: hospitalityHead },
  { name: "Aneesha Dasari", role: "Accomodation Lead", photo: hospitalityHead2 },
 // { name: "Aneesha Dasari", role: "Accommodation Lead", photo: accommodationLead },
  { name: "Londhe Aditya Shashingar", role: "Transportation Lead", photo: transportationLead },
  
 // { name: "Name", role: "Volunteer Head", photo: volunteerHead },
  { name: "Kuppireddy Dhruthi Sri", role: "Food & Dining Lead", photo: foodCateringLead },
  { name: "Amaan Khan", role: "Operations & Logistics Head", photo: logisticsHead },
  { name: "Liya Alsa Deepak", role: "Hopitality Team", photo: hospitalityTeam },
 // { name: "Londhe Aditya Shashingar", role: "Security Head", photo: securityHead },
  { name: "Srijita Bhowal", role: "Security Head", photo: securityHead2 },
];

const TeamCard = ({ member, index }) => (
  <ScrollReveal delay={0.05 + (index % 6) * 0.05}>
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden bg-[#0f0f0f] border border-white/5 hover:border-ted-red/25 transition-colors duration-500"
    >
      {/* Photo */}
      <div className="aspect-[3/4] overflow-hidden relative">
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            loading="lazy"
            className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center">
            <span className="text-white/10 text-xs uppercase tracking-widest">Photo</span>
          </div>
        )}
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
