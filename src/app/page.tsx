import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { categories, faqs, processSteps, projects, reasons, site } from "@/lib/site";

export default function HomePage() {
  const whatsappUrl = site.whatsappUrl;

  return (
    <>
      <SiteHeader />

      <main className="overflow-hidden">
        <section id="inicio" className="border-b border-[#D8D2C8] bg-[#F6F3EE]">
          <div className="mx-auto grid min-h-[calc(100svh-73px)] max-w-[1440px] gap-10 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12 lg:px-8 lg:py-8">
            <div className="flex flex-col justify-between py-8 lg:py-14">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.34em] text-[#5F5A53]">
                  Diseño Amoblamientos · Córdoba, Argentina
                </p>
                <h1 className="mt-8 max-w-[11ch] font-editorial text-[3.4rem] leading-[0.94] tracking-[-0.05em] text-[#151515] sm:text-[4.5rem] lg:text-[6.2rem]">
                  {site.heroTitle}
                </h1>
                <p className="mt-8 max-w-xl text-base leading-8 text-[#4F4A44] sm:text-lg">
                  {site.heroSubtitle}
                </p>
              </div>

              <div className="mt-12 flex flex-col gap-5 border-t border-[#D8D2C8] pt-6 sm:flex-row sm:items-end sm:justify-between">
                <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {site.primaryCta}
                </ButtonLink>
                <a
                  href="#proyectos"
                  className="text-sm uppercase tracking-[0.28em] text-[#151515] transition hover:text-[#7A6A57]"
                >
                  Explorar proyectos
                </a>
              </div>
            </div>

            <div className="relative min-h-[520px] border border-[#D8D2C8] bg-[#ECE7DF] sm:min-h-[620px]">
              <Image
                src="/images/diseno-amoblamientos/hero.svg"
                alt="Composición visual editorial de Diseño Amoblamientos"
                fill
                priority
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-between gap-6 border-t border-[#D8D2C8] bg-[rgba(246,243,238,0.88)] px-5 py-4 backdrop-blur-sm sm:px-8">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#5F5A53]">
                    Rubro
                  </p>
                  <p className="mt-2 text-sm text-[#151515]">
                    Cocinas, placares, vestidores y muebles a medida
                  </p>
                </div>
                <div className="hidden text-right sm:block">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#5F5A53]">
                    Contacto
                  </p>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-[#151515] transition hover:text-[#7A6A57]"
                  >
                    {site.whatsappDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="categorias" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 border-t border-[#D8D2C8] pt-6 lg:grid-cols-[0.4fr_1fr] lg:pt-8">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#5F5A53]">
                Categorías
              </p>
              <h2 className="mt-4 max-w-xs font-editorial text-4xl leading-[1] tracking-[-0.04em] text-[#151515] sm:text-5xl">
                Tipologías que resolvemos a medida.
              </h2>
            </div>

            <div className="grid gap-px bg-[#D8D2C8] md:grid-cols-2">
              {categories.map((category) => (
                <article key={category.title} className="group bg-[#F8F6F1]">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.015]"
                    />
                  </div>
                  <div className="grid gap-3 px-5 py-5 sm:px-6 sm:py-6">
                    <h3 className="font-editorial text-[2rem] leading-none tracking-[-0.03em] text-[#151515]">
                      {category.title}
                    </h3>
                    <p className="max-w-md text-sm leading-6 text-[#4F4A44]">
                      {category.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="border-y border-[#D8D2C8] bg-[#F1EEE8]">
          <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-8 lg:grid-cols-[0.42fr_1fr]">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#5F5A53]">
                  Proyectos
                </p>
                <h2 className="mt-4 max-w-sm font-editorial text-4xl leading-[1] tracking-[-0.04em] text-[#151515] sm:text-5xl">
                  Un portfolio visual más cercano a catálogo que a plantilla.
                </h2>
              </div>

              <div className="grid gap-px bg-[#D8D2C8] md:grid-cols-12">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className={`group relative min-h-[320px] bg-[#F8F6F1] ${project.className}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(21,21,21,0.04),rgba(21,21,21,0.62))]" />
                    <div className="absolute inset-x-0 bottom-0 border-t border-white/20 px-5 py-4 text-[#F8F6F1] sm:px-6">
                      <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#DDD5CA]">
                        {project.category}
                      </p>
                      <h3 className="mt-2 font-editorial text-[1.8rem] leading-none tracking-[-0.03em]">
                        {project.title}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="border-t border-[#D8D2C8] pt-6 lg:pt-8">
            <div className="grid gap-10 lg:grid-cols-[0.38fr_1fr]">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#5F5A53]">
                  Proceso
                </p>
                <h2 className="mt-4 max-w-xs font-editorial text-4xl leading-[1] tracking-[-0.04em] text-[#151515] sm:text-5xl">
                  Un recorrido claro, sobrio y ordenado.
                </h2>
              </div>

              <div className="grid gap-8 md:grid-cols-4 md:gap-0">
                {processSteps.map((step, index) => (
                  <article key={step.number} className="relative md:px-6">
                    <div className="flex items-end justify-between gap-4 border-b border-[#D8D2C8] pb-5">
                      <span className="font-editorial text-[3.2rem] leading-none tracking-[-0.05em] text-[#151515] sm:text-[4rem]">
                        {step.number}
                      </span>
                      {index < processSteps.length - 1 ? (
                        <span className="hidden h-px flex-1 bg-[#D8D2C8] md:block" />
                      ) : null}
                    </div>
                    <h3 className="mt-5 font-editorial text-[1.9rem] leading-none tracking-[-0.03em] text-[#151515]">
                      {step.title}
                    </h3>
                    <p className="mt-3 max-w-[18rem] text-sm leading-6 text-[#4F4A44]">
                      {step.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#D8D2C8] bg-[#FBFAF7]">
          <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.44fr_1fr]">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#5F5A53]">
                  Por qué elegirnos
                </p>
                <h2 className="mt-4 max-w-xs font-editorial text-4xl leading-[1] tracking-[-0.04em] text-[#151515] sm:text-5xl">
                  Beneficios expresados con claridad.
                </h2>
              </div>

              <div className="grid gap-px bg-[#D8D2C8] sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div key={reason} className="bg-[#FBFAF7] px-5 py-8 sm:px-7">
                    <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#7A6A57]">
                      Diseño Amoblamientos
                    </p>
                    <p className="mt-4 font-editorial text-[2rem] leading-none tracking-[-0.03em] text-[#151515]">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-8 border-y border-[#D8D2C8] py-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#5F5A53]">
                Consulta
              </p>
              <h2 className="mt-4 max-w-3xl font-editorial text-4xl leading-[0.98] tracking-[-0.04em] text-[#151515] sm:text-5xl lg:text-[4.3rem]">
                Si ya tenés una idea, podemos convertirla en un proyecto posible.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#4F4A44]">
                Escribinos por WhatsApp para contarnos medidas, necesidades y el tipo de ambiente que querés resolver.
              </p>
            </div>

            <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Pedir información
            </ButtonLink>
          </div>
        </section>

        <section id="faq" className="border-y border-[#D8D2C8] bg-[#F6F3EE]">
          <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[0.38fr_1fr]">
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#5F5A53]">
                  Preguntas frecuentes
                </p>
                <h2 className="mt-4 max-w-xs font-editorial text-4xl leading-[1] tracking-[-0.04em] text-[#151515] sm:text-5xl">
                  Respuestas simples para consultas habituales.
                </h2>
              </div>

              <div className="border-t border-[#D8D2C8]">
                {faqs.map((faq) => (
                  <details key={faq.question} className="border-b border-[#D8D2C8] py-5">
                    <summary className="flex cursor-pointer items-center justify-between gap-6 text-left">
                      <span className="font-editorial text-[1.6rem] leading-none tracking-[-0.03em] text-[#151515]">
                        {faq.question}
                      </span>
                      <span className="text-xs uppercase tracking-[0.28em] text-[#7A6A57]">
                        Abrir
                      </span>
                    </summary>
                    <p className="max-w-2xl pt-4 text-sm leading-7 text-[#4F4A44]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 border-t border-[#D8D2C8] pt-6 lg:grid-cols-[1fr_0.72fr] lg:pt-8">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#5F5A53]">
                Contacto
              </p>
              <h2 className="mt-4 max-w-xl font-editorial text-4xl leading-[0.98] tracking-[-0.04em] text-[#151515] sm:text-5xl lg:text-[4.2rem]">
                Hablemos sobre el espacio que querés transformar.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#4F4A44]">
                Diseño Amoblamientos trabaja en Córdoba, Argentina, desarrollando cocinas, placares, vestidores y muebles personalizados.
              </p>
              <div className="mt-8">
                <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Consultar por WhatsApp
                </ButtonLink>
              </div>
            </div>

            <div className="grid gap-px bg-[#D8D2C8]">
              <div className="bg-[#FBFAF7] px-5 py-6 sm:px-7">
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#7A6A57]">WhatsApp</p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-editorial text-[2rem] leading-none tracking-[-0.03em] text-[#151515] transition hover:text-[#7A6A57]"
                >
                  {site.whatsappDisplay}
                </a>
              </div>
              <div className="bg-[#FBFAF7] px-5 py-6 sm:px-7">
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#7A6A57]">Instagram</p>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-editorial text-[2rem] leading-none tracking-[-0.03em] text-[#151515] transition hover:text-[#7A6A57]"
                >
                  {site.instagramHandle}
                </a>
              </div>
              <div className="bg-[#FBFAF7] px-5 py-6 sm:px-7">
                <p className="text-[0.68rem] uppercase tracking-[0.3em] text-[#7A6A57]">Ubicación</p>
                <p className="mt-3 font-editorial text-[2rem] leading-none tracking-[-0.03em] text-[#151515]">
                  {site.location}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingWhatsAppButton href={whatsappUrl} label="WhatsApp" />
    </>
  );
}
