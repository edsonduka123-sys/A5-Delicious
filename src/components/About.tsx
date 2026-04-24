import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0d0d0d] border-t border-[#D4AF37]/20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-t-full overflow-hidden border border-[#D4AF37]/30 shadow-2xl relative z-10 mx-auto max-w-md lg:mx-0 bg-white/5">
              <img
                src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=800&auto=format&fit=crop"
                alt=""
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute top-1/2 -translate-y-1/2 -right-8 w-64 h-64 border border-[#D4AF37]/20 rounded-full z-0 hidden lg:block" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs uppercase tracking-[0.4em] font-bold">À Propos de Nous</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#f5f5dc] mb-10 leading-tight">
              L'Art de <br />
              <span className="italic text-[#D4AF37]">Recevoir</span>
            </h2>
            
            <p className="text-lg md:text-xl text-[#f5f5dc]/70 leading-relaxed font-light italic font-serif">
              <strong className="font-semibold text-[#f5f5dc]">A5 Délicious</strong> est un service traiteur événementiel spécialisé dans la planification et l’organisation de vos événements.
            </p>
            <p className="mt-6 text-sm text-[#f5f5dc]/70 leading-relaxed font-light">
              Nous mettons à votre disposition un service complet alliant traiteur, livraison à domicile, ainsi que la préparation de plats savoureux et gâteaux personnalisés pour toutes vos occasions.
            </p>
            
            <div className="mt-12">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
                alt="" 
                className="w-32 h-32 object-cover rounded-full border border-[#D4AF37]/30 shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
