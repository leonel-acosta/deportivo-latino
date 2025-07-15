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

export default function Home() {
  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
      <Hero />
      <ImageWithText />
      <Gallery />
      <Stats />
      <Teams />
      <Results />
      <Shop />
      <Fundraising />
      <Instafeed />
      <Contact />
    </main>
  );
}
