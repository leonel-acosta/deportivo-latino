import React, { ReactNode } from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  accent?: boolean;
  children?: ReactNode;
}

export default function Button({
  text,
  //   onClick = () => {}, // valor por defecto
  primary = false,
  secondary = false,
  accent = false,
  children,
}: ButtonProps) {
  return (
    <button
      className={`text-white rounded-md py-3 px-5 mb-2 w-fit hover:opacity-80 transition ease-in-out uppercase font-bold ${
        primary
          ? "bg-primary text-white"
          : secondary
          ? "bg-secondary text-white"
          : accent
          ? "bg-accent text-white"
          : "bg-black"
      }`}
      //   onClick={onClick}
    >
      {children || text}
    </button>
  );
}
