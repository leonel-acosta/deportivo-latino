"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const sponsors = [
  {
    name: "DOSB",
    logo: "https://res.cloudinary.com/dkarbzbwx/image/upload/v1781166388/DOSB_Ringe_Logo_Farbe_rgb_72dpi_ibsrki.png",
    url: "https://www.dosb.de",
  },
  {
    name: "Integration durch Sport",
    logo: "https://res.cloudinary.com/dkarbzbwx/image/upload/v1781166388/IdS-Schriftzug_Farbe_rgb_150dpi_tvkucd.png",
    url: "https://www.integration-durch-sport.de",
  },
];

interface SponsorsProps {
  sectionId: string;
}

export default function Sponsors({ sectionId }: SponsorsProps) {
  const t = useTranslations("LandingPage");

  return (
    <section
      id={sectionId}
      className="w-full bg-white text-foreground text-center py-16 md:py-20 px-5 md:px-6 lg:px-8"
    >
      <p
        className="text-sm uppercase tracking-widest font-semibold text-gray-500 mb-10"
        data-aos="fade-up"
      >
        {t("sponsorsTitle")}
      </p>
      <div
        className="flex flex-wrap items-center justify-center gap-12 md:gap-20"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {sponsors.map((sponsor) => (
          <a
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={sponsor.name}
            className="transition-opacity hover:opacity-70"
          >
            <Image
              src={sponsor.logo}
              alt={sponsor.name}
              width={220}
              height={110}
              className="h-24 w-auto object-contain"
            />
          </a>
        ))}
      </div>
    </section>
  );
}
