import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";

type SiteHeaderProps = {
  whatsappUrl: string;
};

export function SiteHeader({ whatsappUrl }: SiteHeaderProps) {
  const isWhatsAppAvailable = whatsappUrl !== "#";

  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-[rgba(248,250,251,0.88)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 text-[#18212b]">
          <span className="relative h-11 w-11 overflow-hidden rounded-full border border-[#dbe3e8] bg-white">
            <Image
              src={site.logoUrl}
              alt="Logo de Norte Equipa"
              fill
              sizes="44px"
              className="object-cover"
            />
          </span>
          <span className="font-heading text-[1.35rem] font-semibold tracking-[-0.03em]">
            Norte Equipa
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-7 text-sm font-medium text-[#51606d] lg:flex">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#18212b]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden justify-self-end lg:block">
          <ButtonLink
            href={whatsappUrl}
            target={isWhatsAppAvailable ? "_blank" : undefined}
            rel={isWhatsAppAvailable ? "noopener noreferrer" : undefined}
            className="bg-[#18212b] text-white hover:bg-[#24303d]"
          >
            Consultar por WhatsApp
          </ButtonLink>
        </div>

        <details className="relative justify-self-end lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#d6dde2] bg-white px-4 py-2 text-sm font-semibold text-[#18212b]">
            Menu
          </summary>
          <div className="absolute right-0 top-14 w-72 rounded-[1.75rem] border border-[#dbe3e8] bg-white p-4 shadow-[0_30px_60px_-36px_rgba(24,33,43,0.35)]">
            <div className="flex flex-col gap-2">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm text-[#51606d] transition hover:bg-[#f2f5f7] hover:text-[#18212b]"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <ButtonLink
                href={whatsappUrl}
                target={isWhatsAppAvailable ? "_blank" : undefined}
                rel={isWhatsAppAvailable ? "noopener noreferrer" : undefined}
                className="w-full bg-[#18212b] text-white hover:bg-[#24303d]"
              >
                Consultar por WhatsApp
              </ButtonLink>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
