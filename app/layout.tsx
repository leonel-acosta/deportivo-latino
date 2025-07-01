import type { Metadata } from "next";
import { Fjalla_One } from "next/font/google";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const fjalla = Fjalla_One({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-fjalla",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Club Deportivo Latino",
  description: "El club de fútbol latinoamericano más grande de Alemania",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fjalla.className} ${roboto.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
