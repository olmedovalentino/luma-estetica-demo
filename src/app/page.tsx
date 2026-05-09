import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  aboutText,
  buildWhatsappUrl,
  confidencePoints,
  faqs,
  gallery,
  reserveSteps,
  services,
  site,
  testimonials,
} from "@/lib/site";
import Image from "next/image";

export default function HomePage() {
  const whatsappUrl = buildWhatsappUrl(site.whatsappMessage);

  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} />

      <main className="relative overflow-hidden">
        <section id="inicio" className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,251,248,0.96),rgba(247,239,233,0.92))] shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,179,161,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(209,191,178,0.22),transparent_28%)]" />
            <div className="relative grid gap-10 px-6 py-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10 lg:py-12">
              <div className="flex flex-col justify-center">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-sand-600">
                  Nueva Cordoba, Cordoba Capital
                </p>
                <h1 className="mt-5 max-w-3xl text-5xl font-semibold tracking-tight text-ink-900 sm:text-6xl lg:text-7xl">
                  Cuidado facial, corporal y belleza integral en Cordoba
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-600">
                  Un espacio calido y profesional para regalarte un momento de bienestar. Reserva
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

                <div className="mt-8 flex flex-wrap gap-3">
                  {["Nueva Cordoba", "Turnos por WhatsApp", "Atencion personalizada"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/80 bg-white/75 px-4 py-2 text-sm font-medium text-ink-700 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-4 top-8 hidden rounded-full border border-white/80 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink-700 shadow-soft sm:block">
                  Cabina premium
                </div>
                <div className="absolute right-4 top-6 hidden rounded-full border border-white/80 bg-[#efe3db]/95 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink-700 shadow-soft sm:block">
                  Turnos simples
                </div>
                <div className="grid gap-4">
                  <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-soft">
                    <Image
                      src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=80"
                      alt="Cabina de estetica luminosa"
                      width={1400}
                      height={900}
                      priority
                      className="h-[420px] w-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-soft">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-600">
                        Ambiente
                      </p>
                      <p className="mt-2 text-sm leading-6 text-ink-700">Calido y privado</p>
                    </div>
                    <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-soft">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-600">
                        Ubicacion
                      </p>
                      <p className="mt-2 text-sm leading-6 text-ink-700">Nueva Cordoba</p>
                    </div>
                    <div className="rounded-3xl border border-white/70 bg-white/80 p-4 shadow-soft">
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-600">
                        WhatsApp
                      </p>
                      <p className="mt-2 text-sm leading-6 text-ink-700">Turnos rapidos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-[#f6efe9]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Servicios"
              title="Tratamientos de estetica pensados para realzar tu belleza natural"
              description="Opciones reales, con una presentacion cuidada y un ritmo visual mas cercano a una web de marca."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const featured = index === 0 || index === 3;

                return (
                  <article
                    key={service.title}
                    className={[
                      "group overflow-hidden rounded-[1.75rem] border border-white/80 bg-white/90 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(65,46,36,0.35)]",
                      featured ? "md:col-span-2" : "",
                    ].join(" ")}
                  >
                    <div className="grid h-full gap-0 sm:grid-cols-[0.88fr_1.12fr]">
                      <div className={`${service.accent} flex min-h-[180px] items-end p-6`}>
                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 text-sm font-semibold text-ink-900 shadow-sm">
                          0{index + 1}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-ink-900">{service.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-ink-600">{service.description}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/85 p-4 shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&w=1400&q=80"
                alt="Espacio de cuidado de cejas y pestañas"
                width={1400}
                height={900}
                className="h-[420px] w-full rounded-[1.75rem] object-cover"
              />
              <div className="absolute bottom-8 left-8 rounded-full border border-white/70 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink-700 shadow-soft">
                Belleza integral
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Sobre Luma"
                title="Un lugar pensado para que cada visita se sienta especial"
                description={aboutText}
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {confidencePoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-3xl border border-white/70 bg-white/85 p-5 shadow-soft"
                  >
                    <p className="text-sm font-semibold text-ink-900">{point}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-sand-100 bg-sand-50 p-6">
                <p className="text-sm leading-7 text-ink-700">
                  En Luma Estetica combinamos atencion personalizada, productos de calidad y un
                  ambiente calido para que cada visita se sienta tranquila, ordenada y cercana.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f6efe9]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Como reservar"
              title="Tres pasos simples para coordinar tu turno"
              description="Un proceso corto ayuda a que la experiencia sea clara desde el primer contacto."
            />

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {reserveSteps.map((item) => (
                <article
                  key={item.step}
                  className="rounded-[1.75rem] border border-white/80 bg-white/90 p-6 shadow-soft"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-sm font-semibold text-white">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-ink-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="galeria" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Galeria"
            title="Una composicion visual que acompana la identidad de la marca"
            description="Bloques fotográficos y tarjetas de apoyo para que la página se sienta viva y premium."
          />

          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {gallery.map((item) => (
              <article
                key={item.title}
                className={[
                  "group overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-soft",
                  item.span,
                ].join(" ")}
              >
                <div className="relative min-h-[260px]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.02),rgba(16,12,10,0.38))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-6 text-white/85">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#f6efe9]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Testimonios"
              title="Experiencias reales y cercanas"
              description="Pequenos comentarios ficticios para reforzar un tono natural y confiable."
            />

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {testimonials.map((item) => (
                <figure
                  key={item.name}
                  className="rounded-[1.75rem] border border-white/80 bg-white/90 p-6 shadow-soft"
                >
                  <blockquote className="text-sm leading-7 text-ink-700">
                    {item.quote}
                  </blockquote>
                  <figcaption className="mt-6 border-t border-sand-100 pt-4">
                    <p className="text-sm font-semibold text-ink-900">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.24em] text-sand-600">
                      {item.note}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Resolvemos dudas comunes antes de reservar"
            description="Acordeones limpios para que la seccion se vea ordenada y util."
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] border border-white/80 bg-white/90 p-6 shadow-soft"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-lg font-semibold text-ink-900">
                  {faq.question}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-sand-200 bg-sand-50 text-sand-700 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="ubicacion" className="bg-[#f6efe9]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2.25rem] border border-white/80 bg-white/90 p-8 shadow-soft">
                <SectionHeading
                  eyebrow="Ubicacion y horarios"
                  title="Nueva Cordoba, Cordoba Capital"
                  description="Ubicacion clara, horarios visibles y un CTA directo para cerrar la visita."
                />

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-sand-50 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sand-600">
                      Ubicacion
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
                  <ButtonLink href={whatsappUrl} target="_blank" rel="noreferrer">
                    Consultar por WhatsApp
                  </ButtonLink>
                  <ButtonLink href={site.mapsUrl} target="_blank" rel="noreferrer" variant="secondary">
                    Ver mapa
                  </ButtonLink>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2.25rem] border border-white/80 bg-white/90 shadow-soft">
                <div className="grid md:grid-cols-[1fr_0.85fr]">
                  <div className="min-h-[340px]">
                    <iframe
                      title="Mapa de Luma Estetica"
                      src="https://www.google.com/maps?q=Nueva+Cordoba,+Cordoba+Capital&output=embed"
                      className="h-full min-h-[340px] w-full border-0"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col justify-between gap-6 bg-ink-900 p-8 text-white">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sand-200">
                        Como encontrarnos
                      </p>
                      <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                        Un espacio pensado para vos
                      </h3>
                      <p className="mt-4 text-sm leading-7 text-white/75">
                        Luma Estetica recibe clientas en un entorno intimo, luminoso y organizado,
                        ideal para una experiencia de cuidado tranquila.
                      </p>
                    </div>

                    <div className="grid gap-3">
                      {["Atencion con cita", "Respuesta por WhatsApp", "Turnos coordinados", "Ambiente privado"].map(
                        (item) => (
                          <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                            <p className="text-sm font-medium text-white/90">{item}</p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
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
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <ButtonLink href={whatsappUrl} target="_blank" rel="noreferrer">
                  Pedir turno por WhatsApp
                </ButtonLink>
                <ButtonLink href="#servicios" variant="secondary">
                  Ver servicios
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
