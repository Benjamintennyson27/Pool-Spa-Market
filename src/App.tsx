import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import ServiceAreas from './components/ServiceAreas';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main id="main-content" className="relative bg-white min-h-screen font-sans text-charcoal selection:bg-sky selection:text-white">
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <Hero />
        <Features />
        <Products />
        <WhyChooseUs />
        <Reviews />
        <ServiceAreas />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
