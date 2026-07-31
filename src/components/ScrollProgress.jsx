import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total > 0) setProgress((window.scrollY / total) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] bg-transparent z-[70] pointer-events-none">
      <motion.div className="h-full bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#6366F1]" style={{ width: `${progress}%` }} />
    </div>
  );
}
