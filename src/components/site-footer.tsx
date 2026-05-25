import Image from "next/image";

import { hasPublicImage } from "@/lib/asset";
import { site } from "@/lib/site";

export function SiteFooter() {
  const hasLogo = hasPublicImage(site.logoUrl);

  return (
    <footer className="border-t border-[#E8DDD2] bg-[#F3ECE2]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#D8C1A8] bg-white">
              {hasLogo ? (
                <Image
                  src={site.logoUrl}
                  alt={`Logo de ${site.businessName}`}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              ) : (
                <span className="text-[0.72rem] font-semibold tracking-[0.18em] text-[#8A5A3C]">DA</span>
              )}
            </span>
            <p className="font-editorial text-[2rem] leading-none text-[#1F1A17]">
              {site.businessName}
            </p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#6D655E]">{site.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8A5A3C]">
            Navegación
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#6D655E]">
            {site.footerNavigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#1F1A17]">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8A5A3C]">
            Contacto
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#6D655E]">
            <p>{site.location}</p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#1F1A17]"
            >
              {site.instagramHandle}
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#1F1A17]"
            >
              {site.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
