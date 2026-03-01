'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { menuItems, MenuItem } from '@/data/menu';
import ScrollReveal from './ScrollReveal';

const categories = ['all', 'aguachiles', 'ceviches', 'calientes', 'especialidades'] as const;

function MenuCard({ item, index, locale }: { item: MenuItem; index: number; locale: string }) {
  const lang = locale as 'es' | 'en';
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden flex flex-col"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name[lang]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-xl text-white font-semibold">{item.name[lang]}</h3>
          {item.popular && (
            <span className="shrink-0 text-[10px] uppercase tracking-wider bg-gold/20 text-gold px-2 py-0.5 rounded-full">
              ★
            </span>
          )}
        </div>
        <p className="text-white/50 text-sm italic mt-2 line-clamp-2 flex-1">
          {item.description[lang]}
        </p>
        <p className="text-gold font-semibold text-xl mt-4">${item.price}</p>
      </div>
    </motion.article>
  );
}

export default function Menu() {
  const t = useTranslations('menu');
  const locale = useLocale();
  const [active, setActive] = useState<string>('all');

  const filtered = active === 'all' ? menuItems : menuItems.filter((i) => i.category === active);

  const filterKeys: Record<string, string> = {
    all: t('filter_all'),
    aguachiles: t('filter_aguachiles'),
    ceviches: t('filter_ceviches'),
    calientes: t('filter_calientes'),
    especialidades: t('filter_especialidades'),
  };

  return (
    <section id="menu" className="bg-navy py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2
            className="font-display font-bold text-white text-center"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {t('heading')}
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mt-4" />
        </ScrollReveal>

        {/* Filters */}
        <div className="flex gap-3 justify-center mt-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                active === cat
                  ? 'bg-gold text-navy'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
              }`}
            >
              {filterKeys[cat]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} locale={locale} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
