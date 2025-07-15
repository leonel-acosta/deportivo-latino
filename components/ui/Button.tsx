import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  accent?: boolean;
}

export default function Button({
  text,
  //   onClick = () => {}, // valor por defecto
  primary = false,
  secondary = false,
  accent = false,
}: ButtonProps) {
  return (
    <button
      className={`rounded-full text-black py-3 px-5 mx-2 w-fit hover:opacity-80 transition ease-in-out uppercase font-bold ${
        primary
          ? "bg-primary"
          : secondary
          ? "bg-secondary"
          : accent
          ? "bg-accent"
          : "bg-black"
      }`}
      //   onClick={onClick}
    >
      {text}
    </button>
  );
}
