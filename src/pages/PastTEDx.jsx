import { motion } from "framer-motion";
import { Play, ExternalLink } from "lucide-react";
import Navbar from "@/components/tedx/Navbar";
import Footer from "@/components/tedx/Footer";
import ScrollReveal from "@/components/tedx/ScrollReveal";
import PhotoGallery3D from "@/components/tedx/PhotoGallery3D";

const pastEvent = {
  year: "2024",
  theme: "Convergence",
  tagline: "Where disciplines dissolve and ideas collide.",
  description:
    "TEDxAIIMSKalyani 2024 brought together twelve remarkable minds across medicine, technology, art, and policy. Over six hours, they challenged the assumptions that keep disciplines apart, and showed what becomes possible when boundaries disappear.",
  highlights: [
    { label: "Speakers", value: "12" },
    { label: "Attendees", value: "400+" },
    { label: "Watch Hours", value: "2.4K" },
    { label: "Theme", value: "Convergence" },
  ],
  speakers: [
    { name: "Past Speaker 1", title: "Talk Title One - A subtitle about the idea", talkUrl: "https://youtube.com" },
    { name: "Past Speaker 2", title: "Talk Title Two - A subtitle about the idea", talkUrl: "https://youtube.com" },
    { name: "Past Speaker 3", title: "Talk Title Three - A subtitle about the idea", talkUrl: "https://youtube.com" },
    { name: "Past Speaker 4", title: "Talk Title Four - A subtitle about the idea", talkUrl: "https://youtube.com" },
    { name: "Past Speaker 5", title: "Talk Title Five - A subtitle about the idea", talkUrl: "https://youtube.com" },
    { name: "Past Speaker 6", title: "Talk Title Six - A subtitle about the idea", talkUrl: "https://youtube.com" },
  ],
};

const SpeakerCard = ({ speaker, index }) => (
  <ScrollReveal delay={0.05 + index * 0.07}>
    <motion.a
      href={speaker.talkUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden bg-[#0f0f0f] border border-white/5 hover:border-ted-red/25 transition-colors duration-500 flex flex-col"
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
          <span className="text-white/10 text-xs uppercase tracking-widest">Photo</span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 bg-ted-red flex items-center justify-center">
            <Play className="w-5 h-5 text-white fill-white ml-0.5" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-white font-black tracking-tight text-sm mb-1">{speaker.name}</p>
        <p className="text-white/40 text-xs leading-relaxed mb-3 line-clamp-2">{speaker.title}</p>
        <div className="flex items-center gap-2 text-ted-red">
          <ExternalLink className="w-3 h-3" />
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium">Watch Talk</span>
        </div>
      </div>
    </motion.a>
  </ScrollReveal>
);

const PastTEDx = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />

      <main className="pt-32 pb-28 lg:pt-40 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          <ScrollReveal delay={0.1}>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight text-white mb-6 max-w-4xl">
              What came before made this possible.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-20">
              Every edition of TEDxAIIMSKalyani is built on the energy of the last. Here is what we have shared with the world.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.18}>
            <div className="border-t border-white/5 mb-20" />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
              <div>
                <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase mb-3">
                  TEDxAIIMSKalyani {pastEvent.year}
                </p>
                <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-3">
                  "{pastEvent.theme}"
                </h2>
                <p className="text-white/50 text-base italic">{pastEvent.tagline}</p>
              </div>
              <div className="grid grid-cols-2 sm:flex sm:gap-0 border border-white/5 divide-x divide-y sm:divide-y-0 divide-white/5">
                {pastEvent.highlights.map((h, i) => (
                  <div key={i} className="px-4 py-4 sm:px-6 min-w-0">
                    <p className="text-white font-black text-xl tracking-tight mb-0.5 truncate">{h.value}</p>
                    <p className="text-white/35 text-[10px] tracking-[0.3em] uppercase truncate">{h.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.22}>
            <p className="text-white/60 text-base leading-relaxed max-w-3xl mb-14">
              {pastEvent.description}
            </p>
          </ScrollReveal>

          {/* 3D Photo gallery */}
          <ScrollReveal delay={0.26}>
            <div className="mb-20">
              <p className="text-white/30 text-xs tracking-wide mb-3 text-center sm:hidden">
                Drag to explore, tap a photo to zoom
              </p>
              <PhotoGallery3D />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.28}>
            <div className="border-t border-white/5 mb-20" />
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {pastEvent.speakers.map((speaker, i) => (
              <SpeakerCard key={i} speaker={speaker} index={i} />
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-16 flex items-center gap-4">
              <motion.a
                href="https://youtube.com/@tedxaiimskalyani"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 3 }}
                className="inline-flex items-center gap-3 bg-ted-red text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-colors duration-300"
              >
                <Play className="w-4 h-4" />
                Watch all talks on YouTube
              </motion.a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-20 border-t border-white/5 pt-10">
              <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase">
                TEDxAIIMSKalyani - AIIMS Kalyani, West Bengal
              </p>
            </div>
          </ScrollReveal>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PastTEDx;
