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

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ThemeSection />
      <FrontiersSection />
      <SpeakersSection />
      <ScheduleSection />
      <ExperienceSection />
      <VenueSection />
      <SponsorsSection />
      <RegistrationSection />
      <FAQSection />
      <Footer />
    </div>
  );
}