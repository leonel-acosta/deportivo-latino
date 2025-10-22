import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Space_Mono } from "next/font/google";
import { Permanent_Marker } from "next/font/google";
import ".././globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-space-mono",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-space-grotesk",
});

const permanentmarker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-permanentmarker",
});

export const metadata: Metadata = {
  title: "Club Deportivo Latino",
  description: "El club de fútbol latinoamericano más grande de Alemania",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${spaceMono.variable} ${permanentmarker.variable} antialiased relative`}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
