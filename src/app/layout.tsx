import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mariscos El Güerolapas | Puerto Vallarta",
  description: "Mariscos frescos en Puerto Vallarta desde hace 15 años. Street food, world-class flavor.",
  openGraph: {
    type: "website",
    siteName: "Mariscos El Güerolapas",
    locale: "es_MX",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
