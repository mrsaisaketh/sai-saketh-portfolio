import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const messages = [
  'INITIALIZING ENVIRONMENT...',
  'LOADING THREE.JS STACK...',
  'FETCHING SAI SAKETH DATA...',
  'COMPILING COMPONENTS...',
  'SYSTEM READY.'
];

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 350);
          return 100;
        }
        return Math.min(prev + Math.floor(Math.random() * 14) + 6, 100);
      });
    }, 100);
    return () => clearInterval(timer);
  }, [onComplete]);

  const msgIdx = Math.min(Math.floor((progress / 100) * messages.length), messages.length - 1);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-[#F8FAFC] flex flex-col items-center justify-center font-mono p-6 selection:bg-none"
    >
      <div className="w-full max-w-md flex flex-col items-center gap-6 relative z-10">
        <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-xl flex items-center justify-center">
          <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">&lt;SS/&gt;</span>
        </motion.div>
        <div className="text-center">
          <h2 className="text-5xl font-black text-slate-900 tracking-wider">{progress}<span className="text-[#6366F1]">%</span></h2>
          <p className="text-xs text-slate-500 mt-2 h-5 tracking-widest uppercase">{messages[msgIdx]}</p>
        </div>
        <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden p-[1px]">
          <motion.div className="h-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#6366F1] rounded-full" animate={{ width: `${progress}%` }} />
        </div>
      </div>
    </motion.div>
  );
}
