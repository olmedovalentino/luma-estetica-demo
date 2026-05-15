import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/70 bg-[#241C1A] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.75fr_0.9fr] lg:px-8">
        <div>
          <p className="font-serif text-lg font-semibold text-[#FFF1EC]">{site.businessName}</p>
          <p className="mt-2 text-sm text-white/72">{site.tagline}</p>
          <p className="mt-4 text-sm text-white/72">{site.addressShort}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E6CFC7]">
            Navegación
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white/72">
            {site.footerNavigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E6CFC7]">
            Contacto
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white/72">
            <a href={site.whatsappUrl} className="transition hover:text-white">
              WhatsApp
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
