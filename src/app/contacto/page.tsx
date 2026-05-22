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
          <div className="rounded-[2.2rem] border border-[#d6dde2] bg-white p-8 shadow-[0_30px_70px_-48px_rgba(24,33,43,0.24)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6c7a86]">
              Contacto
            </p>
            <h1 className="mt-4 max-w-xl font-heading text-[2.6rem] font-semibold leading-tight tracking-[-0.04em] text-[#18212b] sm:text-[3.1rem]">
              Contanos que espacio queres resolver
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#51606d]">
              Escribinos por WhatsApp y contanos que necesitas. Podemos orientarte segun el tipo de mueble, ambiente o proyecto que tengas en mente.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink
                href={whatsappUrl}
                target={isWhatsAppAvailable ? "_blank" : undefined}
                rel={isWhatsAppAvailable ? "noopener noreferrer" : undefined}
                className="bg-[#18212b] text-white hover:bg-[#24303d]"
              >
                Consultar por WhatsApp
              </ButtonLink>
            </div>
          </div>

          <div className="rounded-[2.2rem] border border-[#d6dde2] bg-[#18212b] p-8 text-white sm:p-10">
            <div className="space-y-5">
              <div className="border-b border-white/10 pb-5">
                <p className="text-sm font-semibold text-[#d0b18a]">WhatsApp</p>
                <p className="mt-2 text-sm leading-6 text-white/76">{site.whatsappDisplay}</p>
              </div>
              {site.instagramUrl !== "#" ? (
                <div className="border-b border-white/10 pb-5">
                  <p className="text-sm font-semibold text-[#d0b18a]">Instagram</p>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm leading-6 text-white/76 underline underline-offset-4"
                  >
                    Ver perfil
                  </a>
                </div>
              ) : null}
              <div>
                <p className="text-sm font-semibold text-[#d0b18a]">Zona de trabajo</p>
                <p className="mt-2 text-sm leading-6 text-white/76">{site.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
