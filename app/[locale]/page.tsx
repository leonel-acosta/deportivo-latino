import ".././globals.css";
import { useTranslations } from "next-intl";

import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import ImageWithText from "@/components/sections/ImageWithText";
import Instafeed from "@/components/sections/Instafeed";
import Results from "@/components/sections/Results";
import Teams from "@/components/sections/Teams";
import Stats from "@/components/sections/Stats";
import ImageBanner from "@/components/sections/ImageBanner";

export default function Home() {
  const t = useTranslations("LandingPage");

  return (
    <main className="flex flex-col row-start-2 items-center sm:items-center">
      <Hero
        sectionId="hero"
        title={t("heroTitle")}
        text={t("heroText")}
        backgroundImageUrl="https://res.cloudinary.com/dkarbzbwx/image/upload/v1752619664/Portada_msuvu0.png"
        button={t("heroButtonText")}
        buttonUrl="#contact"
      />
      <ImageWithText
        sectionId="video"
        title={t("aboutTitle")}
        text={t("aboutText")}
        vertical
        center
      />
      <video
        src="https://res.cloudinary.com/dkarbzbwx/video/upload/f_auto,q_auto,w_1920/video-latino-web_v2kqhu.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full lg:w-3/4 object-cover"
      />
      <ImageWithText
        sectionId="mission"
        title={t("missionTitle")}
        text={t("missionText")}
        imageUrl="https://res.cloudinary.com/dkarbzbwx/image/upload/v1760775955/1760771377171_ynbjea.jpg"
      />
      <ImageWithText
        sectionId="goals"
        title={t("goalsTitle")}
        text={t("goalsText")}
        imageUrl="https://res.cloudinary.com/dkarbzbwx/image/upload/v1760775933/AS0W9328_c4cqkn.jpg"
        reverse
        tertiary
      />
      <Stats
        sectionId="stats"
        titleTeams={t("statsTeams")}
        valueTeams="6"
        titleMembers={t("statsMembers")}
        valueMembers="126"
        titleNationalities={t("statsNationalities")}
        valueNationalities="18"
        primary
      />
      <Teams
        sectionId="teams"
        title={t("teamsTitle")}
        text={t("teamsText")}
        tertiary
      />
      <ImageWithText
        sectionId="cta"
        title={t("ctaTitle")}
        text={t("ctaText")}
        vertical
        center
        secondary
        button={t("ctaButton")}
        buttonUrl="#contact"
      />
      <Results sectionId="results" title={t("resultsTitle")} text="" />
      <ImageBanner
        sectionId="fundraising"
        title={t("fundraisingTitle")}
        text={t("fundraisingText")}
        backgroundImage="https://res.cloudinary.com/dkarbzbwx/image/upload/v1752760675/pokalspiel_dep_latino_188_qehubo.jpg"
        button={t("fundraisingButton")}
        buttonUrl="https://www.startnext.de/"
      />
      <Instafeed
        sectionId="instafeed"
        title={t("instafeedTitle")}
        text={t("instafeedText")}
        button={t("instafeedButton")}
        buttonUrl="https://www.instagram.com/clubdeportivolatino"
        primary
        embedCode="//lightwidget.com/widgets/86a3e0d382c45787957189fa6d47e7b4.html"
      />
      <Contact
        sectionId="contact"
        title={t("contactTitle")}
        text={t("contactText")}
      />
    </main>
  );
}
