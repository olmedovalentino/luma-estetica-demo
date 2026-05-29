import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";

type SiteHeaderProps = {
  whatsappUrl: string;
};

export function SiteHeader({ whatsappUrl }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-800 bg-zinc-950/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="inline-flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center bg-orange-500 text-sm font-black text-zinc-950">
            RL
          </span>
          <span className="leading-none">
            <span className="block text-sm font-black uppercase tracking-[0.2em]">
              Refacciones
            </span>
            <span className="block text-xs font-bold uppercase tracking-[0.34em] text-zinc-400">
              Luques
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-xs font-bold uppercase tracking-[0.14em] text-zinc-300 lg:flex">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-orange-400">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Presupuesto
          </ButtonLink>
        </div>

        <details className="relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 border border-zinc-700 px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-zinc-100">
            Menu
          </summary>
          <div className="absolute right-0 top-14 w-72 border border-zinc-800 bg-zinc-950 p-4 shadow-2xl">
            <div className="flex flex-col gap-1">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-zinc-900 hover:text-orange-400"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                Presupuesto
              </ButtonLink>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
