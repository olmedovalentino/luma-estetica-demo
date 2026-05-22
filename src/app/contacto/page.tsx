import { ButtonLink } from "@/components/button-link";
import { PageShell } from "@/components/page-shell";
import { buildWhatsappUrl, site } from "@/lib/site";

export default function ContactoPage() {
  const whatsappUrl = buildWhatsappUrl(site.whatsappMessage);
  const isWhatsAppAvailable = whatsappUrl !== "#";
  const hasInstagram = site.instagramUrl.startsWith("http");

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="rounded-[2.35rem] border border-[#d6dde2] bg-[#18212b] p-8 text-white shadow-[0_30px_70px_-48px_rgba(24,33,43,0.24)] sm:p-10 lg:p-12">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d0b18a]/90">
              Contacto
            </p>
            <h1 className="mt-4 max-w-xl font-heading text-[2rem] font-semibold leading-tight tracking-[-0.03em] sm:text-[2.35rem]">
              Contanos que necesitas resolver
            </h1>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-8 text-white/78">
              Escribinos por WhatsApp y contanos que necesitas. Podemos orientarte segun el tipo de mueble, ambiente o proyecto que tengas en mente.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <ButtonLink
                href={whatsappUrl}
                target={isWhatsAppAvailable ? "_blank" : undefined}
                rel={isWhatsAppAvailable ? "noopener noreferrer" : undefined}
                className="border border-[#d0b18a] bg-[#d0b18a] text-[#18212b] hover:bg-[#dcc2a3]"
              >
                Consultar por WhatsApp
              </ButtonLink>
              {hasInstagram ? (
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-white/84 transition hover:text-white"
                >
                  Ver Instagram
                </a>
              ) : null}
            </div>
          </div>

          <div className="rounded-[2.35rem] border border-[#d6dde2] bg-white p-8 shadow-[0_24px_60px_-44px_rgba(24,33,43,0.18)] sm:p-10">
            <div className="space-y-6">
              <div className="rounded-[1.6rem] border border-[#e0e6ea] bg-[#f7f9fa] px-5 py-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#6c7a86]">WhatsApp</p>
                <a
                  href={whatsappUrl}
                  target={isWhatsAppAvailable ? "_blank" : undefined}
                  rel={isWhatsAppAvailable ? "noopener noreferrer" : undefined}
                  className="mt-3 inline-flex text-base font-semibold text-[#18212b] transition hover:text-[#43515d]"
                >
                  {site.whatsappDisplay}
                </a>
              </div>

              {hasInstagram ? (
                <div className="rounded-[1.6rem] border border-[#e0e6ea] bg-[#f7f9fa] px-5 py-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#6c7a86]">Instagram</p>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-base font-semibold text-[#18212b] transition hover:text-[#43515d]"
                  >
                    @norteequipa
                  </a>
                </div>
              ) : null}

              <div className="rounded-[1.6rem] border border-[#e0e6ea] bg-[#f7f9fa] px-5 py-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#6c7a86]">Ubicacion</p>
                <p className="mt-3 text-base font-medium text-[#18212b]">{site.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
