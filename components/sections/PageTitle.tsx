import { useTranslations } from "next-intl";
import Button from "../ui/Button";
import Link from "next/link";

interface PageTitleProps {
  title: string;
  text?: string;
  sectionId: string;
  reverse?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  imageUrl?: string;
  button?: string;
  buttonUrl?: string;
}

export default function PageTitle({
  sectionId,
  title,
  text,
  reverse = false,
  primary,
  secondary,
  tertiary,
  imageUrl,
  button,
  buttonUrl,
}: PageTitleProps) {
  const t = useTranslations("LandingPage");

  return (
    <section
      id={sectionId}
      className="bg-cover bg-center secondary bg-primary lg:grid lg:h-60 w-screen lg:place-content-center mb-0"
      style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
    >
      <div className="mx-auto w-screen max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="mx-auto  text-center">
          <h1 className="px-2 text-size-3xl tracking-tight text-white lg:text-5xl font-bold sm:text-5xl uppercase">
            {title}
          </h1>
          {text && (
            <p className="mt-4 px-5 text-prose text-base text-pretty text-white sm:text-lg/relaxed uppercase font-bold">
              {text}
            </p>
          )}
          <div className="mt-4 flex justify-center gap-4 sm:mt-6">
            <a href="/#contact">
              {button && buttonUrl && (
                <Link href={buttonUrl}>
                  <Button text={button} />
                </Link>
              )}{" "}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
