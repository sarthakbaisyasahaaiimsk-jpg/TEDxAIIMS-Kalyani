import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import ScrollReveal from "../components/tedx/ScrollReveal";
import logo from "../assets/logo-white.png";

const FORM_ACTION_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSecTSzVq2MVxyHdbQ_QPwxt8gHIYj8E4g9g8iV2yBkfTPBYZw/formResponse";

const ENTRY = {
  fullName: "entry.1200385473",
  email: "entry.952837880",
  contact: "entry.1594828258",
  college: "entry.1914126563",
  yearOrDesignation: "entry.1494341847",
  diet: "entry.610749920",
  passType: "entry.1088215050",
  numPasses: "entry.1128102951",
};

const passTypeOptions = ["Student", "Professional", "Partner"];
const dietOptions = ["Veg", "Non-Veg"];

const initialFormState = {
  fullName: "",
  email: "",
  contact: "",
  college: "",
  yearOrDesignation: "",
  diet: "",
  passType: "",
  numPasses: "1",
};

export default function Register() {
  const [searchParams] = useSearchParams();
  const preselectedPass = searchParams.get("pass");

  const normalizedPreselect = passTypeOptions.find(
    (p) => p.toLowerCase() === (preselectedPass || "").toLowerCase()
  );

  const [form, setForm] = useState({
    ...initialFormState,
    passType: normalizedPreselect || "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.contact || !form.passType) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    const data = new FormData();
    data.append(ENTRY.fullName, form.fullName);
    data.append(ENTRY.email, form.email);
    data.append(ENTRY.contact, form.contact);
    data.append(ENTRY.college, form.college);
    data.append(ENTRY.yearOrDesignation, form.yearOrDesignation);
    data.append(ENTRY.diet, form.diet);
    data.append(ENTRY.passType, form.passType);
    data.append(ENTRY.numPasses, form.numPasses);

    try {
      await fetch(FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });
      // no-cors means we can't read the response — assume success.
      setStatus("success");
      setForm(initialFormState);
    } catch (err) {
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-5 py-4 text-sm focus:outline-none focus:border-ted-red transition-colors duration-300";

  const labelClasses =
    "block text-white/45 text-[11px] tracking-[0.2em] uppercase font-medium mb-2";

  return (
    <section className="relative bg-[#060606] py-28 lg:py-40 overflow-hidden min-h-screen">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-ted-red/6 blur-[150px] rounded-full pointer-events-none" />

      <img
        src={logo}
        alt="TEDxAIIMSKalyani"
        className="absolute top-10 left-6 lg:top-14 lg:left-16 h-16 lg:h-24 w-auto opacity-90 z-10"
      />

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
              Fill in your details below to join TEDxAIIMSKalyani 2026.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15}>
          <motion.div
            whileHover={{ borderColor: "rgba(235,0,40,0.25)" }}
            className="bg-[#0f0f0f] border border-white/6 p-6 sm:p-10 transition-colors duration-500"
          >
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="text-ted-red text-5xl font-black mb-4">✓</div>
                <h3 className="text-white text-2xl font-bold mb-2">You're registered!</h3>
                <p className="text-white/45 text-sm">
                  Thanks for signing up for TEDxAIIMSKalyani 2026. We'll be in touch with further details.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-[11px] tracking-[0.25em] uppercase px-8 py-4 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/8 transition-all duration-300"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={labelClasses}>Full Name *</label>
                  <input
                    type="text"
                    required
                    value={form.fullName}
                    onChange={handleChange("fullName")}
                    className={inputClasses}
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClasses}>Email Address *</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange("email")}
                      className={inputClasses}
                      placeholder="jane@example.com"
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Contact Number *</label>
                    <input
                      type="tel"
                      required
                      value={form.contact}
                      onChange={handleChange("contact")}
                      className={inputClasses}
                      placeholder="98765 43210"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className={labelClasses}>College / Organization</label>
                    <input
                      type="text"
                      value={form.college}
                      onChange={handleChange("college")}
                      className={inputClasses}
                      placeholder="AIIMS Kalyani"
                    />
                  </div>
                  <div>
                    <label className={labelClasses}>Year of Study / Designation</label>
                    <input
                      type="text"
                      value={form.yearOrDesignation}
                      onChange={handleChange("yearOrDesignation")}
                      className={inputClasses}
                      placeholder="2nd Year / Manager"
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Dietary Preference</label>
                  <div className="flex gap-3">
                    {dietOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setForm((prev) => ({ ...prev, diet: opt }))}
                        className={
                          "flex-1 text-[11px] tracking-[0.2em] uppercase px-5 py-4 font-semibold border transition-all duration-300 " +
                          (form.diet === opt
                            ? "bg-ted-red text-white border-ted-red"
                            : "bg-white/5 text-white/50 border-white/10 hover:text-white hover:border-white/20")
                        }
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Type of Pass *</label>
                  <div className="flex flex-wrap gap-3">
                    {passTypeOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setForm((prev) => ({ ...prev, passType: opt }))}
                        className={
                          "flex-1 min-w-[100px] text-[11px] tracking-[0.2em] uppercase px-5 py-4 font-semibold border transition-all duration-300 " +
                          (form.passType === opt
                            ? "bg-ted-red text-white border-ted-red"
                            : "bg-white/5 text-white/50 border-white/10 hover:text-white hover:border-white/20")
                        }
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className={labelClasses}>Number of Passes</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    value={form.numPasses}
                    onChange={handleChange("numPasses")}
                    className={inputClasses}
                  />
                </div>

                {status === "error" && (
                  <p className="text-ted-red text-sm text-center">
                    Please fill in all required fields marked with *.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full mt-4 text-[11px] tracking-[0.25em] uppercase px-8 py-5 bg-ted-red text-white hover:bg-white hover:text-black font-semibold transition-all duration-300 disabled:opacity-50"
                >
                  {status === "submitting" ? "Submitting..." : "Submit Registration"}
                </button>
              </form>
            )}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}