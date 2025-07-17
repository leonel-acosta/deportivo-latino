import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

interface ImageWithTextProps {
  title: string;
  text: string;
  sectionId: string;
  reverse?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  imageUrl: string;
  button?: string;
  buttonUrl?: string;
}

export default function ImageWithText({
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
}: ImageWithTextProps) {
  const t = useTranslations("LandingPage");

  return (
    <>
      <section
        id={sectionId}
        className={`{"w-full grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-8 gap  lg:p-20 ${
          primary
            ? "bg-primary text-white"
            : secondary
            ? "bg-secondary text-white"
            : tertiary
            ? "bg-tertiary text-white"
            : "bg-white text-foreground"
        }`}
      >
        <div
          className={`h-fit px-10 lg:px-20 py-20 my-auto ${
            reverse ? "order-first lg:order-last" : "order-first lg:order-first"
          }`}
        >
          <h2 className="uppercase mb-2 heading-font">{title}</h2>
          <p className="text-lg mb-6">{text}</p>
          {button && buttonUrl && (
            <Link href={buttonUrl}>
              <Button text={button} />
            </Link>
          )}
        </div>
        <div
          className={`w-screen h-[400px] lg:w-[700px] relative overflow-hidden shadow-lg mx-auto ${
            reverse ? "order-last lg:order-first" : "order-last lg:order-last"
          }`}
        >
          <Image
            alt="mision"
            className="object-cover"
            fill
            src={imageUrl}
            unoptimized
          />
        </div>
      </section>
    </>
  );
}
