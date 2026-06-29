import React from 'react';
import Navbar from '@/components/tedx/Navbar';
import HeroSection from '@/components/tedx/HeroSection';
import AboutSection from '@/components/tedx/AboutSection';
import ThemeSection from '@/components/tedx/ThemeSection';
import FrontiersSection from '@/components/tedx/FrontiersSection';
import SpeakersSection from '@/components/tedx/SpeakersSection';
import ScheduleSection from '@/components/tedx/ScheduleSection';
import ExperienceSection from '@/components/tedx/ExperienceSection';
import VenueSection from '@/components/tedx/VenueSection';
import SponsorsSection from '@/components/tedx/SponsorsSection';
import RegistrationSection from '@/components/tedx/RegistrationSection';
import FAQSection from '@/components/tedx/FAQSection';
import Footer from '@/components/tedx/Footer';
import SneakPeekSection from "@/components/tedx/SneakPeekSection";
import PastSponsorsSection from "@/components/tedx/PastSponsorsSection";
import ContactSection from "@/components/tedx/ContactSection";
import GlobalBackground from "@/components/tedx/GlobalBackground";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      {/* <GlobalBackground /> */}
      <div className="relative bg-black overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ThemeSection />
        <FrontiersSection />
        <SpeakersSection />
        <SneakPeekSection />
        <ScheduleSection />
        <ExperienceSection />
        <VenueSection />
        <SponsorsSection />
        <PastSponsorsSection />
        <RegistrationSection />
        <FAQSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}