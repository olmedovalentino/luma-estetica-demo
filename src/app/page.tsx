import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { aboutText, buildWhatsappUrl, confidencePoints, faqs, gallery, services, site } from "@/lib/site";

export default function HomePage() {
  const whatsappUrl = buildWhatsappUrl(site.whatsappMessage);

  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} />

      <main className="relative overflow-hidden">
        <section id="inicio" className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,251,248,0.98),rgba(247,239,233,0.95))] shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,179,161,0.16),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(209,191,178,0.14),transparent_28%)]" />
            <div className="relative grid gap-10 px-6 py-8 lg:grid-cols-[1.03fr_0.97fr] lg:px-10 lg:py-12">
              <div className="flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sand-600">
                  Nueva Córdoba · Córdoba Capital
                </p>
                <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
                  Cuidado facial, corporal y belleza integral en Córdoba
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-600">
                  Un espacio cálido y profesional para regalarte un momento de bienestar. Reservá
                  tu turno por WhatsApp de forma simple.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={whatsappUrl} target="_blank" rel="noreferrer">
                    Reservar turno
                  </ButtonLink>
                  <ButtonLink href="#servicios" variant="secondary">
                    Ver servicios
                  </ButtonLink>
                </div>
              </div>

              <div className="relative">
                <div className="absolute right-4 top-4 z-10 rounded-full border border-white/70 bg-white/92 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-ink-700 shadow-soft">
                  Nueva Córdoba · Córdoba Capital
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-soft">
                  <Image
                    src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80"
                    alt="Cabina de estética luminosa"
                    width={1400}
                    height={900}
                    priority
                    className="h-[420px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(18,14,13,0.02),rgba(18,14,13,0.14))]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-[#f6efe9]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Servicios"
              title="Tratamientos pensados para realzar tu belleza natural y acompañar tu bienestar"
              description="Tratamientos cuidados para acompañar tu bienestar y realzar tu belleza natural."
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-[1.5rem] border border-white/80 bg-white/92 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(65,46,36,0.35)]"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <div className={`mb-4 h-1.5 w-14 rounded-full ${service.accent}`} />
                    <h3 className="text-lg font-semibold text-ink-900">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-ink-600">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <ButtonLink href={whatsappUrl} target="_blank" rel="noreferrer">
                Consultar por un tratamiento
              </ButtonLink>
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/85 p-4 shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1400&q=80"
                alt="Tratamiento de belleza y cuidado personal"
                width={1400}
                height={900}
                className="h-[390px] w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow="Sobre Luma"
                title="Un espacio para cuidarte con calma"
                description={aboutText}
              />

              <p className="mt-5 max-w-xl text-sm uppercase tracking-[0.28em] text-sand-600">
                Belleza serena, atención cercana y resultados naturales.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {confidencePoints.map((point) => (
                  <div key={point} className="rounded-3xl border border-white/70 bg-white/88 p-5 shadow-soft">
                    <p className="text-sm font-semibold text-ink-900">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="bg-[#f6efe9]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Galería"
              title="Un espacio cálido para tu momento de cuidado"
              description="Ambientes tranquilos, detalles cuidados y una experiencia pensada para que te sientas cómoda desde que llegás."
            />

            <div className="mt-8 grid gap-5 lg:grid-cols-4">
              {gallery.map((item) => (
                <article
                  key={item.title}
                  className={[
                    "group overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-soft",
                    item.span,
                  ].join(" ")}
                >
                  <div className="relative min-h-[230px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.02),rgba(16,12,10,0.34))]" />
                    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-white/85">{item.description}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Resolvemos tus dudas antes de reservar"
            description="Respuestas claras para que la experiencia sea simple desde el primer mensaje."
          />

          <div className="mt-8 columns-1 gap-4 lg:columns-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group mb-4 break-inside-avoid rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-soft"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-ink-900">
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-sand-200 bg-sand-50 text-sand-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="ubicacion" className="bg-[#f6efe9]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2.25rem] border border-white/80 bg-white/92 p-8 shadow-soft">
                <SectionHeading
                  eyebrow="Ubicación y horarios"
                  title="Estamos en Nueva Córdoba, Córdoba Capital"
                  description="Atendemos con cita previa para que cada visita sea tranquila y personalizada."
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-sand-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-600">
                      Ubicación
                    </p>
                    <p className="mt-2 text-sm leading-6 text-ink-700">{site.address}</p>
                  </div>
                  <div className="rounded-3xl bg-sand-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-600">
                      Horarios
                    </p>
                    <p className="mt-2 text-sm leading-6 text-ink-700">{site.hours}</p>
                  </div>
                </div>

                <div id="contacto" className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Consultar por WhatsApp
                  </ButtonLink>
                  <ButtonLink href={site.locationUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                    Ver mapa
                  </ButtonLink>
                </div>
              </div>

              <a
                href={site.locationUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver ubicación en Google Maps"
                className="overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/90 shadow-soft"
              >
                <div className="grid md:grid-cols-[1fr_0.85fr]">
                  <div className="min-h-[340px]">
                    <iframe
                      title="Mapa de Luma Estética"
                      src={site.locationEmbedUrl}
                      className="h-full min-h-[340px] w-full border-0"
                      style={{ pointerEvents: "none" }}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-6 bg-ink-900 p-8 text-white">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand-200">
                        Cómo encontrarnos
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                        Un espacio pensado para vos
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/75">
                        Luma Estética recibe clientas en un entorno íntimo, luminoso y organizado,
                        ideal para una experiencia de cuidado tranquila.
                      </p>
                    </div>
                    <div className="grid gap-3">
                      {["Atención con cita", "Respuesta por WhatsApp", "Turnos coordinados", "Ambiente privado"].map(
                        (item) => (
                          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-sm font-medium text-white/90">{item}</p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-white/80 bg-gradient-to-br from-[#4b403b] to-[#1d1918] p-8 text-white shadow-soft sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand-200">
                  CTA final
                </p>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                  ¿Lista para reservar tu momento de cuidado?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-white/75">
                  Escribinos por WhatsApp y te ayudamos a elegir el tratamiento ideal para vos.
                </p>
              </div>
              <div>
                <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Pedir turno por WhatsApp
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter whatsappUrl={whatsappUrl} />
      <FloatingWhatsAppButton href={whatsappUrl} label="WhatsApp" />
    </>
  );
}
