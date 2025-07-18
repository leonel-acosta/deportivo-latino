import type { Metadata } from "next";
import { Fjalla_One } from "next/font/google";
import { Roboto } from "next/font/google";
import { Permanent_Marker } from "next/font/google";
import ".././globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

const fjalla = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-fjalla",
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
        className={`${fjalla.variable} ${roboto.variable} ${permanentmarker.variable} antialiased relative`}
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
