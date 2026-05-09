import { ButtonLink } from "@/components/button-link";
import { site } from "@/lib/site";

type SiteFooterProps = {
  whatsappUrl: string;
};

export function SiteFooter({ whatsappUrl }: SiteFooterProps) {
  return (
    <footer className="border-t border-white/70 bg-[#f6efe9]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sand-600">
            {site.businessName}
          </p>
          <p className="mt-4 max-w-md text-sm leading-7 text-ink-600">
            Belleza y bienestar en un espacio pensado para vos. Tratamientos faciales,
            corporales, depilacion, cejas, pestanas y belleza integral.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ink-900">
            Navegacion
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-ink-600">
            {site.navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-ink-900">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ink-900">
            Contacto
          </p>
          <div className="mt-4 space-y-3 text-sm text-ink-600">
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
