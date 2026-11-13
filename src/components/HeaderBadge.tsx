import React from 'react';
import { motion } from 'framer-motion';

export const HeaderBadge: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex justify-center pt-3 pb-2 px-4 z-10"
    >
      <div className="glass-badge px-5 py-1.5 rounded-full flex items-center space-x-3 group cursor-default transition-all duration-300 hover:border-[#FF1E44]/70 hover:shadow-[0_0_30px_rgba(255,30,68,0.35)]">
        {/* Futuristic Neon Red Monogram Logo */}
        <div className="relative w-7 h-7 rounded-full border border-[#FF1E44]/70 flex items-center justify-center bg-black/60 group-hover:border-[#FF0033] group-hover:scale-105 transition-all duration-300 shadow-[0_0_12px_rgba(255,30,68,0.4)]">
          <div className="w-3.5 h-3.5 relative flex items-center justify-center">
            {/* Neon Red Monogram Signal */}
            <span className="w-1 h-3.5 bg-gradient-to-b from-[#FF1E44] to-[#8B0000] rounded-full inline-block mr-0.5 shadow-[0_0_8px_rgba(255,30,68,0.8)]"></span>
            <span className="w-1 h-2 bg-[#FF1E44] rounded-full inline-block shadow-[0_0_8px_rgba(255,30,68,0.8)]"></span>
          </div>
          <div className="absolute inset-0 rounded-full border border-[#FF1E44]/40 animate-ping opacity-30"></div>
        </div>

        {/* Brand Text in Bebas Neue */}
        <div className="flex items-center font-bebas tracking-wider select-none">
          <span className="text-lg md:text-xl text-[#FF1E44] font-normal drop-shadow-[0_0_12px_rgba(255,30,68,0.7)]">
            IA & SOFTWARE
          </span>
        </div>
      </div>
    </motion.header>
  );
};
