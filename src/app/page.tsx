import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  buildWhatsappUrl,
  catalogFilters,
  catalogHighlights,
  processSteps,
  productCategories,
  projects,
  site,
  trustPoints,
} from "@/lib/site";

const heroImage =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80";

export default function HomePage() {
  const whatsappUrl = buildWhatsappUrl(site.whatsappMessage);
  const isWhatsAppAvailable = whatsappUrl !== "#";

  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} />

      <main className="overflow-hidden">
        <section id="inicio" className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
          <div className="relative overflow-hidden rounded-[2.6rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,247,248,0.96))] shadow-[0_40px_90px_-54px_rgba(24,33,43,0.28)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,111,128,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(208,177,138,0.14),transparent_26%)]" />
            <div className="relative grid gap-10 px-6 py-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-10 lg:py-12">
              <div className="max-w-[34rem]">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6c7a86]">
                  {site.heroEyebrow}
                </p>
                <h1 className="mt-5 max-w-3xl font-heading text-[2.9rem] font-semibold leading-[1.02] tracking-[-0.04em] text-[#18212b] sm:text-[3.6rem] lg:text-[4.45rem]">
                  {site.heroTitle}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#51606d] sm:text-lg">
                  {site.heroSubtitle}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink
                    href={whatsappUrl}
                    target={isWhatsAppAvailable ? "_blank" : undefined}
                    rel={isWhatsAppAvailable ? "noopener noreferrer" : undefined}
                    className="bg-[#18212b] text-white hover:bg-[#24303d]"
                  >
                    {site.primaryCta}
                  </ButtonLink>
                  <ButtonLink href="#catalogo" variant="secondary">
                    {site.secondaryCta}
                  </ButtonLink>
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-6 hidden h-[78%] w-[22%] rounded-[2rem] border border-[#dbe3e8] bg-[#eef2f5] lg:block" />
                <div className="relative overflow-hidden rounded-[2.15rem] border border-white/80 bg-white p-3 shadow-[0_30px_80px_-50px_rgba(24,33,43,0.32)]">
                  <div className="relative h-[410px] overflow-hidden rounded-[1.7rem] sm:h-[530px]">
                    <Image
                      src={heroImage}
                      alt="Ambiente moderno con muebles a medida"
                      fill
                      priority
                      sizes="(min-width: 1024px) 56vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: "center 54%" }}
                    />
                  </div>
                  <div className="absolute bottom-7 left-7 max-w-[250px] rounded-[1.4rem] border border-white/70 bg-[rgba(255,255,255,0.92)] p-4 backdrop-blur">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#6c7a86]">
                      Diseno, orden y funcionalidad
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#43515d]">
                      Soluciones pensadas para mostrar productos, proyectos y una propuesta de trabajo mas clara.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="productos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6c7a86]">
              Productos principales
            </p>
            <h2 className="mt-4 font-heading text-[2.3rem] font-semibold leading-tight tracking-[-0.04em] text-[#18212b] sm:text-[3rem]">
              Categorias pensadas para ordenar mejor la oferta y mostrar el alcance real del trabajo
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {productCategories.map((category) => (
              <article
                key={category.title}
                className="group overflow-hidden rounded-[2rem] border border-[#dde4e8] bg-white shadow-[0_24px_60px_-42px_rgba(24,33,43,0.28)]"
              >
                <div className="relative h-[250px] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: category.objectPosition }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-[1.35rem] font-semibold tracking-[-0.03em] text-[#18212b]">
                    {category.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#51606d]">{category.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="catalogo" className="border-y border-[#dbe3e8] bg-[#eef2f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6c7a86]">
                  Catalogo visual
                </p>
                <h2 className="mt-4 font-heading text-[2.2rem] font-semibold leading-tight tracking-[-0.04em] text-[#18212b] sm:text-[2.9rem]">
                  Una primera vista mas comercial para recorrer lineas y aplicaciones
                </h2>
              </div>

              <div className="flex flex-wrap gap-3 lg:justify-end">
                {catalogFilters.map((filter) => (
                  <span
                    key={filter}
                    className="rounded-full border border-[#c9d2d9] bg-white px-4 py-2 text-sm font-medium text-[#43515d]"
                  >
                    {filter}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 grid auto-rows-[240px] gap-5 lg:grid-cols-4 lg:auto-rows-[220px]">
              {catalogHighlights.map((item) => (
                <article
                  key={item.title}
                  className={`group relative overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-[0_24px_60px_-40px_rgba(24,33,43,0.24)] ${item.span}`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: item.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,33,43,0.02),rgba(24,33,43,0.5))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/72">
                      Catalogo
                    </p>
                    <h3 className="mt-2 font-heading text-[1.7rem] font-semibold tracking-[-0.03em]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/80">{item.subtitle}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6c7a86]">
              Proyectos realizados
            </p>
            <h2 className="mt-4 font-heading text-[2.2rem] font-semibold leading-tight tracking-[-0.04em] text-[#18212b] sm:text-[2.9rem]">
              Proyectos que muestran lineas, escalas y aplicaciones en distintos espacios
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {projects.map((project) => (
              <article
                key={project.title}
                className="overflow-hidden rounded-[2rem] border border-[#dde4e8] bg-white shadow-[0_24px_60px_-44px_rgba(24,33,43,0.26)]"
              >
                <div className="relative h-[280px] sm:h-[340px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: project.objectPosition }}
                  />
                </div>
                <div className="px-6 py-5">
                  <h3 className="font-heading text-[1.3rem] font-semibold tracking-[-0.03em] text-[#18212b]">
                    {project.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="proceso" className="border-y border-[#dbe3e8] bg-white">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6c7a86]">
                Proceso de trabajo
              </p>
              <h2 className="mt-4 font-heading text-[2.2rem] font-semibold leading-tight tracking-[-0.04em] text-[#18212b] sm:text-[2.9rem]">
                Una secuencia clara para pasar de la consulta al proyecto instalado
              </h2>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.85rem] border border-[#dde4e8] bg-[#f8fafb] px-6 py-7"
                >
                  <span className="text-[0.72rem] font-semibold tracking-[0.28em] text-[#6c7a86]">
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-heading text-[1.45rem] font-semibold tracking-[-0.03em] text-[#18212b]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#51606d]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="rounded-[2.2rem] border border-[#dde4e8] bg-[#18212b] p-8 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d0b18a]">
                Sobre Norte Equipa
              </p>
              <h2 className="mt-4 font-heading text-[2.2rem] font-semibold leading-tight tracking-[-0.04em] sm:text-[2.8rem]">
                Equipamiento a medida con foco en orden, funcionalidad y acompanamiento
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/76">
                Norte Equipa acompana proyectos para hogares y comercios con una mirada practica, una presentacion clara y soluciones pensadas para el uso real del espacio.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.8rem] border border-[#dde4e8] bg-white px-6 py-6 shadow-[0_24px_60px_-44px_rgba(24,33,43,0.24)]"
                >
                  <p className="font-heading text-[1.15rem] font-semibold tracking-[-0.03em] text-[#18212b]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="border-t border-[#dbe3e8] bg-[#eef2f5]">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
              <div className="rounded-[2.2rem] border border-[#d6dde2] bg-white p-8 shadow-[0_30px_70px_-48px_rgba(24,33,43,0.24)] sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6c7a86]">
                  Contacto
                </p>
                <h2 className="mt-4 max-w-xl font-heading text-[2.2rem] font-semibold leading-tight tracking-[-0.04em] text-[#18212b] sm:text-[2.8rem]">
                  Contanos que necesitas y te asesoramos
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-[#51606d]">
                  Podemos ayudarte a ordenar la necesidad, definir categorias, pensar el equipamiento y avanzar con una propuesta alineada al espacio.
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
                  <ButtonLink href="#proyectos" variant="secondary">
                    Ver proyectos
                  </ButtonLink>
                </div>
              </div>

              <div className="rounded-[2.2rem] border border-[#d6dde2] bg-[#18212b] p-8 text-white sm:p-10">
                <div className="space-y-5">
                  <div className="border-b border-white/10 pb-5">
                    <p className="text-sm font-semibold text-[#d0b18a]">Zona de trabajo</p>
                    <p className="mt-2 text-sm leading-6 text-white/76">{site.location}</p>
                  </div>
                  <div className="border-b border-white/10 pb-5">
                    <p className="text-sm font-semibold text-[#d0b18a]">WhatsApp principal</p>
                    <p className="mt-2 text-sm leading-6 text-white/76">{site.whatsappDisplay}</p>
                  </div>
                  {site.instagramUrl !== "#" ? (
                    <div>
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
                </div>
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
