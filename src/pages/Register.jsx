import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import ScrollReveal from "../components/tedx/ScrollReveal";

const passTabs = [
  { key: "student", label: "Student Pass", formUrl: import.meta.env.VITE_FORM_STUDENT },
  { key: "professional", label: "Professional Pass", formUrl: import.meta.env.VITE_FORM_PROFESSIONAL },
  { key: "partner", label: "Partner Inquiry", formUrl: import.meta.env.VITE_FORM_PARTNER },
];

function toEmbedUrl(url) {
  if (!url) return "";
  // Google Form share links need ?embedded=true (or &embedded=true if params exist)
  return url.includes("?") ? `${url}&embedded=true` : `${url}?embedded=true`;
}

export default function Register() {
  const [searchParams] = useSearchParams();
  const initialPass = searchParams.get("pass");
  const initialIndex = passTabs.findIndex((p) => p.key === initialPass);

  const [activeIndex, setActiveIndex] = useState(initialIndex !== -1 ? initialIndex : 0);
  const active = passTabs[activeIndex];

  return (
    <section className="relative bg-[#060606] py-28 lg:py-40 overflow-hidden min-h-screen">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-ted-red/6 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative">

        <div className="mb-14 text-center">
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
              Pick your pass and fill out the form below to join TEDxAIIMSKalyani 2026.
            </p>
          </ScrollReveal>
        </div>

        {/* Tabs */}
        <ScrollReveal delay={0.15}>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {passTabs.map((pass, i) => (
              <button
                key={pass.key}
                onClick={() => setActiveIndex(i)}
                className={
                  "text-[11px] tracking-[0.25em] uppercase px-6 py-3 font-semibold transition-all duration-300 border " +
                  (i === activeIndex
                    ? "bg-ted-red text-white border-ted-red"
                    : "bg-white/5 text-white/50 border-white/8 hover:text-white hover:border-white/20")
                }
              >
                {pass.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Form Card */}
        <ScrollReveal delay={0.2}>
          <motion.div
            key={active.key}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            whileHover={{ borderColor: "rgba(235,0,40,0.35)" }}
            className="group bg-[#0f0f0f] border border-white/6 p-3 sm:p-6 lg:p-8 transition-colors duration-500"
          >
            {active.formUrl ? (
              <div className="w-full overflow-hidden">
                <iframe
                  src={toEmbedUrl(active.formUrl)}
                  width="100%"
                  height="900"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  title={`${active.label} Registration Form`}
                  className="w-full bg-white"
                >
                  Loading…
                </iframe>
              </div>
            ) : (
              <p className="text-white/40 text-sm text-center py-20">
                Form link not configured for this pass yet.
              </p>
            )}
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