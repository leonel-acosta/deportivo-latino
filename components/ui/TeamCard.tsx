import React, { ReactNode } from "react";

interface teamCardProps {
  title: string;
  subtitle?: string;
  text?: string;
  imageUrl?: string;
  imageAlt?: string;
  link?: string;
  primary?: boolean;
  secondary?: boolean;
  accent?: boolean;
  children?: ReactNode;
}

export default function TeamCard({
  title,
  subtitle,
  text,
  link,
  imageUrl,
  imageAlt = "Card image",
  primary = false,
  secondary = false,
  accent = false,
  children,
}: teamCardProps) {
  return (
    <>
      <a
        href={link}
        className="team-card group w-[500px] h-[500px] relative block bg-secondary"
      >
        <img
          alt={imageAlt}
          src={imageUrl}
          className="absolute inset-0 h-full w-full object-cover opacity-60 transition-opacity group-hover:opacity-30"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium tracking-widest accent uppercase">
            {subtitle}
          </p>

          <h3 className="text-xl font-bold text-white sm:text-2xl uppercase">
            {title}
          </h3>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white uppercase">{text}</p>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
