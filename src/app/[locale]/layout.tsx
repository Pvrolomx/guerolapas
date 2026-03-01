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
      ? 'Mariscos El Güerolapas | Mariscos de Puerto Vallarta'
      : 'Mariscos El Güerolapas | Puerto Vallarta Street Seafood',
    description: isEs
      ? 'El mejor marisco callejero de Puerto Vallarta. 15 años de sazón, tradición y sabor auténtico.'
      : 'The best street seafood in Puerto Vallarta. 15 years of authentic flavor and tradition.',
    openGraph: {
      title: 'Mariscos El Güerolapas',
      description: 'Street Food, World-Class Flavor. Puerto Vallarta.',
      type: 'website',
      locale: isEs ? 'es_MX' : 'en_US',
      siteName: 'Mariscos El Güerolapas',
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
      <head>
        <meta name="theme-color" content="#0A1628" />
      </head>
      <body className="font-body bg-navy text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
