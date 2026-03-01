'use client';
import { useTranslations } from 'next-intl';
import { MapPin, Clock, Navigation, Phone } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const LAT = 20.6235;
const LNG = -105.2301;

export default function Location() {
  const t = useTranslations('location');

  return (
    <section className="bg-pearl py-24 px-6 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <div>
                <p className="text-navy font-semibold">{t('address')}</p>
                <p className="text-navy/70 mt-1">{t('description')}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div className="text-navy/70">
                <p className="font-semibold text-navy">{t('hours_title')}</p>
                <p className="mt-1">{t('hours_weekdays')}</p>
                <p>{t('hours_closed')}</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
              <a href="tel:+5213222441486" className="text-navy hover:text-gold transition-colors font-semibold">
                {t('phone')}
              </a>
            </div>
          </div>

          <a
            href={`https://www.google.com/maps/search/?api=1&query=${LAT},${LNG}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 bg-gold text-navy px-8 py-3 font-semibold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors rounded"
          >
            <Navigation className="w-4 h-4" />
            {t('directions')}
          </a>
        </ScrollReveal>

        <ScrollReveal variant="slide-right" delay={0.2}>
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
            <iframe
              src={`https://maps.google.com/maps?q=${LAT},${LNG}&z=18&output=embed`}
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
