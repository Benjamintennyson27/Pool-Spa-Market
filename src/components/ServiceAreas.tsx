import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
    const areas = [
        'Kirrawee', 'Sutherland', 'Cronulla', 'Engadine', 'Miranda',
        'Jannali', 'Caringbah', 'Menai', 'Sylvania', 'Mount Annan',
        'Campbelltown', 'Goulburn', 'Southern Highlands', 'Macarthur Region',
    ];

    return (
        <section aria-label="Areas We Serve" className="py-24 bg-cream border-t border-navy/5">
            <div className="max-w-5xl mx-auto px-6 md:px-16 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sky/10 text-sky mb-6">
                    <MapPin size={24} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight">
                    Service Areas
                </h2>
                <p className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-12">
                    From Cronulla right through to Goulburn, our technicians are located across the Sutherland Shire, Macarthur region, and the Southern Highlands.
                </p>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {areas.map((suburb, idx) => (
                        <div
                            key={idx}
                            className="bg-white px-4 py-2 rounded-full text-sm font-medium text-navy border border-navy/5 shadow-sm hover:border-sky hover:bg-sky hover:text-white transition-all duration-300 cursor-default"
                        >
                            {suburb}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
