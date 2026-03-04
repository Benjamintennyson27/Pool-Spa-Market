
export default function Footer() {
  return (
    <footer aria-label="Site footer" className="bg-dark text-white pt-24 pb-12 px-6 md:px-16 rounded-t-[4rem] -mt-8 relative z-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-24">

          <div className="md:col-span-5 flex flex-col gap-8">
            <a href="#" aria-label="Pool and Spa Market — Home" className="block w-fit">
              <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-2xl w-fit">
                <img
                  src="/logo.png"
                  alt="Pool and Spa Market Logo"
                  className="h-12 md:h-16 w-auto object-contain"
                />
              </div>
            </a>
            <div className="flex flex-col gap-2 text-white/70 text-base">
              <a href="tel:0246011181" className="hover:text-sky transition-colors font-medium text-white">(02) 4601 1181</a>
              <a href="mailto:admin@poolandspamarket.com.au" className="hover:text-sky transition-colors">admin@poolandspamarket.com.au</a>
              <span className="mt-2 text-sm">At Flower Power Centre, 320 Narellan Road</span>
              <span className="text-sm">Mount Annan, NSW 2567</span>
            </div>
            <div className="flex flex-col gap-1 text-xs text-white/40 font-mono tracking-widest uppercase">
              <span>Open 7 Days – Including Public Holidays</span>
              <span>Family-Owned & Operated</span>
            </div>
          </div>

          <nav aria-label="Products" className="md:col-span-2 md:col-start-8 flex flex-col gap-4">
            <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-4">Products</h4>
            <a href="#products" className="hover-lift text-white/80 hover:text-sky transition-colors">Swim Spas</a>
            <a href="#products" className="hover-lift text-white/80 hover:text-sky transition-colors">Spa Pools</a>
            <a href="#products" className="hover-lift text-white/80 hover:text-sky transition-colors">Pool Pumps</a>
            <a href="#products" className="hover-lift text-white/80 hover:text-sky transition-colors">Pool Filters</a>
            <a href="#products" className="hover-lift text-white/80 hover:text-sky transition-colors">Chemicals</a>
          </nav>

          <nav aria-label="Company" className="md:col-span-2 flex flex-col gap-4">
            <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-4">Company</h4>
            <a href="#about" className="hover-lift text-white/80 hover:text-sky transition-colors">About Us</a>
            <a href="#reviews" className="hover-lift text-white/80 hover:text-sky transition-colors">Testimonials</a>
            <a href="#contact" className="hover-lift text-white/80 hover:text-sky transition-colors">Contact</a>
            <a href="#contact" className="hover-lift text-white/80 hover:text-sky transition-colors">Book a Service</a>
            <a href="#contact" className="hover-lift text-white/80 hover:text-sky transition-colors">Request a Quote</a>
          </nav>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-6">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Pool and Spa Market. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-white/60">
            <a href="#" className="hover:text-sky transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
