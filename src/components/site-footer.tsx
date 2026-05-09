import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";

type SiteFooterProps = {
  whatsappUrl: string;
};

export function SiteFooter({ whatsappUrl }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/70 bg-[#3e3431] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sand-200">
            {site.businessName}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/72">
            Belleza y bienestar en un espacio pensado para vos. Tratamientos faciales,
            corporales, depilación, cejas, pestañas y belleza integral.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sand-200">
            Navegación
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/72">
            {site.navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sand-200">
            Contacto
          </p>
          <div className="mt-4 space-y-3 text-sm text-white/72">
            <p>{site.address}</p>
            <p>{site.hours}</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="block">
              WhatsApp: Reservar turno
            </a>
            <div className="pt-2">
              <ButtonLink href={whatsappUrl} target="_blank" rel="noreferrer">
                Pedir turno por WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
