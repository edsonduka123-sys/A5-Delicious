import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

export function MissionMotto() {
  return (
    <section className="py-24 bg-[#0a0a0a] text-[#f5f5dc] relative overflow-hidden border-t border-[#D4AF37]/20">
      {/* Background patterned/texture overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D4AF37] via-[#0a0a0a] to-[#0a0a0a]"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-[#D4AF37]/20">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:pr-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">Notre Mission</span>
              <span className="flex-1 h-[1px] bg-[#D4AF37]/30" />
            </div>
            <h3 className="text-3xl md:text-4xl mb-6 font-light leading-tight font-serif">
              Créer des moments <br /> <span className="italic text-[#D4AF37]">inoubliables</span>
            </h3>
            <p className="text-sm text-[#f5f5dc]/70 font-light leading-relaxed">
              Offrir à nos clients des expériences culinaires uniques, en alliant qualité, créativité et professionnalisme, afin de rendre chaque événement inoubliable.
            </p>
          </motion.div>

          {/* Motto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-16 md:pt-0 md:pl-16 flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold">Notre Devise</span>
              <span className="flex-1 h-[1px] bg-[#D4AF37]/30" />
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-6 -left-8 w-16 h-16 text-[#D4AF37]/20 rotate-180" />
              <blockquote className="text-4xl md:text-5xl lg:text-6xl text-center md:text-left leading-tight py-4 relative z-10 font-serif">
                Chez nous,<br />
                <span className="italic text-[#D4AF37] font-bold">appétit +++</span>
              </blockquote>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
