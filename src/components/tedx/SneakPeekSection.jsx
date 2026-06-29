import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const SneakPeekSection = () => {
  return (
    <section id="sneak-peek" className="py-28 lg:py-40 bg-[#060606]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Label */}
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <ScrollReveal delay={0.1}>
            <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white">
              Feel it before you're there.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-white/60 text-lg leading-relaxed">
              A glimpse into the world we're building — the energy, the ideas, and the moments that make TEDxAIIMSKalyani unlike anything else. Our official trailer drops soon.
            </p>
          </ScrollReveal>
        </div>

        {/* Video Placeholder */}
        <ScrollReveal delay={0.2}>
          <motion.div
            whileHover={{ borderColor: 'rgba(235,45,45,0.25)' }}
            transition={{ duration: 0.4 }}
            className="relative w-full aspect-video bg-[#0f0f0f] border border-white/5 overflow-hidden group"
          >
            {/* Cinematic grain overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuNjUiIG51bU9jdGF2ZXM9IjMiIHN0aXRjaFRpbGVzPSJzdGl0Y2giLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjEiLz48L3N2Zz4=')]" />

            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-ted-red/40" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-ted-red/40" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-ted-red/40" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-ted-red/40" />

            {/* Center play button */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="w-20 h-20 bg-ted-red flex items-center justify-center cursor-pointer"
              >
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </motion.div>
              <div className="text-center">
                <p className="text-white font-black tracking-tight text-xl mb-1">Official Trailer</p>
                <p className="text-white/35 text-[10px] tracking-[0.35em] uppercase">Coming Soon</p>
              </div>
            </div>

            {/* YouTube placeholder label */}
            <div className="absolute bottom-5 right-5">
              <p className="text-white/15 text-[10px] tracking-[0.3em] uppercase">YouTube Embed</p>
            </div>
          </motion.div>
        </ScrollReveal>

        {/* Bottom note */}
        <ScrollReveal delay={0.25}>
          <div className="mt-8 flex items-center gap-3">
            <span className="w-5 h-px bg-white/15" />
            <p className="text-white/25 text-[10px] tracking-[0.35em] uppercase">Trailer drops before the event — stay tuned</p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default SneakPeekSection;