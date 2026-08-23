import React from 'react';
import ScrollReveal from './ScrollReveal';

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/tedxaiimskalyani' },
  { label: 'Twitter / X', href: 'https://twitter.com/tedxaiimskly' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/tedxaiimskalyani' },
  { label: 'YouTube', href: 'https://youtube.com/@tedxaiimskalyani' },
];

const footerLinks = [
  { label: 'About TED', href: 'https://www.ted.com/about/our-organization' },
  { label: 'TEDx Rules', href: 'https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Use', href: '#' },
  { label: 'Contact Us', href: 'mailto:tedxaiimskalyani2026@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Branding */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <div className="flex items-center gap-2 mb-5">
                <span className="text-ted-red font-black text-2xl tracking-tight">TEDx</span>
                <span className="text-white font-light text-sm tracking-widest uppercase">AIIMSKalyani</span>
              </div>
              <p className="text-white/30 text-sm leading-relaxed max-w-sm mb-8 font-light">
                An independently organized TEDx event at AIIMS Kalyani, bringing together
                India's boldest thinkers in healthcare, technology, and innovation.
              </p>
              <div className="flex flex-wrap gap-5">
                {socialLinks.map(link => (
                  
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/20 hover:text-ted-red text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Links */}
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-medium mb-5">Links</p>
              <ul className="space-y-3">
                {footerLinks.map(link => (
                  <li key={link.label}>
                    
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-white/25 hover:text-white/70 text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>

        {/* Legal */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <ScrollReveal>
            <p className="text-white/15 text-xs">
              This independent TEDx event is operated under license from TED.
            </p>
          </ScrollReveal>
          <p className="text-white/10 text-xs">
            © {new Date().getFullYear()} TEDxAIIMS Kalyani. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
