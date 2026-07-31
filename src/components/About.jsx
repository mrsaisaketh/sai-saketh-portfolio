import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Trophy, Users, Award, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo, stats, internships, education, achievements } from '../data/portfolioData';

export default function About() {
  const [tab, setTab] = useState('experience');

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-[#6366F1] shadow-sm">
            <Sparkles className="w-3.5 h-3.5" /> ABOUT ME & BACKGROUND
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">
            Engineering With Purpose & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">Innovation</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-600 text-base leading-relaxed">
            A quick overview of my technical profile, statistics, internships, and educational path.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white border border-slate-200 backdrop-blur-xl hover:border-[#6366F1]/40 transition-all group shadow-card-soft">
              <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#6366F1] mb-4 group-hover:scale-110 transition-transform">
                {i === 0 && <Trophy className="w-5 h-5" />}{i === 1 && <Award className="w-5 h-5 text-[#8B5CF6]" />}{i === 2 && <Users className="w-5 h-5" />}{i === 3 && <Code2 className="w-5 h-5" />}
              </div>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">{s.value}<span className="text-[#6366F1] text-xl">{s.suffix || ''}</span></h3>
              <p className="text-xs font-mono text-slate-500 mt-1 uppercase tracking-wider">{s.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 backdrop-blur-xl space-y-6 shadow-card-soft">
              <h3 className="text-xl font-bold text-slate-900 font-display flex items-center gap-2"><span className="w-3 h-3 rounded-full bg-[#6366F1]" /> Personal Overview</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{personalInfo.aboutDetailed}</p>
              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs"><span className="text-slate-500 font-mono">Location:</span><span className="text-slate-800 font-medium">{personalInfo.location}</span></div>
                <div className="flex items-center justify-between text-xs"><span className="text-slate-500 font-mono">Degree:</span><span className="text-slate-800 font-medium">B.Tech CSE (2023-2027)</span></div>
                <div className="flex items-center justify-between text-xs"><span className="text-slate-500 font-mono">Institution:</span><span className="text-slate-800 font-medium">NSRIT</span></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <button onClick={() => setTab('experience')} className={`flex-1 min-w-[110px] py-3 px-3 rounded-xl text-xs font-mono uppercase transition-all flex items-center justify-center gap-1.5 ${tab === 'experience' ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold' : 'text-slate-600'}`}><Briefcase className="w-4 h-4" /> Internships</button>
              <button onClick={() => setTab('education')} className={`flex-1 min-w-[110px] py-3 px-3 rounded-xl text-xs font-mono uppercase transition-all flex items-center justify-center gap-1.5 ${tab === 'education' ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold' : 'text-slate-600'}`}><GraduationCap className="w-4 h-4" /> Education</button>
              <button onClick={() => setTab('achievements')} className={`flex-1 min-w-[110px] py-3 px-3 rounded-xl text-xs font-mono uppercase transition-all flex items-center justify-center gap-1.5 ${tab === 'achievements' ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold' : 'text-slate-600'}`}><Trophy className="w-4 h-4" /> Highlights</button>
            </div>

            {tab === 'experience' && (
              <div className="space-y-4">
                {internships.map((exp, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-card-soft">
                    <div className="flex items-start justify-between border-b border-slate-100 pb-2"><div><h4 className="text-base font-bold text-slate-900">{exp.role}</h4><p className="text-xs text-[#6366F1] font-medium">{exp.company}</p></div><span className="px-2.5 py-1 text-xs font-mono rounded-full bg-slate-100 text-slate-600">{exp.duration}</span></div>
                    <p className="text-slate-600 text-xs">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5 pt-1">{exp.tech.map((t, i) => (<span key={i} className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-100 text-slate-700">{t}</span>))}</div>
                  </motion.div>
                ))}
              </div>
            )}

            {tab === 'education' && (
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-card-soft">
                    <div className="flex items-start justify-between border-b border-slate-100 pb-2"><div><h4 className="text-base font-bold text-slate-900">{edu.degree}</h4><p className="text-xs text-[#8B5CF6] font-medium">{edu.institution}</p></div><span className="px-2.5 py-1 text-xs font-mono rounded-full bg-slate-100 text-slate-600">{edu.period}</span></div>
                    <p className="text-slate-600 text-xs">{edu.details}</p>
                  </motion.div>
                ))}
              </div>
            )}

            {tab === 'achievements' && (
              <div className="space-y-4">
                {achievements.map((ach, idx) => (
                  <motion.div key={idx} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 rounded-2xl bg-white border border-slate-200 space-y-2 shadow-card-soft">
                    <div className="flex items-start justify-between border-b border-slate-100 pb-2"><div><h4 className="text-base font-bold text-slate-900">{ach.title}</h4><p className="text-xs text-[#6366F1] font-medium">{ach.organization}</p></div><span className="px-2.5 py-1 text-xs font-mono rounded-full bg-[#6366F1]/10 text-[#6366F1]">{ach.badge}</span></div>
                    <p className="text-slate-600 text-xs">{ach.description}</p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
