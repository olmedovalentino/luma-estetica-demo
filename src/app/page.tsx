import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  buildWhatsappUrl,
  contactCards,
  coverageCards,
  coverageZones,
  faqs,
  hero,
  projects,
  serviceHighlights,
  services,
  site,
} from "@/lib/site";

export default function HomePage() {
  const whatsappUrl = buildWhatsappUrl(site.whatsappMessage);

  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} />

      <main className="relative overflow-hidden">
        <section id="inicio" className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/80 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(232,241,247,0.93))] shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(123,188,234,0.2),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(210,232,247,0.72),transparent_32%)]" />
            <div className="relative grid items-center gap-10 px-6 py-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-12">
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-sky-700">
                  {hero.eyebrow}
                </p>
                <h1 className="mt-5 max-w-xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                  {hero.title}
                </h1>
                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                  {hero.description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {hero.primaryCta}
                  </ButtonLink>
                  <ButtonLink href="#servicios" variant="secondary">
                    {hero.secondaryCta}
                  </ButtonLink>
                </div>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {hero.notes.map((note) => (
                    <div
                      key={note}
                      className="rounded-2xl border border-white/80 bg-white/72 px-4 py-3 text-sm font-medium text-slate-700 shadow-soft"
                    >
                      {note}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-5 top-6 hidden rounded-3xl border border-white/70 bg-white/88 p-4 shadow-soft md:block">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-sky-700">
                    Servicio tecnico
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Atencion prolija, diagnostico claro y seguimiento por WhatsApp.
                  </p>
                </div>
                <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-slate-200 shadow-soft">
                  <Image
                    src={hero.image}
                    alt={hero.imageAlt}
                    width={1400}
                    height={1000}
                    priority
                    className="h-[420px] w-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <SectionHeading
                eyebrow="Servicios"
                title="Asistencia tecnica para cada etapa del equipo"
                description="Trabajos puntuales, claros y pensados para resolver rapido sin cargar la pagina de informacion innecesaria."
              />

              <div className="mt-8 grid gap-3">
                {serviceHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-sky-100 bg-white/80 px-4 py-4 text-sm font-medium text-slate-700 shadow-soft"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-[1.6rem] border border-white/80 bg-white/92 shadow-soft transition duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-44 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1280px) 24vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trabajos" className="bg-[linear-gradient(180deg,rgba(238,244,248,0.7),rgba(247,250,252,0.3))]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Trabajos realizados"
              title="Instalaciones y services mostrados de forma simple"
              description="Una galeria pareja, con foco visual y referencias directas al tipo de trabajo realizado."
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/90 shadow-soft"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,29,46,0.04),rgba(11,29,46,0.4))]" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="zonas" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[2.25rem] border border-white/80 bg-[linear-gradient(135deg,rgba(20,39,54,0.98),rgba(41,82,114,0.94))] p-8 text-white shadow-soft sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                  Zonas de cobertura
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Cobertura en Cordoba Capital y zonas cercanas
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/78">
                  Coordinamos visitas con una modalidad agil para responder consultas tecnicas, instalaciones y mantenimiento preventivo.
                </p>

                <div className="mt-8 grid gap-3">
                  {coverageCards.map((card) => (
                    <div key={card.title} className="rounded-2xl border border-white/10 bg-white/10 p-4">
                      <p className="text-sm font-semibold text-white">{card.title}</p>
                      <p className="mt-1 text-sm leading-6 text-white/72">{card.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {coverageZones.map((zone) => (
                  <div
                    key={zone}
                    className="rounded-2xl border border-white/12 bg-white/10 px-4 py-4 text-sm font-medium text-white/88"
                  >
                    {zone}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="preguntas" className="bg-[linear-gradient(180deg,rgba(244,248,251,0.3),rgba(230,239,245,0.8))]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Lo que suelen consultar antes de escribir"
              description="Respuestas breves para facilitar la decision y acelerar la conversacion por WhatsApp."
            />

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-soft"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-900">
                    <span>{faq.question}</span>
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-sky-100 bg-sky-50 text-sky-700 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2.2rem] border border-white/80 bg-white/92 p-8 shadow-soft">
              <SectionHeading
                eyebrow="Contacto"
                title="Coordina tu consulta tecnica por WhatsApp"
                description="Si ya tenes fotos del equipo o del lugar donde iria instalado, mejor: eso ayuda a orientar la cotizacion desde el primer mensaje."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {contactCards.map((card) => (
                  <div key={card.label} className="rounded-2xl bg-sky-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-700">
                      {card.label}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-slate-700">{card.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Pedir presupuesto
                </ButtonLink>
                <ButtonLink href="#preguntas" variant="secondary">
                  Ver preguntas frecuentes
                </ButtonLink>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2.2rem] border border-white/80 bg-[linear-gradient(160deg,rgba(14,31,45,1),rgba(34,72,100,0.96))] p-8 text-white shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
                Mensaje sugerido
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight">
                Consulta clara, respuesta mas agil
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/76">
                Podes escribirnos indicando zona, tipo de equipo y necesidad puntual. Si sumas fotos del aire o del ambiente, mejor todavia.
              </p>

              <div className="mt-8 rounded-[1.8rem] border border-white/10 bg-white/10 p-5">
                <p className="text-sm leading-7 text-white/84">
                  Hola Paredes Aire, quiero consultar por un equipo split. Estoy en Cordoba Capital y necesito presupuesto para instalacion o service.
                </p>
              </div>

              <div className="mt-8 grid gap-3">
                {["Instalacion nueva", "Mantenimiento preventivo", "Revision de falla"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white/85">
                    {item}
                  </div>
                ))}
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
