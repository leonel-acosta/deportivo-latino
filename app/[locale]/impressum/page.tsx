import "../../globals.css";
import { useTranslations } from "next-intl";
import PageTitle from "@/components/sections/PageTitle";

export default function ImpressumPage() {
  const t = useTranslations("PrivacyPage");

  return (
    <main className="flex flex-col row-start-2 items-center sm:items-center">
      <PageTitle sectionId="impressum" title={t("impressumTitle")} />

      <section
        id="content"
        className="w-full lg:gap-8 gap lg:p-20 bg-white text-foreground border-b-4 border-primary-500"
      >
        <div className="h-fit w-3/4 m-auto  py-10 my-auto">
          <p>
            <strong>
              Person responsible for the content, design, and structure of these
              pages:
            </strong>
          </p>
          <p>
            <strong>Club Deportivo Latino Berlin e.V.</strong>
            <br />
            c/o Jaime Engo
            <br />
            Karl-Marx-Strasse 45
            <br />
            12043 Berlin, Germany
          </p>
          <br />
          <p>
            Tel.: [Main phone number]
            <br />
            Fax: [Fax number, if applicable]
            <br />
            Email: <a href="mailto:info@club-latino.de">info@club-latino.de</a>
            <br />
            Webmaster:{" "}
            <a href="mailto:webmaster@club-latino.de">
              webmaster@club-latino.de
            </a>
            <br />
            Website:{" "}
            <a href="https://www.clubdeportivolatinoberlin.com/">
              www.clubdeportivolatinoberlin.com
            </a>
          </p>
          <br />
          <p>
            <strong>Authorized representatives:</strong>
            <br />
            Jaime Engo Morales – President
            <br />
            Ivan Antonio Bulacio – Vice President
            <br />
            Joel Juarez – Treasurer
          </p>
          <br />
          <p>
            Register of Associations: Amtsgericht Charlottenburg, Berlin
            <br />
            Registration number: VR 15880 B
            <br />
            Tax number: [To be added if available]
          </p>
          <br />
          <hr />
          <br />
          <h3>Disclaimer</h3>
          <p>
            The contents published on the website of Club Deportivo Latino
            Berlin e.V. have been prepared with the greatest possible care.
            However, no guarantee is given for the timeliness, accuracy, or
            completeness of the information provided.
          </p>
          <br />
          <p>
            All information is provided without warranty. Liability claims
            resulting from the use of this information are excluded.
          </p>
          <p>
            Despite careful content control, we assume no responsibility for the
            content of external links. The operators of the linked pages are
            solely responsible for their content.
          </p>
        </div>
      </section>
    </main>
  );
}
