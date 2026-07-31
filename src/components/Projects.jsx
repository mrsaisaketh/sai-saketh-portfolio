import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Github, FolderGit2, Eye } from 'lucide-react';
import { projects, projectCategories } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [cat, setCat] = useState('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const filtered = projects.filter((p) => {
    const matchCat = cat === 'all' || p.category === cat;
    const matchSearch = p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()) || p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-50/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-[#6366F1] shadow-sm"><FolderGit2 className="w-3.5 h-3.5" /> FEATURED WORK & PROJECTS</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">Crafted With Precision & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">Modern Architectures</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-600 text-base leading-relaxed">Explore my core engineering projects spanning AI & Blockchain verification, telemedicine platforms, computer vision, and DevOps systems.</motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
          <div className="flex flex-wrap gap-2">
            {projectCategories.map((c) => (
              <button key={c.id} onClick={() => setCat(c.id)} className={`px-4 py-2 rounded-full text-xs font-mono uppercase transition-all ${cat === c.id ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold shadow-glow-primary' : 'bg-white text-slate-600 border border-slate-200 shadow-sm'}`}>{c.label}</button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input type="text" placeholder="Search projects or tech..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-xs placeholder:text-slate-400 focus:outline-none focus:border-[#6366F1] shadow-sm" />
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filtered.map((project, idx) => (
              <motion.div key={project.id} layout initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, delay: idx * 0.08 }} whileHover={{ y: -6 }} className="group relative rounded-3xl bg-white border border-slate-200 backdrop-blur-xl overflow-hidden shadow-card-soft hover:border-[#6366F1]/50 transition-all flex flex-col justify-between">
                <div className="relative h-52 sm:h-60 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-mono font-semibold rounded-full bg-white/90 text-[#6366F1] border border-[#6366F1]/30 backdrop-blur-md shadow-sm">{project.category.toUpperCase()}</span>
                  <button onClick={() => setSelected(project)} className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-slate-700 border border-slate-200 hover:text-[#6366F1] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm" aria-label="View Details"><Eye className="w-4 h-4" /></button>
                </div>
                <div className="p-6 sm:p-7 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <h3 onClick={() => setSelected(project)} className="text-xl font-bold text-slate-900 font-display group-hover:text-[#6366F1] transition-colors cursor-pointer">{project.title}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">{project.shortDescription}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-1">{project.tech.map((t, i) => (<span key={i} className="px-2.5 py-0.5 text-[10px] font-mono rounded bg-slate-100 text-slate-700 border border-slate-200">{t}</span>))}</div>
                  <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                    <button onClick={() => setSelected(project)} className="flex-1 py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-xs flex items-center justify-center gap-1.5"><Eye className="w-3.5 h-3.5 text-[#6366F1]" /> Details</button>
                    {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200" aria-label="Source Code"><Github className="w-4 h-4" /></a>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      </div>
    </section>
  );
}
