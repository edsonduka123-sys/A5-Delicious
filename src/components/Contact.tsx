import { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const formattedMessage = `Bonjour A5 Délicious !%0A%0AJe suis ${formData.name}.%0A%0A*Type d'événement*: ${formData.subject || 'Non spécifié'}%0A*Email*: ${formData.email || 'Non spécifié'}%0A%0A*Message*:%0A${formData.message}`;
    
    // WhatsApp API URL
    const whatsappUrl = `https://wa.me/243998364458?text=${formattedMessage}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
    
    // Optional: reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em] font-bold block mb-4">Demande de devis</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#f5f5dc] font-serif">
            Nous <span className="italic text-[#D4AF37]">Contacter</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 bg-transparent rounded-none overflow-hidden shadow-none border-none">
          {/* Contact Info */}
          <div className="lg:col-span-2 bg-[#0d0d0d] text-[#f5f5dc] p-12 flex flex-col justify-between relative overflow-hidden border border-[#D4AF37]/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-serif mb-6">Informations</h3>
              <p className="text-[#f5f5dc]/60 font-light mb-12">
                Pour toute demande d'information ou de devis, n'hésitez pas à nous contacter. Notre équipe vous répondra dans les plus brefs délais.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Phone className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-[10px] uppercase tracking-widest mb-1 opacity-70">Téléphone / WhatsApp</h5>
                    <a 
                      href="https://wa.me/243998364458" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#f5f5dc] font-mono text-[11px] opacity-80 hover:text-[#D4AF37] transition-colors inline-block"
                    >
                      +243 998 364 458
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-[10px] uppercase tracking-widest mb-1 opacity-70">Email</h5>
                    <p className="text-[#f5f5dc] font-mono text-[11px] opacity-80">contact@a5delicious.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#D4AF37] w-6 h-6 shrink-0 mt-1" />
                  <div>
                    <h5 className="font-semibold text-[10px] uppercase tracking-widest mb-1 opacity-70">Adresse</h5>
                    <p className="text-[#f5f5dc] font-mono text-[11px] opacity-80">Kinshasa, RDC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-12 lg:p-16 border border-[#D4AF37]/20 bg-[#0d0d0d]/50 backdrop-blur-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Nom complet</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="border-b border-[#D4AF37]/20 pb-2 focus:outline-none focus:border-[#D4AF37] bg-transparent transition-colors text-[#f5f5dc] font-light text-sm"
                    placeholder="Votre nom"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="border-b border-[#D4AF37]/20 pb-2 focus:outline-none focus:border-[#D4AF37] bg-transparent transition-colors text-[#f5f5dc] font-light text-sm"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Type d'événement</label>
                <select 
                  id="subject" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="border-b border-[#D4AF37]/20 pb-2 focus:outline-none focus:border-[#D4AF37] bg-transparent transition-colors text-[#f5f5dc]/70 font-light text-sm"
                >
                  <option value="" className="bg-[#0a0a0a]">Sélectionnez un type</option>
                  <option value="mariage" className="bg-[#0a0a0a]">Mariage</option>
                  <option value="entreprise" className="bg-[#0a0a0a]">Événement d'entreprise</option>
                  <option value="anniversaire" className="bg-[#0a0a0a]">Anniversaire</option>
                  <option value="autre" className="bg-[#0a0a0a]">Autre</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#D4AF37]">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  className="border-b border-[#D4AF37]/20 pb-2 focus:outline-none focus:border-[#D4AF37] bg-transparent transition-colors text-[#f5f5dc] resize-none font-light text-sm"
                  placeholder="Parlez-nous de votre événement..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="mt-4 bg-[#D4AF37] text-black py-3 px-8 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-[#F3E5AB] transition-colors self-start rounded-none"
              >
                Envoyer le message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
