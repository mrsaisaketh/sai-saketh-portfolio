import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, CheckCircle2, Sparkles, Code } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-slate-900/40 backdrop-blur-md" />
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto">
          <button onClick={onClose} className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-slate-500 hover:text-slate-900 border border-slate-200">
            <X className="w-5 h-5" />
          </button>
          <div className="relative h-60 sm:h-72 w-full overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <span className="px-3 py-1 text-xs font-semibold rounded-full bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/30 inline-block mb-2">{project.category.toUpperCase()}</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display">{project.title}</h2>
            </div>
          </div>
          <div className="p-6 sm:p-8 space-y-6">
            <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
            {project.highlights && (
              <div>
                <h4 className="text-xs font-semibold text-[#6366F1] uppercase tracking-wider mb-2 flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-[#8B5CF6]" /> Key Innovations</h4>
                <ul className="space-y-1.5">{project.highlights.map((h, i) => (<li key={i} className="flex items-start gap-2.5 text-slate-700 text-xs"><CheckCircle2 className="w-3.5 h-3.5 text-[#6366F1] shrink-0 mt-0.5" /><span>{h}</span></li>))}</ul>
              </div>
            )}
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-1.5"><Code className="w-4 h-4 text-[#6366F1]" /> Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5">{project.tech.map((t, i) => (<span key={i} className="px-2.5 py-1 text-xs font-medium rounded-lg bg-slate-100 text-slate-700 border border-slate-200">{t}</span>))}</div>
            </div>
            <div className="flex flex-wrap gap-3 pt-3 border-t border-slate-200">
              {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-xs shadow hover:bg-slate-800 transition-colors"><Github className="w-4 h-4" /> View Source Code on GitHub</a>}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
