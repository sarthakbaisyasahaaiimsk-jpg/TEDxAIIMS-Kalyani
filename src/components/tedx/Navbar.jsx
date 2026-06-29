import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About',        href: '/#about',        type: 'anchor' },
  { label: 'Theme',        href: '/#theme',         type: 'anchor' },
  { label: 'Speakers',     href: '/#speakers',      type: 'anchor' },
  { label: 'Schedule',     href: '/#schedule',      type: 'anchor' },
  { label: 'Team',         href: '/team',           type: 'route'  },
  { label: 'Past TEDx',    href: '/past-tedx',      type: 'route'  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-black/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16 lg:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <span className="text-ted-red font-black text-lg tracking-tight">TED</span>
            <span className="text-white/20 text-sm font-light">x</span>
            <span className="text-white font-black text-sm tracking-tight">AIIMSKalyani</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.type === 'route' ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-[11px] tracking-[0.25em] uppercase font-medium transition-colors duration-200 ${
                    location.pathname === link.href
                      ? 'text-ted-red'
                      : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[11px] tracking-[0.25em] uppercase font-medium text-white/50 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              )
            )}

            <a
              href="/#register"
              className="ml-2 bg-ted-red text-white px-5 py-2 text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-white hover:text-black transition-colors duration-300"
            >
              Register
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="lg:hidden text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-black border-b border-white/5"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-0">
              {navLinks.map((link, i) =>
                link.type === 'route' ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={`py-4 text-[11px] tracking-[0.25em] uppercase font-medium border-b border-white/5 transition-colors ${
                      i === navLinks.length - 1 ? 'border-b-0' : ''
                    } ${
                      location.pathname === link.href
                        ? 'text-ted-red'
                        : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className={`py-4 text-[11px] tracking-[0.25em] uppercase font-medium text-white/50 hover:text-white transition-colors ${
                      i === navLinks.length - 1 ? '' : 'border-b border-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                )
              )}
              <a
                href="/#register"
                className="mt-6 bg-ted-red text-white text-center py-3 text-[10px] tracking-[0.25em] uppercase font-medium hover:bg-white hover:text-black transition-colors duration-300"
              >
                Register
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;