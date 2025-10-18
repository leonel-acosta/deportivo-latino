import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

interface ImageWithTextProps {
  title: string;
  text: string;
  sectionId: string;
  vertical?: boolean;
  reverse?: boolean;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  center?: boolean;
  imageUrl?: string;
  videoUrl?: string;
  button?: string;
  buttonUrl?: string;
}

export default function ImageWithText({
  sectionId,
  title,
  text,
  reverse = false,
  vertical = false,
  primary,
  secondary,
  tertiary,
  center,
  imageUrl,
  videoUrl,
  button,
  buttonUrl,
}: ImageWithTextProps) {
  const t = useTranslations("LandingPage");

  return (
    <>
      <section
        id={sectionId}
        className={`w-full grid grid-cols-1 gap-2 ${
          vertical
            ? "lg:grid-cols-1 lg:px-20"
            : "lg:grid-cols-2 lg:gap-8 lg:p-20"
        }
            ${
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
          } ${
            center ? "text-center lg:text-center" : "text-left lg:text-left"
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
        {(imageUrl || videoUrl) && (
          <div
            className={`w-full h-[400px] lg:w-full lg:h-[500px] relative overflow-hidden shadow-lg mx-auto ${
              reverse ? "order-last lg:order-first" : "order-last lg:order-last"
            }`}
          >
            {videoUrl && (
              <video
                src={videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            )}

            {imageUrl && (
              <Image
                alt="mision"
                className="object-cover"
                fill
                src={imageUrl}
                unoptimized
              />
            )}
          </div>
        )}
      </section>
    </>
  );
}
