import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { name: 'Sarah M.', suburb: 'Kirrawee', text: 'Absolutely love our new Sapphire spa from Pool and Spa Market. Phil and the team were incredibly helpful in choosing the right model for our family. Installation was seamless.' },
  { name: 'David T.', suburb: 'Sutherland', text: 'The team at Pool and Spa Market are the real deal. Expert advice on our pool pump replacement and they had it installed the same week. Great prices too.' },
  { name: 'Jenny L.', suburb: 'Cronulla', text: 'Bought our swim spa here and couldn\'t be happier. The showroom is impressive and the staff really know their products. After-sales support has been excellent.' },
  { name: 'Mark R.', suburb: 'Engadine', text: 'Phil\'s team serviced our spa and replaced the filter. Very professional, on time, and fair pricing. Will definitely be back for chemicals and supplies.' },
  { name: 'Lisa K.', suburb: 'Miranda', text: 'We\'ve been buying all our pool chemicals and equipment from Pool and Spa Market for years. Their knowledge and customer service keeps us coming back. Highly recommend!' },
  { name: 'Tony B.', suburb: 'Jannali', text: 'The Billabong spa we purchased is amazing. The kids love it! The team made the whole process easy from selection to delivery. Open 7 days is very convenient too.' },
];

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const clientWidth = scrollRef.current?.clientWidth || 0;

    gsap.to(scrollRef.current, {
      x: -(scrollWidth - clientWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  return (
    <section id="reviews" ref={containerRef} aria-label="Client reviews and testimonials" className="py-32 bg-navy text-white overflow-hidden">
      <div className="px-6 md:px-16 mb-16 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <span className="bg-sky/20 text-sky px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-4">Real People, Real Stories.</h2>
          <p className="text-white/60 font-sans max-w-md">
            See what families across Sydney have to say about our products and service.
          </p>
        </div>
        <div className="flex items-center gap-2" aria-label="4.0 out of 5 stars Google rating">
          <div className="flex text-sky" aria-hidden="true">
            {[...Array(4)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            <Star size={24} className="text-white/30" />
          </div>
          <span className="font-mono text-sm tracking-widest ml-2">4.0 GOOGLE RATING</span>
        </div>
      </div>

      <div className="pl-6 md:pl-16">
        <div ref={scrollRef} className="flex gap-6 w-max pr-16 pb-12">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="w-[350px] md:w-[450px] bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col gap-6 backdrop-blur-sm"
              aria-label={`Review by ${review.name} from ${review.suburb}`}
            >
              <div className="flex text-sky" aria-hidden="true">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-white/90 leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="font-bold font-sans">{review.name}</span>
                <span className="font-mono text-xs text-sky uppercase tracking-widest">{review.suburb}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
