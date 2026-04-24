import { motion } from 'motion/react';

const images = [
  { src: 'https://images.unsplash.com/photo-1530143311094-34d807799e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Cocktail hour', className: 'md:col-span-2 md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Buffet details', className: 'md:col-span-1 md:row-span-1' },
  { src: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Wedding cake', className: 'md:col-span-1 md:row-span-2' },
  { src: 'https://images.unsplash.com/photo-1548943487-a2e4b43b39ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Gourmet meal', className: 'md:col-span-1 md:row-span-1' },
  { src: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Appetizers', className: 'md:col-span-2 md:row-span-1' },
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-[#0a0a0a] border-t border-[#D4AF37]/20 text-[#f5f5dc]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-bold underline underline-offset-8 decoration-[#8B0000] block mb-4">Notre Portfolio</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#f5f5dc] font-serif">
              Galerie <span className="italic text-[#D4AF37]">Culinaire</span>
            </h2>
          </motion.div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            href="#contact"
            className="hidden md:inline-block border-b border-[#D4AF37]/50 text-[#D4AF37] pb-1 uppercase tracking-widest text-[10px] hover:text-[#f5f5dc] hover:border-[#f5f5dc] transition-colors font-bold"
          >
            Voir plus
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden group rounded-xl ${image.className}`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover grayscale hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
