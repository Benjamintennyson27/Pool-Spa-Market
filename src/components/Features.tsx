import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Droplets, Zap, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.feature-card',
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: container.current,
          start: 'top 75%',
        },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
      }
    );
  }, { scope: container });

  return (
    <section id="services" ref={container} className="py-24 md:py-32 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <span className="bg-sky/10 text-navy px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
            Discover the Difference
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight">
            Better Performance. Better Water. Better Massages.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card flex flex-col gap-6 p-8 rounded-[2rem] bg-cream border border-navy/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center">
                <Zap size={24} className="text-sky" />
              </div>
              <h3 className="text-2xl font-bold text-navy">Better Performance</h3>
            </div>
            <p className="text-charcoal/70 text-lg">Enhanced performance and innovative Smart Features.</p>
          </div>

          <div className="feature-card flex flex-col gap-6 p-8 rounded-[2rem] bg-cream border border-navy/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center">
                <Droplets size={24} className="text-sky" />
              </div>
              <h3 className="text-2xl font-bold text-navy">Better Water</h3>
            </div>
            <p className="text-charcoal/70 text-lg">Cleaner water made easy with exclusive water care filtration systems.</p>
          </div>

          <div className="feature-card flex flex-col gap-6 p-8 rounded-[2rem] bg-cream border border-navy/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-sky/10 flex items-center justify-center">
                <Activity size={24} className="text-sky" />
              </div>
              <h3 className="text-2xl font-bold text-navy">Better Massages</h3>
            </div>
            <p className="text-charcoal/70 text-lg">Designed for the ultimate massage experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
