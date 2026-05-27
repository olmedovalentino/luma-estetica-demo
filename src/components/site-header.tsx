import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";

type SiteHeaderProps = {
  whatsappUrl: string;
};

export function SiteHeader({ whatsappUrl }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-[rgba(244,248,251,0.84)] backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 px-4 py-4 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-8">
        <a href="#inicio" className="inline-flex items-center gap-3 text-slate-900">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sm font-bold tracking-[0.16em] text-sky-800">
            PA
          </span>
          <span>
            <span className="block text-[1.05rem] font-semibold tracking-[0.08em]">
              {site.businessName}
            </span>
            <span className="block text-[0.68rem] uppercase tracking-[0.28em] text-slate-500">
              Aire acondicionado
            </span>
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-7 text-sm font-medium text-slate-700 lg:flex">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-slate-950">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden justify-end lg:flex">
          <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            Pedir presupuesto
          </ButtonLink>
        </div>

        <details className="relative justify-self-end lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800">
            Menu
          </summary>
          <div className="absolute right-0 top-14 w-64 rounded-3xl border border-white/70 bg-white p-4 shadow-soft">
            <div className="flex flex-col gap-2">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm text-slate-700 transition hover:bg-sky-50 hover:text-slate-950"
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
