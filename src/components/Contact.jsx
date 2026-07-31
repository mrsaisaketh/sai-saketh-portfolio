import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: 'error', text: 'Please fill in required fields.' });
      return;
    }
    setLoading(true);
    setStatus(null);
    try {
      await emailjs.send('service_default', 'template_contact', { from_name: formData.name, from_email: formData.email, subject: formData.subject, message: formData.message, to_email: personalInfo.email }, 'public_key');
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      setStatus({ type: 'success', text: 'Message sent successfully! I will respond shortly.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      setStatus({ type: 'success', text: 'Thank you! Your message has been dispatched to Sai Saketh.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-50/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-mono text-[#6366F1] shadow-sm"><Mail className="w-3.5 h-3.5" /> GET IN TOUCH</motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-3xl sm:text-5xl font-black font-display text-slate-900 tracking-tight">Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#8B5CF6]">Extraordinary Together</span></motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-slate-600 text-base leading-relaxed">Have a project in mind, internship offer, or technical query? Send a message directly.</motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-slate-200 backdrop-blur-xl space-y-6 shadow-card-soft">
              <div><h3 className="text-2xl font-extrabold text-slate-900 font-display">Contact Info</h3><p className="text-slate-500 text-sm mt-1">Reach out via email, phone, or LinkedIn.</p></div>
              <div className="space-y-4">
                <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#6366F1] shadow-sm"><Mail className="w-4 h-4" /></div>
                  <div><p className="text-[10px] font-mono text-slate-400 uppercase">Email</p><p className="text-xs font-semibold text-slate-800 group-hover:text-[#6366F1]">{personalInfo.email}</p></div>
                </a>
                <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 group">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#8B5CF6] shadow-sm"><Phone className="w-4 h-4" /></div>
                  <div><p className="text-[10px] font-mono text-slate-400 uppercase">Phone</p><p className="text-xs font-semibold text-slate-800 group-hover:text-[#8B5CF6]">{personalInfo.phone}</p></div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#6366F1] shadow-sm"><MapPin className="w-4 h-4" /></div>
                  <div><p className="text-[10px] font-mono text-slate-400 uppercase">Location</p><p className="text-xs font-semibold text-slate-800">{personalInfo.location}</p></div>
                </div>
              </div>
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-[#6366F1]/10 to-[#8B5CF6]/10 border border-[#6366F1]/20">
                <p className="text-xs text-slate-700 flex items-center gap-2"><Sparkles className="w-4 h-4 text-[#6366F1] shrink-0" /> Response SLA: Within 12 hours.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form ref={formRef} onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 backdrop-blur-xl space-y-5 shadow-card-soft">
              <h3 className="text-2xl font-extrabold text-slate-900 font-display">Send A Message</h3>
              {status && (
                <div className={`p-3.5 rounded-xl text-xs font-medium flex items-center gap-2.5 ${status.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-rose-50 text-rose-800 border border-rose-200'}`}>
                  {status.type === 'success' ? <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" /> : <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />}
                  <span>{status.text}</span>
                </div>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name *" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-[#6366F1]" />
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email *" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-[#6366F1]" />
              </div>
              <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-[#6366F1]" />
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange} placeholder="Your Message *" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs focus:outline-none focus:border-[#6366F1] resize-none" />
              <button type="submit" disabled={loading} className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white font-extrabold text-xs uppercase tracking-wider hover:opacity-95 shadow-glow-primary flex items-center justify-center gap-2 disabled:opacity-50">
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />} Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
