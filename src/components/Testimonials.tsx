'use client';
import { useTranslations } from 'next-intl';
import ScrollReveal from './ScrollReveal';

export default function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = [
    { quote: t('t1_quote'), author: t('t1_author') },
    { quote: t('t2_quote'), author: t('t2_author') },
    { quote: t('t3_quote'), author: t('t3_author') },
  ];

  return (
    <section className="bg-cream py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-display font-bold text-navy text-center"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {t('heading')}
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, i) => (
            <ScrollReveal key={i} variant="fade-up" delay={i * 0.2}>
              <blockquote className="relative bg-white rounded-xl p-8 shadow-sm">
                <span className="absolute -top-4 left-6 text-6xl font-display text-gold/20 leading-none select-none">
                  &ldquo;
                </span>
                <p className="font-display italic text-navy text-lg leading-relaxed relative z-10">
                  {item.quote}
                </p>
                <footer className="mt-6 text-muted text-sm">— {item.author}</footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
