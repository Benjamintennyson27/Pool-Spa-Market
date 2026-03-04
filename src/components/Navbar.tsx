import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { label: 'Shop', href: '#products' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav
        ref={navRef}
        aria-label="Main navigation"
        className={`flex items-center justify-between px-6 md:px-12 py-3 transition-all duration-500 bg-white shadow-sm`}
      >
        {/* Logo */}
        <a href="#" className="flex items-center gap-3" aria-label="Pool and Spa Market — Home">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Pool and Spa Market Logo"
              className="h-10 md:h-14 w-auto object-contain transition-all duration-300"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8 font-medium text-sm">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="hover-lift text-navy/70 hover:text-navy transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="tel:0295456660" className="hidden md:flex items-center gap-2 text-sm font-bold text-navy hover:text-sky transition-colors" aria-label="Call us at (02) 9545 6660">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            (02) 9545 6660
          </a>
          <a
            href="#contact"
            className="btn-magnetic bg-sky text-white px-5 py-2.5 text-sm"
            aria-label="Book a service"
          >
            Book a Service
          </a>
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-navy/5 shadow-lg px-6 py-6 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-navy font-medium text-lg py-2 border-b border-navy/5"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="tel:0295456660" className="text-sky font-bold text-lg py-2">
            📞 (02) 9545 6660
          </a>
        </div>
      )}
    </header>
  );
}
