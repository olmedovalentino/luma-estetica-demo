import { site } from "@/lib/site";

type SiteFooterProps = {
  whatsappUrl: string;
};

export function SiteFooter({ whatsappUrl }: SiteFooterProps) {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-400">
            Refacciones Luques
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400">
            Refacciones, mantenimiento, pintura, impermeabilizacion,
            electricidad, plomeria y soluciones generales en Cordoba.
          </p>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-400">
            Navegacion
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-zinc-400">
            {site.navigation.slice(0, 5).map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-orange-400">
            Contacto
          </p>
          <div className="mt-4 space-y-3 text-sm text-zinc-400">
            <p>{site.address}</p>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-white">
              Instagram: {site.instagramHandle}
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block hover:text-white">
              WhatsApp: {site.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
