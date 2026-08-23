import React from "react";
import { motion } from "framer-motion";
import { useSearchParams, Link } from "react-router-dom";
import ScrollReveal from "../components/tedx/ScrollReveal";
import logo from "../assets/logo-white.png";

// Maps the pass key in the homepage link (?pass=general|premium|vip)
// to the display label used to prefill the embedded Google Form.
const PASS_LABELS = {
  general: "General",
  premium: "Premium",
  vip: "VIP",
};

// Your Google Form's "Type of Pass" entry id (same one used in ENTRY.passType
// in the custom-form version). Needed to prefill + lock the value via the
// viewform URL's usp=pp_url query pattern.
const PASS_TYPE_ENTRY_ID = "entry.1088215050";

// Base viewform URL (NOT formResponse — that's only for direct POSTs).
const GOOGLE_FORM_VIEW_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSecTSzVq2MVxyHdbQ_QPwxt8gHIYj8E4g9g8iV2yBkfTPBYZw/viewform";

export default function Register() {
  const [searchParams] = useSearchParams();
  const preselectedPass = (searchParams.get("pass") || "").toLowerCase();
  const lockedPassType = PASS_LABELS[preselectedPass] || "";

  // Build a prefilled embed URL. Google Forms will show the pass-type
  // question already answered — but it does NOT lock/disable it the way
  // the custom form does. Users can still technically change it inside the
  // Google Form UI; there is no way to hard-lock a field in a native
  // Google Form embed.
  const embedSrc = lockedPassType
    ? `${GOOGLE_FORM_VIEW_URL}?embedded=true&${PASS_TYPE_ENTRY_ID}=${encodeURIComponent(
        lockedPassType
      )}`
    : `${GOOGLE_FORM_VIEW_URL}?embedded=true`;

  return (
    <section className="relative bg-[#060606] py-28 lg:py-40 overflow-hidden min-h-screen">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-ted-red/6 blur-[150px] rounded-full pointer-events-none" />

      <img
        src={logo}
        alt="TEDxAIIMSKalyani"
        className="absolute top-10 left-6 lg:top-14 lg:left-16 h-16 lg:h-24 w-auto opacity-90 z-10"
      />

      {lockedPassType && (
        <Link
          to="/#register"
          className="absolute top-10 right-6 lg:top-14 lg:right-16 z-10 text-[11px] tracking-[0.2em] uppercase text-white/50 hover:text-ted-red border border-white/15 hover:border-ted-red px-5 py-3 transition-colors duration-300"
        >
          Change tier
        </Link>
      )}

      <div className="max-w-2xl mx-auto px-6 lg:px-12 relative">

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
            <p className="text-white/45 text-lg leading-relaxed font-light max-w-xl mx-auto">
              {lockedPassType
                ? `Fill in your details below for your ${lockedPassType} pass.`
                : "Fill in your details below to join TEDxAIIMSKalyani 2026."}
            </p>
          </ScrollReveal>
        </div>

        {!lockedPassType && (
          <ScrollReveal delay={0.12}>
            <p className="text-ted-red text-sm text-center mb-8">
              No pass selected — please go back and choose a pass from the homepage.
            </p>
          </ScrollReveal>
        )}

        <ScrollReveal delay={0.15}>
          <motion.div
            whileHover={{ borderColor: "rgba(235,0,40,0.25)" }}
            className="bg-[#0f0f0f] border border-white/6 p-3 sm:p-6 lg:p-8 transition-colors duration-500"
          >
            <div className="w-full overflow-hidden">
              <iframe
                src={embedSrc}
                width="100%"
                height="1400"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
                title="Registration Form"
                className="w-full bg-white"
              >
                Loading…
              </iframe>
            </div>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-white text-sm text-center font-bold leading-relaxed mt-10">
            Every transaction is for a single ticket valid for single entry.
            Please carry a valid ID proof during the day of the event.
          </p>
          <p className="text-white/25 text-xs text-center mt-6 font-mono tracking-wider uppercase">
            Trouble loading the form? Refresh the page or try a different browser.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
