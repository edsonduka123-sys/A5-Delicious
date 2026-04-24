import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0a]/80 backdrop-blur-md py-3 shadow-lg border-b border-[#D4AF37]/20' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="flex items-baseline space-x-1">
             <span className="text-2xl font-serif font-bold tracking-tighter text-[#D4AF37]">A5</span>
             <span className="text-xl font-light uppercase tracking-[0.2em] text-[#f5f5dc]">Délicious</span>
             {/* Hidden fallback uploaded logo container */}
             <div className="hidden">
                 <img src="/logo.jpg" alt="Logo" />
             </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] tracking-widest uppercase transition-colors hover:text-[#D4AF37] ${
                link.name === 'Accueil' ? 'text-[#D4AF37]' : 'opacity-60 text-[#f5f5dc]'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 border border-[#D4AF37] text-white hover:bg-[#D4AF37] hover:text-[#0a0a0a] transition-all cursor-pointer text-[10px] uppercase tracking-widest"
          >
            Nous Contacter
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-gold/20 shadow-xl py-6 px-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white/80 hover:text-gold text-lg font-serif tracking-wide transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-block mt-2 px-6 py-3 bg-gold text-black text-center font-medium tracking-wider uppercase rounded-sm"
            >
              Demander un devis
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
