import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function MagneticButton({ children, className = '', onClick, href, download }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    setPos({ x: (e.clientX - (left + width / 2)) * 0.3, y: (e.clientY - (top + height / 2)) * 0.3 });
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      onClick={onClick}
      href={href}
      download={download}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={`relative inline-flex items-center justify-center ${className}`}
    >
      {children}
    </Component>
  );
}
