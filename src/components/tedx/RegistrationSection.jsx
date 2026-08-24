import React from "react";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowRight, Check, Armchair } from "lucide-react";
import RazorpayButton from "./RazorpayButton";

// Make sure your BookMyShow logo file is saved at src/assets/bookmyshow-logo.png
// (rename the import path below if your actual filename is different)
import bookMyShowLogo from '@/assets/bookmyshow.jpg';


//import bookMyShowLogo from '@/assets/bookmyshow.png';

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
    price: "₹349",
    features: [
      "Full day event pass",
      "Basic Goodies Set",
      "Basic meal set",
    ],
    seating: "Single seat in general seating area",
    theme: "none",
    key: "general",
    razorpayButtonId: "pl_TTMZSvrYY6OxEV",
  },
  {
    title: "Premium",
    price: "₹449",
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
    razorpayButtonId: "pl_TTa71X9ut4TSqw",
  },
  {
    title: "VIP",
    price: "₹549",
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
    razorpayButtonId: "pl_TTaCzzGXoFWwGE",
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

                  <RazorpayButton
                    paymentButtonId={pass.razorpayButtonId}
                    className="mt-6 w-full"
                  />
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* BookMyShow promotional card */}
        <ScrollReveal delay={0.2}>
          <div className="relative mt-8 overflow-hidden border-2" style={{ borderColor: "#D2373C" }}>
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{ background: "radial-gradient(circle at 20% 20%, #F84464, transparent 60%), radial-gradient(circle at 80% 80%, #D2373C, transparent 60%)" }}
            />

            {/* Offer sticker */}
            <div
              className="absolute -top-1 -right-1 sm:top-6 sm:right-6 z-10 rotate-[8deg] sm:rotate-[10deg]"
            >
              <div
                className="px-5 py-2.5 shadow-lg"
                style={{ backgroundColor: "#F84464", boxShadow: "0 8px 24px rgba(248,68,100,0.4)" }}
              >
                <span className="text-white text-xs sm:text-sm font-black tracking-wide uppercase">
                  Offer!
                </span>
              </div>
            </div>

            <div className="relative bg-[#0c0505] p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <img
                      src={bookMyShowLogo}
                      alt="BookMyShow"
                      className="h-16 lg:h-20 w-auto object-contain"
                    />
                  </div>

                  <h3 className="text-white text-2xl lg:text-3xl font-black tracking-tight mb-3 leading-tight">
                    Get Buy 1 Get 1 Free
                  </h3>
                  <p className="text-white/55 text-base leading-relaxed max-w-xl">
                    Through select credit/debit cards. T&C apply. Book your TEDxAIIMS Kalyani pass on BookMyShow and unlock this offer plus other exclusive bank discounts.
                  </p>
                </div>

                <div className="flex-shrink-0 w-full lg:w-auto">
                  
                    href={BOOKMYSHOW_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full lg:w-auto inline-flex items-center justify-center gap-3 text-sm tracking-[0.15em] uppercase font-bold px-10 py-5 text-white transition-transform duration-300 hover:scale-[1.03]"
                    style={{ backgroundColor: "#D2373C", boxShadow: "0 10px 30px rgba(210,55,60,0.35)" }}
                  >
                    Book on BookMyShow
                    <ArrowRight size={16} />
                  </a>
                  <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase text-center lg:text-right mt-3">
                    T&C apply · Offers vary by bank
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
