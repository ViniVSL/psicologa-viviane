import Header from './components/Header';
import Hero from './components/Hero';
import Approach from './components/Approach';
import About from './components/About';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppFloating from './components/WhatsAppFloating';

function App() {
  return (
    <div className="min-h-screen bg-light">
      <Header />
      <Hero />
      <Approach />
      <About />
      <FAQ />
      <CTA />
      <Footer />
      <WhatsAppFloating />
    </div>
  );
}

export default App;