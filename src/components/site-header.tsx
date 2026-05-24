import { site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-[rgba(251,248,242,0.84)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <a href="#inicio" className="inline-flex items-center gap-3 text-[#211a17]">
          <span className="text-[1.08rem] font-semibold tracking-[0.16em]">DISEÑO</span>
          <span className="h-px w-8 bg-[#ccb6a2]" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.26em] text-[#6a5f58]">
            AMOBLAMIENTOS
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-6 text-sm font-medium text-[#5f554e] lg:flex">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#211a17]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block" />

        <details className="relative justify-self-end lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#d7c8bc] bg-white px-4 py-2 text-sm font-semibold text-[#221b18]">
            Menu
          </summary>
          <div className="absolute right-0 top-14 w-72 rounded-[1.8rem] border border-white/70 bg-white p-4 shadow-soft">
            <div className="flex flex-col gap-2">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm text-[#5f554e] transition hover:bg-[#f5ede5] hover:text-[#211a17]"
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
