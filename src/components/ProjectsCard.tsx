import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Project } from '../types/portfolio';

interface ProjectsCardProps {
  onSelectProject: (proj: Project) => void;
}

export const ProjectsCard: React.FC<ProjectsCardProps> = ({ onSelectProject }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="glass-panel rounded-2xl p-4 flex flex-col h-[340px]"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <FolderGit2 className="w-4 h-4 text-[#FF1E44]" />
          <h2 className="font-bebas text-xl tracking-wider text-white">PROYECTOS</h2>
        </div>
        <span className="text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/10 uppercase">
          {projects.length} Demos
        </span>
      </div>

      {/* Project list - Evenly fills without blank empty space */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-2 flex flex-col justify-between">
        {projects.map((proj) => (
          <div
            key={proj.id}
            onClick={() => onSelectProject(proj)}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-[#FF1E44]/40 hover:shadow-[0_0_15px_rgba(255,30,68,0.15)] transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-bebas text-sm text-[#FF1E44] group-hover:text-red-400 tracking-wide transition-colors">
                {proj.title}
              </h3>
              <span className="text-[8px] px-1.5 py-0.2 rounded bg-black/60 text-gray-300 border border-white/10 font-mono">
                {proj.status}
              </span>
            </div>

            <p className="text-[10px] text-gray-300 line-clamp-1 mt-0.5 leading-tight">
              {proj.description}
            </p>

            <div className="flex items-center justify-between mt-1 pt-1 border-t border-white/5">
              <div className="flex flex-wrap gap-1">
                {proj.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="text-[8px] text-[#FF4D6D] bg-[#FF1E44]/15 border border-[#FF1E44]/30 px-1 py-0.2 rounded font-mono">
                    {tag}
                  </span>
                ))}
              </div>

              <span className="text-[9px] font-bebas text-[#FF1E44] flex items-center space-x-1 group-hover:underline">
                <span>VER DETALLE</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
