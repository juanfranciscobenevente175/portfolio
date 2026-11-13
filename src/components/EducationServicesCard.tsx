import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, ChevronDown, BookOpen, Calendar, Building2 } from 'lucide-react';
import { educationList } from '../data/portfolioData';

type FilterType = 'all' | 'C.F.L N°404' | 'C.F.P N°402';

export const EducationServicesCard: React.FC = () => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First one open by default

  const filteredList = educationList.filter((item) => {
    if (filter === 'all') return true;
    return item.institution.includes(filter);
  });

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35, duration: 0.5 }}
      className="glass-panel rounded-2xl p-4 flex flex-col h-[340px]"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <GraduationCap className="w-4 h-4 text-[#FF1E44]" />
          <h2 className="font-bebas text-xl tracking-wider text-white">FORMACIÓN</h2>
        </div>
        <span className="text-[10px] text-gray-400 font-mono bg-white/5 px-1.5 py-0.5 rounded border border-white/10">
          {filteredList.length} Cursos
        </span>
      </div>

      {/* Institution Filter Tabs - Compact 3-column bar (no overflow, no blank space) */}
      <div className="grid grid-cols-3 gap-1 mb-2 flex-shrink-0">
        <button
          onClick={() => setFilter('all')}
          className={`py-1 px-1 rounded-lg text-[10px] text-center transition-all font-medium border truncate ${
            filter === 'all'
              ? 'bg-[#FF1E44] text-white font-semibold border-[#FF1E44] shadow-[0_0_10px_rgba(255,30,68,0.4)]'
              : 'bg-black/50 text-gray-400 hover:text-white border-white/10 hover:border-[#FF1E44]/30'
          }`}
        >
          Todos (7)
        </button>

        <button
          onClick={() => setFilter('C.F.L N°404')}
          className={`py-1 px-1 rounded-lg text-[10px] text-center transition-all font-medium border truncate ${
            filter === 'C.F.L N°404'
              ? 'bg-[#FF1E44] text-white font-semibold border-[#FF1E44] shadow-[0_0_10px_rgba(255,30,68,0.4)]'
              : 'bg-black/50 text-gray-400 hover:text-white border-white/10 hover:border-[#FF1E44]/30'
          }`}
        >
          C.F.L 404 (4)
        </button>

        <button
          onClick={() => setFilter('C.F.P N°402')}
          className={`py-1 px-1 rounded-lg text-[10px] text-center transition-all font-medium border truncate ${
            filter === 'C.F.P N°402'
              ? 'bg-[#FF1E44] text-white font-semibold border-[#FF1E44] shadow-[0_0_10px_rgba(255,30,68,0.4)]'
              : 'bg-black/50 text-gray-400 hover:text-white border-white/10 hover:border-[#FF1E44]/30'
          }`}
        >
          C.F.P 402 (3)
        </button>
      </div>

      {/* Accordion List with Toggle Interaction */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-1.5">
        {filteredList.map((edu, idx) => {
          const isExpanded = expandedIndex === idx;

          return (
            <div
              key={idx}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? 'bg-white/10 border-[#FF1E44]/50 shadow-[0_0_15px_rgba(255,30,68,0.18)]'
                  : 'bg-white/5 border-white/5 hover:bg-white/8 hover:border-white/15'
              }`}
            >
              {/* Accordion Toggle Header */}
              <button
                type="button"
                onClick={() => toggleExpand(idx)}
                className="w-full p-2 flex items-center justify-between text-left focus:outline-none"
              >
                <div className="flex items-center space-x-1.5 min-w-0 pr-1">
                  <BookOpen
                    className={`w-3 h-3 flex-shrink-0 transition-colors ${
                      isExpanded ? 'text-[#FF1E44]' : 'text-gray-400'
                    }`}
                  />
                  <div className="truncate">
                    <h3 className="font-semibold text-white text-[11px] leading-tight truncate">
                      {edu.title}
                    </h3>
                    <span className="text-[9px] text-[#FF4D6D] font-medium block">
                      {edu.institution}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 flex-shrink-0">
                  {edu.year && (
                    <span className="text-[8px] px-1 py-0.2 bg-black/70 text-[#FF1E44] border border-[#FF1E44]/40 rounded font-mono">
                      {edu.year}
                    </span>
                  )}
                  <ChevronDown
                    className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${
                      isExpanded ? 'rotate-180 text-[#FF1E44]' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Accordion Collapsible Body */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="px-2.5 pb-2.5 pt-1 border-t border-white/5 text-[10px] text-gray-300"
                  >
                    <p className="leading-snug text-gray-200">
                      {edu.description}
                    </p>

                    <div className="flex items-center justify-between mt-1.5 pt-1 border-t border-white/5 text-[9px] text-gray-400">
                      <div className="flex items-center space-x-1">
                        <Building2 className="w-2.5 h-2.5 text-[#FF4D6D]" />
                        <span>Institución Oficial</span>
                      </div>
                      {edu.year && (
                        <div className="flex items-center space-x-1 text-[#FF1E44] font-mono">
                          <Calendar className="w-2.5 h-2.5" />
                          <span>Ciclo {edu.year}</span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
