'use client';
import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';
import AnimatedCounter from './AnimatedCounter';

export default function Story() {
  const t = useTranslations('story');

  const counters = [
    { target: 15, suffix: '', label: t('counter_years'), prefix: '+' },
    { target: 500, suffix: 'K', label: t('counter_plates'), prefix: '+' },
    { target: 1, suffix: '', label: t('counter_sazon') },
  ];

  return (
    <section className="bg-pearl py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Image */}
        <ScrollReveal variant="slide-left">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/images/hero/guero.webp"
              alt="Ramón Tello - El Güerolapas"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </ScrollReveal>

        {/* Text */}
        <ScrollReveal variant="slide-right" delay={0.2}>
          <h2
            className="font-display font-bold text-navy"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {t('heading')}
          </h2>

          {/* Counters */}
          <div className="flex gap-8 mt-8 mb-8">
            {counters.map((c, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl sm:text-4xl font-display font-bold text-gold">
                  <AnimatedCounter target={c.target} prefix={c.prefix} suffix={c.suffix} />
                </div>
                <div className="text-xs sm:text-sm text-muted mt-1 uppercase tracking-wide">
                  {c.label}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 text-navy/80 text-lg leading-relaxed">
            <p>{t('p1')}</p>
            <p>{t('p2')}</p>
            <p>{t('p3')}</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
