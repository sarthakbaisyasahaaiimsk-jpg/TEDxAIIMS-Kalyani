import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight, Check, Armchair, Ticket } from "lucide-react";
import { Link } from "react-router-dom";

// To use the official BookMyShow logo instead of the text wordmark below:
// 1. Save the logo file into src/assets/ (e.g. src/assets/bookmyshow-logo.png)
// 2. Uncomment the import line below
// 3. In the JSX further down, replace the <span className="bms-wordmark">...</span> block
//    with <img src={bookMyShowLogo} alt="BookMyShow" className="h-6 w-auto" />
import bookMyShowLogo from '@/assets/bookmyshow.png';

const BOOKMYSHOW_URL = "https://in.bookmyshow.com/events/tedxaiims-kalyani/ET00461573";

const themeStyles = {
  red: {
    card: "bg-ted-red/5 border-ted-red/35",
    price: "text-ted-red",
    check: "text-ted-red",
    seatBox: "border-ted-red/40 bg-ted-red/10",
    seatIcon: "text-ted-red",
    seatText: "text-ted-red",
    button: "bg-ted-red text-white hover:bg-white hover:text-black",
  },
  gold: {
    card: "bg-[#D4AF37]/5 border-[#D4AF37]/40",
    price: "text-[#E5C158]",
    check: "text-[#E5C158]",
    seatBox: "border-[#D4AF37]/45 bg-[#D4AF37]/10",
    seatIcon: "text-[#E5C158]",
    seatText: "text-[#E5C158]",
    button: "bg-gradient-to-r from-[#D4AF37] to-[#E5C158] text-black hover:from-white hover:to-white hover:text-black font-bold",
  },
  none: {
    card: "bg-[#0f0f0f] border-white/5 hover:border-white/12",
    price: "text-white/50",
    check: "text-white/30",
    seatBox: "border-white/10 bg-white/5",
    seatIcon: "text-white/50",
    seatText: "text-white/70",
    button: "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/8",
  },
};

const passTypes = [
  {
    title: "General",
    price: "₹379",
    features: [
      "Full day event pass",
      "Basic Goodies Set",
      "Basic meal set",
    ],
    seating: "Single seat in general seating area",
    theme: "none",
    key: "general",
  },
  {
    title: "Premium",
    price: "₹549",
    features: [
      "Full day event pass",
      "Basic Goodies Set + Customised TEDx Tote Bag",
      "Premium meal set",
      "Certificate of Participation",
      "Paid Speaker interaction option",
      "Priority seating",
    ],
    seating: "Single seat in premium seating area",
    theme: "red",
    key: "premium",
  },
  {
    title: "VIP",
    price: "₹649",
    features: [
      "Full day event pass",
      "Basic Goodies Set + Customised TEDx Tote Bag & Mug",
      "Premium meal set",
      "Certificate of Participation",
      "Complimentary Speaker interaction",
      "Priority seating",
      "Personal ID Card",
    ],
    seating: "Single seat in VIP seating area",
    theme: "gold",
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
          {passTypes.map((pass, i) => {
            const t = themeStyles[pass.theme];
            return (
              <ScrollReveal key={pass.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className={"relative p-8 border transition-colors duration-500 h-full flex flex-col " + t.card}
                >
                  <h3 className="text-white font-bold text-xl tracking-tight mb-1">{pass.title}</h3>
                  <p className={"text-4xl font-black mb-6 " + t.price}>
                    {pass.price}
                  </p>

                  <div className="w-full h-px bg-white/5 mb-6" />

                  <ul className="space-y-3 flex-grow">
                    {pass.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check size={12} className={"flex-shrink-0 " + t.check} />
                        <span className="text-white/45 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className={"mt-5 flex items-center gap-3 px-4 py-3 border " + t.seatBox}>
                    <Armchair size={16} className={t.seatIcon + " flex-shrink-0"} />
                    <span className={"text-xs font-semibold tracking-wide " + t.seatText}>
                      {pass.seating}
                    </span>
                  </div>

                  <Link
                    to={`/register?pass=${pass.key}`}
                    className={"mt-6 w-full text-[11px] tracking-[0.25em] uppercase px-8 py-4 flex items-center justify-center gap-3 font-semibold transition-all duration-300 " + t.button}
                  >
                    Register Now
                    <ArrowRight size={13} />
                  </Link>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* BookMyShow alternative booking strip */}
        <ScrollReveal delay={0.2}>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 lg:p-7 border border-white/8 bg-[#0f0f0f]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                <Ticket size={18} className="text-ted-red" />
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Prefer to book elsewhere? Tickets are also available on{" "}
                <img src={bookMyShowLogo} alt="BookMyShow" className="inline-block h-4 w-auto align-middle" />{" "}
                — avail exclusive offers and bank benefits, including a{" "}
                <span className="text-white/80 font-semibold">Buy 1 Get 1</span> deal.
              </p>
            </div>
            <a
              href={BOOKMYSHOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold px-6 py-3 border border-white/15 text-white/80 hover:text-black transition-all duration-300"
              style={{ backgroundColor: "transparent" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#D2373C")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              Book on BookMyShow
              <ArrowRight size={13} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
