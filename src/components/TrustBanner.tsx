import { ShieldCheck, BadgeCheck, Truck, Award } from 'lucide-react';

export default function TrustBanner() {
    const trustSignals = [
        { icon: Award, text: '40+ Years Combined Experience' },
        { icon: ShieldCheck, text: 'Premium Quality Products' },
        { icon: Truck, text: 'Delivery & Installation' },
        { icon: BadgeCheck, text: 'Family-Owned & Operated' },
    ];

    return (
        <section aria-label="Trust Signals" className="bg-cream border-y border-navy/5 py-6">
            <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
                {trustSignals.map((signal, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-navy">
                        <signal.icon className="w-5 h-5 text-sky" aria-hidden="true" />
                        <span className="font-sans font-medium text-sm tracking-tight">{signal.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
