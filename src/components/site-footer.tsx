import Image from "next/image";

import { site } from "@/lib/site";

export function SiteFooter() {
  const showWhatsApp = site.whatsappUrl !== "#";

  return (
    <footer className="border-t border-[#E8DDD2] bg-[#F3ECE2]">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 overflow-hidden rounded-full border border-[#D8C1A8] bg-white">
              <Image
                src={site.logoUrl}
                alt="Logo de Creativo Muebles"
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <p className="font-editorial text-[2rem] leading-none text-[#1F1A17]">
              {site.businessName}
            </p>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#6D655E]">{site.tagline}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#8A5A3C]">
            Navegacion
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
            <p>Muebles a medida en Cordoba</p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#1F1A17]"
            >
              Instagram
            </a>
            {showWhatsApp ? (
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#1F1A17]"
              >
                WhatsApp
              </a>
            ) : (
              <span>WhatsApp disponible a confirmar</span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
