import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, CheckCircle2, MapPin, Calendar, Code } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutCard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'perfil' | 'softSkills'>('perfil');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25, duration: 0.5 }}
      className="glass-panel rounded-2xl p-4 flex flex-col h-[340px]"
    >
      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <User className="w-4 h-4 text-[#FF1E44]" />
          <h2 className="font-bebas text-xl tracking-wider text-white">SOBRE MÍ</h2>
        </div>
        <div className="flex bg-black/60 rounded-lg p-0.5 border border-white/10 text-[10px]">
          <button
            onClick={() => setActiveTab('perfil')}
            className={`px-2 py-0.5 rounded transition-all ${
              activeTab === 'perfil' 
                ? 'bg-[#FF1E44] text-white font-semibold shadow-[0_0_10px_rgba(255,30,68,0.5)]' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Perfil
          </button>
          <button
            onClick={() => setActiveTab('softSkills')}
            className={`px-2 py-0.5 rounded transition-all ${
              activeTab === 'softSkills' 
                ? 'bg-[#FF1E44] text-white font-semibold shadow-[0_0_10px_rgba(255,30,68,0.5)]' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Skills
          </button>
        </div>
      </div>

      {/* Content Area - Completely fills without blank empty space */}
      <div className="flex-1 overflow-y-auto pr-1 text-xs text-gray-300 space-y-2">
        {activeTab === 'perfil' ? (
          <div className="flex flex-col justify-between h-full space-y-2">
            <p className="leading-snug text-gray-200 text-[11px]">
              {personalInfo.summary}
            </p>

            <div className="grid grid-cols-2 gap-1.5 text-[10px] border-t border-white/10 pt-1.5">
              <div className="flex items-center space-x-1 text-gray-300">
                <MapPin className="w-3 h-3 text-[#FF1E44] flex-shrink-0" />
                <span>{personalInfo.nationality}</span>
              </div>
              <div className="flex items-center space-x-1 text-gray-300">
                <Calendar className="w-3 h-3 text-[#FF1E44] flex-shrink-0" />
                <span>{personalInfo.age} años ({personalInfo.birthDate})</span>
              </div>
            </div>

            <div className="border-t border-white/10 pt-1.5">
              <span className="text-[9px] uppercase tracking-wider text-gray-400 flex items-center space-x-1 mb-1">
                <Code className="w-2.5 h-2.5 text-[#FF1E44]" />
                <span>Stack & Tecnologías Clave</span>
              </span>
              <div className="flex flex-wrap gap-1">
                {['Gemini API', 'React', 'TypeScript', 'Tailwind', 'Python', 'Mobile'].map((t, i) => (
                  <span
                    key={i}
                    className="px-1.5 py-0.5 bg-[#FF1E44]/15 border border-[#FF1E44]/30 rounded text-[9px] text-[#FF4D6D] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#FF1E44]/10 border border-[#FF1E44]/30 p-1.5 rounded-lg text-center">
              <span className="text-[10px] text-[#FF4D6D] font-medium block">
                Especialidad: Desarrollo de Apps & Agentes IA
              </span>
            </div>
          </div>
        ) : (
          <div className="space-y-1.5">
            {personalInfo.softSkills.map((skill, index) => (
              <div key={index} className="bg-white/5 p-2 rounded-lg border border-white/5 hover:border-[#FF1E44]/30 transition-colors">
                <div className="flex items-center space-x-1.5 text-[#FF1E44] font-medium text-[10px]">
                  <CheckCircle2 className="w-3 h-3 text-[#FF1E44] flex-shrink-0" />
                  <span>{skill.name}</span>
                </div>
                <p className="text-[9px] text-gray-400 mt-0.5 leading-tight">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};
