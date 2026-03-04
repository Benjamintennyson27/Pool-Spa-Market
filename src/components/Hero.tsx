import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-anim',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.08,
          ease: 'power3.out',
          delay: 0.2,
        }
      );
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section
      ref={container}
      aria-label="Hero — Pool and Spa Market"
      className="relative h-[100dvh] w-full overflow-hidden flex items-end pb-24 md:pb-32 px-6 md:px-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        role="img"
        aria-label="Luxury spa pool with ambient lighting at dusk"
        style={{
          backgroundImage: 'url("https://poolandspamarket.com.au/wp-content/uploads/2021/07/IMG_6843a__FocusFillWzIwMDAsNzAyLCJ5IiwzMTVd-1.jpg")',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#00304d] via-navy/80 to-navy/10" aria-hidden="true" />

      {/* Wave SVG Bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20" aria-hidden="true">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H0V60Z" fill="white" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-5xl text-white">
        <div className="hero-anim mb-4 flex items-center gap-3">
          <span className="bg-sky/20 text-sky border border-sky/30 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            Family-Owned · 40+ Years
          </span>
          <span className="flex text-sky" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </span>
        </div>

        <h1 className="flex flex-col gap-2 mt-4">
          <span className="hero-anim block font-sans font-bold text-3xl md:text-5xl tracking-tight text-sky">
            Bubbling with Innovation
          </span>
          <span className="hero-anim block font-serif italic text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
            for 40 Years.
          </span>
        </h1>

        <p className="hero-anim mt-8 max-w-xl text-lg md:text-xl text-white/80 font-medium">
          Your one-stop shop for premium spas, swim spas, pool equipment, and expert maintenance. <span className="text-white">Showroom open 7 days.</span>
        </p>

        <div className="hero-anim mt-10 flex flex-wrap gap-4">
          <a
            href="#products"
            className="btn-magnetic bg-sky text-white px-8 py-4 text-lg"
            aria-label="Explore our range of spas and pool equipment"
          >
            Explore The Range
          </a>
          <a
            href="#contact"
            className="btn-magnetic bg-white/10 text-white border border-white/30 px-8 py-4 text-lg backdrop-blur-sm"
            aria-label="Request a free quote"
          >
            Request A Quote
          </a>
        </div>
      </div>
    </section>
  );
}
