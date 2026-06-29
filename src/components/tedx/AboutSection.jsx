import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const AboutSection = () => {
  return (
    <section id="about" className="py-28 lg:py-40 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        

        {/* Main Heading */}
        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-6 max-w-3xl">
            Ideas that move the world forward.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-24">
            TEDxAIIMSKalyani is where medicine meets curiosity — a stage for the ideas that define the frontier of human knowledge, care, and possibility.
          </p>
        </ScrollReveal>

        {/* Divider */}
        <ScrollReveal delay={0.2}>
          <div className="border-t border-white/5 mb-24" />
        </ScrollReveal>

        {/* Sub-sections grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/5">

          {/* About TED */}
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              transition={{ duration: 0.3 }}
              className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-5 h-px bg-ted-red" />
                <p className="text-ted-red text-[10px] tracking-[0.35em] uppercase font-medium">TED</p>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white mb-5">
                What is TED?
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                TED is a nonprofit organisation devoted to the power of ideas. Founded in 1984, TED began as a single conference bringing together thought leaders from Technology, Entertainment, and Design — and has since expanded to cover virtually every dimension of human inquiry.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Under the banner of <span className="text-white/80 font-medium">Ideas Worth Spreading</span>, TED talks have reached hundreds of millions of people worldwide, sparking conversations, shifting perspectives, and driving action across science, business, art, and global affairs.
              </p>
            </motion.div>
          </ScrollReveal>

          {/* About TEDx */}
          <ScrollReveal delay={0.25}>
            <motion.div
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              transition={{ duration: 0.3 }}
              className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/5"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-5 h-px bg-ted-red" />
                <p className="text-ted-red text-[10px] tracking-[0.35em] uppercase font-medium">TEDx</p>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white mb-5">
                What is TEDx?
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                TEDx is a programme of locally, independently organised events that bring people together to share a TED-like experience. The <span className="text-white/80 font-medium">x</span> in TEDx stands for independently organised — each event is run by a passionate community organiser under a free license granted by TED.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                TEDx events preserve the spirit and format of TED: short, powerful talks from diverse voices, curated to challenge assumptions and celebrate human potential. They happen in schools, hospitals, city squares, and everywhere ideas deserve a stage.
              </p>
            </motion.div>
          </ScrollReveal>

          {/* About TEDxAIIMSKalyani */}
          <ScrollReveal delay={0.3}>
            <motion.div
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
              transition={{ duration: 0.3 }}
              className="p-10 lg:p-12"
            >
              <div className="flex items-center gap-3 mb-8">
                <span className="w-5 h-px bg-ted-red" />
                <p className="text-ted-red text-[10px] tracking-[0.35em] uppercase font-medium">TEDxAIIMSKalyani</p>
              </div>
              <h3 className="text-2xl font-black tracking-tight text-white mb-5">
                Our Event
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                TEDxAIIMSKalyani is hosted at AIIMS Kalyani — the All India Institute of Medical Sciences, Kalyani — one of India's premier institutions at the intersection of medical education, research, and public health.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                In 2026, we bring together clinicians, researchers, engineers, artists, and innovators under one roof to explore ideas that bridge <span className="text-white/80 font-medium">healthcare and human progress</span>. Because the most vital ideas of our time live at the boundary between disciplines.
              </p>
            </motion.div>
          </ScrollReveal>

        </div>

        {/* Bottom stat strip */}
        <ScrollReveal delay={0.35}>
          <div className="grid grid-cols-2 lg:grid-cols-4 border-x border-b border-white/5">
            {[
              { value: '1984', label: 'TED Founded' },
              { value: '3500+', label: 'TEDx Events Worldwide' },
              { value: '100+', label: 'Countries Represented' },
              { value: '2026', label: 'TEDxAIIMSKalyani' },
            ].map((stat, i) => (
              <div key={i} className={`p-8 ${i < 3 ? 'border-r border-white/5' : ''}`}>
                <p className="text-3xl font-black tracking-tight text-white mb-1">{stat.value}</p>
                <p className="text-white/35 text-[10px] tracking-[0.3em] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default AboutSection;