import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { initLenis } from './utils/lenis';
import BackgroundCanvas from './components/BackgroundCanvas';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      const lenis = initLenis();
      return () => lenis.destroy();
    }
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-[#6366F1]/20 selection:text-[#6366F1]">
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollProgress />
          <CustomCursor />
          <BackgroundCanvas />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Services />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
