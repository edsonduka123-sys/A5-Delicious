import { motion } from 'motion/react';

export function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/243998364458"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.23)] hover:bg-[#20bd5a] transition-all hover:-translate-y-1 flex items-center gap-2 group"
      aria-label="Discuter sur WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.118 1.528 5.87L.302 23.698l6.002-1.575C7.994 23.085 9.92 23.606 12 23.606c6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12zm0 21.612c-1.802 0-3.513-.464-5.021-1.3l-.36-.201-3.731.978.995-3.636-.221-.351C2.698 15.618 2.141 13.864 2.141 12c0-5.438 4.42-9.858 9.859-9.858 5.438 0 9.858 4.42 9.858 9.858 0 5.438-4.42 9.858-9.858 9.858z"/>
      </svg>
      <span className="hidden pr-2 text-sm font-semibold tracking-wide drop-shadow-md group-hover:block whitespace-nowrap overflow-hidden origin-left animate-in fade-in slide-in-from-left-2 duration-300">
        Discutons !
      </span>
    </motion.a>
  );
}
