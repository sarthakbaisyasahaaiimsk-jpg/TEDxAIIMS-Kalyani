import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight, Check, Armchair } from "lucide-react";
import { Link } from "react-router-dom";

const passTypes = [
  {
    title: "General",
    price: "₹379",
    features: [
      "Full day event pass",
      "Basic Goodies Set",
      "General lunch meal set",
    ],
    seating: "Single seat in general seating area",
    highlight: false,
    key: "general",
  },
  {
    title: "Premium",
    price: "₹549",
    features: [
      "Full day event pass",
      "Basic Goodies Set + Customised TEDx Tote Bag",
      "Premium lunch meal set",
      "Certificate of Participation",
      "Paid Speaker interaction option",
      "Priority seating",
    ],
    seating: "Single seat in premium seating area",
    highlight: true,
    key: "premium",
  },
  {
    title: "VIP",
    price: "₹649",
    features: [
      "Full day event pass",
      "Basic Goodies Set + Customised TEDx Tote Bag & Mug",
      "VIP lunch meal set",
      "Certificate of Participation",
      "Complimentary Speaker interaction",
      "Priority seating",
    ],
    seating: "Single seat in VIP seating area",
    highlight: false,
    key: "vip",
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
              Join a community of explorers shaping tomorrow. Secure your place at TEDxAIIMS Kalyani 2026.
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

                <div className={"mt-5 flex items-center gap-3 px-4 py-3 border " + (pass.highlight ? "border-ted-red/40 bg-ted-red/10" : "border-white/10 bg-white/5")}>
                  <Armchair size={16} className={pass.highlight ? "text-ted-red flex-shrink-0" : "text-white/50 flex-shrink-0"} />
                  <span className={"text-xs font-semibold tracking-wide " + (pass.highlight ? "text-ted-red" : "text-white/70")}>
                    {pass.seating}
                  </span>
                </div>

                <Link
                  to={`/register?pass=${pass.key}`}
                  className={"mt-6 w-full text-[11px] tracking-[0.25em] uppercase px-8 py-4 flex items-center justify-center gap-3 font-semibold transition-all duration-300 " + (pass.highlight ? "bg-ted-red text-white hover:bg-white hover:text-black" : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/8")}
                >
                  Register Now
                  <ArrowRight size={13} />
                </Link>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
