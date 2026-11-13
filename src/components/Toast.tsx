import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center space-x-2.5 px-4 py-2.5 rounded-xl bg-black/90 border border-[#FF1E44]/60 text-white shadow-[0_10px_30px_rgba(255,30,68,0.4)] backdrop-blur-lg"
        >
          <CheckCircle2 className="w-4 h-4 text-[#FF1E44] flex-shrink-0 drop-shadow-[0_0_8px_rgba(255,30,68,0.7)]" />
          <span className="text-xs font-medium text-gray-100">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
