"use client";

import { usePathname, useRouter } from "next/navigation";
import { locales } from "../../i18n/i18n";
export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1];
  const restOfPath = pathname.split("/").slice(2).join("/");

  const changeLocale = (newLocale: string) => {
    const newPath = `/${newLocale}/${restOfPath}`;
    router.push(newPath);
  };

  return (
    <select
      defaultValue={currentLocale}
      onChange={(e) => changeLocale(e.target.value)}
      className="language-selector"
    >
      {locales.map((loc) => (
        <option key={loc} value={loc} className="text-black">
          {loc.toUpperCase()}
        </option>
      ))}
    </select>
  );
}
