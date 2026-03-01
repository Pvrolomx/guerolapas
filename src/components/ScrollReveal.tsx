'use client';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { ReactNode } from 'react';

type VariantName = 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in';

const animationVariants: Record<VariantName, Variants> = {
  'fade-up': { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  'fade-in': { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  'slide-left': { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  'slide-right': { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
  'scale-in': { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
};

export default function ScrollReveal({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 0.8,
  className = '',
}: {
  children: ReactNode;
  variant?: VariantName;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const prefersReduced = useReducedMotion();
  const v = animationVariants[variant];

  return (
    <motion.div
      initial={prefersReduced ? 'visible' : 'hidden'}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={v}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
