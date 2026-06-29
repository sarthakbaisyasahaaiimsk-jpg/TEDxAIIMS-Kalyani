import { motion } from 'framer-motion';
import { Mail, Instagram, Linkedin, Youtube, Twitter } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const socials = [
  {
    icon: Instagram,
    label: 'Instagram',
    handle: '@tedxaiimskalyani',
    href: 'https://instagram.com/tedxaiimskalyani',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'TEDxAIIMSKalyani',
    href: 'https://linkedin.com/company/tedxaiimskalyani',
  },
  {
    icon: Youtube,
    label: 'YouTube',
    handle: 'TEDxAIIMSKalyani',
    href: 'https://youtube.com/@tedxaiimskalyani',
  },
  {
    icon: Twitter,
    label: 'X (Twitter)',
    handle: '@tedxaiimskalyani',
    href: 'https://x.com/tedxaiimskalyani',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 lg:py-40 bg-[#060606] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Label */}
        <ScrollReveal delay={0.05}>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-5 h-px bg-ted-red" />
            <p className="text-ted-red text-[11px] tracking-[0.45em] uppercase font-medium">Contact</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* Left — headline + email */}
          <div>
            <ScrollReveal delay={0.1}>
              <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-white mb-8">
                Let's talk.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="text-white/60 text-lg leading-relaxed mb-12">
                Questions about the event, partnership opportunities, or just want to reach out? We'd love to hear from you.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <motion.a
                href="mailto:contact@tedxaiimskalyani.in"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="group flex items-center gap-4 p-6 bg-[#0f0f0f] border border-white/5 hover:border-ted-red/25 transition-colors duration-500"
              >
                <div className="w-10 h-10 bg-ted-red flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white/35 text-[10px] tracking-[0.3em] uppercase mb-1">Email Us</p>
                  <p className="text-white font-medium text-sm">contact@tedxaiimskalyani.in</p>
                </div>
              </motion.a>
            </ScrollReveal>
          </div>

          {/* Right — social links */}
          <ScrollReveal delay={0.25}>
            <div>
              <p className="text-white/35 text-[10px] tracking-[0.35em] uppercase mb-6">Follow the Journey</p>
              <div className="flex flex-col gap-0 border border-white/5">
                {socials.map(({ icon: Icon, label, handle, href }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className={`group flex items-center justify-between px-6 py-5 hover:bg-white/[0.02] transition-colors duration-300 ${
                      i < socials.length - 1 ? 'border-b border-white/5' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <Icon className="w-4 h-4 text-white/35 group-hover:text-ted-red transition-colors duration-300" />
                      <div>
                        <p className="text-white/35 text-[10px] tracking-[0.3em] uppercase mb-0.5">{label}</p>
                        <p className="text-white/80 text-sm font-medium">{handle}</p>
                      </div>
                    </div>
                    <span className="text-white/15 group-hover:text-white/40 transition-colors duration-300 text-xs">→</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Bottom strip */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase">
              AIIMS Kalyani, West Bengal, India — 2026
            </p>
            <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase">
              This independent TEDx event is operated under license from TED
            </p>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ContactSection;