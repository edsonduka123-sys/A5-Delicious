import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a] group">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10"></div>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_#8B0000_0%,_transparent_70%)] z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')" }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6 flex justify-center"
        >
          <div className="h-px w-24 bg-[#D4AF37] mb-6"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 font-serif font-bold leading-none"
        >
          A5 Délicious – <br />
          <span className="text-[#D4AF37] italic font-light">Service Traiteur</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
          className="text-lg font-light max-w-xl mx-auto opacity-80 mb-12"
        >
          Des expériences culinaires uniques pour tous vos événements d'exception.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-[#D4AF37] text-[#0a0a0a] font-bold text-xs uppercase tracking-widest shadow-lg shadow-[#D4AF37]/20 hover:bg-[#F3E5AB] transition-colors"
          >
            Demander un devis
          </a>
          <div className="p-3 flex items-center justify-center bg-white/5 backdrop-blur-md border border-white/10 hidden sm:flex">
             <span className="text-[10px] uppercase tracking-[0.3em] font-semibold italic text-white">Appétit +++</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce"
      >
        <a href="#about" aria-label="Scroll down">
          <ChevronDown size={32} strokeWidth={1} />
        </a>
      </motion.div>
    </section>
  );
}
