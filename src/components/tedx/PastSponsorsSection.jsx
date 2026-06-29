import ScrollReveal from './ScrollReveal';

const sponsors = [
  'Sponsor Alpha',
  'Sponsor Beta',
  'Sponsor Gamma',
  'Sponsor Delta',
  'Sponsor Epsilon',
];

const SponsorLogo = ({ name }) => (
  <div className="flex-shrink-0 w-44 h-16 bg-[#0f0f0f] border border-white/5 flex items-center justify-center mx-4">
    <span className="text-white/20 text-[10px] tracking-[0.3em] uppercase font-medium">{name}</span>
  </div>
);

const PastSponsorsSection = () => {
  // Duplicate array for seamless loop
  const doubled = [...sponsors, ...sponsors, ...sponsors];

  return (
    <section id="past-sponsors" className="py-20 bg-black border-t border-white/5 overflow-hidden">
      <style>{`
        @keyframes marquee-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .marquee-track {
          animation: marquee-scroll 22s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-12">
        
      </div>

      {/* Marquee — full bleed */}
      <div className="relative w-full">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex marquee-track">
          {doubled.map((name, i) => (
            <SponsorLogo key={i} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastSponsorsSection;