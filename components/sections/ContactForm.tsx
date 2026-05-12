"use client";

import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface ContactFormProps {
  onDark?: boolean;
}

export default function ContactForm({ onDark }: ContactFormProps) {
  const t = useTranslations("ContactForm");
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      honeypot: formData.get("website"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) formRef.current?.reset();
    } catch {
      setStatus("error");
    }
  }

  const inputBase =
    "w-full px-4 py-3 rounded-lg border focus:outline-none transition body-font text-sm";
  const inputStyle = onDark
    ? `${inputBase} bg-white/10 border-white/30 text-white placeholder-white/50 focus:border-white focus:ring-1 focus:ring-white/40`
    : `${inputBase} bg-white border-gray-300 text-foreground placeholder-gray-400 focus:border-blue-700 focus:ring-1 focus:ring-blue-700/30`;

  const labelStyle = `block text-sm font-semibold mb-1 ${onDark ? "text-white/90" : "text-foreground"}`;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="w-full max-w-xl mx-auto mt-8 text-left"
      noValidate
    >
      {/* Honeypot — invisible to humans, attractive to bots */}
      <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", overflow: "hidden" }}>
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="space-y-5">
        <div>
          <label htmlFor="cf-name" className={labelStyle}>
            {t("name")}
          </label>
          <input
            type="text"
            id="cf-name"
            name="name"
            required
            placeholder={t("namePlaceholder")}
            className={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="cf-email" className={labelStyle}>
            {t("email")}
          </label>
          <input
            type="email"
            id="cf-email"
            name="email"
            required
            placeholder={t("emailPlaceholder")}
            className={inputStyle}
          />
        </div>

        <div>
          <label htmlFor="cf-message" className={labelStyle}>
            {t("message")}
          </label>
          <textarea
            id="cf-message"
            name="message"
            required
            rows={5}
            placeholder={t("messagePlaceholder")}
            className={`${inputStyle} resize-none`}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition disabled:opacity-60 heading-font uppercase tracking-wide ${
            onDark
              ? "bg-white text-primary hover:bg-white/90"
              : "bg-primary text-white hover:opacity-90"
          }`}
        >
          {status === "loading" ? t("sending") : t("submit")}
        </button>

        {status === "success" && (
          <p className={`text-center text-sm font-medium ${onDark ? "text-white" : "text-green-700"}`}>
            {t("success")}
          </p>
        )}
        {status === "error" && (
          <p className={`text-center text-sm font-medium ${onDark ? "text-white/80" : "text-red-600"}`}>
            {t("error")}
          </p>
        )}
      </div>
    </form>
  );
}
