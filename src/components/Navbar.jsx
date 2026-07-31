import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Send } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const scrollPos = window.scrollY + 200;
      for (const link of navLinks) {
        const id = link.href.substring(1);
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 shadow-sm' : 'py-5 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-[#6366F1] transition-colors shadow-sm">
            <Code2 className="w-5 h-5 text-[#6366F1]" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-lg tracking-wider text-slate-900 group-hover:text-[#6366F1] transition-colors">SAI <span className="text-[#6366F1]">SAKETH</span></span>
            <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">Full-Stack & AI</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1 bg-white/90 p-1.5 rounded-full border border-slate-200/80 backdrop-blur-md shadow-sm">
          {navLinks.map((link) => {
            const isActive = active === link.href.substring(1);
            return (
              <a key={link.name} href={link.href} className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full ${isActive ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'}`}>
                {isActive && <motion.div layoutId="activeNavTab" className="absolute inset-0 bg-slate-100 border border-slate-300/80 rounded-full z-0" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#contact" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold text-xs uppercase tracking-wider hover:opacity-95 shadow-glow-primary flex items-center gap-2">
            <Send className="w-3.5 h-3.5" /> Contact
          </a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-sm" aria-label="Toggle menu">
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 overflow-hidden shadow-lg">
            <div className="px-6 py-6 space-y-4">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className="block text-base font-medium text-slate-700 hover:text-[#6366F1] py-2 border-b border-slate-100">{link.name}</a>
              ))}
              <a href="#contact" onClick={() => setMenuOpen(false)} className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold text-sm shadow-glow-primary">Get In Touch</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
