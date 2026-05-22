import { ButtonLink } from "@/components/button-link";
import { PageShell } from "@/components/page-shell";
import { buildWhatsappUrl, site } from "@/lib/site";

export default function ContactoPage() {
  const whatsappUrl = buildWhatsappUrl(site.whatsappMessage);
  const isWhatsAppAvailable = whatsappUrl !== "#";

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
          <div className="rounded-[2.2rem] border border-[#d6dde2] bg-[#18212b] p-8 text-white shadow-[0_30px_70px_-48px_rgba(24,33,43,0.24)] sm:p-10">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d0b18a]">
              Contacto
            </p>
            <h1 className="mt-4 max-w-xl font-heading text-[2rem] font-semibold leading-tight tracking-[-0.03em] sm:text-[2.35rem]">
              Contanos que necesitas resolver
            </h1>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-8 text-white/78">
              Escribinos por WhatsApp y contanos que necesitas. Podemos orientarte segun el tipo de mueble, ambiente o proyecto que tengas en mente.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={whatsappUrl}
                target={isWhatsAppAvailable ? "_blank" : undefined}
                rel={isWhatsAppAvailable ? "noopener noreferrer" : undefined}
                className="bg-white text-[#18212b] hover:bg-[#eef2f5]"
              >
                Consultar por WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-[#d6dde2] bg-white p-8 shadow-[0_24px_60px_-44px_rgba(24,33,43,0.18)] sm:p-10">
            <div className="space-y-5">
              <div className="border-b border-[#dde4e8] pb-5">
                <p className="text-sm font-semibold text-[#18212b]">WhatsApp</p>
                <a
                  href={whatsappUrl}
                  target={isWhatsAppAvailable ? "_blank" : undefined}
                  rel={isWhatsAppAvailable ? "noopener noreferrer" : undefined}
                  className="mt-2 inline-block text-sm leading-6 text-[#51606d] underline decoration-[#d0b18a] underline-offset-4"
                >
                  {site.whatsappDisplay}
                </a>
              </div>
              {site.instagramUrl !== "#" ? (
                <div className="border-b border-[#dde4e8] pb-5">
                  <p className="text-sm font-semibold text-[#18212b]">Instagram</p>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm leading-6 text-[#51606d] underline decoration-[#d0b18a] underline-offset-4"
                  >
                    Ver perfil
                  </a>
                </div>
              ) : null}
              <div>
                <p className="text-sm font-semibold text-[#18212b]">Ubicacion</p>
                <p className="mt-2 text-sm leading-6 text-[#51606d]">{site.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
