import { LocalImageFrame } from "@/components/local-image-frame";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { faqs, projects, reasons, services, site } from "@/lib/site";

export default function HomePage() {
  const whatsappUrl = site.whatsappUrl;

  return (
    <>
      <SiteHeader />

      <main className="overflow-hidden">
        <section id="inicio" className="border-b border-[#DDD4C8] bg-[#F6F2EB]">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12 lg:px-8 lg:py-16">
            <div className="flex flex-col lg:min-h-[560px] lg:justify-between">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#6A645D]">
                Diseño Amoblamientos · Córdoba, Argentina
              </p>
              <div className="py-6 lg:py-10">
                <h1 className="max-w-[12ch] text-[2.1rem] font-semibold leading-[1.02] tracking-[-0.05em] text-[#151515] sm:text-[2.7rem] lg:text-[3.3rem]">
                  {site.heroTitle}
                </h1>
              </div>
              <p className="max-w-lg text-[0.98rem] leading-7 text-[#4F4A44] sm:text-[1rem]">
                {site.heroSubtitle}
              </p>
            </div>

            <LocalImageFrame
              src="/images/diseno-amoblamientos/hero.jpg"
              alt="Proyecto destacado de Diseño Amoblamientos"
              sizes="(min-width: 1024px) 58vw, 100vw"
              priority
              label="Hero"
              className="min-h-[380px] border border-[#DDD4C8] lg:min-h-[560px]"
            />
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr]">
            <div className="space-y-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#6A645D]">
                Servicios
              </p>
              <h2 className="max-w-xs text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#151515] sm:text-[2.4rem]">
                Lo esencial, bien resuelto.
              </h2>
            </div>

            <div className="grid gap-5 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
              <article className="grid gap-5 border border-[#DDD4C8] bg-[#FBF8F3] p-4 sm:p-5">
                <LocalImageFrame
                  src={services[0].image}
                  alt={services[0].alt}
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  label={services[0].title}
                  className="aspect-[5/4] border border-[#DDD4C8]"
                />
                <div className="grid gap-3 border-t border-[#DDD4C8] pt-4">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#7A6A57]">
                    Servicio destacado
                  </p>
                  <h3 className="text-[1.75rem] font-semibold leading-tight tracking-[-0.04em] text-[#151515]">
                    {services[0].title}
                  </h3>
                  <p className="max-w-md text-sm leading-6 text-[#4F4A44]">
                    {services[0].description}
                  </p>
                </div>
              </article>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                {services.slice(1).map((service) => (
                  <article
                    key={service.title}
                    className="grid gap-4 border border-[#DDD4C8] bg-[#FBF8F3] p-4 sm:grid-cols-[140px_minmax(0,1fr)] sm:items-center"
                  >
                    <LocalImageFrame
                      src={service.image}
                      alt={service.alt}
                      sizes="(min-width: 1024px) 18vw, 50vw"
                      label={service.title}
                      className="aspect-square border border-[#DDD4C8]"
                    />
                    <div className="grid gap-2 border-t border-[#DDD4C8] pt-4 sm:border-l sm:border-t-0 sm:border-[#DDD4C8] sm:pl-4 sm:pt-0">
                      <h3 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-[#151515]">
                        {service.title}
                      </h3>
                      <p className="max-w-sm text-sm leading-6 text-[#4F4A44]">
                        {service.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="por-que-elegirnos"
          className="border-y border-[#DDD4C8] bg-[#FBF8F3]"
        >
          <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
              <div className="border-t border-[#DDD4C8] pt-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#6A645D]">
                  Por qué elegirnos
                </p>
                <h2 className="mt-4 max-w-[13rem] text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#151515] sm:text-[2rem]">
                  Menos promesa, más criterio.
                </h2>
              </div>

              <div className="grid gap-px bg-[#DDD4C8] md:grid-cols-3">
                {reasons.map((reason) => (
                  <article key={reason.title} className="bg-[#FBF8F3] px-5 py-6 sm:px-6 sm:py-7">
                    <h3 className="text-[1rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[#151515]">
                      {reason.title}
                    </h3>
                    <p className="mt-3 max-w-[15rem] text-[0.92rem] leading-6 text-[#4F4A44]">
                      {reason.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proyectos" className="border-y border-[#DDD4C8] bg-[#F1ECE3]">
          <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr]">
              <div className="space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#6A645D]">
                  Proyectos
                </p>
                <h2 className="max-w-xs text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#151515] sm:text-[2.4rem]">
                  Trabajos con imagen grande y lectura limpia.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <article key={project.title} className="group relative overflow-hidden bg-[#E7E0D5]">
                    <LocalImageFrame
                      src={project.image}
                      alt={project.alt}
                      sizes="(min-width: 1280px) 24vw, (min-width: 768px) 50vw, 100vw"
                      label={project.title}
                      className="aspect-[4/3]"
                      imageClassName="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(21,21,21,0.02),rgba(21,21,21,0.55))]" />
                    <div className="absolute bottom-0 left-0 px-5 py-4 sm:px-6 sm:py-5">
                      <h3 className="text-[0.9rem] font-medium tracking-[0.01em] text-white/92 sm:text-[0.98rem]">
                        {project.title}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-y border-[#DDD4C8] bg-[#F6F2EB]">
          <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr]">
              <div className="space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#6A645D]">
                  Preguntas frecuentes
                </p>
                <h2 className="max-w-xs text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#151515] sm:text-[2.4rem]">
                  Respuestas cortas para dudas habituales.
                </h2>
              </div>

              <div className="border-t border-[#DDD4C8]">
                {faqs.map((faq) => (
                  <details key={faq.question} className="border-b border-[#DDD4C8] py-5">
                    <summary className="cursor-pointer text-left text-lg font-semibold tracking-[-0.02em] text-[#151515] sm:text-[1.2rem]">
                      {faq.question}
                    </summary>
                    <p className="max-w-2xl pt-4 text-sm leading-7 text-[#4F4A44]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 border-t border-[#DDD4C8] pt-8 lg:grid-cols-[1fr_0.72fr] lg:gap-14">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#6A645D]">
                Consulta
              </p>
              <h2 className="mt-5 max-w-xl text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.05em] text-[#151515] sm:text-[3rem]">
                Hablemos sobre el espacio que querés resolver.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#4F4A44]">
                Escribinos por WhatsApp para contarnos medidas, idea general y tipo de ambiente.
              </p>
            </div>

            <div className="grid gap-px bg-[#DDD4C8]">
              <div className="bg-[#FBF8F3] px-6 py-6 sm:px-7">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#7A6A57]">
                  WhatsApp
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xl font-semibold leading-tight tracking-[-0.03em] text-[#151515] transition hover:text-[#128C4A]"
                >
                  {site.whatsappDisplay}
                </a>
              </div>
              <div className="bg-[#FBF8F3] px-6 py-6 sm:px-7">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#7A6A57]">
                  Instagram
                </p>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xl font-semibold leading-tight tracking-[-0.03em] text-[#151515] transition hover:text-[#7A6A57]"
                >
                  {site.instagramHandle}
                </a>
              </div>
              <div className="bg-[#FBF8F3] px-6 py-6 sm:px-7">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#7A6A57]">
                  Ubicación
                </p>
                <p className="mt-3 text-xl font-semibold leading-tight tracking-[-0.03em] text-[#151515]">
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
