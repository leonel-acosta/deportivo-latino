import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

interface ImageBannerProps {
  title: string;
  text: string;
  sectionId: string;
  backgroundImage?: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  center?: boolean;
  button?: string;
  buttonUrl?: string;
}

export default function ImageBanner({
  sectionId,
  title,
  text,
  backgroundImage,
  primary,
  secondary,
  tertiary,
  center,
  button,
  buttonUrl,
}: ImageBannerProps) {
  const t = useTranslations("LandingPage");

  return (
    <>
      <section
        id={sectionId}
        className={`w-full gap-2 lg:gap-8 gap py-20 px-5 lg:p-40 ${
          primary
            ? "bg-primary text-white"
            : secondary
            ? "bg-secondary text-white"
            : tertiary
            ? "bg-tertiary text-white"
            : "bg-white text-foreground"
        }`}
        style={
          backgroundImage
            ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }
            : undefined
        }
      >
        <div
          className={`p-10 w-fit lg:w-[700px] bg-secondary  text-white bg-opaciy-80 shadow-lg ${
            center ? "mx-auto text-center" : ""
          } `}
        >
          <h2 className="uppercase mb-2 heading-font">{title}</h2>
          <p className="text-lg mb-6">{text}</p>

          {button && buttonUrl && (
            <Link href={buttonUrl}>
              <Button text={button} />
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
