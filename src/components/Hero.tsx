'use client';
import { useTranslations } from 'next-intl';
import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Hero() {
  const t = useTranslations('hero');
  const prefersReduced = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1, delay, ease: 'easeOut' },
        };

  return (
    <section className="relative h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero/puesto.webp')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <LanguageSwitcher />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.h1
          {...fadeUp(0)}
          className="font-display font-bold text-white text-shadow-lg"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
        >
          {t('title')}
        </motion.h1>

        <motion.p
          {...fadeUp(0.4)}
          className="mt-4 text-gold/80 text-lg sm:text-xl tracking-wide font-body"
        >
          {t('subtitle')}
        </motion.p>

        <motion.a
          {...fadeUp(1.2)}
          href="#menu"
          className="inline-block mt-10 border-2 border-gold text-gold px-8 py-3 uppercase tracking-widest text-sm font-semibold hover:bg-gold hover:text-navy transition-colors duration-300"
        >
          {t('cta')}
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-60"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-white" />
      </motion.div>
    </section>
  );
}
