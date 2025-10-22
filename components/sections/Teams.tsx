import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";
import TeamCard from "../ui/TeamCard";
interface teamsProps {
  title: string;
  text: string;
  sectionId: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
  button?: string;
  buttonUrl?: string;
}

export default function Teams({
  sectionId,
  title,
  text,
  primary,
  secondary,
  tertiary,
  button,
  buttonUrl,
}: teamsProps) {
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
        <p className="text-lg mb-10">{text}</p>

        <div className="flex flex-wrap justify-center gap-4">
          <TeamCard
            title="HERREN I"
            subtitle="kreisliga A"
            imageUrl="https://res.cloudinary.com/dkarbzbwx/image/upload/v1760775932/AS0W6759_crvfh7.jpg"
            imageAlt="primer equipo"
            text={t("firstTeamCaption")}
          />
          <TeamCard
            title="HERREN II"
            subtitle="kreisliga C"
            text={t("secondTeamCaption")}
            imageUrl="https://res.cloudinary.com/dkarbzbwx/image/upload/v1760776387/latino-II_t698h4.jpg"
            imageAlt="segundo equipo"
          />
          <TeamCard
            title="HERREN III"
            subtitle="kreisliga C"
            text={t("thirdTeamCaption")}
          />
          <TeamCard
            title="U-40"
            subtitle="kreisliga"
            text={t("u40TeamCaption")}
          />
          <TeamCard
            title="U-50"
            subtitle="kreisliga"
            text={t("u50TeamCaption")}
          />
          <TeamCard
            title="FRAUEN"
            subtitle="kreisliga"
            text={t("womenTeamCaption")}
          />
        </div>

        {button && buttonUrl && (
          <Link href={buttonUrl}>
            <Button text={button} />
          </Link>
        )}
      </section>
    </>
  );
}
