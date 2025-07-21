"use client";

import { useTranslations } from "next-intl";
import JotformEmbed from "@/components/common/JotformEmbed";

interface ContactProps {
  title: string;
  text: string;
  sectionId: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

export default function Contact({
  sectionId,
  title,
  text,
  primary,
  secondary,
  tertiary,
}: ContactProps) {
  const t = useTranslations("LandingPage"); // Puedes usarlo si title o text vienen como keys

  return (
    <section
      id={sectionId}
      className={`w-full text-center gap-2 lg:gap-8 py-20 px-5 ${
        primary
          ? "bg-primary text-white"
          : secondary
          ? "bg-secondary text-white"
          : tertiary
          ? "bg-tertiary text-white"
          : "bg-white text-foreground"
      }`}
    >
      <h2 className="uppercase mb-2 heading-font">{title}</h2>
      <p className="text-lg mb-0">{text}</p>
      <JotformEmbed src="https://form.jotform.com/252011130906037" />;
    </section>
  );
}
