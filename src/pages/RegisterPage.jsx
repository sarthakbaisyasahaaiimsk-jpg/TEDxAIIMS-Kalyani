import React from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/tedx/ScrollReveal';

export default function RegisterPage() {
  return (
    <section id="register" className="relative bg-[#060606] py-28 lg:py-40 overflow-hidden min-h-screen">
      {/* Large background text */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none">
        <span
          className="font-black text-white/[0.025] tracking-tighter leading-none"
          style={{ fontSize: 'clamp(8rem, 28vw, 30rem)', letterSpacing: '-0.06em' }}
        >
          REGISTER
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative">

        <div className="mb-16 text-center">
          <ScrollReveal>
            <div className="text-white/15 font-mono text-[10px] tracking-[0.3em] uppercase mb-5">
              Secure Your Spot
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-white tracking-tight leading-none mb-6">
              Register<br />
              <span className="text-ted-red">Now</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/45 text-lg leading-relaxed font-light max-w-2xl mx-auto">
              The frontier doesn't wait. Fill out the form below to reserve your place
              at Uncharted and join those willing to step beyond the familiar.
            </p>
          </ScrollReveal>
        </div>

        {/* Form Card */}
        <ScrollReveal delay={0.2}>
          <motion.div
            whileHover={{ borderColor: 'rgba(235,0,40,0.35)' }}
            className="group bg-[#0f0f0f] border border-white/6 p-3 sm:p-6 lg:p-8 transition-colors duration-500"
          >
            <div className="w-full overflow-hidden">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSecTSzVq2MVxyHdbQ_QPwxt8gHIYj8E4g9g8iV2yBkfTPBYZw/viewform?embedded=true"
                width="100%"
                height="900"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Registration Form"
                className="w-full bg-white"
              >
                Loading…
              </iframe>
            </div>
            <div className="w-0 group-hover:w-full h-px bg-ted-red mt-6 transition-all duration-500" />
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-white/25 text-xs text-center mt-10 font-mono tracking-wider uppercase">
            Trouble loading the form? Refresh the page or try a different browser.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}