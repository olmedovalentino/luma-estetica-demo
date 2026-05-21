import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { benefits, categoryProjects, faqs, portfolioItems, processSteps, site } from "@/lib/site";

const heroImage = "/images/creativo-muebles/hero.jpg";

export default function HomePage() {
  const whatsappUrl = site.whatsappUrl;

  return (
    <>
      <SiteHeader />

      <main className="overflow-hidden">
        <section id="inicio" className="mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8 lg:pb-28 lg:pt-8">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
            <div className="relative z-10 max-w-[33rem] lg:-mt-8 lg:py-10">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#8A5A3C] lg:-translate-y-3">
                {site.locationLabel}
              </p>
              <h1 className="mt-3 max-w-[32rem] font-editorial text-[2.65rem] leading-[1.03] tracking-[-0.03em] text-[#1F1A17] sm:text-[3.1rem] lg:text-[3.55rem]">
                {site.heroTitle}
              </h1>
              <p className="mt-14 max-w-lg text-base leading-8 text-[#6D655E] sm:text-lg">
                {site.heroSubtitle}
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-6 top-8 hidden h-[72%] w-[40%] rounded-[2rem] border border-[#E8DDD2] bg-[#F3ECE2] lg:block" />
              <div className="relative overflow-hidden rounded-[2.4rem] border border-[#E8DDD2] bg-[#FFFDF8] p-3 shadow-[0_40px_90px_-52px_rgba(31,26,23,0.4)]">
                <div className="relative h-[420px] overflow-hidden rounded-[1.9rem] sm:h-[520px]">
                  <Image
                    src={heroImage}
                    alt="Interior cálido con muebles a medida y madera natural"
                    fill
                    priority
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: "center 54%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#E8DDD2] bg-[#FFFDF8]">
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <div className="relative order-2 lg:order-1">
              <div className="relative h-[360px] overflow-hidden rounded-[2.2rem] border border-[#E8DDD2] sm:h-[460px]">
                <Image
                  src="/images/creativo-muebles/proyecto-5.jpg"
                  alt="Espacio interior con mueble de guardado a medida"
                  fill
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: "center 54%" }}
                />
              </div>
            </div>

            <div className="order-1 lg:order-2 lg:pl-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#8A5A3C]">
                Muebles a medida para espacios reales
              </p>
              <h2 className="mt-4 max-w-lg font-editorial text-4xl leading-tight tracking-[-0.03em] text-[#1F1A17] sm:text-5xl">
                Diseño funcional para vivir mejor cada ambiente
              </h2>
              <p className="mt-8 max-w-xl text-base leading-8 text-[#6D655E]">
                Trabajamos cocinas, placares, vestidores y muebles personalizados para hogares que buscan funcionalidad, buena terminación y una estética integrada al espacio.
              </p>

              <div className="mt-10 space-y-3">
                {[
                  "Cocinas a medida",
                  "Placares y vestidores personalizados",
                  "Fabricación propia en Córdoba",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4 border-b border-[#E8DDD2] pb-4">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#8A5A3C]" />
                    <p className="text-sm leading-6 text-[#6D655E]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#8A5A3C]">
              Proyectos y categorías
            </p>
            <h2 className="mt-4 font-editorial text-4xl leading-tight tracking-[-0.03em] text-[#1F1A17] sm:text-5xl">
              Soluciones a medida para distintos ambientes
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {categoryProjects.map((project, index) => (
              <article
                key={project.title}
                className={`overflow-hidden rounded-[2rem] border border-[#E8DDD2] ${
                  index % 2 === 0 ? "bg-[#F3ECE2]" : "bg-[#FFFDF8]"
                }`}
              >
                <div className="relative h-[290px] overflow-hidden sm:h-[340px]">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-500 hover:scale-[1.02]"
                    style={{ objectPosition: project.objectPosition }}
                  />
                </div>
                <div className="grid gap-5 px-6 py-6 sm:grid-cols-[1fr_auto] sm:items-end">
                  <div>
                    <h3 className="font-editorial text-3xl leading-none text-[#1F1A17]">
                      {project.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-6 text-[#6D655E]">
                      {project.description}
                    </p>
                  </div>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#8A5A3C]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="proceso" className="border-y border-[#E8DDD2] bg-[#F3ECE2]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#8A5A3C]">
                Proceso de trabajo
              </p>
              <h2 className="mt-4 font-editorial text-4xl leading-tight tracking-[-0.03em] text-[#1F1A17] sm:text-5xl">
                Un proceso claro, simple y a medida
              </h2>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.9rem] border border-[#E8DDD2] bg-[#FFFDF8] px-6 py-7"
                >
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[#D8C1A8] text-[0.78rem] font-semibold tracking-[0.18em] text-[#8A5A3C]">
                      {step.number}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-editorial text-[1.6rem] leading-none text-[#1F1A17]">
                        {step.title}
                      </h3>
                      <p className="mt-3 max-w-[18rem] text-sm leading-6 text-[#6D655E]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="trabajos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#8A5A3C]">
              Portfolio visual
            </p>
            <h2 className="mt-4 font-editorial text-4xl leading-tight tracking-[-0.03em] text-[#1F1A17] sm:text-5xl">
              Proyectos pensados para cada ambiente
            </h2>
          </div>

          <div className="mt-10 grid auto-rows-[220px] gap-4 md:grid-cols-3 md:auto-rows-[240px]">
            {portfolioItems.map((item) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-[1.9rem] border border-[#E8DDD2] ${item.span}`}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  style={{ objectPosition: item.objectPosition }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(31,26,23,0.02),rgba(31,26,23,0.46))]" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-[#FFFDF8]">
                  <h3 className="font-editorial text-[1.9rem] leading-none">{item.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-[#E8DDD2] bg-[#FFFDF8]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8 lg:py-24">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#8A5A3C]">
                Por qué a medida
              </p>
              <h2 className="mt-4 font-editorial text-4xl leading-tight tracking-[-0.03em] text-[#1F1A17] sm:text-5xl">
                Por qué elegir muebles a medida
              </h2>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex items-center justify-between gap-4 border-b border-[#E8DDD2] pb-4"
                >
                  <p className="text-base leading-6 text-[#1F1A17]">{benefit}</p>
                  <span className="text-sm font-semibold tracking-[0.28em] text-[#8A5A3C]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[2.2rem] border border-[#E8DDD2] bg-[#1F1A17] p-8 text-[#FFFDF8] sm:p-10">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#D8C1A8]">
                Consulta por proyecto
              </p>
              <h2 className="mt-4 max-w-xl font-editorial text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                Contanos qué espacio querés resolver
              </h2>
              <p className="mt-6 max-w-xl text-base leading-7 text-[#E9DDD1]">
                Escribinos y contanos qué mueble o ambiente tenés en mente. Podemos orientarte con ideas, medidas y próximos pasos.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-[#D8C1A8] bg-[#D8C1A8] text-[#1F1A17] hover:bg-[#e4cfb8]"
                >
                  Consultar por proyecto
                </ButtonLink>
                <ButtonLink
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  className="border-[#D8C1A8] bg-transparent text-[#FFFDF8] hover:border-[#FFFDF8] hover:bg-white/5"
                >
                  Pedir presupuesto
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[2.2rem] border border-[#E8DDD2] bg-[#F3ECE2] p-8 sm:p-10">
              <div className="space-y-5">
                <div className="border-b border-[#D8C1A8] pb-5">
                  <p className="text-sm font-semibold text-[#1F1A17]">Córdoba, Argentina</p>
                  <p className="mt-2 text-sm leading-6 text-[#6D655E]">
                    Consultas por proyecto por WhatsApp o Instagram.
                  </p>
                </div>
                <div className="border-b border-[#D8C1A8] pb-5">
                  <p className="text-sm font-semibold text-[#1F1A17]">Instagram</p>
                  <a
                    href={site.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm leading-6 text-[#6D655E] underline decoration-[#D8C1A8] underline-offset-4"
                  >
                    @creativomuebles
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1F1A17]">WhatsApp</p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm leading-6 text-[#6D655E] underline decoration-[#D8C1A8] underline-offset-4 transition hover:text-[#1F1A17]"
                  >
                    {site.whatsappDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="preguntas" className="border-t border-[#E8DDD2] bg-[#FFFDF8]">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-24">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#8A5A3C]">
                Preguntas frecuentes
              </p>
              <h2 className="mt-4 font-editorial text-4xl leading-tight tracking-[-0.03em] text-[#1F1A17] sm:text-5xl">
                Información clara para avanzar con tu proyecto
              </h2>
            </div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[1.6rem] border border-[#E8DDD2] bg-[#F7F2EA] px-5 py-4"
                >
                  <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-[#1F1A17]">
                    <span>{faq.question}</span>
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#D8C1A8] text-[#8A5A3C] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6D655E]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingWhatsAppButton href={whatsappUrl} label="Consultar por WhatsApp" />
    </>
  );
}
