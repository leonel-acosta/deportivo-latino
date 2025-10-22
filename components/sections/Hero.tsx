import { useTranslations } from "next-intl";
import Button from "../ui/Button";

interface HeroProps {
  title: string;
  text: string;
  sectionId: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  center?: boolean;
  backgroundImageUrl?: string;
  videoUrl?: string;
  button?: string;
  buttonUrl?: string;
}

export default function Hero({
  sectionId,
  title,
  text,
  primary,
  secondary,
  tertiary,
  center,
  backgroundImageUrl,
  videoUrl,
  button,
  buttonUrl,
}: HeroProps) {
  const t = useTranslations("LandingPage");

  return (
    <section
      id={sectionId}
      className={`bg-hero bg-cover bg-center h-screen md:h-screen lg:grid lg:h-200 w-full lg:place-content-center place-content-center mb-0 
        ${center ? "text-center lg:text-center" : "text-left lg:text-left"}
               ${
                 primary
                   ? "bg-primary text-white"
                   : secondary
                   ? "bg-secondary text-white"
                   : tertiary
                   ? "bg-tertiary text-white"
                   : "bg-white text-foreground"
               }`}
      style={
        backgroundImageUrl
          ? {
              backgroundImage: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      <div className="mx-auto w-full max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto lg:text-center">
          <h1 className="hero-title lg:px-2 mb-2 text-size-3xl tracking-tight text-white lg:text-5xl font-bold sm:text-5xl uppercase">
            {title}
          </h1>

          <p className="mb-5 lg:px-5 text-prose text-base text-pretty text-white sm:text-lg/relaxed uppercase font-bold">
            {text}
          </p>
          {button && buttonUrl && (
            <div className="mt-4 flex lg:justify-center gap-4 sm:mt-6">
              <a href={buttonUrl}>
                <Button accent text={button} />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
