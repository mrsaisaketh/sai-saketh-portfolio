import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, CheckCircle2 } from 'lucide-react';
import { achievements } from '../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-[#6366F1] shadow-sm"><Trophy className="w-3.5 h-3.5" /> RECOGNITIONS & LEADERSHIP</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">Hackathon Wins & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">Event Management</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-600 text-base leading-relaxed">A record of competitive ideathon victories, hackathon participation, and large-scale student leadership.</motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: idx * 0.08 }} whileHover={{ y: -5 }} className="p-7 rounded-3xl bg-white border border-slate-200 backdrop-blur-xl hover:border-[#6366F1]/50 transition-all shadow-card-soft hover:shadow-glow-primary flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#6366F1] group-hover:scale-110 transition-transform">
                    {idx === 0 ? <Trophy className="w-5 h-5 text-amber-500" /> : <Users className="w-5 h-5 text-[#8B5CF6]" />}
                  </div>
                  <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-[#6366F1]/10 text-[#6366F1] border border-[#6366F1]/30">{item.badge}</span>
                </div>
                <div className="space-y-1"><h3 className="text-lg font-bold text-slate-900 font-display group-hover:text-[#6366F1] transition-colors">{item.title}</h3><p className="text-xs text-[#8B5CF6] font-medium">{item.organization}</p></div>
                <p className="text-slate-600 text-xs leading-relaxed">{item.description}</p>
              </div>
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                <span>YEAR: {item.date}</span>
                <span className="flex items-center gap-1 text-emerald-600 font-semibold"><CheckCircle2 className="w-3.5 h-3.5" /> VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
