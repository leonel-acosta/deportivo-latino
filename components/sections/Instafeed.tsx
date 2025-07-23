import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import Script from "next/script";

interface InstafeedProps {
  title: string;
  text: string;
  sectionId: string;
  embedCode?: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  button?: string;
  buttonUrl?: string;
}

export default function Instafeed({
  sectionId,
  title,
  text,
  embedCode,
  primary,
  secondary,
  tertiary,
  button,
  buttonUrl,
}: InstafeedProps) {
  const t = useTranslations("LandingPage");

  return (
    <>
      <section
        id={sectionId}
        className={`w-full text-center gap-2 lg:gap-8 gap py-20 px-5 ${
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
        <p className="text-lg mb-6">{text}</p>
        <Script src="http://cdn.lightwidget.com/widgets/lightwidget.js" />

        {embedCode ? (
          <iframe
            src={embedCode}
            scrolling="no"
            className="w-full border-0 overflow-hidden"
            style={{ height: "600px", marginBottom: "20px" }}
          ></iframe>
        ) : null}

        {button && buttonUrl && (
          <Link href={buttonUrl}>
            <Button text={button} />
          </Link>
        )}
      </section>
    </>
  );
}
