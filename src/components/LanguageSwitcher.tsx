'use client';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const other = locale === 'es' ? 'en' : 'es';

  const handleSwitch = () => {
    router.replace(pathname, { locale: other });
  };

  return (
    <button
      onClick={handleSwitch}
      aria-label={locale === 'es' ? 'Switch to English' : 'Cambiar a español'}
      className="fixed top-6 right-6 z-50 flex items-center gap-0 rounded-full border border-white/20 bg-black/30 backdrop-blur-sm text-xs font-body font-semibold overflow-hidden transition-all hover:border-gold/50"
    >
      <span
        className={`px-3 py-1.5 transition-colors ${
          locale === 'es' ? 'bg-gold text-navy' : 'text-white/60'
        }`}
      >
        ES
      </span>
      <span
        className={`px-3 py-1.5 transition-colors ${
          locale === 'en' ? 'bg-gold text-navy' : 'text-white/60'
        }`}
      >
        EN
      </span>
    </button>
  );
}
