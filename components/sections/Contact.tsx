"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

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

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js";
    script.onload = () => {
      if (window.jotformEmbedHandler) {
        window.jotformEmbedHandler(
          "iframe[id='JotFormIFrame-252011130906037']",
          "https://form.jotform.com/"
        );
      }
    };
    document.body.appendChild(script);
  }, []);

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
      <iframe
        id="JotFormIFrame-252011130906037"
        title="Contacto"
        allow="geolocation; microphone; camera; fullscreen; payment"
        src="https://form.jotform.com/252011130906037"
        frameBorder="0"
        style={{
          minWidth: "100%",
          maxWidth: "100%",
          height: "539px",
          border: "none",
        }}
        scrolling="no"
        onLoad={() => window.parent.scrollTo(0, 0)}
      />
    </section>
  );
}
