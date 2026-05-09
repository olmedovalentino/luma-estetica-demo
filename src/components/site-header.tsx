import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";

type SiteHeaderProps = {
  whatsappUrl: string;
};

export function SiteHeader({ whatsappUrl }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-[rgba(253,249,244,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="inline-flex items-center gap-3 text-ink-900">
          <span className="text-[1.05rem] font-semibold tracking-[0.2em]">Luma</span>
          <span className="h-px w-7 bg-sand-300" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.26em] text-ink-500">
            Estética
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-ink-700 lg:flex">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-ink-950">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href={whatsappUrl} target="_blank" rel="noreferrer">
            Reservar turno
          </ButtonLink>
        </div>

        <details className="relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-800">
            Menú
          </summary>
          <div className="absolute right-0 top-14 w-64 rounded-3xl border border-white/70 bg-white p-4 shadow-soft">
            <div className="flex flex-col gap-2">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm text-ink-700 transition hover:bg-sand-50 hover:text-ink-950"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <ButtonLink href={whatsappUrl} target="_blank" rel="noreferrer" className="w-full">
                Reservar turno
              </ButtonLink>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
