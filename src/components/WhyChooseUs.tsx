import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Droplets, Shield, Truck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reasons = [
    {
        icon: Zap,
        title: 'Energy Saving',
        desc: 'One of the very few spa companies that comply with the strictest energy commission standards in the world. Save on power bills while enjoying your spa.',
    },
    {
        icon: Shield,
        title: 'Warranty & Safety',
        desc: 'Unconditional spa warranties and stringent safety certifications ensure complete peace of mind, guaranteed.',
    },
    {
        icon: Droplets,
        title: 'Luxurious Spa Water',
        desc: 'The best water possible with less effort — featuring our no-bypass filtration system and easy salt water care technology.',
    },
    {
        icon: Truck,
        title: 'Delivery & Install',
        desc: 'Our experienced professionals will manage your entire spa installation process from start to finish. Sit back and relax.',
    },
];

export default function WhyChooseUs() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo('.reason-card',
            { y: 40, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%',
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
            }
        );
    }, { scope: container });

    return (
        <section ref={container} className="py-24 md:py-32 px-6 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
                    <span className="bg-sky/10 text-navy px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
                        Why Us
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-navy tracking-tight">
                        Reasons to Choose Pool and Spa Market
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {reasons.map((reason, idx) => (
                        <div key={idx} className="reason-card group bg-cream rounded-3xl p-8 flex flex-col gap-5 border border-navy/5 hover:border-sky/30 hover:shadow-lg transition-all duration-300">
                            <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center group-hover:bg-sky transition-colors duration-300">
                                <reason.icon size={24} className="text-sky group-hover:text-white transition-colors duration-300" />
                            </div>
                            <h3 className="text-xl font-bold text-navy">{reason.title}</h3>
                            <p className="text-sm text-charcoal/60 leading-relaxed">{reason.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="#contact" className="btn-magnetic bg-sky text-white px-8 py-4 text-base">
                        Get A Quote
                    </a>
                </div>
            </div>
        </section>
    );
}
