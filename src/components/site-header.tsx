import Image from "next/image";

import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#E8DDD2]/90 bg-[#FFFDF8]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 text-[#1F1A17]">
          <span className="relative h-11 w-11 overflow-hidden rounded-full border border-[#E8DDD2] bg-white">
            <Image
              src={site.logoUrl}
              alt="Logo de Creativo Muebles"
              fill
              sizes="44px"
              className="object-cover"
            />
          </span>
          <span className="font-editorial text-[1.8rem] leading-none tracking-[0.02em]">
            Creativo Muebles
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium text-[#6D655E] lg:flex">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#1F1A17]">
              {item.label}
            </a>
          ))}
        </nav>

        <details className="relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#D8C1A8] bg-[#FFFDF8] px-4 py-2 text-sm font-semibold text-[#1F1A17]">
            Menu
          </summary>
          <div className="absolute right-0 top-14 w-64 rounded-[1.75rem] border border-[#E8DDD2] bg-[#FFFDF8] p-4 shadow-[0_30px_60px_-36px_rgba(31,26,23,0.45)]">
            <div className="flex flex-col gap-2">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm text-[#6D655E] transition hover:bg-[#F7F2EA] hover:text-[#1F1A17]"
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
