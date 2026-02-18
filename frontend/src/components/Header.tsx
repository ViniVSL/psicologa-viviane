import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', to: 'home' },
    { name: 'Abordagem', to: 'abordagem' },
    { name: 'Sobre', to: 'sobre' },
    { name: 'Dúvidas', to: 'faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-lg py-3 shadow-sm border-b border-accent/20' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif font-bold text-secondary tracking-tight">Viviane Braga</span>
          <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-primary font-semibold">Psicóloga Clínica</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <Link 
              key={item.to} 
              to={item.to} 
              spy={true} 
              smooth={true} 
              offset={-80} 
              duration={800} 
              activeClass="text-primary font-semibold"
              className="relative text-dark/70 hover:text-primary cursor-pointer text-[12px] lg:text-[13px] uppercase tracking-widest font-medium transition-all duration-300 group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
          
          <a 
            href="https://wa.me/557192613075" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-6 lg:px-8 py-3 rounded-full text-[11px] lg:text-[12px] uppercase tracking-[0.15em] font-bold hover:bg-secondary hover:shadow-[0_10px_20px_rgba(53,79,82,0.2)] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Agendar Sessão
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-secondary p-2 hover:bg-accent/10 rounded-lg transition-colors" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: '100%' }} 
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 h-screen w-full bg-white z-60 md:hidden overflow-hidden"
          >
            <div className="flex flex-col h-full p-8">
              <div className="flex justify-between items-center mb-12">
                 <div className="flex flex-col">
                  <span className="text-2xl font-serif font-bold text-secondary">Viviane Braga</span>
                  <span className="text-[10px] uppercase tracking-widest text-primary">Psicóloga Clínica</span>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 text-secondary">
                  <X size={32} />
                </button>
              </div>

              <div className="flex flex-col space-y-8">
                {menuItems.map((item, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    key={item.to}
                  >
                    <Link 
                      to={item.to} 
                      onClick={() => setIsOpen(false)} 
                      spy={true} 
                      smooth={true} 
                      offset={-70}
                      className="text-3xl font-serif text-secondary hover:text-primary transition-colors block"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pb-12">
                <a 
                  href="https://wa.me/557192613075" 
                  className="bg-primary text-white text-center py-5 rounded-2xl font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/20 block w-full"
                >
                  Agendar via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;