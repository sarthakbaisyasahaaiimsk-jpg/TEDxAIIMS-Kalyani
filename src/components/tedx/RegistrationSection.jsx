import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight, Check } from "lucide-react";

const passTypes = [
  {
    title: "Student Pass",
    price: "Free",
    tag: "For Students",
    features: ["Full-day access", "All TEDx talks", "Networking sessions", "Certificate of attendance"],
    highlight: false,
    formUrl: import.meta.env.VITE_FORM_STUDENT,
  },
  {
    title: "Professional Pass",
    price: "999",
    tag: "Most Popular",
    features: ["Everything in Student", "Priority seating", "Exclusive workshops", "Innovation exhibit access", "Networking dinner"],
    highlight: true,
    formUrl: import.meta.env.VITE_FORM_PROFESSIONAL,
  },
  {
    title: "Partner Inquiry",
    price: "Custom",
    tag: "For Organizations",
    features: ["Sponsorship tiers", "Brand visibility", "Speaking opportunities", "VIP access", "Custom engagement"],
    highlight: false,
    formUrl: import.meta.env.VITE_FORM_PARTNER,
  },
];

export default function RegistrationSection() {
  return (
    <section id="register" className="relative bg-black py-28 lg:py-40 overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-ted-red/6 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16 items-end">
          <ScrollReveal>
            <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tight leading-none">
              Step Into The<br />
              <span className="text-ted-red">Uncharted</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-white/40 text-lg leading-relaxed font-light">
              Join a community of explorers shaping tomorrow. Secure your place at TEDxAIIMSKalyani 2026.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-3">
          {passTypes.map((pass, i) => (
            <ScrollReveal key={pass.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -5 }}
                className={"relative p-8 border transition-colors duration-500 h-full flex flex-col " + (pass.highlight ? "bg-ted-red/5 border-ted-red/35" : "bg-[#0f0f0f] border-white/5 hover:border-white/12")}
              >
                <span className={"text-[9px] tracking-[0.3em] uppercase font-medium block mb-3 " + (pass.highlight ? "text-ted-red" : "text-white/25")}>
                  {pass.tag}
                </span>

                <h3 className="text-white font-bold text-xl tracking-tight mb-1">{pass.title}</h3>
                <p className={"text-4xl font-black mb-6 " + (pass.highlight ? "text-ted-red" : "text-white/50")}>
                  {pass.price}
                </p>

                <div className="w-full h-px bg-white/5 mb-6" />

                <ul className="space-y-3 flex-grow">
                  {pass.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check size={12} className={"flex-shrink-0 " + (pass.highlight ? "text-ted-red" : "text-white/30")} />
                      <span className="text-white/45 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={pass.formUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={"mt-8 w-full text-[11px] tracking-[0.25em] uppercase px-8 py-4 flex items-center justify-center gap-3 font-semibold transition-all duration-300 " + (pass.highlight ? "bg-ted-red text-white hover:bg-white hover:text-black" : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/8")}
                >
                  Register Now
                  <ArrowRight size={13} />
                </a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}