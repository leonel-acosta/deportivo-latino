"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";

interface CookieConsent {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "cdl_cookie_consent";

export default function CookieBanner() {
  const t = useTranslations("CookieBanner");
  const params = useParams();
  const locale = (params?.locale as string) ?? "es";

  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
  }, []);

  // Trap focus inside the modal while visible
  useEffect(() => {
    if (!visible) return;

    const el = dialogRef.current;
    if (!el) return;

    const focusable = el.querySelectorAll<HTMLElement>(
      'button:not([disabled]), a[href], input, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [visible, showDetails]);

  // Prevent background scroll while modal is open
  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [visible]);

  function saveConsent(consent: CookieConsent) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
    setVisible(false);
  }

  function acceptAll() {
    saveConsent({ necessary: true, analytics: true, marketing: true });
  }

  function rejectAll() {
    saveConsent({ necessary: true, analytics: false, marketing: false });
  }

  function savePreferences() {
    saveConsent({ necessary: true, analytics, marketing });
  }

  if (!visible) return null;

  return (
    <>
      {/* Backdrop — blocks interaction with page content */}
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-banner-title"
        ref={dialogRef}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="w-full max-w-lg bg-[var(--background-secondary)] text-white shadow-2xl border-t-4 border-[var(--accent-color)] max-h-[90vh] overflow-y-auto">
          <div className="px-6 py-6 flex flex-col gap-5">
            {/* Header */}
            <div>
              <h2
                id="cookie-banner-title"
                className="text-xl font-bold mb-2 text-[var(--accent-color)]"
              >
                {t("title")}
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                {t("description")}{" "}
                <Link
                  href={`/${locale}/privacy-policy`}
                  className="underline hover:text-[var(--accent-color)] transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("privacyLink")}
                </Link>
                .
              </p>
            </div>

            {/* Details / toggles */}
            {showDetails && (
              <div className="border-t border-gray-600 pt-4 flex flex-col gap-3">
                <p className="text-sm text-gray-300 mb-1">{t("detailsIntro")}</p>

                <Toggle
                  id="cookie-necessary"
                  label={t("necessaryLabel")}
                  description={t("necessaryDesc")}
                  alwaysOnLabel={t("alwaysOn")}
                  checked={true}
                  disabled
                />
                <Toggle
                  id="cookie-analytics"
                  label={t("analyticsLabel")}
                  description={t("analyticsDesc")}
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <Toggle
                  id="cookie-marketing"
                  label={t("marketingLabel")}
                  description={t("marketingDesc")}
                  checked={marketing}
                  onChange={setMarketing}
                />
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col gap-2 pt-1">
              <button
                onClick={acceptAll}
                className="w-full bg-[var(--accent-color)] text-black font-bold px-6 py-3 text-sm uppercase hover:opacity-80 transition-opacity"
              >
                {t("acceptAll")}
              </button>
              <button
                onClick={rejectAll}
                className="w-full border border-gray-400 text-white px-6 py-3 text-sm uppercase hover:border-white transition-colors"
              >
                {t("rejectAll")}
              </button>
              {showDetails ? (
                <button
                  onClick={savePreferences}
                  className="w-full bg-[var(--primary-color)] text-white font-bold px-6 py-3 text-sm uppercase hover:opacity-80 transition-opacity"
                >
                  {t("savePreferences")}
                </button>
              ) : (
                <button
                  onClick={() => setShowDetails(true)}
                  className="w-full text-gray-300 underline text-sm hover:text-white transition-colors py-1"
                >
                  {t("customize")}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

interface ToggleProps {
  id: string;
  label: string;
  description: string;
  alwaysOnLabel?: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (val: boolean) => void;
}

function Toggle({ id, label, description, alwaysOnLabel, checked, disabled, onChange }: ToggleProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 shrink-0">
        <button
          role="switch"
          aria-checked={checked}
          id={id}
          disabled={disabled}
          onClick={() => onChange?.(!checked)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] focus:ring-offset-2 focus:ring-offset-[var(--background-secondary)] ${
            checked ? "bg-[var(--accent-color)]" : "bg-gray-600"
          } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
        >
          <span
            className={`inline-block h-4 w-4 rounded-full bg-white transition-transform ${
              checked ? "translate-x-6" : "translate-x-1"
            }`}
          />
        </button>
      </div>
      <label htmlFor={id} className="flex flex-col cursor-pointer">
        <span className="text-sm font-semibold text-white">
          {label}
          {disabled && alwaysOnLabel && (
            <span className="ml-2 text-xs text-gray-400 font-normal">
              ({alwaysOnLabel})
            </span>
          )}
        </span>
        <span className="text-xs text-gray-400 mt-0.5">{description}</span>
      </label>
    </div>
  );
}
