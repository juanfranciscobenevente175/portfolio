import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Mail, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface QuickContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const QuickContactModal: React.FC<QuickContactModalProps> = ({ isOpen, onClose, onSuccessToast }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate mailto link
    const subject = encodeURIComponent(`Contacto Portfolio: ${name}`);
    const body = encodeURIComponent(`Hola Juan Francisco,\n\nMi nombre es: ${name} (${email})\n\nMensaje:\n${message}`);
    window.open(`mailto:${contactInfo.email}?subject=${subject}&body=${body}`, '_blank');
    
    setSent(true);
    onSuccessToast('¡Redirigiendo a tu cliente de correo!');
    setTimeout(() => {
      setSent(false);
      onClose();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          className="relative z-10 w-full max-w-md glass-panel rounded-2xl p-6 border border-[#FF1E44]/35 shadow-[0_20px_50px_rgba(0,0,0,0.95)]"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-[#FF1E44]/20 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center space-x-2.5 mb-4">
            <div className="p-2 rounded-lg bg-[#FF1E44]/15 border border-[#FF1E44]/40 text-[#FF1E44] shadow-[0_0_12px_rgba(255,30,68,0.3)]">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bebas text-2xl text-white tracking-wide leading-none">
                ENVIAR MENSAJE
              </h3>
              <p className="text-[11px] text-gray-400">Contacto directo & consultas técnicas</p>
            </div>
          </div>

          {sent ? (
            <div className="py-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#FF1E44] mx-auto mb-2 animate-bounce drop-shadow-[0_0_12px_rgba(255,30,68,0.7)]" />
              <h4 className="font-bebas text-xl text-white">¡MENSAJE LISTO!</h4>
              <p className="text-xs text-gray-300">Abriendo tu aplicación de correo para enviar...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] uppercase font-bebas tracking-wider text-gray-300 mb-1">
                  Tu Nombre o Empresa
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej: Sofía Martínez"
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#FF1E44] focus:ring-1 focus:ring-[#FF1E44]/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bebas tracking-wider text-gray-300 mb-1">
                  Tu Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nombre@ejemplo.com"
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#FF1E44] focus:ring-1 focus:ring-[#FF1E44]/50 transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] uppercase font-bebas tracking-wider text-gray-300 mb-1">
                  Mensaje o Consulta
                </label>
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Escribe tu propuesta o consulta sobre desarrollo de software, apps o IA..."
                  className="w-full px-3 py-2 rounded-xl bg-black/60 border border-white/15 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#FF1E44] focus:ring-1 focus:ring-[#FF1E44]/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#FF1E44] via-[#FF0033] to-[#8B0000] hover:from-[#FF3355] hover:to-[#FF1E44] text-white font-bebas text-base tracking-wider flex items-center justify-center space-x-2 shadow-[0_0_20px_rgba(255,30,68,0.5)] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>ENVIAR CONSULTA</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
