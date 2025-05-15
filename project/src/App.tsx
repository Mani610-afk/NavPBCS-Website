import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Explore from './components/Explore';
import Features from './components/Features';
import Features2 from './components/Features2';
import Pricing from './components/Pricing';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Services />
      <Explore />
      <Features />
      <Features2 />
      <Pricing />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;