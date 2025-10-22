"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import LanguageSwitcher from "../common/LanguageSwitcher";
import Logo from "../common/Logo";
import Button from "../ui/Button";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Header");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 bg-secondary text-white py-4 px-6 sm:px-10 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="w-24">
        <a href="/#" className="hover:underline">
          <Logo />
        </a>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden sm:flex space-x-6 lg:space-x-8 uppercase text-sm font-semibold items-center">
        <a href="/#mission" className="hover:underline">
          {t("missionLink")}
        </a>
        <a href="/#teams" className="hover:underline">
          {t("teamsLink")}
        </a>
        <a href="/#contact" className="hover:underline">
          {t("contactLink")}
        </a>
        <a href="/#contact">
          <Button accent text={t("joinButton")} />
        </a>
        <LanguageSwitcher />
      </nav>

      {/* Mobile Hamburger Icon */}
      <div className="sm:hidden">
        <button onClick={toggleMenu} aria-label="Open menu">
          <Bars3Icon className="h-8 w-8 text-white" />
        </button>
      </div>

      {/* Overlay: optional click outside to close */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40" onClick={closeMenu}>
          {/* Invisible backdrop (10% width left side) */}
          <div className="w-[10%] h-full inline-block" />

          {/* Menu panel (90% width) */}
          <div
            className="w-[90%] h-screen bg-secondary text-white fixed top-0 right-0 z-50 shadow-lg px-8 py-10 flex flex-col space-y-8 text-xl font-semibold uppercase"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
          >
            {/* Close Button */}
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="absolute top-5 right-5"
            >
              <XMarkIcon className="h-8 w-8 text-white" />
            </button>

            {/* Nav Links */}
            <a href="/#mission" onClick={closeMenu} className="hover:underline">
              {t("missionLink")}
            </a>
            <a href="/#teams" onClick={closeMenu} className="hover:underline">
              {t("teamsLink")}
            </a>
            <a href="/#contact" onClick={closeMenu} className="hover:underline">
              {t("contactLink")}
            </a>
            <a href="/#contact" onClick={closeMenu}>
              <Button accent text={t("joinButton")} />
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
