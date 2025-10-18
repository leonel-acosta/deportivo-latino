import { useTranslations } from "next-intl";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

interface statsProps {
  title?: string;
  text?: string;
  sectionId: string;
  titleTeams: string;
  titleMembers: string;
  titleNationalities: string;
  valueTeams: string;
  valueMembers: string;
  valueNationalities: string;
  primary?: boolean;
  secondary?: boolean;
  tertiary?: boolean;
}

export default function Stats({
  sectionId,
  title,
  text,
  titleMembers,
  valueMembers,
  titleTeams,
  valueTeams,
  titleNationalities,
  valueNationalities,
  primary,
  secondary,
  tertiary,
}: statsProps) {
  const t = useTranslations("LandingPage");

  return (
    <>
      <section
        id={sectionId}
        className={`stats w-full text-center gap-2 lg:gap-8 gap py-20 px-5 ${
          primary
            ? "bg-primary text-white"
            : secondary
            ? "bg-secondary text-white"
            : tertiary
            ? "bg-tertiary text-white"
            : "bg-white text-foreground"
        }`}
      >
        {title && text && (
          <>
            <h2 className="uppercase mb-2 heading-font">{title}</h2>
            <p className="text-lg mb-6">{text}</p>
          </>
        )}
        <div className="flex flex-wrap flex-row justify-evenly gap-10">
          <div className="flex flex-col items-center gap-0">
            <p className="text-lg">{valueTeams}</p>
            <h5 className="text-2xl font-bold">{titleTeams}</h5>
          </div>
          <div className="flex flex-col items-center gap-0">
            <p className="text-lg">{valueMembers}</p>
            <h5 className="text-2xl font-bold">{titleMembers}</h5>
          </div>
          <div className="flex flex-col items-center gap-0">
            <p className="text-lg">{valueNationalities}</p>
            <h5 className="text-2xl font-bold">{titleNationalities}</h5>
          </div>
        </div>
      </section>
    </>
  );
}
