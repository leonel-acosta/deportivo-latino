import "../../globals.css";
import { useTranslations } from "next-intl";

import PageTitle from "@/components/sections/PageTitle";

export default function PrivacyPage() {
  const t = useTranslations("PrivacyPage");

  return (
    <main className="flex flex-col row-start-2 items-center sm:items-center">
      <PageTitle sectionId="privacy" title={t("privacyTitle")} />

      <section
        id="content"
        className="w-full lg:gap-8 gap lg:p-20 bg-white text-foreground border-b-4 border-primary-500"
      >
        <div className="h-fit w-3/4 m-auto  py-10 my-auto">
          <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>

          <p>
            <strong>Club Deportivo Latino Berlin e.V.</strong>
            <br />
            c/o Jaime Engo
            <br />
            Karl-Marx-Strasse 45
            <br />
            12043 Berlin, Germany
          </p>

          <p>
            Email: <a href="mailto:info@club-latino.de">info@club-latino.de</a>
            <br />
            Website:{" "}
            <a href="https://www.clubdeportivolatinoberlin.com/">
              www.clubdeportivolatinoberlin.com
            </a>
          </p>

          <br />
          <h3 className="text-xl font-semibold mt-4 mb-2">
            1. General Information
          </h3>
          <p>
            The protection of your personal data is very important to us. This
            privacy policy explains what information we collect when you visit
            our website and how we use it. We process personal data in
            accordance with the General Data Protection Regulation (GDPR) and
            the German Federal Data Protection Act (BDSG).
          </p>

          <br />
          <h3 className="text-xl font-semibold mt-4 mb-2">
            2. Responsible Entity
          </h3>
          <p>
            The responsible entity for data processing on this website is:
            <br />
            <strong>Club Deportivo Latino Berlin e.V.</strong>
            <br />
            c/o Jaime Engo, Karl-Marx-Strasse 45, 12043 Berlin, Germany
            <br />
            Email: <a href="mailto:info@club-latino.de">info@club-latino.de</a>
          </p>

          <br />
          <h3 className="text-xl font-semibold mt-4 mb-2">
            3. Data Collection on Our Website
          </h3>
          <p>
            Our website can generally be used without providing personal data.
            However, certain features may require the collection of personal
            information, such as when you contact us via email or a contact
            form. In such cases, the data you provide will only be used to
            process your request and will not be shared without your consent.
          </p>

          <br />
          <h3 className="text-xl font-semibold mt-4 mb-2">
            4. Use of Google Fonts
          </h3>
          <p>
            This website uses <strong>Google Fonts</strong>, a service provided
            by Google LLC, to ensure a consistent display of fonts across all
            devices. When you access a page, your browser loads the required
            fonts from Google’s servers.
          </p>
          <p>
            During this process, Google may collect and store information such
            as your IP address and browser details. Google Fonts are used on the
            basis of Article 6(1)(f) GDPR, as we have a legitimate interest in
            maintaining a uniform and appealing presentation of our online
            services.
          </p>
          <p>
            More information on Google Fonts can be found at:
            <a
              href="https://developers.google.com/fonts/faq"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://developers.google.com/fonts/faq
            </a>{" "}
            and in Google’s privacy policy:
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://policies.google.com/privacy
            </a>
            .
          </p>

          <br />
          <h3 className="text-xl font-semibold mt-4 mb-2">
            5. Integration of Taggembed
          </h3>
          <p>
            Our website uses <strong>Taggembed</strong>, a social media content
            aggregator provided by Social Scape Tech LLP, to display social
            media feeds (e.g., Instagram or Facebook posts) directly on our
            pages.
          </p>
          <p>
            When visiting a page that includes a Taggembed widget, your browser
            connects to Taggembed’s servers. This may involve transmitting your
            IP address and information about the pages you visit. The use of
            Taggembed is based on Article 6(1)(f) GDPR, as it enhances our
            online presence by providing dynamic social media content.
          </p>
          <p>
            You can find Taggembed’s privacy policy here:
            <a
              href="https://taggbox.com/privacy-policy/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://taggbox.com/privacy-policy/
            </a>
            .
          </p>

          <br />
          <h3 className="text-xl font-semibold mt-4 mb-2">6. Your Rights</h3>
          <p>
            You have the right to obtain information about your stored personal
            data, its origin and recipients, and the purpose of data processing
            at any time. You also have the right to request the correction,
            blocking, or deletion of this data.
          </p>
          <p>
            For questions about your personal data, please contact us at:
            <a href="mailto:info@club-latino.de">info@club-latino.de</a>.
          </p>

          <br />
          <h3 className="text-xl font-semibold mt-4 mb-2">
            7. Changes to This Privacy Policy
          </h3>
          <p>
            We reserve the right to update this privacy policy to comply with
            new legal requirements or to reflect changes to our website and
            services. The current version will always be available on this page.
          </p>

          <br />
          <hr />
          <p className="text-sm text-gray-500 mt-4">
            Last updated: October 2025
          </p>
        </div>
      </section>
    </main>
  );
}
