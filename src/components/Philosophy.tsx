import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const container = useRef<HTMLDivElement>(null);
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.to('.parallax-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top 60%',
        },
      });

      tl.fromTo(text1Ref.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        }
      ).fromTo(
        text2Ref.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
        },
        '-=0.6'
      );
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section
      id="about"
      ref={container}
      aria-label="About Pool and Spa Market"
      className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-navy py-32 px-6 md:px-16"
    >
      {/* Parallax Background */}
      <div
        className="parallax-bg absolute inset-0 z-0 bg-cover bg-center opacity-10"
        aria-hidden="true"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1572331165267-854da2b021b1?q=80&w=2000&auto=format&fit=crop")',
          height: '130%',
          top: '-15%',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-12 md:gap-20">
        <div ref={text1Ref} className="text-xl md:text-3xl font-sans font-medium text-white/60 max-w-2xl">
          Pool and Spa Market is a family-owned business dedicated to providing a luxurious experience at an affordable price. With our store at the Flower Power complex and technicians across the Sutherland Shire, Macarthur, and Southern Highlands.
        </div>

        <div ref={text2Ref} className="text-4xl md:text-6xl lg:text-7xl font-serif italic text-white leading-tight">
          We may not be the cheapest, but we offer the <span className="text-sky not-italic font-sans font-bold">best value for money.</span>
        </div>
      </div>
    </section>
  );
}
