import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative z-10 bg-white border-t border-slate-200 pt-12 pb-10 overflow-hidden shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-2">
            <a href="#" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#6366F1]"><Code2 className="w-4 h-4" /></div>
              <span className="font-display font-extrabold text-lg tracking-wider text-slate-900">SAI <span className="text-[#6366F1]">SAKETH</span></span>
            </a>
            <p className="text-slate-500 text-xs max-w-sm">Full-Stack Developer, AI Specialist, Cybersecurity & Blockchain Enthusiast.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#6366F1]" aria-label="GitHub"><Github className="w-4 h-4" /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#8B5CF6]" aria-label="LinkedIn"><Linkedin className="w-4 h-4" /></a>
            <a href={`mailto:${personalInfo.email}`} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 hover:text-[#6366F1]" aria-label="Email"><Mail className="w-4 h-4" /></a>
            <button onClick={scrollToTop} className="p-2.5 rounded-xl bg-white border border-slate-200 text-[#6366F1] flex items-center gap-1.5 text-xs font-mono" aria-label="Scroll to top"><span>TOP</span><ArrowUp className="w-3.5 h-3.5" /></button>
          </div>
        </div>
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-2">
          <p>© {new Date().getFullYear()} Sai Saketh. All rights reserved.</p>
          <p>Built with React, Vite, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}
