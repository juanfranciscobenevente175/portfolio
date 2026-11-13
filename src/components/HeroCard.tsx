import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bot, 
  Smartphone, 
  Globe, 
  ShieldCheck, 
  Gamepad2, 
  Box, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { capabilities, personalInfo } from '../data/portfolioData';
import { Capability } from '../types/portfolio';

interface HeroCardProps {
  onSelectCapability: (cap: Capability) => void;
  onExploreClick: () => void;
}

export const HeroCard: React.FC<HeroCardProps> = ({ onSelectCapability, onExploreClick }) => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-6 h-6 text-[#FF1E44] group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,30,68,0.8)] transition-all duration-300" };
    switch (iconName) {
      case 'Bot':
        return <Bot {...props} />;
      case 'Smartphone':
        return <Smartphone {...props} />;
      case 'Globe':
        return <Globe {...props} />;
      case 'ShieldCheck':
        return <ShieldCheck {...props} />;
      case 'Gamepad2':
        return <Gamepad2 {...props} />;
      case 'Box':
        return <Box {...props} />;
      default:
        return <Sparkles {...props} />;
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-5xl mx-auto px-4 z-10"
    >
      <div className="glass-panel rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 relative">
        {/* Subtle decorative neon red glow accents inside card */}
        <div className="absolute top-0 right-1/4 w-72 h-36 bg-[#FF1E44]/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-36 bg-[#8B0000]/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Card Header - The primary exclusive hero title for the user's name */}
        <div className="text-center mb-4 sm:mb-5 relative z-10">
          <h1 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-wide flex items-center justify-center flex-wrap gap-2 md:gap-3 leading-none">
            <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.2)]">
              {personalInfo.fullName.toUpperCase()}
            </span>
            <span className="text-gray-600 font-light">|</span>
            <span className="text-[#FF1E44] drop-shadow-[0_0_15px_rgba(255,30,68,0.7)]">
              {personalInfo.roleTitle}
            </span>
          </h1>

          <p className="mt-2 text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto uppercase tracking-wider font-medium leading-relaxed">
            Especialista en aplicaciones móviles, plataformas web modernas y orquestación de agentes autónomos con inteligencia artificial.
          </p>
        </div>

        {/* 6 Capabilities 3x2 Grid - Compact, dense & zero blank space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5 sm:gap-3 relative z-10">
          {capabilities.map((cap, index) => (
            <motion.button
              key={cap.id}
              onClick={() => onSelectCapability(cap)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + index * 0.05, duration: 0.35 }}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              className="glass-subcard rounded-xl p-3 sm:p-3.5 flex flex-col items-center justify-center text-center group min-h-[92px] cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#FF1E44]"
            >
              <div className="p-2 rounded-lg bg-black/60 border border-[#FF1E44]/30 group-hover:border-[#FF1E44] group-hover:bg-[#FF1E44]/20 transition-all duration-300 mb-1.5 shadow-[0_0_10px_rgba(255,30,68,0.2)]">
                {getIcon(cap.iconName)}
              </div>
              <h2 className="font-bebas text-base sm:text-lg text-white tracking-wider group-hover:text-[#FF1E44] transition-colors leading-tight">
                {cap.title}
              </h2>
              <span className="text-[10px] text-gray-400 mt-0.5 uppercase tracking-wider line-clamp-1">
                {cap.shortDesc}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Bottom Call to Action inside the Card */}
        <div className="mt-3.5 sm:mt-4 text-center relative z-10">
          <button
            onClick={onExploreClick}
            className="inline-flex items-center space-x-1.5 text-xs font-bebas tracking-widest text-gray-300 hover:text-[#FF1E44] uppercase transition-colors duration-200 group py-1 px-3 rounded-lg hover:bg-white/5"
          >
            <span>Explorar Colección de Proyectos y Formación</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#FF1E44] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};
