import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: "Quando a terapia é indicada?", a: "A terapia pode ser buscada tanto em momentos de sofrimento intenso quanto como forma de prevenção e autoconhecimento..." },
  { q: "A terapia é um espaço seguro?", a: "Sim. A psicoterapia acontece em um ambiente ético, sigiloso, acolhedor e sem julgamentos..." },
  { q: "Como funciona o processo terapêutico?", a: "As sessões são um espaço de escuta, reflexão e construção conjunta. O envolvimento e a constância são fundamentais neste processo." },
  { q: "A terapia é só para quem tem transtornos?", a: "Não. A terapia é tanto para pessoas com transtornos mentais quanto para aquelas que enfrentam desafios emocionais, passaram por situações difíceis ou desejam se conhecer melhor..." },
  { q: "Quanto tempo dura a sessão e o valor?", a: "A sessão tem duração de 50 minutos. Valores não podem ser divulgados como forma de publicidade, entre em contato para demais informações e dúvidas. " },
  { q: "Como são realizados os atendimentos?", a: "Os atendimentos são realizados exclusivamente de forma online. As sessões acontecem semanalmente, pelo Google Meet, com ética, sigilo e qualidade." }
];

const FAQ = () => {
  const [active, setActive] = useState<number | null>(null);
  const doubleFaqs = [...faqs, ...faqs];

  return (
    <section id="faq" className="py-20 md:py-24 bg-light overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-bold tracking-[0.3em] md:tracking-[0.4em] text-[10px] uppercase block mb-4">Dúvidas Comuns</span>
          <h2 className="text-3xl md:text-5xl font-serif text-secondary italic">Perguntas Frequentes</h2>
        </div>

        <div className="relative flex overflow-hidden py-10">
          <motion.div 
            className="flex gap-4 md:gap-6 whitespace-nowrap"
            animate={active === null ? { x: ["0%", "-50%"] } : { x: "0%" }}
            transition={{ x: { ease: "linear", duration: 45, repeat: Infinity } }}
          >
            {doubleFaqs.map((faq, i) => (
              <motion.div
                key={i}
                onClick={() => setActive(active === i ? null : i)}
                className={`inline-block w-75 sm:w-95 md:w-112.5 whitespace-normal cursor-pointer transition-all duration-500 rounded-4xl md:rounded-[2.5rem] border p-6 md:p-8 ${
                  active === i 
                  ? 'bg-white border-primary shadow-2xl z-20 scale-100 sm:scale-105' 
                  : 'bg-white/60 border-accent/40 hover:bg-white z-10'
                }`}
              >
                <div className="flex justify-between items-start gap-4">
                  <h3 className={`font-serif text-lg md:text-xl leading-tight transition-colors ${active === i ? 'text-primary' : 'text-secondary'}`}>
                    {faq.q}
                  </h3>
                  <div className={`mt-1 shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center transition-all ${active === i ? 'bg-primary text-white' : 'bg-accent/30 text-primary'}`}>
                    {active === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </div>

                <AnimatePresence>
                  {active === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="mt-6 pt-6 border-t border-accent/20">
                        <p className="text-dark/70 text-sm md:text-base leading-relaxed italic">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="absolute top-0 left-0 h-full w-12 md:w-20 bg-linear-to-r from-light to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-12 md:w-20 bg-linear-to-l from-light to-transparent z-10 pointer-events-none" />
        </div>

        <div className="mt-10 text-center px-4">
          <p className="text-secondary/60 font-serif italic text-xs md:text-sm">
            Toque em um card para ler a resposta e pausar o movimento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;