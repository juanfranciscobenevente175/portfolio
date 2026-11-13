import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send,
  MessageSquare
} from 'lucide-react';
import { contactInfo } from '../data/portfolioData';

interface ContactCardProps {
  onOpenMessageModal: () => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({ onOpenMessageModal }) => {
  const contactItems = [
    {
      label: 'LinkedIn',
      value: 'in/juan-francisco-benevente',
      icon: <Linkedin className="w-4 h-4 text-[#FF1E44]" />,
      url: contactInfo.linkedin,
    },
    {
      label: 'GitHub',
      value: 'juanfranciscobenevente175',
      icon: <Github className="w-4 h-4 text-white" />,
      url: contactInfo.github,
    },
    {
      label: 'Email',
      value: contactInfo.email,
      icon: <Mail className="w-4 h-4 text-[#FF1E44]" />,
      url: `mailto:${contactInfo.email}`,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="glass-panel rounded-2xl p-4 flex flex-col h-[340px]"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <MessageSquare className="w-4 h-4 text-[#FF1E44]" />
          <h2 className="font-bebas text-xl tracking-wider text-white">CONTACTO</h2>
        </div>
        <span className="text-[10px] text-[#FF4D6D] bg-[#FF1E44]/15 px-2 py-0.5 rounded border border-[#FF1E44]/30 flex items-center space-x-1 shadow-[0_0_8px_rgba(255,30,68,0.2)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF1E44] animate-pulse"></span>
          <span>Disponible</span>
        </span>
      </div>

      {/* Items list & Action CTA - Perfectly distributed without blank empty space */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-2">
          {contactItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#FF1E44]/40 hover:shadow-[0_0_15px_rgba(255,30,68,0.15)] transition-all text-xs group"
            >
              <div className="flex items-center space-x-2 min-w-0">
                <div className="p-1.5 rounded-lg bg-black/60 border border-white/10 group-hover:border-[#FF1E44]/40 transition-colors">
                  {item.icon}
                </div>
                <div className="truncate">
                  <span className="font-bebas text-xs text-gray-200 block tracking-wide group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                  <span className="text-[9px] text-gray-400 truncate block font-mono">
                    {item.value}
                  </span>
                </div>
              </div>

              <div className="ml-1.5 flex-shrink-0">
                <a
                  href={item.url}
                  target={item.url.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  title={`Enviar / Abrir ${item.label}`}
                  className="flex items-center space-x-1 px-2.5 py-1 rounded-lg bg-[#FF1E44]/15 hover:bg-[#FF1E44] hover:text-white text-[#FF1E44] border border-[#FF1E44]/40 hover:border-[#FF1E44] transition-all font-bebas text-[11px] tracking-wider shadow-[0_0_10px_rgba(255,30,68,0.2)]"
                >
                  <span>ENVIAR</span>
                  <Send className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Message CTA */}
        <div className="pt-2 border-t border-white/10">
          <button
            onClick={onOpenMessageModal}
            className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-[#FF1E44] via-[#FF0033] to-[#8B0000] hover:from-[#FF3355] hover:to-[#FF1E44] text-white font-bebas text-sm tracking-wider flex items-center justify-center space-x-1.5 shadow-[0_0_20px_rgba(255,30,68,0.45)] transition-all duration-200 active:scale-[0.99]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>ENVIAR MENSAJE DIRECTO</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};
