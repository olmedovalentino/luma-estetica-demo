import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";

type SiteHeaderProps = {
  whatsappUrl: string;
};

export function SiteHeader({ whatsappUrl }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="inline-flex items-center gap-3 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-cyan-200/45 bg-cyan-300/10 text-sm font-black text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.24)]">
            EF
          </span>
          <span className="text-[1.05rem] font-semibold tracking-[0.22em]">{site.businessName}</span>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-white/66 lg:flex">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-cyan-100">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Pedir presupuesto
          </ButtonLink>
        </div>

        <details className="relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white">
            Menu
          </summary>
          <div className="absolute right-0 top-14 w-64 rounded-3xl border border-white/12 bg-ink-900 p-4 shadow-neon">
            <div className="flex flex-col gap-2">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm text-white/72 transition hover:bg-cyan-300/10 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                Pedir presupuesto
              </ButtonLink>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
