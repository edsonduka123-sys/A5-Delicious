import { Instagram, Facebook, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black text-[#f5f5dc] pt-20 pb-10 border-t border-white/5 uppercase tracking-[0.3em]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 text-center md:text-left mb-16">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-6 cursor-pointer group">
              <span className="font-serif text-3xl font-bold text-[#D4AF37] group-hover:scale-105 transition-transform">
                A5
              </span>
              <span className="font-serif text-2xl tracking-wide normal-case text-white">
                Délicious
              </span>
            </div>
            <p className="text-[#f5f5dc]/60 font-light max-w-sm mb-6 tracking-normal text-xs normal-case">
              Des expériences culinaires uniques pour tous vos événements d'exception. L'art de recevoir avec élégance.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 border border-[#D4AF37]/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#0a0a0a] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-[#D4AF37]/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#0a0a0a] transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-[#D4AF37]/20 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#0a0a0a] transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-[10px]">
            <h4 className="font-serif text-xl mb-6 text-[#D4AF37] normal-case tracking-normal">Navigation</h4>
            <div className="flex flex-col gap-3 text-[#f5f5dc]/70">
              <a href="#home" className="hover:text-[#D4AF37] transition-colors">Accueil</a>
              <a href="#about" className="hover:text-[#D4AF37] transition-colors">À propos</a>
              <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services</a>
              <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">Galerie</a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-xs tracking-normal">
            <h4 className="font-serif text-xl mb-6 text-[#D4AF37] normal-case tracking-normal">Notre Devise</h4>
            <div className="bg-white/5 border border-white/10 p-6 relative">
              <p className="font-serif text-lg italic leading-relaxed text-center normal-case text-white/80">
                "Chez nous, <br/><span className="text-[#D4AF37] font-bold">appétit +++</span>"
              </p>
            </div>
          </div>

        </div>

        <div className="border-t border-[#D4AF37]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center text-[10px] text-[#f5f5dc]/50">
          <p>&copy; {new Date().getFullYear()} A5 DÉLICIOUS — TOUS DROITS RÉSERVÉS</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-[#D4AF37] transition-colors">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
