import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import heroImg from '../assets/hero.png';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-light overflow-hidden pt-32 pb-16 lg:pt-24 lg:pb-12">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[80%] md:w-[50%] h-[50%] bg-primary/5 rounded-full blur-[100px] md:blur-[120px] -z-10 translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[60%] md:w-[30%] h-[30%] bg-accent/20 rounded-full blur-[80px] md:blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 text-center lg:text-left order-2 lg:order-1"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block text-primary font-bold tracking-[0.3em] md:tracking-[0.4em] text-[10px] md:text-[11px] uppercase mb-6 bg-primary/10 px-4 py-1.5 rounded-full"
          >
            Psicoterapia Especializada
          </motion.span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-serif text-secondary leading-[1.2] lg:leading-[1.15] mb-6 md:mb-8 tracking-tight">
            Você não precisa adoecer para <br className="hidden md:block" />
            <span className="italic text-primary-dark font-medium">aprender a se cuidar</span>
          </h1>

          <div className="relative mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0">
            <p className="text-base md:text-lg lg:text-xl text-dark/70 leading-relaxed lg:pl-8 lg:border-l-2 lg:border-primary/30">
              A terapia é um espaço de escuta, acolhimento e construção. Um lugar seguro para compreender seus sentimentos e fortalecer sua saúde emocional.
            </p>
          </div>

          <motion.div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a 
              href="https://wa.me/557192613075" 
              target="_blank" 
              rel="noreferrer"
              className="group w-full sm:w-auto inline-flex items-center justify-center bg-secondary text-white px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-primary transition-all duration-500 shadow-xl"
            >
              Agendar agora
              <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1.2, ease: "easeOut" }} 
          className="relative order-1 lg:order-2 max-w-112.5 mx-auto lg:max-w-none"
        >
          <div className="relative z-10 aspect-4/5 rounded-4xl md:rounded-[2.5rem] overflow-hidden shadow-2xl border-8 md:border-16 border-white">
            <img 
              src={heroImg} 
              alt="Viviane Braga" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Badge para celular e Tablet) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-4 md:p-6 rounded-2xl shadow-xl z-20 border border-accent/50 hidden sm:block"
          >
            <div className="flex items-center gap-3 md:gap-4">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <span className="font-bold text-base md:text-lg italic font-serif">9</span>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-tighter text-dark/50 font-bold leading-none mb-1">Anos de Prática</p>
                <p className="text-xs md:text-sm font-serif text-secondary font-bold italic">Experiência Clínica</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}