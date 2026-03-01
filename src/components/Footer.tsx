'use client';
import { useTranslations } from 'next-intl';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const t = useTranslations('footer');
  const [showLogo, setShowLogo] = useState(false);
  const [konami, setKonami] = useState<string[]>([]);
  const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

  const fireConfetti = useCallback(async () => {
    const confetti = (await import('canvas-confetti')).default;
    const colors = ['#003DA5', '#C8102E', '#FFFFFF', '#C5A55A'];
    confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 }, colors });
    setTimeout(() => {
      confetti({ particleCount: 100, spread: 140, origin: { y: 0.4 }, colors });
    }, 400);
    setTimeout(() => {
      confetti({ particleCount: 80, angle: 60, spread: 80, origin: { x: 0.2, y: 0.6 }, colors });
      confetti({ particleCount: 80, angle: 120, spread: 80, origin: { x: 0.8, y: 0.6 }, colors });
    }, 700);
  }, []);

  const triggerEasterEgg = useCallback(() => {
    setShowLogo(true);
    setTimeout(() => {
      fireConfetti();
    }, 800);
    setTimeout(() => {
      setShowLogo(false);
    }, 3500);
  }, [fireConfetti]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setKonami((prev) => {
        const next = [...prev, e.key].slice(-10);
        if (next.join(',') === konamiCode.join(',')) {
          triggerEasterEgg();
          return [];
        }
        return next;
      });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [triggerEasterEgg]);

  return (
    <>
      {/* Cruz Azul overlay */}
      <AnimatePresence>
        {showLogo && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setShowLogo(false)}
          >
            <motion.img
              src="/images/cruzazul.png"
              alt="Cruz Azul"
              className="w-48 h-48 sm:w-64 sm:h-64 drop-shadow-2xl"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 3, opacity: 0, rotate: 180 }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 15,
                exit: { duration: 0.5 },
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="bg-navy border-t border-gold/20 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="font-display text-2xl text-white">{t('tagline')}</p>

          {/* Easter egg trigger */}
          <button
            onClick={triggerEasterEgg}
            className="group text-cruzazul/30 hover:text-cruzazul text-sm transition-all duration-300 cursor-pointer"
            title="⭐"
          >
            <span className="inline-block group-hover:animate-bounce transition-transform">⚽</span>
            {' '}{t('easter')}
          </button>

          <p className="text-white/40 text-sm">{t('copyright')}</p>
          <p className="text-white/30 text-xs">{t('made_by')}</p>
        </div>
      </footer>
    </>
  );
}
