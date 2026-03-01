'use client';
import { useTranslations } from 'next-intl';
import { MapPin, Clock, Navigation } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Location() {
  const t = useTranslations('location');

  const mapsQuery = encodeURIComponent('Unidad Deportiva Agustin Flores Contreras, Puerto Vallarta');

  return (
    <section className="bg-pearl py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <ScrollReveal variant="slide-left">
          <h2
            className="font-display font-bold text-navy"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
          >
            {t('heading')}
          </h2>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4 items-start">
              <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
              <p className="text-navy/80 text-lg leading-relaxed">{t('description')}</p>
            </div>

            <div className="flex gap-4 items-start">
              <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div className="text-navy/70">
                <p className="font-semibold text-navy">{t('hours_title')}</p>
                <p className="mt-1">{t('hours_weekdays')}</p>
                <p>{t('hours_sunday')}</p>
              </div>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-gold text-navy px-8 py-3 font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors rounded"
          >
            <Navigation className="w-4 h-4" />
            {t('directions')}
          </a>
        </ScrollReveal>

        {/* Map */}
        <ScrollReveal variant="slide-right" delay={0.2}>
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.5!2d-105.2353!3d20.6534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sUnidad+Deportiva+Agust%C3%ADn+Flores!5e0!3m2!1ses!2smx!4v1700000000000`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Mariscos El Güerolapas"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
