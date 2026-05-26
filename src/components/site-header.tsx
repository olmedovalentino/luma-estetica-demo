import Image from "next/image";

import { hasPublicImage } from "@/lib/asset";
import { site } from "@/lib/site";

export function SiteHeader() {
  const hasLogo = hasPublicImage(site.logoUrl);

  return (
    <header className="sticky top-0 z-40 border-b border-[#DDD4C8] bg-[rgba(248,246,241,0.88)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 text-[#151515]">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden border border-[#DDD4C8] bg-[#EFE8DD]">
            {hasLogo ? (
              <Image
                src={site.logoUrl}
                alt={`Logo de ${site.businessName}`}
                fill
                sizes="44px"
                className="object-cover"
              />
            ) : (
              <span className="text-[0.72rem] font-semibold tracking-[0.18em] text-[#151515]">DA</span>
            )}
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.08em] text-[#151515]">
              {site.businessName}
            </span>
            <span className="text-xs tracking-[0.12em] text-[#6A645D]">{site.locationLabel}</span>
          </div>
        </a>

        <nav className="hidden items-center justify-end gap-7 text-xs font-semibold uppercase tracking-[0.18em] text-[#6A645D] lg:flex">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#151515]">
              {item.label}
            </a>
          ))}
        </nav>

        <details className="relative justify-self-end lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 border border-[#DDD4C8] bg-[#F8F6F1] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#151515]">
            Menú
          </summary>
          <div className="absolute right-0 top-14 w-64 border border-[#DDD4C8] bg-[#F8F6F1] p-4">
            <div className="flex flex-col gap-2">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="border-b border-[#ECE7DF] px-1 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#6A645D] transition hover:text-[#151515]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
