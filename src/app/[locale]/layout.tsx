import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isEs = locale === 'es';
  return {
    title: isEs
      ? 'Mariscos El Güerolapas | Puerto Vallarta Street Seafood'
      : 'Mariscos El Güerolapas | Puerto Vallarta Street Seafood',
    description: isEs
      ? 'El mejor marisco callejero de Puerto Vallarta. 15 años de sazón, tradición y sabor auténtico. Pide por WhatsApp.'
      : 'The best street seafood in Puerto Vallarta. 15 years of authentic flavor and tradition. Order via WhatsApp.',
    openGraph: {
      title: 'Mariscos El Güerolapas',
      description: isEs
        ? 'Street Food, World-Class Flavor. Puerto Vallarta.'
        : 'Street Food, World-Class Flavor. Puerto Vallarta.',
      type: 'restaurant',
      locale: isEs ? 'es_MX' : 'en_US',
      siteName: 'Mariscos El Güerolapas',
    },
    other: {
      'theme-color': '#0A1628',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="font-body bg-navy text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
