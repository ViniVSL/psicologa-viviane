import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const About = () => {
  return (
    <section
      id="sobre"
      className="py-20 md:py-28 bg-light relative overflow-hidden"
    >
      {/* Background Text */}
      <div className="absolute top-10 left-0 w-full opacity-[0.02] pointer-events-none italic font-serif text-[80px] md:text-[200px] select-none text-center">
        Viviane Braga
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="bg-white p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border border-accent/30 relative"
        >
          {/* Quote Icon para mobile */}
          <div className="absolute top-8 right-8 text-primary/10 hidden sm:block">
            <div className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
              <Quote size={80} strokeWidth={1} className="w-full h-full" />
            </div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-4 mb-6 md:mb-8">
              <span className="w-8 md:w-12 h-px bg-primary"></span>
              <span className="text-primary font-bold tracking-[0.4em] text-[10px] md:text-[11px] uppercase">
                Minha Trajetória
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-serif text-secondary mb-8 md:mb-12 italic leading-tight">
              Olá, sou <span className="text-primary-dark">Viviane Braga</span>
            </h2>

            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
              <div className="lg:col-span-7 space-y-6 md:space-y-8 text-dark/70 text-base md:text-lg leading-[1.7] md:leading-[1.8] font-sans">
                <p className="first-letter:text-4xl md:first-letter:text-5xl first-letter:font-serif first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                  Psicóloga há 9 anos. Minha atuação é pautada no cuidado, na
                  ética e no respeito à singularidade de cada pessoa, com uma
                  prática humanizada baseada em escuta atenta, vínculo e
                  embasamento técnico.
                </p>
                <p>
                  Atendo demandas como ansiedade, compulsão alimentar, desafios
                  relacionados ao emagrecimento, alterações de humor,
                  dificuldades com o sono e outras questões emocionais.
                </p>
              </div>

              <div className="lg:col-span-5 bg-light/50 p-6 md:p-8 rounded-4xl border border-accent/20 flex flex-col justify-between">
                <p className="text-dark/80 italic leading-relaxed text-sm md:text-md mb-8 border-l-3 border-primary/20 pl-6">
                  Sou especializanda em Psicoterapias Baseadas em Evidências,
                  com ênfase nas Terapias Cognitivo-Comportamentais, reforçando
                  meu compromisso com uma clínica atualizada.
                </p>

                <div className="mt-auto">
                  <div className="flex flex-col">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-primary font-black mb-2">
                      Conselho Regional
                    </span>
                    <div className="inline-block bg-secondary text-white px-6 md:px-8 py-3 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold tracking-widest shadow-lg w-fit">
                      CRP 03/15150
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-10 md:mt-12 text-secondary/40 font-serif italic text-base md:text-lg px-4"
        >
          Um cuidado atento e comprometido com sua saúde mental.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
