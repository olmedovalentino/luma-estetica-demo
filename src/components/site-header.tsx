import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";

type SiteHeaderProps = {
  whatsappUrl: string;
};

export function SiteHeader({ whatsappUrl }: SiteHeaderProps) {
  const whatsappIsAvailable = whatsappUrl !== "#";

  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-[rgba(255,253,248,0.88)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#inicio" className="inline-flex items-center gap-3 text-[#1E1E1E]">
          <span className="font-serif text-[1.05rem] font-semibold tracking-[0.1em]">
            {site.logoLineOne}
          </span>
          <span className="h-px w-7 bg-[#6F7C61]" aria-hidden="true" />
          <span className="text-xs font-medium tracking-[0.22em] text-[#6D6A63]">
            {site.logoLineTwo}
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium text-[#5D5A54] lg:flex">
          {site.navigation.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#1E1E1E]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink
            href={whatsappUrl}
            target={whatsappIsAvailable ? "_blank" : undefined}
            rel={whatsappIsAvailable ? "noopener noreferrer" : undefined}
          >
            {site.heroCtaPrimary}
          </ButtonLink>
        </div>

        <details className="relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 rounded-full border border-[#D8CEBF] bg-white px-4 py-2 text-sm font-semibold text-[#1E1E1E]">
            Menu
          </summary>
          <div className="absolute right-0 top-14 w-64 rounded-3xl border border-white/80 bg-[#FFFDF8] p-4 shadow-soft">
            <div className="flex flex-col gap-2">
              {site.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm text-[#5D5A54] transition hover:bg-[#F7F4EE] hover:text-[#1E1E1E]"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="mt-4">
              <ButtonLink
                href={whatsappUrl}
                target={whatsappIsAvailable ? "_blank" : undefined}
                rel={whatsappIsAvailable ? "noopener noreferrer" : undefined}
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
