import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";

type SiteHeaderProps = {
  whatsappUrl: string;
};

export function SiteHeader({ whatsappUrl }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#D7EAF9]/80 bg-[rgba(248,252,255,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="inline-flex items-center gap-3 text-[#0B2744]">
          {site.media.logo ? (
            <Image src={site.media.logo} alt={site.shortName} width={160} height={48} className="h-11 w-auto" />
          ) : (
            <>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0F5DA8] text-sm font-bold text-white">
                FA
              </span>
              <span className="flex flex-col">
                <span className="font-serif text-[1.02rem] font-semibold leading-tight tracking-[0.06em]">
                  {site.shortName}
                </span>
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#4B6B8C]">
                  Climatización
                </span>
              </span>
            </>
          )}
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-[#44617D] lg:flex">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#0B2744]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {site.heroCtaPrimary}
          </ButtonLink>
        </div>

        <details className="relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#CBE5F9] bg-white px-4 py-2 text-sm font-semibold text-[#0B2744]">
            Menú
          </summary>
          <div className="absolute right-0 top-14 w-64 rounded-3xl border border-white/80 bg-[#FDFEFF] p-4 shadow-soft">
            <div className="flex flex-col gap-2">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm text-[#44617D] transition hover:bg-[#EFF8FF] hover:text-[#0B2744]"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <ButtonLink
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                {site.heroCtaPrimary}
              </ButtonLink>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
