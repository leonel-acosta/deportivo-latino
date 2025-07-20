"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import { useEffect } from "react";
interface ResultsProps {
  title: string;
  text: string;
  sectionId: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

export default function Results({
  sectionId,
  title,
  text,
  primary,
  secondary,
  tertiary,
}: ResultsProps) {
  useEffect(() => {
    if (window) {
      const script = document.createElement("script");
      script.src = "https://www.fussball.de/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
  const t = useTranslations("LandingPage");

  return (
    <>
      <section
        id={sectionId}
        className={`w-full text-center gap-2 lg:gap-8 gap py-20 px-5 ${
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
        <p className="text-lg mb-6">{text}</p>
        <div
          className="fussballde_widget body-font"
          data-id="cb1d3b75-0d79-4617-96b9-e8fa6e36ebad"
          data-type="club-matches"
        ></div>
      </section>
    </>
  );
}
