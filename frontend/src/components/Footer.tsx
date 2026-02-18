import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white py-12 md:py-16 border-t border-accent/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-end">
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl md:text-3xl font-serif text-secondary mb-3 tracking-tighter italic">
              Viviane Braga
            </h3>
            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="w-6 h-px bg-primary/40 hidden sm:block"></span>
              <p className="text-primary font-black text-[10px] uppercase tracking-[0.5em]">
                CRP 03/15150
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-right flex flex-col items-center md:items-end gap-6"
          >
            <p className="text-dark/50 text-[10px] md:text-[11px] uppercase tracking-widest font-medium">
              © {new Date().getFullYear()} • Todos os direitos reservados.
            </p>

            <div className="pt-6 border-t border-accent/20 w-full sm:w-auto min-w-45">
              <span className="text-[9px] text-dark/40 uppercase tracking-[0.3em] block mb-2 font-bold">
                Design & Code
              </span>
              <a 
                href="https://vinidev.com.br/" 
                target="_blank" 
                className="group inline-flex flex-col items-center md:items-end"
              >
                <span className="text-xl md:text-2xl font-black text-secondary group-hover:text-primary transition-all duration-500 tracking-tighter italic leading-none">
                  VINI<span className="text-primary group-hover:text-secondary">DEV</span>
                </span>
                <div className="h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-500 mt-1" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;