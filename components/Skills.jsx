import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Code2, Cpu } from 'lucide-react';
import { skills, skillsCategories } from '../src/data/portfolioData';

// React Icons Imports
import { 
  SiPython, SiJavascript, SiHtml5, SiMysql, SiReact, SiTailwindcss, 
  SiFramer, SiAngular, SiFlutter, SiMongodb, SiNodedotjs, SiWebrtc, 
  SiOpencv, SiGithub, SiDocker 
} from 'react-icons/si';
import { FaJava, FaServer, FaRobot, FaShieldAlt, FaCubes } from 'react-icons/fa';

const iconMap = {
  SiPython: SiPython,
  FaJava: FaJava,
  SiJavascript: SiJavascript,
  SiHtml5: SiHtml5,
  SiMysql: SiMysql,
  SiReact: SiReact,
  SiTailwindcss: SiTailwindcss,
  SiFramer: SiFramer,
  SiAngular: SiAngular,
  SiFlutter: SiFlutter,
  SiMongodb: SiMongodb,
  SiNodedotjs: SiNodedotjs,
  SiWebrtc: SiWebrtc,
  FaServer: FaServer,
  SiOpencv: SiOpencv,
  FaRobot: FaRobot,
  FaShieldAlt: FaShieldAlt,
  FaCubes: FaCubes,
  SiGithub: SiGithub,
  SiDocker: SiDocker,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-[#6366F1] shadow-sm"
          >
            <Cpu className="w-3.5 h-3.5" /> TECHNICAL PROFICIENCY
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight"
          >
            Languages, Tools &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">
              Framework Stack
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-base leading-relaxed"
          >
            Comprehensive breakdown of my engineering tools, programming languages, and core specializations.
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillsCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase transition-all ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-bold shadow-glow-primary'
                  : 'bg-white text-slate-600 hover:text-slate-900 border border-slate-200 shadow-sm'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, idx) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  whileHover={{ y: -6 }}
                  className="p-6 rounded-2xl bg-white border border-slate-200 backdrop-blur-xl hover:border-[#6366F1]/40 transition-all shadow-card-soft group hover:shadow-glow-primary"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-2xl transition-transform group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      <IconComponent />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#6366F1]">
                      {skill.level}%
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 font-display mb-3">
                    {skill.name}
                  </h3>

                  {/* Animated Progress Bar */}
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, ${skill.color}, #6366F1)`,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
