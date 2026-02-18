import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Brain, ArrowUpRight } from 'lucide-react';

const Approach = () => {
  const cards = [
    { 
      icon: <Brain size={28} strokeWidth={1.5} />, 
      title: "Compreender", 
      text: "Compreender o que sente, transformando a dor em autoconhecimento." 
    },
    { 
      icon: <ShieldCheck size={28} strokeWidth={1.5} />, 
      title: "Construir", 
      text: "Construir mudanças em padrões que hoje geram sofrimento." 
    },
    { 
      icon: <CheckCircle2 size={28} strokeWidth={1.5} />, 
      title: "Fortalecer", 
      text: "Fortalecer sua autonomia emocional, para enfrentar os desafios." 
    }
  ];

  return (
    <section id="abordagem" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-light/30 z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            whileInView={{ opacity: 1, x: 0 }} 
            initial={{ opacity: 0, x: -30 }} 
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="hidden lg:block h-px w-8 bg-primary"></span>
              <span className="text-primary font-bold tracking-[0.3em] text-[10px] md:text-[11px] uppercase">
                Metodologia Científica
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-secondary leading-tight mb-8 italic">
              Como funciona o <br className="hidden md:block" /> meu trabalho
            </h2>
            
            <div className="space-y-6 md:space-y-8 text-dark/80 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              <p className="lg:border-l-2 lg:border-accent lg:pl-6">
                Meu trabalho é fundamentado na <strong className="text-secondary">Psicologia Baseada em Evidências (PBE)</strong>, com foco na <strong className="text-secondary">Terapia Cognitivo-Comportamental (TCC)</strong>.
              </p>
              <p>
                Significa que o processo terapêutico é baseado em estratégias comprovadas pela ciência, sempre adaptadas à sua história e necessidades.
              </p>
              <p className="text-primary font-medium italic">
                Trabalhamos juntos para identificar padrões que geram sofrimento e desenvolver novas formas de pensar, sentir e agir.
              </p>
            </div>
          </motion.div>
          
          <div className="grid gap-4 md:gap-6">
            {cards.map((card, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 md:p-8 bg-white rounded-3xl md:rounded-4xl border border-accent/40 flex flex-col sm:flex-row gap-5 md:gap-6 shadow-sm hover:shadow-xl transition-all duration-500 relative"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-light rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                  {card.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl text-secondary mb-2 italic group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-dark/60 leading-relaxed text-sm md:text-base">
                    {card.text}
                  </p>
                </div>

                <div className="hidden sm:block absolute top-8 right-8 text-accent/30 group-hover:text-primary/40 transition-colors">
                   <ArrowUpRight size={20} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;