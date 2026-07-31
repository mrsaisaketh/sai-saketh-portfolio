import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Sparkles, ShieldCheck, Cloud, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '../data/portfolioData';

const iconMap = { Layout, Server, Sparkles, ShieldCheck, Cloud, Globe };

export default function Services() {
  return (
    <section id="services" className="py-24 relative z-10 bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-[#6366F1] shadow-sm"><Sparkles className="w-3.5 h-3.5" /> SPECIALIZED SERVICES</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">High-Performance Solutions I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">Engineers & Deliver</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-600 text-base leading-relaxed">From web client interfaces to AI model integrations and anti-fraud blockchain security architecture.</motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Globe;
            return (
              <motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.08 }} whileHover={{ y: -6 }} className="group relative p-8 rounded-3xl bg-white border border-slate-200 backdrop-blur-xl hover:border-[#6366F1]/50 transition-all shadow-card-soft hover:shadow-glow-primary flex flex-col justify-between">
                <div className="space-y-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center text-[#6366F1] group-hover:scale-110 transition-all shadow-sm"><IconComponent className="w-6 h-6" /></div>
                  <div className="space-y-2"><h3 className="text-lg font-bold text-slate-900 group-hover:text-[#6366F1] transition-colors">{service.title}</h3><p className="text-slate-600 text-xs leading-relaxed">{service.description}</p></div>
                  <ul className="space-y-1.5 pt-2 border-t border-slate-100">{service.features.map((f, i) => (<li key={i} className="flex items-center gap-2 text-xs text-slate-700"><CheckCircle2 className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" /><span>{f}</span></li>))}</ul>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-[#6366F1] transition-colors"><span>DISCUSS PROJECT</span><ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" /></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
