'use client';
import { useTranslations } from 'next-intl';
import { useState, useEffect, useCallback } from 'react';

export default function Footer() {
  const t = useTranslations('footer');
  const [konami, setKonami] = useState<string[]>([]);
  const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];

  const fireConfetti = useCallback(async () => {
    const confetti = (await import('canvas-confetti')).default;
    const colors = ['#003DA5', '#C8102E', '#FFFFFF', '#C5A55A'];
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors,
    });
    setTimeout(() => {
      confetti({ particleCount: 80, spread: 120, origin: { y: 0.4 }, colors });
    }, 300);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      setKonami((prev) => {
        const next = [...prev, e.key].slice(-10);
        if (next.join(',') === konamiCode.join(',')) {
          fireConfetti();
          return [];
        }
        return next;
      });
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [fireConfetti]);

  return (
    <footer className="bg-navy border-t border-gold/20 py-12 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p className="font-display text-2xl text-white">{t('tagline')}</p>

        {/* Easter egg */}
        <button
          onClick={fireConfetti}
          className="text-cruzazul/40 hover:text-cruzazul text-sm transition-colors cursor-pointer"
          title="⭐"
        >
          ⚽ {t('easter')}
        </button>

        <p className="text-white/40 text-sm">{t('copyright')}</p>
        <p className="text-white/30 text-xs">{t('made_by')}</p>
      </div>
    </footer>
  );
}
