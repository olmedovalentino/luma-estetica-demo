import Image from "next/image";

import { hasPublicImage } from "@/lib/asset";
import { site } from "@/lib/site";

export function SiteHeader() {
  const hasLogo = hasPublicImage(site.logoUrl);

  return (
    <header className="sticky top-0 z-40 border-b border-[#D8D2C8] bg-[rgba(248,246,241,0.92)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-[1440px] grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 text-[#151515]">
          <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden border border-[#D8D2C8] bg-[#F3F0EB]">
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
          <span className="font-editorial text-[1.75rem] leading-none tracking-[0.01em]">
            {site.businessName}
          </span>
        </a>

        <nav className="hidden items-center justify-end gap-7 text-sm uppercase tracking-[0.18em] text-[#5F5A53] lg:flex">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#151515]">
              {item.label}
            </a>
          ))}
        </nav>

        <details className="relative justify-self-end lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 border border-[#D8D2C8] bg-[#F8F6F1] px-4 py-2 text-sm uppercase tracking-[0.18em] text-[#151515]">
            Menu
          </summary>
          <div className="absolute right-0 top-14 w-64 border border-[#D8D2C8] bg-[#F8F6F1] p-4">
            <div className="flex flex-col gap-2">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="border-b border-[#ECE7DF] px-1 py-3 text-sm uppercase tracking-[0.18em] text-[#5F5A53] transition hover:text-[#151515]"
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
