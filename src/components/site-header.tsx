import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";

type SiteHeaderProps = {
  whatsappUrl: string;
};

export function SiteHeader({ whatsappUrl }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E8E8E8] bg-[rgba(255,255,255,0.94)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="inline-flex items-center gap-3 text-[#111111]">
          {site.media.logo ? (
            <Image
              src={site.media.logo}
              alt={site.shortName}
              width={190}
              height={58}
              className="h-11 w-auto object-contain sm:h-12"
            />
          ) : (
            <>
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#DADADA] bg-white text-sm font-bold text-[#E43125]">
                FA
              </span>
              <span className="flex flex-col">
                <span className="font-serif text-[1.02rem] font-semibold leading-tight tracking-[0.06em] text-[#111111]">
                  {site.shortName}
                </span>
                <span className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-[#5F5F5F]">
                  Aires acondicionados
                </span>
              </span>
            </>
          )}
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-[#5F5F5F] lg:flex">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#111111]">
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
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#D2D2D2] bg-white px-4 py-2 text-sm font-semibold text-[#111111]">
            Menú
          </summary>
          <div className="absolute right-0 top-14 w-64 rounded-3xl border border-[#E8E8E8] bg-white p-4 shadow-soft">
            <div className="flex flex-col gap-2">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm text-[#5F5F5F] transition hover:bg-[#F4F4F4] hover:text-[#111111]"
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
