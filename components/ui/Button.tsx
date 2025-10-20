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
      className={`text-white py-4 px-8 mb-2 hover:opacity-70 transition ease-in-out uppercase 
        ${
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
