import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ArrowDownRight, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import MagneticButton from './MagneticButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8 text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-mono text-[#6366F1] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#6366F1] animate-pulse" />
              <span>Available for Full-Stack & AI Roles</span>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-2">
              <h2 className="text-slate-500 font-mono text-sm tracking-widest uppercase flex items-center gap-2"><Terminal className="w-4 h-4 text-[#6366F1]" /> Hello, World! I am</h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-slate-900 leading-none">SAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#6366F1]">SAKETH</span></h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="h-12 text-xl sm:text-2xl font-mono text-slate-700 flex items-center gap-3">
              <span className="text-[#6366F1] font-bold">&gt;</span>
              <TypeAnimation sequence={['Full-Stack Web Developer', 2000, 'Generative AI & ML Specialist', 2000, 'Cybersecurity & Blockchain Enthusiast', 2000, 'Ideathon 1st Rank Winner', 2000]} wrapper="span" speed={50} repeat={Infinity} className="text-slate-900 font-semibold" />
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed">{personalInfo.bio}</motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex flex-wrap items-center gap-4 pt-4">
              <MagneticButton href="#projects">
                <span className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold text-sm tracking-wider uppercase shadow-glow-primary flex items-center gap-2">Explore Projects <ArrowDownRight className="w-4 h-4" /></span>
              </MagneticButton>
              <MagneticButton href={`mailto:${personalInfo.email}`}>
                <span className="px-7 py-3.5 rounded-xl bg-white border border-slate-200 text-slate-800 font-medium text-sm shadow-sm flex items-center gap-2"><Mail className="w-4 h-4 text-[#6366F1]" /> Contact Me</span>
              </MagneticButton>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex items-center gap-4 pt-4 border-t border-slate-200">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Connect With Me:</span>
              <div className="flex items-center gap-3">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#6366F1] shadow-sm" aria-label="GitHub"><Github className="w-5 h-5" /></a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#8B5CF6] shadow-sm" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                <a href={`mailto:${personalInfo.email}`} className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-[#6366F1] shadow-sm" aria-label="Email"><Mail className="w-5 h-5" /></a>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-white/90 border border-slate-200 p-6 backdrop-blur-xl shadow-xl flex flex-col justify-between overflow-hidden group">
              <div className="space-y-3 font-mono text-xs text-slate-700 relative z-10">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-amber-400" /><div className="w-3 h-3 rounded-full bg-emerald-400" /></div>
                  <span className="text-[10px] text-slate-400">SaiSaketh.config.js</span>
                </div>
                <div className="space-y-1.5 pt-2">
                  <p><span className="text-[#8B5CF6]">const</span> developer = &#123;</p>
                  <p className="pl-4"><span className="text-[#6366F1]">name</span>: <span className="text-indigo-600">"{personalInfo.fullName}"</span>,</p>
                  <p className="pl-4"><span className="text-[#6366F1]">education</span>: <span className="text-violet-600">"B.Tech CSE @ NSRIT"</span>,</p>
                  <p className="pl-4"><span className="text-[#6366F1]">awards</span>: [<span className="text-amber-600">"1st Rank Ideathon"</span>, <span className="text-amber-600">"10+ Hackathons"</span>],</p>
                  <p className="pl-4"><span className="text-[#6366F1]">specialities</span>: [<span className="text-blue-600">"Full-Stack"</span>, <span className="text-blue-600">"Generative AI"</span>],</p>
                  <p className="pl-4"><span className="text-[#6366F1]">status</span>: <span className="text-emerald-600">"Ready for Innovation"</span></p>
                  <p>&#125;;</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-6 relative z-10">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200"><p className="text-[10px] font-mono text-slate-500">IDEATHON</p><p className="text-base font-bold text-[#6366F1]">1st Place</p></div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200"><p className="text-[10px] font-mono text-slate-500">HACKATHONS</p><p className="text-base font-bold text-[#8B5CF6]">10+ National</p></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
