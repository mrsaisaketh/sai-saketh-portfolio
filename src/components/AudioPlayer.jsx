import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Attempt automatic playback on load
    const attemptAutoplay = () => {
      audio.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay blocked by browser policy; start on first user interaction
          setIsPlaying(false);
          const handleFirstTouch = () => {
            audio.play()
              .then(() => setIsPlaying(true))
              .catch((err) => console.log('Audio playback interaction error:', err));
            window.removeEventListener('click', handleFirstTouch);
            window.removeEventListener('touchstart', handleFirstTouch);
            window.removeEventListener('keydown', handleFirstTouch);
          };
          window.addEventListener('click', handleFirstTouch, { once: true });
          window.addEventListener('touchstart', handleFirstTouch, { once: true });
          window.addEventListener('keydown', handleFirstTouch, { once: true });
        });
    };

    attemptAutoplay();
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Playback error on toggle:', err));
    }
  };

  return (
    <div className="relative flex items-center">
      <audio
        ref={audioRef}
        src="/music.mp3"
        loop
        preload="auto"
      />

      <button
        onClick={togglePlay}
        className="relative group flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/90 hover:bg-white border border-slate-200/80 text-slate-700 hover:text-slate-900 transition-all shadow-sm active:scale-95"
        title={isPlaying ? 'Pause Music' : 'Play Music'}
        aria-label="Toggle background music"
      >
        {/* Animated Sound Equalizer Bars */}
        <div className="flex items-end gap-[2px] h-3.5 w-3.5 justify-center">
          <motion.span
            className="w-[2.5px] bg-[#6366F1] rounded-full"
            animate={isPlaying ? { height: ['20%', '100%', '40%', '80%', '20%'] } : { height: '30%' }}
            transition={isPlaying ? { repeat: Infinity, duration: 1.2, ease: 'easeInOut' } : {}}
          />
          <motion.span
            className="w-[2.5px] bg-[#8B5CF6] rounded-full"
            animate={isPlaying ? { height: ['60%', '30%', '100%', '30%', '60%'] } : { height: '50%' }}
            transition={isPlaying ? { repeat: Infinity, duration: 0.9, ease: 'easeInOut', delay: 0.2 } : {}}
          />
          <motion.span
            className="w-[2.5px] bg-[#6366F1] rounded-full"
            animate={isPlaying ? { height: ['40%', '90%', '20%', '100%', '40%'] } : { height: '30%' }}
            transition={isPlaying ? { repeat: Infinity, duration: 1.1, ease: 'easeInOut', delay: 0.4 } : {}}
          />
        </div>

        <span className="text-xs font-mono font-semibold tracking-wider uppercase text-slate-700 group-hover:text-[#6366F1] transition-colors hidden sm:inline">
          {isPlaying ? 'PAUSE' : 'PLAY'}
        </span>

        {isPlaying ? (
          <Volume2 className="w-3.5 h-3.5 text-[#6366F1]" />
        ) : (
          <VolumeX className="w-3.5 h-3.5 text-slate-400" />
        )}
      </button>
    </div>
  );
}
