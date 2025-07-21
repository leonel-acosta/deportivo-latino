"use client";

import { useEffect, useState } from "react";

interface JotformEmbedProps {
  src: string;
  width?: string | number;
  height?: string | number;
}

export default function JotformEmbed({
  src,
  width = "100%",
  height = 939,
}: JotformEmbedProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <iframe
      src={src}
      title="Jotform"
      width={typeof width === "number" ? `${width}px` : width}
      height={typeof height === "number" ? `${height}px` : height}
      style={{ border: "none" }}
      allow="geolocation; microphone; camera; fullscreen; payment"
      scrolling="no"
      loading="lazy"
      onLoad={() => {
        if (typeof window !== "undefined" && window.parent) {
          window.parent.scrollTo?.(0, 0);
        }
      }}
    />
  );
}
