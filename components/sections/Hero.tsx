import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("LandingPage");

  return (
    <div className="text-center">
      <h1>{t("heroTitle")}</h1>
    </div>
  );
}
