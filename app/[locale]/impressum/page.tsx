import "../../globals.css";
import { useTranslations } from "next-intl";

import Contact from "@/components/sections/Contact";
import Hero from "@/components/sections/Hero";
import ImageWithText from "@/components/sections/ImageWithText";
import Instafeed from "@/components/sections/Instafeed";
import Results from "@/components/sections/Results";
import Shop from "@/components/sections/Shop";
import Stats from "@/components/sections/Stats";
import Teams from "@/components/sections/Teams";
import Gallery from "@/components/sections/Gallery";
import ImageBanner from "@/components/sections/ImageBanner";
import PageTitle from "@/components/sections/PageTitle";
import HtmlBlock from "@/components/common/HtmlBlock";

export default function ImpressumPage() {
  const t = useTranslations("ImpressumPage");

  return (
    <main className="flex flex-col row-start-2 items-center sm:items-center">
      <PageTitle
        sectionId="impressum"
        title={t("impressumTitle")}
        text={t("impressumText")}
      />

      <section
        id="content"
        className="w-full lg:gap-8 gap lg:p-20 bg-white text-foreground border-b-4 border-primary-500"
      >
        <div className="h-fit px-10 lg:px-20 py-5 my-auto">
          <HtmlBlock
            content={
              <>
                <p>
                  <strong>
                    Responsable del contenido, diseño y estructura de estas
                    páginas:
                  </strong>
                </p>
                <p>
                  <strong>Club Deportivo Latino e.V.</strong>
                  <br />
                  [Dirección completa del club]
                  <br />
                  [Código postal, Ciudad, País]
                </p>
                <p>
                  Tel.: [Número de teléfono principal]
                  <br />
                  Fax: [Número de fax, si aplica]
                  <br />
                  Correo electrónico:{" "}
                  <a href="mailto:info@club-latino.de">info@club-latino.de</a>
                  <br />
                  Webmaster:{" "}
                  <a href="mailto:webmaster@club-latino.de">
                    webmaster@club-latino.de
                  </a>
                  <br />
                  Sitio web:{" "}
                  <a href="https://www.club-latino.de">www.club-latino.de</a>
                </p>
                <p>
                  <strong>Personas con poder de representación:</strong>
                  <br />
                  [Nombre, cargo – Presidente/a]
                  <br />
                  [Nombre, cargo – Vicepresidente/a]
                  <br />
                  [Nombre, cargo – Tesorero/a]
                </p>
                <p>
                  Registro de asociaciones: Amtsgericht Charlottenburg, Berlin
                  <br />
                  Número de registro: [VR-XXXX]
                  <br />
                  Número fiscal: [Steuer-Nr. XX/XXX/XXXXX]
                </p>

                <hr />
                <br />
                <h3>Cláusula de responsabilidad</h3>
                <p>
                  Los contenidos publicados en el sitio web del Club Deportivo
                  Latino e.V. han sido elaborados con el mayor cuidado posible.
                  Sin embargo, no se garantiza la actualidad, exactitud o
                  integridad de la información proporcionada.
                </p>
                <p>
                  Todas las informaciones se ofrecen sin garantía. Se excluyen
                  las reclamaciones de responsabilidad derivadas del uso de esta
                  información.
                </p>
                <p>
                  A pesar del cuidadoso control de los contenidos, no asumimos
                  ninguna responsabilidad por los contenidos de los enlaces
                  externos. Los responsables del contenido de las páginas
                  enlazadas son exclusivamente sus respectivos operadores.
                </p>
              </>
            }
          />
        </div>
      </section>

      <Contact
        sectionId="contact"
        title={t("contactTitle")}
        text={t("contactText")}
      />
    </main>
  );
}
