import { site } from "@/lib/site";

type SiteFooterProps = {
  whatsappUrl: string;
};

export function SiteFooter({ whatsappUrl }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/70 bg-[#221b18] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7beaa]">
            {site.businessName}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/75">{site.shortPitch}</p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7beaa]">
            Navegacion
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/75">
            {site.navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7beaa]">
            Contacto
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/75">
            <p>{site.location}</p>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="block">
              Instagram
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
              WhatsApp: Consultar proyecto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
