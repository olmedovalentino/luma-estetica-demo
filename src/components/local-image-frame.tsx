import Image from "next/image";

import { hasPublicImage } from "@/lib/asset";

type LocalImageFrameProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  label?: string;
};

export function LocalImageFrame({
  src,
  alt,
  sizes,
  className = "",
  imageClassName = "object-cover",
  priority = false,
  label = "Imagen pendiente",
}: LocalImageFrameProps) {
  const hasImage = hasPublicImage(src);

  return (
    <div className={`relative overflow-hidden bg-[#E7E0D5] ${className}`}>
      {hasImage ? (
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className={imageClassName} />
      ) : (
        <div className="flex h-full min-h-[240px] w-full flex-col justify-between bg-[linear-gradient(135deg,#EDE6DB_0%,#DDD1C1_100%)] p-5 text-[#5F5A53]">
          <span className="text-[0.68rem] font-semibold uppercase tracking-[0.26em]">
            {label}
          </span>
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-[#7A6A57]">Reemplazar por</p>
            <p className="mt-2 text-base font-medium text-[#151515]">{src.split("/").pop()}</p>
          </div>
        </div>
      )}
    </div>
  );
}
