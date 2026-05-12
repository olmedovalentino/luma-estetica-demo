import { site } from "@/lib/site";

type SiteFooterProps = {
  whatsappUrl: string;
};

export function SiteFooter({ whatsappUrl }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/70 bg-[#3e4634] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.15fr_0.75fr_0.9fr] lg:px-8">
        <div>
          <p className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-[#e8dccb]">
            {site.businessName}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">{site.logoLineTwo}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/75">{site.footerDescription}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e8dccb]">
            Navegación
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-white/75">
            {site.footerNavigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#e8dccb]">
            Contacto
          </p>
          <div className="mt-3 space-y-2 text-sm text-white/75">
            <p>{site.addressShort}</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block">
              WhatsApp: {site.whatsappDisplay}
            </a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="block">
              Instagram: @kora.studioks
            </a>
            <a href={site.tiktokUrl} target="_blank" rel="noopener noreferrer" className="block">
              TikTok: @kora.beautystudio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
