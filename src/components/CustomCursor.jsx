import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const handleOver = (e) => {
      const isInteractive = ['BUTTON', 'A'].includes(e.target.tagName) || e.target.closest('button') || e.target.closest('a');
      setHovered(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseover', handleOver);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-[#6366F1] rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block"
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: hovered ? 2.5 : 1 }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-[#6366F1]/50 rounded-full pointer-events-none z-50 hidden md:block"
        animate={{ x: pos.x - 20, y: pos.y - 20, scale: hovered ? 1.6 : 1, borderColor: hovered ? '#8B5CF6' : 'rgba(99, 102, 241, 0.5)' }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
      />
    </>
  );
}
