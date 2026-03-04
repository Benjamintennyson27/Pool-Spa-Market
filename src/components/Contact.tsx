import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock, ShoppingBag, Wrench, Droplets, Thermometer } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo('.contact-anim',
            { y: 30, opacity: 0 },
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

    const services = [
        { icon: ShoppingBag, name: 'Spa & Swim Spa Sales', desc: 'Full range of Sapphire and Billabong spas on display. From compact to family-size and swim spas.' },
        { icon: Wrench, name: 'Pool Equipment Sales', desc: 'Pool pumps, cartridge filters, sanitisation systems, automation systems, and more from leading brands.' },
        { icon: Droplets, name: 'Chemicals & Supplies', desc: 'Premium range of pool and spa chemicals for water treatment, cleaning, and maintenance.' },
        { icon: Thermometer, name: 'Heating & Covers', desc: 'Gas heaters, heat pumps, and pool covers to extend your swimming season and protect your investment.' },
    ];

    return (
        <section id="contact" ref={container} className="py-24 md:py-32 px-6 md:px-16 bg-white" aria-label="Contact Information & Services">
            <div className="max-w-7xl mx-auto">

                <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
                    <span className="contact-anim bg-sky/10 text-navy px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
                        Get In Touch
                    </span>
                    <h2 className="contact-anim text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight">
                        Contact Pool and Spa Market
                    </h2>
                    <p className="contact-anim text-lg text-charcoal/70">
                        Our friendly team are here to help and answer any questions. Visit our showroom, open 7 days a week including public holidays.
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="contact-anim grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    <a href="tel:0246011181" className="group bg-cream hover:bg-navy rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 border border-navy/5 hover:border-sky/30">
                        <div className="w-12 h-12 rounded-full bg-sky/10 group-hover:bg-sky/20 flex items-center justify-center transition-colors">
                            <Phone size={20} className="text-sky" />
                        </div>
                        <h3 className="font-bold text-navy group-hover:text-white transition-colors">Phone</h3>
                        <p className="text-sm text-charcoal/60 group-hover:text-white/70 transition-colors">(02) 4601 1181</p>
                        <span className="text-xs font-mono text-sky tracking-widest uppercase mt-1">Call Now →</span>
                    </a>

                    <a href="mailto:admin@poolandspamarket.com.au" className="group bg-cream hover:bg-navy rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 border border-navy/5 hover:border-sky/30">
                        <div className="w-12 h-12 rounded-full bg-sky/10 group-hover:bg-sky/20 flex items-center justify-center transition-colors">
                            <Mail size={20} className="text-sky" />
                        </div>
                        <h3 className="font-bold text-navy group-hover:text-white transition-colors">Email</h3>
                        <p className="text-sm text-charcoal/60 group-hover:text-white/70 transition-colors break-all">admin@poolandspamarket.com.au</p>
                        <span className="text-xs font-mono text-sky tracking-widest uppercase mt-1">Send Email →</span>
                    </a>

                    <a href="https://www.google.com/maps/search/?api=1&query=Pool+and+Spa+Market+320+Narellan+Road+Mount+Annan+NSW+2567" target="_blank" rel="noopener noreferrer" className="group bg-cream hover:bg-navy rounded-2xl p-6 flex flex-col items-center text-center gap-3 transition-all duration-300 border border-navy/5 hover:border-sky/30">
                        <div className="w-12 h-12 rounded-full bg-sky/10 group-hover:bg-sky/20 flex items-center justify-center transition-colors">
                            <MapPin size={20} className="text-sky" />
                        </div>
                        <h3 className="font-bold text-navy group-hover:text-white transition-colors">Showroom</h3>
                        <p className="text-sm text-charcoal/60 group-hover:text-white/70 transition-colors">At Flower Power Centre, 320 Narellan Rd, Mount Annan NSW 2567</p>
                        <span className="text-xs font-mono text-sky tracking-widest uppercase mt-1">Get Directions →</span>
                    </a>

                    <div className="bg-cream rounded-2xl p-6 flex flex-col items-center text-center gap-3 border border-navy/5">
                        <div className="w-12 h-12 rounded-full bg-sky/10 flex items-center justify-center">
                            <Clock size={20} className="text-sky" />
                        </div>
                        <h3 className="font-bold text-navy">Opening Hours</h3>
                        <p className="text-sm text-charcoal/60">Open 7 Days a Week</p>
                        <span className="text-xs font-mono text-charcoal/40 tracking-widest uppercase mt-1">Including Public Holidays</span>
                    </div>
                </div>

                {/* Google Map Section */}
                <div className="contact-anim mb-20 rounded-2xl overflow-hidden border border-navy/5 h-[400px] shadow-sm">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.4!2d150.7577!3d-34.0694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12eda3c9bacd77%3A0x74f7db6f89c3cc36!2sMount%20Annan%20NSW%202567!5e0!3m2!1sen!2sau!4v1710000000000"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Pool and Spa Market — Showroom Location"
                    ></iframe>
                </div>

                {/* Full Services List */}
                <div className="contact-anim">
                    <h3 className="text-2xl md:text-3xl font-bold text-navy mb-10 text-center">What We Offer</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="flex gap-5 p-6 rounded-2xl bg-cream border border-navy/5 hover:border-sky/20 transition-colors">
                                <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center shrink-0">
                                    <service.icon size={22} className="text-sky" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="font-bold text-navy text-lg">{service.name}</h4>
                                    <p className="text-sm text-charcoal/60 leading-relaxed">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Banner */}
                <div className="contact-anim mt-16 bg-navy rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-white max-w-lg">
                        <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to Find Your Perfect Spa?</h3>
                        <p className="text-white/60">Visit our showroom at the Flower Power Centre or get in touch for expert advice and a free quote.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="tel:0246011181" className="btn-magnetic bg-sky text-white px-8 py-4 text-base font-bold whitespace-nowrap">
                            📞 (02) 4601 1181
                        </a>
                        <a href="mailto:admin@poolandspamarket.com.au" className="btn-magnetic bg-white/10 text-white border border-white/20 px-8 py-4 text-base whitespace-nowrap">
                            ✉️ Email Us
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
