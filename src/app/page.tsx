import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  buildWhatsappUrl,
  confidencePoints,
  faqs,
  gallery,
  problems,
  processSteps,
  services,
  site,
} from "@/lib/site";

function Label({ children }: { children: string }) {
  return (
    <span className="border border-orange-500/70 bg-orange-500 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-zinc-950">
      {children}
    </span>
  );
}

export default function HomePage() {
  const whatsappUrl = buildWhatsappUrl(site.whatsappMessage);

  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} />

      <main className="relative overflow-hidden">
        <section id="inicio" className="relative bg-zinc-950 text-white">
          <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(135deg,rgba(249,115,22,0.35)_0_1px,transparent_1px_22px)]" />
          <div className="absolute bottom-0 left-0 h-16 w-full skew-y-[-2deg] bg-zinc-100 origin-left" />

          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pb-24 pt-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-16">
            <div className="flex flex-col justify-center">
              <div className="flex flex-wrap gap-2">
                <Label>Presupuesto</Label>
                <Label>Obra</Label>
                <Label>Mantenimiento</Label>
                <Label>Urgencias</Label>
              </div>

              <p className="mt-8 text-xs font-black uppercase tracking-[0.28em] text-orange-400">
                Cordoba Capital y alrededores
              </p>
              <h1 className="mt-4 max-w-4xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Refacciones y mantenimiento para tu casa o negocio
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300">
                Soluciones en pintura, impermeabilizacion, electricidad,
                plomeria y arreglos generales en Cordoba y alrededores.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={whatsappUrl} target="_blank" rel="noreferrer">
                  Pedir presupuesto por WhatsApp
                </ButtonLink>
                <ButtonLink href="#servicios" variant="secondary" className="border-zinc-500 text-white hover:bg-white hover:text-zinc-950">
                  Ver servicios
                </ButtonLink>
              </div>
            </div>

            <div className="relative min-h-[440px] border border-zinc-700 bg-zinc-900 p-4">
              <div
                aria-label="Visual tecnico de obra, refaccion y mantenimiento"
                className="relative h-full min-h-[410px] overflow-hidden bg-[linear-gradient(135deg,#18181b_0%,#27272a_54%,#f97316_54%,#f97316_61%,#3f3f46_61%,#111827_100%)]"
              >
                <div className="absolute left-8 top-8 border-l-4 border-orange-500 pl-4">
                  <p className="text-xs font-black uppercase tracking-[0.25em] text-zinc-300">
                    Equipo tecnico
                  </p>
                  <p className="mt-2 text-3xl font-black uppercase leading-none">
                    RL
                  </p>
                </div>

                <div className="absolute bottom-8 left-8 right-8 grid gap-3 sm:grid-cols-3">
                  {["Pintura", "Filtraciones", "Arreglos"].map((item) => (
                    <div key={item} className="border border-white/20 bg-zinc-950/75 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-400">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="absolute right-8 top-8 h-28 w-28 border-8 border-orange-500/80" />
                <div className="absolute right-20 top-20 h-28 w-28 border-8 border-white/15" />
                <div className="absolute bottom-32 right-10 h-2 w-44 bg-orange-500" />
                <div className="absolute bottom-40 right-10 h-2 w-32 bg-zinc-200" />
              </div>
            </div>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid border border-zinc-800 bg-white shadow-2xl shadow-zinc-950/10 sm:grid-cols-2 lg:grid-cols-4">
            {confidencePoints.map((point) => (
              <div key={point} className="border-b border-zinc-200 p-5 last:border-b-0 sm:border-r sm:last:border-r-0 lg:border-b-0">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600">
                  Confianza
                </p>
                <p className="mt-2 text-sm font-bold text-zinc-950">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="soluciones" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeading
              eyebrow="Que solucionamos"
              title="Problemas reales, respuesta concreta"
              description="El foco esta en resolver. Revisamos el estado del espacio, ordenamos prioridades y avanzamos con trabajos prolijos para casas, locales y negocios."
            />

            <div className="grid gap-3 sm:grid-cols-2">
              {problems.map((problem, index) => (
                <article key={problem} className="group border border-zinc-300 bg-white p-5 transition hover:border-orange-500 hover:bg-zinc-950">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-600 group-hover:text-orange-400">
                    Problema {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-lg font-black text-zinc-950 group-hover:text-white">
                    {problem}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-zinc-950 py-16 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Servicios"
              title="Oficios coordinados para avanzar mejor"
              description="Bloques de trabajo claros para mantenimiento, refacciones y terminaciones. Cada servicio se adapta al estado real del espacio."
              light
            />

            <div className="mt-10 grid gap-px bg-zinc-800 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="bg-zinc-950 p-6 transition hover:bg-zinc-900">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-400">
                      {service.code}
                    </p>
                    <span className="h-px flex-1 bg-zinc-700" />
                  </div>
                  <h3 className="mt-8 text-xl font-black uppercase text-white">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-zinc-400">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proceso" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeading
              eyebrow="Como trabajamos"
              title="Orden para que la obra no sea un problema mas"
              description="Un proceso simple para entender la necesidad, presupuestar y coordinar la ejecucion con tiempos claros."
            />

            <div className="grid gap-4">
              {processSteps.map((step, index) => (
                <div key={step} className="grid grid-cols-[72px_1fr] border border-zinc-300 bg-white">
                  <div className="grid place-items-center bg-zinc-950 text-xl font-black text-orange-400">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="p-5 text-base font-black text-zinc-950">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="trabajos" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Trabajos"
              title="Galeria demo para antes y despues"
              description="No se muestran fotos reales del cliente. Estos modulos funcionan como placeholders prolijos para reemplazar luego por trabajos realizados."
            />

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {gallery.map((item, index) => (
                <article
                  key={item}
                  className={`min-h-[260px] border border-zinc-300 bg-zinc-100 p-5 ${index === 0 ? "lg:col-span-2" : ""}`}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
                        Placeholder
                      </p>
                      <h3 className="mt-4 text-2xl font-black uppercase text-zinc-950">
                        {item}
                      </h3>
                    </div>
                    <div className="mt-10 grid grid-cols-2 gap-2">
                      <div className="h-24 bg-[repeating-linear-gradient(135deg,#d4d4d8_0_8px,#f4f4f5_8px_16px)]" />
                      <div className="h-24 bg-[linear-gradient(135deg,#27272a_0_62%,#f97316_62%_72%,#71717a_72%)]" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-zinc-950 py-16 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.26em] text-orange-400">
                Diferencial
              </p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase tracking-tight sm:text-5xl">
                Un solo equipo para resolver varios trabajos
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
                En lugar de coordinar distintos oficios por separado,
                Refacciones Luques reune soluciones de pintura,
                impermeabilizacion, electricidad, plomeria y arreglos
                generales para avanzar de forma mas simple y ordenada.
              </p>
            </div>
            <div className="border border-zinc-700 p-6">
              {["Pintura", "Impermeabilizacion", "Electricidad", "Plomeria", "Albanileria"].map((item) => (
                <div key={item} className="flex items-center justify-between border-b border-zinc-800 py-4 last:border-b-0">
                  <span className="text-sm font-bold text-zinc-300">{item}</span>
                  <span className="h-3 w-3 bg-orange-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden border border-zinc-800 bg-orange-500 p-8 text-zinc-950 sm:p-10">
            <div className="absolute right-0 top-0 h-full w-1/3 skew-x-[-18deg] bg-zinc-950/10" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.24em]">
                  Consulta
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-black uppercase tracking-tight sm:text-5xl">
                  Tenes que arreglar, renovar o terminar un espacio?
                </h2>
                <p className="mt-4 max-w-2xl text-base font-semibold leading-7">
                  Escribinos por WhatsApp y contanos que necesitas. Te
                  orientamos y coordinamos un presupuesto.
                </p>
              </div>
              <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="border-zinc-950 bg-zinc-950 text-white hover:border-zinc-800 hover:bg-zinc-800">
                Consultar por WhatsApp
              </ButtonLink>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title="Dudas habituales antes de presupuestar"
              description="Informacion directa para saber si el trabajo puede coordinarse por WhatsApp y en que zonas se realiza."
            />

            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {faqs.map((faq) => (
                <details key={faq.question} className="group border border-zinc-300 bg-zinc-50 p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-black text-zinc-950">
                    <span>{faq.question}</span>
                    <span className="grid h-8 w-8 flex-shrink-0 place-items-center bg-zinc-950 text-orange-400 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-zinc-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-px bg-zinc-800 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-zinc-950 p-8 text-white sm:p-10">
              <p className="text-xs font-black uppercase tracking-[0.26em] text-orange-400">
                Contacto
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tight">
                Refacciones Luques
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300">
                Mantenimiento para casas, locales y negocios. Contanos el
                problema, enviamos orientacion y coordinamos presupuesto.
              </p>
              <div className="mt-8">
                <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Boton directo a WhatsApp
                </ButtonLink>
              </div>
            </div>

            <div className="grid bg-white">
              {[
                ["WhatsApp", site.whatsappDisplay],
                ["Instagram", site.instagramHandle],
                ["Zona", site.address],
              ].map(([label, value]) => (
                <div key={label} className="border-b border-zinc-200 p-6 last:border-b-0">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-600">
                    {label}
                  </p>
                  <p className="mt-2 text-lg font-black text-zinc-950">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter whatsappUrl={whatsappUrl} />
      <FloatingWhatsAppButton href={whatsappUrl} label="WhatsApp" />
    </>
  );
}
