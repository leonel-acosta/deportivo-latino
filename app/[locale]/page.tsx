import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import ImageWithText from "@/components/sections/ImageWithText";
import Instafeed from "@/components/sections/Instafeed";
import Results from "@/components/sections/Results";
import Shop from "@/components/sections/Shop";
import Stats from "@/components/sections/Stats";
import Teams from "@/components/sections/Teams";
import Gallery from "@/components/sections/Gallery";
import Fundraising from "@/components/sections/Fundraising";
import ".././globals.css";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("LandingPage");

  return (
    <main className="flex flex-col row-start-2 items-center sm:items-center">
      <Hero />
      <ImageWithText
        sectionId="mission"
        title={t("missionTitle")}
        text={t("missionText")}
        imageUrl="https://res.cloudinary.com/dkarbzbwx/image/upload/v1752618181/Imagen_de_WhatsApp_2025-07-14_a_las_10.33.40_a641ff19_czwzwr.jpg"
      />
      <ImageWithText
        sectionId="goals"
        title={t("goalsTitle")}
        text={t("goalsText")}
        imageUrl="https://res.cloudinary.com/dkarbzbwx/image/upload/v1752760675/pokalspiel_dep_latino_188_qehubo.jpg"
        reverse
        secondary
        button="Más información"
        buttonUrl="/#mission"
      />
      <Gallery />
      <Stats
        sectionId="stats"
        titleTeams="Equipos"
        valueTeams="6"
        titleMembers="Socios"
        valueMembers="126"
        titleNationalities="Nacionalidades"
        valueNationalities="18"
        primary
      />
      <Teams
        sectionId="teams"
        title="Equipos"
        text="Los jugadores que nos representan con orgullo en el campo de juego"
        tertiary
      />
      <Results />
      <Shop />
      <Fundraising />
      <Instafeed
        sectionId="instafeed"
        title={t("instafeedTitle")}
        text={t("instafeedText")}
        button={t("instafeedButton")}
        buttonUrl="https://www.instagram.com/clubdeportivolatino"
        primary
      />
      <Contact
        sectionId="contact"
        title={t("contactTitle")}
        text={t("contactText")}
      />
    </main>
  );
}
