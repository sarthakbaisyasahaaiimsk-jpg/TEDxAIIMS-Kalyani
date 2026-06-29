import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Theme', href: '#theme' },
  { label: 'Frontiers', href: '#frontiers' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Venue', href: '#venue' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/92 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span className="text-ted-red font-black text-lg tracking-tight">TEDx</span>
              <span className="text-white/70 font-light text-xs tracking-[0.25em] uppercase group-hover:text-white transition-colors duration-300">AIIMSKalyani</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-white/40 hover:text-white text-[10px] tracking-[0.25em] uppercase transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-ted-red group-hover:w-full transition-all duration-400" />
                </a>
              ))}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <a
                href="#register"
                className="hidden lg:inline-flex items-center gap-2 bg-ted-red text-white text-[10px] tracking-[0.25em] uppercase px-6 py-2.5 hover:bg-white hover:text-black transition-all duration-300 font-semibold"
              >
                Register Now
              </a>
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden text-white/60 hover:text-white p-1.5 transition-colors"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-white/5">
              <div className="flex items-center gap-2">
                <span className="text-ted-red font-black text-lg">TEDx</span>
                <span className="text-white/60 font-light text-xs tracking-widest uppercase">AIIMSKalyani</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="text-white/40 hover:text-white p-1.5 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 flex flex-col justify-center px-10 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  className="text-white/60 hover:text-white text-3xl font-light tracking-tight py-3 hover:text-ted-red transition-colors border-b border-white/4 last:border-0"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#register"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 + 0.1 }}
                className="mt-8 bg-ted-red text-white text-center text-[11px] tracking-[0.25em] uppercase px-8 py-4 font-semibold"
              >
                Register Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}