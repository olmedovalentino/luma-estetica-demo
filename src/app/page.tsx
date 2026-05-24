import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { resolvePublicImage } from "@/lib/asset";
import {
  buildWhatsappUrl,
  categories,
  contactCards,
  hero,
  intro,
  processSteps,
  projects,
  site,
} from "@/lib/site";

export default function HomePage() {
  const whatsappUrl = buildWhatsappUrl(site.whatsappMessage);

  return (
    <>
      <SiteHeader />

      <main className="relative overflow-hidden">
        <section id="inicio" className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-20">
          <div className="relative overflow-hidden rounded-[2.6rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,252,247,0.98),rgba(247,239,231,0.96))] shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(186,152,120,0.14),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(123,93,73,0.12),transparent_24%)]" />
            <div className="relative grid gap-10 px-6 py-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-10">
              <div className="max-w-[31rem]">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#866b58]">
                  {hero.eyebrow}
                </p>
                <h1 className="mt-5 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.04em] text-[#211a17] sm:text-[3.2rem] lg:text-[4rem]">
                  {hero.title}
                </h1>
                <p className="mt-6 max-w-xl text-[1rem] leading-8 text-[#5f554e]">{hero.description}</p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Consultar por WhatsApp
                  </ButtonLink>
                  <ButtonLink href="#proyectos" variant="secondary">
                    Ver trabajos
                  </ButtonLink>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-3 top-6 hidden h-[76%] w-[18%] rounded-[2rem] border border-[#e2d6cb] bg-[#efe4d8] lg:block" />
                <div className="relative overflow-hidden rounded-[2.1rem] border border-white/70 bg-white p-3 shadow-[0_34px_80px_-50px_rgba(44,33,29,0.22)]">
                  <div className="relative h-[390px] overflow-hidden rounded-[1.6rem] sm:h-[500px]">
                    <Image
                      src={resolvePublicImage(hero.image, hero.fallbackImage)}
                      alt={hero.alt}
                      fill
                      priority
                      sizes="(min-width: 1024px) 56vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: "center 54%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="amoblamientos" className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
          <div className="grid gap-8 rounded-[2.2rem] border border-white/70 bg-white/82 p-7 shadow-soft lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:p-10">
            <div>
              <SectionHeading eyebrow={intro.eyebrow} title={intro.title} description={intro.description} />
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                "Diseño funcional",
                "Fabricacion a medida",
                "Terminaciones prolijas",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.6rem] border border-[#eadfd4] bg-[#faf5ef] px-5 py-6 text-sm font-semibold text-[#211a17]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-[#f1e8df]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="Servicios"
              title="Amoblamientos pensados para ordenar, habitar y aprovechar mejor"
              description="Categorias visuales para mostrar el alcance del trabajo sin cargar la pagina con texto tecnico."
            />

            <div className="mt-9 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {categories.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[1.9rem] border border-white/80 bg-white shadow-[0_24px_60px_-42px_rgba(44,33,29,0.2)]"
                >
                  <div className="relative h-[250px] overflow-hidden">
                    <Image
                      src={resolvePublicImage(item.image, item.fallbackImage)}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      style={{ objectPosition: item.objectPosition }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[1.08rem] font-semibold tracking-[-0.02em] text-[#211a17]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#5f554e]">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="proyectos" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Proyectos"
            title="Trabajos pensados para cada estilo de vida"
            description="Una seleccion visual para transmitir orden, calidad de terminacion y variedad de soluciones."
          />

          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className={["group overflow-hidden rounded-[2rem] border border-white/80 bg-white shadow-soft", project.span].join(
                  " ",
                )}
              >
                <div className="relative h-[280px] overflow-hidden sm:h-[340px]">
                  <Image
                    src={resolvePublicImage(project.image, project.fallbackImage)}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: project.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.04),rgba(16,12,10,0.56))]" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-[1.02rem] font-semibold tracking-[-0.02em]">{project.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="proceso" className="bg-[#f1e8df]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
            <SectionHeading
              eyebrow="Proceso"
              title="Una forma clara de trabajar, desde la idea hasta la colocacion"
              description="Mostramos el recorrido de forma breve para que la consulta se sienta simple y profesional."
            />

            <div className="mt-9 grid gap-4 lg:grid-cols-4">
              {processSteps.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[1.8rem] border border-white/80 bg-white/92 p-6 shadow-[0_24px_60px_-42px_rgba(44,33,29,0.16)]"
                >
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#866b58]">
                    {step.number}
                  </p>
                  <h3 className="mt-4 text-[1.05rem] font-semibold text-[#211a17]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#5f554e]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-[2.3rem] border border-[#d8cabb] bg-[#221b18] p-8 text-white shadow-[0_30px_80px_-50px_rgba(34,27,24,0.35)] sm:p-10 lg:p-12">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d7beaa]">
                Contacto
              </p>
              <h2 className="mt-4 max-w-xl text-[2rem] font-semibold tracking-[-0.03em] sm:text-[2.4rem]">
                Contanos que espacio queres resolver
              </h2>
              <p className="mt-5 max-w-xl text-[0.98rem] leading-8 text-white/78">
                Escribinos por WhatsApp y contanos que tipo de amoblamiento tenes en mente. Podemos orientarte con ideas, medidas y proximos pasos para avanzar.
              </p>

              <div className="mt-9">
                <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Consultar por WhatsApp
                </ButtonLink>
              </div>
            </div>

            <div className="rounded-[2.3rem] border border-white/80 bg-white/86 p-8 shadow-soft sm:p-10">
              <div className="space-y-5">
                {contactCards.map((card) => (
                  <div key={card.label} className="rounded-[1.6rem] border border-[#eadfd4] bg-[#faf5ef] px-5 py-5">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#866b58]">
                      {card.label}
                    </p>
                    {"href" in card ? (
                      <a
                        href={card.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex text-base font-semibold text-[#211a17] transition hover:text-[#6a5f58]"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="mt-3 text-base font-semibold text-[#211a17]">{card.value}</p>
                    )}
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
