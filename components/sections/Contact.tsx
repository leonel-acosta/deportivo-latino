"use client";

import { useTranslations } from "next-intl";
import ContactForm from "@/components/sections/ContactForm";

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
  useTranslations("LandingPage");

  const onDark = primary || secondary || tertiary;

  return (
    <section
      id={sectionId}
      className={`w-full text-center py-16 md:py-24 lg:py-32 px-5 md:px-6 lg:px-8 ${
        primary
          ? "bg-primary text-white"
          : secondary
          ? "bg-secondary text-white"
          : tertiary
          ? "bg-tertiary text-white"
          : "bg-white text-foreground"
      }`}
    >
      <h2 className="uppercase mb-2 heading-font" data-aos="fade-up">{title}</h2>
      <p className="text-lg mb-0" data-aos="fade-up" data-aos-delay="100">{text}</p>
      <div data-aos="fade-up" data-aos-delay="200">
        <ContactForm onDark={onDark} />
      </div>
    </section>
  );
}
