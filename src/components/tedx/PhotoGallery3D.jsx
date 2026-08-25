// @ts-nocheck
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Dynamically import all jpg images from src/assets/pastphotos/
// Adjust "../assets/pastphotos/" if this file isn't one level below src/
const imageModules = import.meta.glob("../../assets/pastphotos/*.jpg", {
  eager: true,
  import: "default",
});

// Sort numerically by filename so order is 1, 2, 3... not 1, 10, 11, 2...
const imagePaths = Object.entries(imageModules)
  .sort(([a], [b]) => {
    const numA = parseInt(a.match(/(?:photo)?(\d+)\.jpg$/i)?.[1] || "0", 10);
    const numB = parseInt(b.match(/(?:photo)?(\d+)\.jpg$/i)?.[1] || "0", 10);
    return numA - numB;
  })
  .map(([, value]) => value);

// TEDx-inspired theme colors: very dark red/black background, crimson accents.
const THEME_BG = "#1A0408";
const THEME_ACCENT = "#EB0028";

// How many rows to split the photos into, and how each row behaves.
// Alternating direction + varying duration gives a "marquee wall" feel
// without any per-frame JS — it's pure CSS transform animation via
// Framer Motion, so it's GPU-accelerated and essentially free on the
// main thread (unlike the old canvas-based render loop).
const ROW_CONFIG = [
  { direction: "left", duration: 55 },
  { direction: "right", duration: 70 },
  { direction: "left", duration: 62 },
];

function splitIntoRows(images, rowCount) {
  const rows = Array.from({ length: rowCount }, () => []);
  images.forEach((img, i) => {
    rows[i % rowCount].push(img);
  });
  return rows;
}

// A single click-to-zoom photo tile used inside a marquee row.
function PhotoTile({ src, onOpen }) {
  return (
    <button
      type="button"
      className="group relative flex-shrink-0 w-40 sm:w-56 lg:w-64 aspect-[4/3] overflow-hidden rounded-sm cursor-zoom-in"
      onClick={() => onOpen(src)}
    >
      <img
        src={src}
        alt=""
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 2px ${THEME_ACCENT}` }}
      />
    </button>
  );
}

// One continuously auto-scrolling row. Images are duplicated so the
// CSS/Framer Motion loop from 0% to -50% (or -50% to 0%) is seamless.
function MarqueeRow({ images, direction, duration, onOpen }) {
  const track = [...images, ...images];

  return (
    <div className="relative overflow-hidden py-2">
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {track.map((src, i) => (
          <PhotoTile key={`${src}-${i}`} src={src} onOpen={onOpen} />
        ))}
      </motion.div>
    </div>
  );
}

export default function PhotoGallery3D() {
  const [selected, setSelected] = useState(null);

  const rows = useMemo(
    () => splitIntoRows(imagePaths, ROW_CONFIG.length),
    []
  );

  if (imagePaths.length === 0) {
    return (
      <div
        className="w-full aspect-video flex items-center justify-center rounded-sm"
        style={{ backgroundColor: THEME_BG }}
      >
        <p className="text-white/30 text-sm tracking-wide">
          No photos to display
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative w-full overflow-hidden rounded-sm py-4"
      style={{ backgroundColor: THEME_BG }}
    >
      {/* Fade edges so rows don't feel like they cut off abruptly */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10"
        style={{ background: `linear-gradient(to right, ${THEME_BG}, transparent)` }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10"
        style={{ background: `linear-gradient(to left, ${THEME_BG}, transparent)` }}
      />

      <div className="flex flex-col gap-4">
        {rows.map((rowImages, i) => (
          <MarqueeRow
            key={i}
            images={rowImages}
            direction={ROW_CONFIG[i % ROW_CONFIG.length].direction}
            duration={ROW_CONFIG[i % ROW_CONFIG.length].duration}
            onOpen={setSelected}
          />
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-10"
            style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt=""
              className="max-w-full max-h-full object-contain rounded-sm"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
