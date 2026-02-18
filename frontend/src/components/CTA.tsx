import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-75 md:w-150 h-75 md:h-150 bg-primary/20 rounded-full blur-[80px] md:blur-[150px] z-0 -translate-y-1/2 translate-x-1/3" />
      
      <motion.div 
        whileInView={{ opacity: 1, y: 0 }} 
        initial={{ opacity: 0, y: 30 }} 
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-center relative z-10"
      >
        <span className="text-primary font-bold tracking-[0.4em] md:tracking-[0.5em] text-[10px] md:text-[11px] uppercase block mb-6 opacity-90">
          Inicie sua Transformação
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-[52px] font-serif text-white mb-8 md:mb-10 leading-tight italic">
          Dê o primeiro passo em direção <br className="hidden sm:block" />
          ao seu <span className="text-primary font-medium not-italic">bem-estar</span>
        </h2>

        <p className="text-accent/60 text-base md:text-xl mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed px-4">
          Se você busca um processo terapêutico estruturado, ético e adaptado à sua realidade, estou aqui para te acompanhar.
        </p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto inline-block">
          <a 
            href="https://wa.me/557192613075" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative flex sm:inline-flex items-center justify-center bg-primary text-white px-10 md:px-14 py-5 md:py-6 rounded-full font-bold text-xs md:text-sm uppercase tracking-[0.2em] transition-all shadow-2xl overflow-hidden w-full"
          >
            <MessageCircle className="mr-3" size={20} />
            Agendar agora via WhatsApp
          </a>
        </motion.div>

        <p className="mt-8 md:mt-10 text-[9px] md:text-[10px] text-white/30 uppercase tracking-[0.3em] font-medium">
          Atendimentos Particulares e Online
        </p>
      </motion.div>
    </section>
  );
};

export default CTA;