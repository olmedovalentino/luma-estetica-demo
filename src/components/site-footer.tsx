import Image from "next/image";

import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#0D3258] bg-[#0B2744] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.75fr_0.9fr] lg:px-8">
        <div>
          {site.media.logo ? (
            <Image
              src={site.media.logo}
              alt={site.businessName}
              width={170}
              height={54}
              className="h-12 w-auto"
            />
          ) : (
            <p className="font-serif text-lg font-semibold text-[#F4FAFF]">{site.businessName}</p>
          )}
          <p className="mt-2 text-sm text-white/72">{site.footerDescription}</p>
          <p className="mt-4 text-sm text-white/72">{site.locationLabel}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#93C5FD]">
            Navegación
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white/72">
            {site.footerNavigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#93C5FD]">
            Contacto
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white/72">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              WhatsApp
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
