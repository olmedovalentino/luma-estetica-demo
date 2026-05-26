import Image from "next/image";

import { hasPublicImage } from "@/lib/asset";
import { site } from "@/lib/site";

export function SiteFooter() {
  const hasLogo = hasPublicImage(site.logoUrl);

  return (
    <footer className="border-t border-[#DDD4C8] bg-[#EFE9DF]">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr] lg:px-8 lg:py-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden border border-[#DDD4C8] bg-[#F5F1EA]">
              {hasLogo ? (
                <Image
                  src={site.logoUrl}
                  alt={`Logo de ${site.businessName}`}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              ) : (
                <span className="text-[0.72rem] font-semibold tracking-[0.18em] text-[#151515]">DA</span>
              )}
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.08em] text-[#151515]">
                {site.businessName}
              </p>
              <p className="text-sm text-[#4F4A44]">{site.tagline}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7A6A57]">Secciones</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#4F4A44]">
            {site.footerNavigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#151515]">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#7A6A57]">Contacto</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#4F4A44]">
            <p>{site.location}</p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#151515]"
            >
              {site.instagramHandle}
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#151515]"
            >
              {site.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
