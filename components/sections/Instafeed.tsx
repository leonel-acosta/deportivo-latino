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
        <h2 className="uppercase mb-2 heading-font" data-aos="fade-up">{title}</h2>
        <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="100">{text}</p>
        <div data-aos="fade-up" data-aos-delay="200">
          <Script
            type="text/javascript"
            src="https://widget.tagembed.com/embed.min.js"
          />
          <div
            className="tagembed-widget"
            style={{ width: "100%", height: "100%", overflow: "auto" }}
            data-widget-id="304737"
            data-website="1"
          ></div>
        </div>

        {button && buttonUrl && (
          <div data-aos="fade-up" data-aos-delay="300">
            <Link href={buttonUrl}>
              <Button text={button} />
            </Link>
          </div>
        )}
      </section>
    </>
  );
}
