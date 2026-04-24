import { motion } from 'motion/react';
import { Utensils, GlassWater, Briefcase, Heart, Baby, Users, PartyPopper, CakeSlice, Coffee, Wine } from 'lucide-react';

const servicesList = [
  { name: 'Dîners d’affaires & repas en famille', icon: Users },
  { name: 'Buffets', icon: Utensils },
  { name: 'Cocktails', icon: GlassWater },
  { name: 'Événements d’entreprise', icon: Briefcase },
  { name: 'Mariages', icon: Heart },
  { name: 'Baptêmes', icon: Baby },
  { name: 'Collations', icon: Coffee },
  { name: 'Anniversaires', icon: CakeSlice },
  { name: 'Dîners amoureux', icon: Wine },
  { name: 'Baby shower', icon: PartyPopper },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#0a0a0a] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 flex flex-col items-center"
        >
          <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold underline underline-offset-8 decoration-[#8B0000] block mb-6">Ce que nous offrons</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#f5f5dc]">
            Nos <span className="italic text-[#D4AF37]">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {servicesList.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group bg-white/5 p-8 border border-[#D4AF37]/10 hover:border-[#D4AF37]/40 hover:bg-white/10 transition-all flex flex-col items-center text-center gap-4 rounded-none"
            >
              <div className="w-16 h-16 rounded-full border border-[#D4AF37]/20 bg-transparent flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-[#0a0a0a] transition-colors duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#f5f5dc]">{service.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
