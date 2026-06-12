import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  benefits,
  buildWhatsappUrl,
  businessTypes,
  differentiators,
  faqs,
  portfolio,
  process,
  services,
  site,
} from "@/lib/site";

const neonLines = ["LETRAS", "NEON LED", "CARTELERIA"];

export default function HomePage() {
  const whatsappUrl = buildWhatsappUrl(site.whatsappMessage);

  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} />

      <main className="relative overflow-hidden">
        <section id="inicio" className="relative mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
          <div className="absolute inset-x-0 top-0 -z-10 h-[680px] bg-[radial-gradient(circle_at_20%_18%,rgba(255,43,214,0.24),transparent_32%),radial-gradient(circle_at_76%_8%,rgba(34,211,238,0.26),transparent_34%),radial-gradient(circle_at_58%_64%,rgba(240,243,58,0.12),transparent_30%)]" />
          <div className="grid min-h-[calc(100vh-92px)] items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
            <div className="py-8">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-200">
                {site.address}
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                Hacemos que tu marca brille
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
                Letras corporeas, neon LED y carteleria personalizada para negocios que quieren destacar.
              </p>
            </div>

            <div className="relative min-h-[470px] overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.03] p-5 shadow-[0_0_90px_rgba(34,211,238,0.16)]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,43,214,0.18),transparent_28%),linear-gradient(315deg,rgba(34,211,238,0.16),transparent_30%)]" />
              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/35 shadow-[0_0_80px_rgba(34,211,238,0.34),inset_0_0_60px_rgba(255,43,214,0.16)]" />
              <div className="absolute inset-x-8 top-10 h-px bg-cyan-200/40 shadow-[0_0_24px_rgba(34,211,238,0.9)]" />
              <div className="relative flex h-full min-h-[430px] flex-col justify-center gap-5">
                {neonLines.map((line, index) => (
                  <div
                    key={line}
                    className={[
                      "rounded-2xl border bg-black/50 px-5 py-4 text-center text-3xl font-black tracking-[0.16em] text-white backdrop-blur",
                      index === 0
                        ? "border-cyan-200/50 shadow-[0_0_34px_rgba(34,211,238,0.42)]"
                        : index === 1
                          ? "border-fuchsia-300/50 shadow-[0_0_34px_rgba(255,43,214,0.36)]"
                          : "border-lime-200/45 shadow-[0_0_34px_rgba(240,243,58,0.28)]",
                    ].join(" ")}
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
            <SectionHeading
              eyebrow="Impacto comercial"
              title="Tu cartel es la primera impresion de tu negocio"
              description="Mas presencia, mas reconocimiento y una imagen mas profesional desde la calle."
            />
            <div className="grid gap-4 sm:grid-cols-3">
              {benefits.map((benefit) => (
                <article key={benefit.title} className="flex min-h-32 flex-col items-center justify-center rounded-3xl border border-white/10 bg-black/32 p-5 text-center shadow-glass">
                  <div className="mb-4 h-1.5 w-14 rounded-full bg-[linear-gradient(90deg,#22d3ee,#ff2bd6,#f0f33a)]" />
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Servicios"
            title="Lo que fabricamos"
            description="Soluciones visuales para fachadas, vidrieras, interiores y eventos."
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group relative min-h-40 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-glass transition duration-300 hover:-translate-y-1 hover:border-cyan-200/45"
              >
                <div
                  className="absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition group-hover:scale-125"
                  style={{
                    background:
                      index % 3 === 0
                        ? "rgba(34, 211, 238, 0.28)"
                        : index % 3 === 1
                          ? "rgba(255, 43, 214, 0.26)"
                          : "rgba(240, 243, 58, 0.22)",
                  }}
                />
                <p className="text-xs font-black uppercase tracking-[0.28em] text-white/38">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-8 text-xl font-semibold text-white">{service.title}</h3>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.015))]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Para que negocios"
              title="Para locales, marcas y espacios comerciales"
              description="Piezas hechas para verse bien en vivo, en vidriera y en redes."
            />

            <div className="mt-8 flex flex-wrap gap-3">
              {businessTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-white/12 bg-black/28 px-4 py-3 text-sm font-semibold text-white/78 shadow-[inset_0_0_22px_rgba(255,255,255,0.04)]"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="trabajos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Trabajos"
            title="Estilo de trabajos"
            description="Referencias visuales para mostrar formatos posibles sin inventar fotos reales."
          />

          <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((item, index) => (
              <article
                key={item}
                className="relative min-h-72 overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/45 p-5 shadow-glass"
              >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(34,211,238,0.22),transparent_34%),linear-gradient(315deg,rgba(255,43,214,0.20),transparent_34%)]" />
                <div className="absolute left-8 right-8 top-1/2 h-px bg-white/30 shadow-[0_0_30px_rgba(255,255,255,0.85)]" />
                <div
                  className="absolute inset-x-10 top-12 rounded-full border py-6 text-center text-2xl font-black uppercase tracking-[0.15em] text-white"
                  style={{
                    borderColor: index % 2 === 0 ? "rgba(34,211,238,0.62)" : "rgba(255,43,214,0.62)",
                    boxShadow:
                      index % 2 === 0
                        ? "0 0 34px rgba(34,211,238,0.38)"
                        : "0 0 34px rgba(255,43,214,0.34)",
                  }}
                >
                  EF
                </div>
                <div className="relative flex h-full min-h-60 flex-col justify-end">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100/70">
                    Referencia visual
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{item}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="proceso" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Como trabajamos"
              title="Simple y directo"
              description="Del primer mensaje a la pieza terminada."
            />

            <div className="mt-9 grid gap-4 lg:grid-cols-5">
              {process.map((step, index) => (
                <article key={step} className="rounded-3xl border border-white/10 bg-black/30 p-5">
                  <p className="text-3xl font-black text-cyan-200">{index + 1}</p>
                  <p className="mt-6 text-sm font-semibold leading-6 text-white">{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_16%_20%,rgba(255,43,214,0.20),transparent_28%),radial-gradient(circle_at_80%_50%,rgba(34,211,238,0.18),transparent_32%),rgba(255,255,255,0.035)] p-6 shadow-neon sm:p-8 lg:grid-cols-[1fr_0.9fr]">
            <SectionHeading
              eyebrow="Diferencial"
              title="Diseno y fabricacion en un solo lugar"
              description="Materiales, luz y terminacion pensados para que el cartel se vea bien."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {differentiators.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-sm font-semibold text-white/78">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-lime-200/25 bg-[linear-gradient(135deg,#0c101d,#08151c_45%,#17101f)] p-8 text-white shadow-[0_0_80px_rgba(240,243,58,0.12)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-200">
                  Presupuesto gratuito
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
                  Queres que tu marca se vea mas?
                </h2>
              </div>
              <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Consultar por WhatsApp
              </ButtonLink>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="columns-1 gap-4 lg:columns-2">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group mb-4 break-inside-avoid rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5 shadow-glass"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white">
                  <span>{faq.question}</span>
                  <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full border border-cyan-200/30 bg-cyan-300/8 text-cyan-100 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contacto" className="border-t border-white/10 bg-black/35">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
            <SectionHeading
              eyebrow="Contacto"
              title="Hablemos de tu proximo cartel"
              description="Mandanos tu idea por WhatsApp y te orientamos."
            />
            <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.04] p-6 shadow-glass">
              <div className="grid gap-4 text-sm text-white/74 sm:grid-cols-2">
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block hover:text-cyan-100">
                    {site.whatsappLabel}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white">Instagram</p>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="mt-1 block hover:text-cyan-100">
                    {site.instagramLabel}
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-white">Ubicacion</p>
                  <p className="mt-1">{site.address}</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Alcance</p>
                  <p className="mt-1">{site.scope}</p>
                </div>
              </div>
              <div className="mt-6">
                <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  Pedir presupuesto por WhatsApp
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
