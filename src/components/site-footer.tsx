import Image from "next/image";

import { hasPublicImage } from "@/lib/asset";
import { site } from "@/lib/site";

export function SiteFooter() {
  const hasLogo = hasPublicImage(site.logoUrl);

  return (
    <footer className="border-t border-[#DCD4C5] bg-[#EFE9DF]">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr] lg:px-8 lg:py-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border border-[#DCD4C5] bg-[#EEF0D7]">
              {hasLogo ? (
                <Image
                  src={site.logoUrl}
                  alt={`Logo de ${site.businessName}`}
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              ) : (
                <span className="text-[0.72rem] font-semibold tracking-[0.18em] text-[#181714]">LL</span>
              )}
            </span>
            <div>
              <p className="text-sm font-semibold tracking-[0.08em] text-[#181714]">
                {site.businessName}
              </p>
              <p className="text-sm text-[#514E45]">{site.tagline}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8A7A59]">Secciones</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#514E45]">
            {site.footerNavigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#181714]">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#8A7A59]">Contacto</p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#514E45]">
            <p>{site.location}</p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#181714]"
            >
              {site.instagramHandle}
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#181714]"
            >
              WhatsApp {site.whatsappDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="transition hover:text-[#181714]">
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
