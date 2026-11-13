import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Code2, Sparkles, Layers } from 'lucide-react';
import { Capability, Project } from '../types/portfolio';

interface DetailModalProps {
  item: Capability | Project | null;
  onClose: () => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({ item, onClose }) => {
  if (!item) return null;

  const isCapability = 'iconName' in item;

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

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-xl glass-panel rounded-2xl p-6 md:p-8 border border-[#FF1E44]/30 shadow-[0_25px_60px_rgba(0,0,0,0.95)] max-h-[90vh] overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-[#FF1E44]/20 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {isCapability ? (
            /* Capability Details */
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-[#FF1E44]/15 border border-[#FF1E44]/40 text-[#FF1E44] shadow-[0_0_12px_rgba(255,30,68,0.3)]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF4D6D]">
                    Pilar de Especialización
                  </span>
                  <h3 className="font-bebas text-3xl text-white tracking-wide leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="bg-black/50 p-3.5 rounded-xl border border-white/10 mb-4">
                <p className="text-sm text-gray-200 leading-relaxed">
                  {item.fullDesc}
                </p>
              </div>

              <div className="mb-4">
                <h4 className="text-xs uppercase font-bebas tracking-wider text-gray-400 mb-2">
                  Tecnologías & Metodologías Clave
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-[#FF1E44]/15 border border-[#FF1E44]/35 text-xs text-[#FF4D6D] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FF1E44]/10 border border-[#FF1E44]/30 flex items-center space-x-2 text-xs text-white">
                <CheckCircle className="w-4 h-4 text-[#FF1E44] flex-shrink-0" />
                <span>{item.metricsOrHighlight}</span>
              </div>
            </div>
          ) : (
            /* Project Details */
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-3 rounded-xl bg-[#FF1E44]/15 border border-[#FF1E44]/40 text-[#FF1E44] shadow-[0_0_12px_rgba(255,30,68,0.3)]">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF4D6D]">
                    {item.category}
                  </span>
                  <h3 className="font-bebas text-3xl text-white tracking-wide leading-tight">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="bg-black/50 p-3.5 rounded-xl border border-white/10 mb-4">
                <p className="text-sm text-gray-200 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mb-5">
                <h4 className="text-xs uppercase font-bebas tracking-wider text-gray-400 mb-2">
                  Stack del Proyecto
                </h4>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3 pt-3 border-t border-white/10">
                {item.codeUrl && (
                  <a
                    href={item.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-4 rounded-xl bg-white/10 hover:bg-[#FF1E44]/20 hover:border-[#FF1E44]/40 text-white font-bebas text-sm tracking-wider flex items-center justify-center space-x-2 border border-white/10 transition-all"
                  >
                    <Code2 className="w-4 h-4 text-[#FF1E44]" />
                    <span>Ver Repositorio</span>
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="py-2 px-6 rounded-xl bg-[#FF1E44] hover:bg-[#FF0033] text-white font-bebas text-sm tracking-wider font-semibold shadow-[0_0_15px_rgba(255,30,68,0.45)] transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
