import React, { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams, Link } from "react-router-dom";
import ScrollReveal from "../components/tedx/ScrollReveal";
import logo from "../assets/logo-white.png";
import paymentQR1 from "../assets/qrgeneral.jpeg";
import paymentQR2 from "../assets/qrpremium.jpeg";
import paymentQR3 from "../assets/qrvip.jpeg";

const FORM_ACTION_URL =
  "https://docs.google.com/forms/u/0/d/e/1FAIpQLSecTSzVq2MVxyHdbQ_QPwxt8gHIYj8E4g9g8iV2yBkfTPBYZw/formResponse";

// --- Cloudinary config ---------------------------------------------------
// Replace these two with your own Cloudinary cloud name and unsigned
// upload preset (Settings -> Upload -> Upload presets -> Add upload preset
// -> Signing Mode: Unsigned).
const CLOUDINARY_CLOUD_NAME = "lx9hrj0l";
const CLOUDINARY_UPLOAD_PRESET = "liowffo2";
const CLOUDINARY_UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/upload`;
// --------------------------------------------------------------------------

const ENTRY = {
  fullName: "entry.1200385473",
  email: "entry.952837880",
  contact: "entry.1594828258",
  college: "entry.1914126563",
  diet: "entry.610749920",
  passType: "entry.1088215050",
  transactionId: "entry.1180537060",
  // Add a new short-answer question in your Google Form for the
  // screenshot link, then paste its entry.xxxxxx id here.
  screenshotUrl: "entry.1694343813",
};

const dietOptions = ["Veg", "Non-Veg"];

const initialFormState = {
  fullName: "",
  email: "",
  contact: "",
  college: "",
  diet: "",
  passType: "",
  transactionId: "",
};

// Maps the pass key in the homepage link (?pass=general|premium|vip)
// to the display label shown/submitted on the registration form.
const PASS_LABELS = {
  general: "General",
  premium: "Premium",
  vip: "VIP",
};

const QR_BY_PASS = {
  General: paymentQR1,
  Premium: paymentQR2,
  VIP: paymentQR3,
};

const MAX_FILE_SIZE_MB = 5;

export default function Register() {
  const [searchParams] = useSearchParams();
  const preselectedPass = (searchParams.get("pass") || "").toLowerCase();
  const lockedPassType = PASS_LABELS[preselectedPass] || "";

  const [form, setForm] = useState({
    ...initialFormState,
    passType: lockedPassType,
  });
  const [status, setStatus] = useState("idle"); // idle | uploading | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [screenshotFile, setScreenshotFile] = useState(null);
  const [screenshotPreview, setScreenshotPreview] = useState(null);

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      setScreenshotFile(null);
      setScreenshotPreview(null);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setErrorMsg("Please upload an image file (screenshot).");
      e.target.value = "";
      return;
    }

    if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
      setErrorMsg(`Image must be under ${MAX_FILE_SIZE_MB}MB.`);
      e.target.value = "";
      return;
    }

    setErrorMsg("");
    setScreenshotFile(file);
    setScreenshotPreview(URL.createObjectURL(file));
  };

  const uploadScreenshot = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const res = await fetch(CLOUDINARY_UPLOAD_URL, {
      method: "POST",
      body: data,
    });

    if (!res.ok) {
      throw new Error("Screenshot upload failed");
    }

    const json = await res.json();
    return json.secure_url; // the hosted URL of the uploaded image
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.fullName ||
      !form.email ||
      !form.contact ||
      !form.passType ||
      !form.transactionId ||
      !screenshotFile
    ) {
      setErrorMsg("Please complete all required fields, including the payment screenshot.");
      setStatus("error");
      return;
    }

    try {
      setStatus("uploading");
      setErrorMsg("");
      const screenshotUrl = await uploadScreenshot(screenshotFile);

      setStatus("submitting");
      const data = new FormData();
      data.append(ENTRY.fullName, form.fullName);
      data.append(ENTRY.email, form.email);
      data.append(ENTRY.contact, form.contact);
      data.append(ENTRY.college, form.college);
      data.append(ENTRY.diet, form.diet);
      data.append(ENTRY.passType, form.passType);
      data.append(ENTRY.transactionId, form.transactionId);
      data.append(ENTRY.screenshotUrl, screenshotUrl);

      await fetch(FORM_ACTION_URL, {
        method: "POST",
        mode: "no-cors",
        body: data,
      });
      // no-cors means we can't read the response — assume success.
      setStatus("success");
      setForm({ ...initialFormState, passType: lockedPassType });
      setScreenshotFile(null);
      setScreenshotPreview(null);
    } catch (err) {
      setErrorMsg("Something went wrong uploading your screenshot. Please try again.");
      setStatus("error");
    }
  };

  const inputClasses =
    "w-full bg-white/5 border border-white/10 text-white placeholder-white/30 px-5 py-4 text-sm focus:outline-none focus:border-ted-red transition-colors duration-300";

  const labelClasses =
    "block text-white/45 text-[11px] tracking-[0.2em] uppercase font-medium mb-2";

  const isBusy = status === "uploading" || status === "submitting";

  return (
    <section className="relative bg-[#060606] py-28 lg:py-40 overflow-hidden min-h-screen">
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-ted-red/6 blur-[150px] rounded-full pointer-events-none" />

      <img
        src={logo}
        alt="TEDxAIIMSKalyani"
        className="absolute top-10 left-6 lg:top-14 lg:left-16 h-16 lg:h-24 w-auto opacity-90 z-10"
      />

      {form.passType && (
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
                  <label className={labelClasses}>Type of Pass</label>
                  {form.passType ? (
                    <div className="w-full bg-white/5 border border-ted-red/40 text-white px-5 py-4 text-sm flex items-center justify-between">
                      <span className="font-semibold tracking-wide">{form.passType}</span>
                      <span className="text-white/30 text-[10px] uppercase tracking-[0.2em]">Locked</span>
                    </div>
                  ) : (
                    <div className="w-full bg-white/5 border border-ted-red/40 text-ted-red px-5 py-4 text-sm">
                      No pass selected — please go back and choose a pass from the homepage.
                    </div>
                  )}
                </div>

                {form.passType && (
                  <div className="border border-white/10 rounded-lg bg-white/5 p-8">
                    <h3 className="text-white text-2xl font-bold mb-6">Payment</h3>

                    <img
                      src={QR_BY_PASS[form.passType]}
                      alt="TEDxAIIMSKalyani UPI QR"
                      className="w-64 mx-auto rounded-lg border border-white/10"
                    />

                    <p className="text-center text-white/70 mt-6">
                      Scan the QR code using any UPI app and complete the payment.
                    </p>

                    <p className="text-center text-white/50 mt-2 text-sm">
                      Please enter the UPI Transaction ID exactly as shown in your payment app.
                    </p>
                  </div>
                )}

                <div>
                  <label className={labelClasses}>UPI Transaction ID *</label>
                  <input
                    type="text"
                    required
                    value={form.transactionId}
                    onChange={handleChange("transactionId")}
                    className={inputClasses}
                    placeholder="e.g. T240630143245891"
                  />
                </div>

                <div>
                  <label className={labelClasses}>Payment Screenshot *</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full bg-white/5 border border-white/10 text-white/70 text-sm file:mr-4 file:py-3 file:px-5 file:border-0 file:text-[11px] file:tracking-[0.2em] file:uppercase file:font-semibold file:bg-ted-red file:text-white file:cursor-pointer cursor-pointer"
                  />
                  <p className="text-white/30 text-xs mt-2">
                    Upload a screenshot of your UPI payment confirmation (max {MAX_FILE_SIZE_MB}MB).
                  </p>
                  {screenshotPreview && (
                    <img
                      src={screenshotPreview}
                      alt="Screenshot preview"
                      className="mt-4 w-40 rounded-lg border border-white/10"
                    />
                  )}
                </div>

                {status === "error" && errorMsg && (
                  <p className="text-ted-red text-sm text-center">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={isBusy || !form.passType}
                  className="w-full mt-4 text-[11px] tracking-[0.25em] uppercase px-8 py-5 bg-ted-red text-white hover:bg-white hover:text-black font-semibold transition-all duration-300 disabled:opacity-50"
                >
                  {status === "uploading"
                    ? "Uploading screenshot..."
                    : status === "submitting"
                    ? "Submitting..."
                    : "Submit Registration"}
                </button>

                <p className="text-white text-sm text-center font-bold leading-relaxed pt-2">
                  Every transaction is for a single ticket valid for single entry.
                  Please carry a valid ID proof during the day of the event.
                </p>
              </form>
            )}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
