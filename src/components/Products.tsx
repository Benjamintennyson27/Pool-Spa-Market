import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const products = [
    {
        title: 'myWorkout SERIES',
        desc: 'Do you keep buying gym memberships but never making it to the gym? Well, bring the gym to you with our myWorkoutSERIES.',
        image: 'https://cdn-iledgme.nitrocdn.com/qJaCjwrsWeHfwWthtboJrzsbiAOWocBl/assets/images/optimized/rev-6b7f6d6/poolandspamarket.com.au/wp-content/uploads/2021/07/IMG_6843a__FocusFillWzIwMDAsNzAyLCJ5IiwzMTVd.jpg',
        tag: 'Swim Spa',
    },
    {
        title: 'myIndulge SERIES',
        desc: 'The myIndulgeSERIES of swim spas have been designed with parents in mind, double recliners at one end with an open pool area at the other.',
        image: 'https://cdn-iledgme.nitrocdn.com/qJaCjwrsWeHfwWthtboJrzsbiAOWocBl/assets/images/optimized/rev-6b7f6d6/poolandspamarket.com.au/wp-content/uploads/2021/07/outdoor-spa-pool-family-spa-kid-jumping.jpeg',
        tag: 'Family',
    },
    {
        title: 'myWatersedge SERIES',
        desc: 'the myWatersedgeSERIES enables you to teach your kids to swim comfortably at home rather than swimming lessons at your local pool.',
        image: 'https://cdn-iledgme.nitrocdn.com/qJaCjwrsWeHfwWthtboJrzsbiAOWocBl/assets/images/optimized/rev-6b7f6d6/poolandspamarket.com.au/wp-content/uploads/2021/07/M5Watersedge-Jules_25__FocusFillWzIwMDAsNzAyLCJ5IiwzOTld.jpeg',
        tag: 'Kids',
    },
    {
        title: 'myHotTub',
        desc: 'Uninterrupted seating for all your friends; time for me, time for us.',
        image: 'https://cdn-iledgme.nitrocdn.com/qJaCjwrsWeHfwWthtboJrzsbiAOWocBl/assets/images/optimized/rev-6b7f6d6/poolandspamarket.com.au/wp-content/uploads/2021/07/3B5E8614-0AE1-4314-B9A6-9352005C5FEB__FocusFillWzgwMCw2MDAsZmFsc2UsMF0.jpg',
        tag: 'Social',
    },
    {
        title: 'The Amazon',
        desc: 'The perfect swim spa for the whole family. The spa can be heated at one end to relax with some Hydrotherapy, and the pool can bet set at the perfect temperature for swimming and training.',
        image: 'https://cdn-iledgme.nitrocdn.com/qJaCjwrsWeHfwWthtboJrzsbiAOWocBl/assets/images/optimized/rev-6b7f6d6/poolandspamarket.com.au/wp-content/uploads/2021/07/slider-billabong-spas-02.jpg',
        tag: 'Premium',
    },
];

export default function Products() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo('.product-card',
            { y: 60, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: container.current,
                    start: 'top 75%',
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
            }
        );
    }, { scope: container });

    return (
        <section id="products" ref={container} className="py-24 md:py-32 px-6 md:px-16 bg-cream">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
                    <span className="bg-sky/10 text-navy px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
                        Our Range
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight">
                        Sapphire & Billabong Spa Collection
                    </h2>
                    <p className="text-lg text-charcoal/70">
                        No matter what portable spa or swim spa you select, you'll be able to count on our promise of quality and the Absolute Best Spa Pool Ownership Experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, idx) => (
                        <div key={idx} className="product-card group relative overflow-hidden rounded-3xl bg-white border border-navy/5 shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className="aspect-[4/3] overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="absolute top-4 left-4">
                                <span className="bg-sky text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                                    {product.tag}
                                </span>
                            </div>
                            <div className="p-6 flex flex-col gap-3">
                                <h3 className="text-xl font-bold text-navy group-hover:text-sky transition-colors">{product.title}</h3>
                                <p className="text-sm text-charcoal/70 leading-relaxed">{product.desc}</p>
                                <a href="#contact" className="inline-flex items-center gap-2 text-sky font-semibold text-sm mt-2 hover:gap-3 transition-all">
                                    Find Out More <ArrowRight size={16} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
