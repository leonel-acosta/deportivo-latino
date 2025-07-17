import { useTranslations } from "next-intl";
import Button from "../ui/Button";

export default function Hero() {
  const t = useTranslations("LandingPage");

  return (
    <section
      id="hero"
      className="bg-hero bg-cover bg-center md:h-screen secondary lg:grid lg:h-200 w-screen lg:place-content-center mb-0"
    >
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto  text-center">
          <h1 className="hero-title px-2 text-size-3xl tracking-tight text-white lg:text-5xl font-bold sm:text-5xl uppercase">
            {t("heroTitle")}
          </h1>

          <p className="mt-4 px-5 text-prose text-base text-pretty text-white sm:text-lg/relaxed uppercase font-bold">
            {t("heroText")}
          </p>

          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a href="/#contact">
              <Button accent text={t("heroButtonText")} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
