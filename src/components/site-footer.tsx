import Link from "next/link";

import { site } from "@/lib/site";

type SiteFooterProps = {
  whatsappUrl: string;
};

export function SiteFooter({ whatsappUrl }: SiteFooterProps) {
  const isWhatsAppAvailable = whatsappUrl !== "#";
  const hasInstagram = site.instagramUrl.startsWith("http");

  return (
    <footer className="border-t border-[#d9e1e5] bg-[#18212b] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="font-heading text-[1.45rem] font-semibold tracking-[-0.03em]">
            {site.businessName}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">{site.shortDescription}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d0b18a]">
            Navegacion
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/72">
            {site.navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d0b18a]">
            Contacto
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/72">
            <p>{site.location}</p>
            {isWhatsAppAvailable ? (
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
                WhatsApp
              </a>
            ) : (
              <p>{site.whatsappDisplay}</p>
            )}
            {hasInstagram ? (
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="block">
                Instagram
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
}
