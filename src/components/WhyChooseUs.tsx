import { motion } from 'motion/react';
import { Star, Clock, HeartHandshake, Sparkles } from 'lucide-react';

const reasons = [
  {
    title: 'Qualité premium',
    description: 'Des ingrédients soigneusement sélectionnés pour des créations d’exception.',
    icon: Star,
  },
  {
    title: 'Service professionnel',
    description: 'Une équipe dédiée et discrète pour un accompagnement sur-mesure.',
    icon: HeartHandshake,
  },
  {
    title: 'Flexibilité & personnalisation',
    description: 'S’adapter à vos besoins et créer une offre qui vous ressemble.',
    icon: Sparkles,
  },
  {
    title: 'Livraison rapide',
    description: 'Une promesse tenue avec ponctualité pour votre sérénité.',
    icon: Clock,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#0d0d0d] text-[#f5f5dc] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold block mb-4">L'excellence au rendez-vous</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-12 font-serif">
              Pourquoi nous <br />
              <span className="italic text-[#D4AF37]">choisir ?</span>
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col gap-3 p-6 border border-[#D4AF37]/10 bg-white/5"
                >
                  <reason.icon className="text-[#D4AF37] w-6 h-6 mb-2" strokeWidth={1.5} />
                  <h4 className="text-[10px] uppercase tracking-widest font-bold">{reason.title}</h4>
                  <p className="opacity-70 font-light text-xs leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] hidden lg:block"
          >
            <div className="absolute inset-0 border border-[#D4AF37]/30 rounded-t-full rotate-3" />
            <div className="absolute inset-4 overflow-hidden rounded-t-[200px] rounded-b-xl border border-white/5 z-10 bg-[#0a0a0a]">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-8 -left-8 bg-[#D4AF37] p-6 rounded-full w-32 h-32 flex flex-col items-center justify-center text-[#0a0a0a] z-20 shadow-[0_0_30px_rgba(212,175,55,0.3)]">
              <span className="text-3xl font-serif font-bold">100%</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-center mt-1">Sur mesure</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
