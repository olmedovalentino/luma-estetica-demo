import { site } from "@/lib/site";

type SiteFooterProps = {
  whatsappUrl: string;
};

export function SiteFooter({ whatsappUrl }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.15fr_0.85fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
            {site.businessName}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
            {site.shortPitch} {site.scope}.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-fuchsia-200">
            Navegacion
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/68">
            {site.navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-lime-200">
            Contacto
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/68">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-white">
              WhatsApp: {site.whatsappLabel}
            </a>
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="block hover:text-white">
              Instagram: {site.instagramLabel}
            </a>
            <p>{site.address}</p>
            <p>{site.scope}</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block text-cyan-200 hover:text-white">
              Pedir presupuesto por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
