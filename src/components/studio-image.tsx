"use client";

import Image from "next/image";
import { useState } from "react";

type StudioImageProps = {
  src: string;
  alt: string;
  className: string;
  imageClassName?: string;
  fallbackLabel: string;
  fallbackTone?: "light" | "dark";
};

export function StudioImage({
  src,
  alt,
  className,
  imageClassName = "object-cover object-center",
  fallbackLabel,
  fallbackTone = "light",
}: StudioImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    const fallbackClasses =
      fallbackTone === "dark"
        ? "bg-[linear-gradient(145deg,#6F7C61,#303B2C)] text-white"
        : "bg-[linear-gradient(145deg,#F7F4EE,#E4D7C5)] text-[#303B2C]";

    return (
      <div
        aria-label={alt}
        className={`flex items-end justify-start overflow-hidden ${fallbackClasses} ${className}`}
      >
        <div className="p-5">
          <span className="inline-flex rounded-full border border-current/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em]">
            {fallbackLabel}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className={imageClassName}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
