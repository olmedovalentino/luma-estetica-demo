import { ButtonLink } from "@/components/button-link";
import { LocalImageFrame } from "@/components/local-image-frame";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { faqs, inspiration, services, site, trustItems, workSteps } from "@/lib/site";

export default function HomePage() {
  const whatsappUrl = site.whatsappUrl;

  return (
    <>
      <SiteHeader />

      <main className="overflow-hidden">
        <section id="inicio" className="border-b border-[#DCD4C5] bg-[#F7F2E8]">
          <div className="mx-auto grid max-w-[1440px] gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-12 lg:px-8 lg:py-16">
            <div className="flex flex-col lg:min-h-[590px] lg:justify-between">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#6F7651]">
                {site.publicName} · {site.locationLabel}
              </p>
              <div className="py-6 lg:py-10">
                <h1 className="max-w-[13ch] text-[2.2rem] font-semibold leading-[1.02] tracking-[-0.055em] text-[#181714] sm:text-[2.85rem] lg:text-[3.55rem]">
                  {site.heroTitle}
                </h1>
              </div>
              <div>
                <p className="max-w-lg text-[1rem] leading-7 text-[#514E45] sm:text-[1.06rem]">
                  {site.heroSubtitle}
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer" variant="whatsapp">
                    {site.primaryCta}
                  </ButtonLink>
                  <ButtonLink href="#servicios" variant="secondary">
                    {site.secondaryCta}
                  </ButtonLink>
                </div>
              </div>
            </div>

            <div className="grid min-h-[430px] gap-4 lg:min-h-[590px] lg:grid-cols-[1fr_0.62fr]">
              <LocalImageFrame
                src="/images/lima-limon-deco/hero-interiorismo-textil.jpg"
                alt="Interior cálido con cortinas, sillón y textiles de Lima Limón Deco"
                sizes="(min-width: 1024px) 40vw, 100vw"
                priority
                label="Interiorismo textil"
                className="min-h-[360px] border border-[#DCD4C5] lg:min-h-full"
              />
              <div className="hidden gap-4 lg:grid">
                <div className="border border-[#DCD4C5] bg-[#FBF8F1] p-5">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#7F855A]">
                    Géneros
                  </p>
                  <p className="mt-14 text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#181714]">
                    Nacionales e importados para cada estilo.
                  </p>
                </div>
                <LocalImageFrame
                  src="/images/lima-limon-deco/textura-textil.jpg"
                  alt="Texturas textiles seleccionadas por Lima Limón Deco"
                  sizes="24vw"
                  label="Texturas"
                  className="border border-[#DCD4C5]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr]">
            <div className="space-y-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#6F7651]">
                Servicios
              </p>
              <h2 className="max-w-xs text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#181714] sm:text-[2.4rem]">
                Textiles, tapicería y deco con mirada de hogar.
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="grid gap-5 rounded-[1.65rem] border border-[#DCD4C5] bg-[#FBF8F1] p-4 shadow-[0_18px_55px_rgba(56,48,36,0.06)]"
                >
                  <LocalImageFrame
                    src={service.image}
                    alt={service.alt}
                    sizes="(min-width: 1280px) 24vw, (min-width: 768px) 50vw, 100vw"
                    label={service.title}
                    className="aspect-[4/3] rounded-[1.15rem] border border-[#DCD4C5]"
                  />
                  <div className="grid gap-3 border-t border-[#E3DCCE] pt-4">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#8A7A59]">
                      Servicio {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="text-[1.28rem] font-semibold leading-tight tracking-[-0.035em] text-[#181714]">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-6 text-[#514E45]">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="border-y border-[#DCD4C5] bg-[#FBF8F1]">
          <div className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
            <div className="border-t border-[#DCD4C5] pt-5">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#6F7651]">
                Sobre Lima Limón
              </p>
              <h2 className="mt-4 max-w-md text-[2rem] font-semibold leading-tight tracking-[-0.045em] text-[#181714] sm:text-[2.55rem]">
                Detalles textiles que cambian cómo se siente un ambiente.
              </h2>
            </div>
            <div className="grid gap-6">
              <p className="max-w-3xl text-[1.05rem] leading-8 text-[#514E45]">
                En Lima Limón Deco diseñamos y renovamos espacios a través de la decoración textil,
                la tapicería y los detalles que hacen más cálido cada ambiente. Trabajamos con
                géneros, cortinas, sillones, fundas, almohadones y alfombras, acompañando a cada
                cliente en la elección ideal para su hogar.
              </p>
              <div className="grid gap-4 sm:grid-cols-3">
                {["Cortinas", "Tapicería", "Interiorismo"].map((item) => (
                  <div key={item} className="rounded-3xl border border-[#DCD4C5] bg-[#F7F2E8] p-5">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#8A7A59]">
                      Deco
                    </p>
                    <p className="mt-5 text-xl font-semibold tracking-[-0.035em] text-[#181714]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="inspiracion" className="border-b border-[#DCD4C5] bg-[#F1EADC]">
          <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr]">
              <div className="space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#6F7651]">
                  Trabajos e inspiración
                </p>
                <h2 className="max-w-xs text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#181714] sm:text-[2.4rem]">
                  Ideas para imaginar tu próxima renovación.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {inspiration.map((item) => (
                  <article key={item.title} className="group relative overflow-hidden rounded-[1.5rem] bg-[#E4DAC8]">
                    <LocalImageFrame
                      src={item.image}
                      alt={item.alt}
                      sizes="(min-width: 1280px) 24vw, (min-width: 768px) 50vw, 100vw"
                      label={item.title}
                      className="aspect-[4/3]"
                      imageClassName="object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(24,23,20,0.02),rgba(24,23,20,0.58))]" />
                    <div className="absolute bottom-0 left-0 px-5 py-4 sm:px-6 sm:py-5">
                      <h3 className="text-[1rem] font-semibold tracking-[0.02em] text-[#FFF8ED]">
                        {item.title}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr]">
            <div className="space-y-4">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#6F7651]">
                Cómo trabajamos
              </p>
              <h2 className="max-w-xs text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#181714] sm:text-[2.4rem]">
                Un proceso simple, acompañado y a medida.
              </h2>
            </div>
            <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-[#DCD4C5]">
              {workSteps.map((step, index) => (
                <article key={step} className="grid gap-3 bg-[#FBF8F1] px-5 py-6 sm:grid-cols-[80px_1fr] sm:items-center sm:px-7">
                  <span className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#7F855A]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[1.15rem] font-semibold leading-tight tracking-[-0.03em] text-[#181714]">
                    {step}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="por-que-elegirnos" className="border-y border-[#DCD4C5] bg-[#FBF8F1]">
          <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.34fr)_minmax(0,1fr)] lg:items-start lg:gap-12">
              <div className="border-t border-[#DCD4C5] pt-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#6F7651]">
                  Confianza
                </p>
                <h2 className="mt-4 max-w-[14rem] text-[1.65rem] font-semibold leading-[1.08] tracking-[-0.04em] text-[#181714] sm:text-[2rem]">
                  Lo importante, resuelto con criterio.
                </h2>
              </div>

              <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-[#DCD4C5] md:grid-cols-5">
                {trustItems.map((item) => (
                  <article key={item} className="bg-[#FBF8F1] px-5 py-6 sm:px-6 sm:py-7">
                    <p className="text-[1rem] font-semibold leading-[1.2] tracking-[-0.02em] text-[#181714]">
                      {item}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="border-y border-[#DCD4C5] bg-[#F7F2E8]">
          <div className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.34fr_1fr]">
              <div className="space-y-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#6F7651]">
                  Preguntas frecuentes
                </p>
                <h2 className="max-w-xs text-[2rem] font-semibold leading-tight tracking-[-0.04em] text-[#181714] sm:text-[2.4rem]">
                  Respuestas claras antes de escribirnos.
                </h2>
              </div>

              <div className="border-t border-[#DCD4C5]">
                {faqs.map((faq) => (
                  <details key={faq.question} className="border-b border-[#DCD4C5] py-5">
                    <summary className="cursor-pointer text-left text-lg font-semibold tracking-[-0.02em] text-[#181714] sm:text-[1.2rem]">
                      {faq.question}
                    </summary>
                    <p className="max-w-2xl pt-4 text-sm leading-7 text-[#514E45]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-[1440px] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="grid gap-10 border-t border-[#DCD4C5] pt-8 lg:grid-cols-[1fr_0.82fr] lg:gap-14">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#6F7651]">
                Contacto
              </p>
              <h2 className="mt-5 max-w-xl text-[2.3rem] font-semibold leading-[1.04] tracking-[-0.05em] text-[#181714] sm:text-[3rem]">
                Hablemos sobre el ambiente que querés renovar.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-7 text-[#514E45]">
                Escribinos por WhatsApp para contarnos medidas, idea general y tipo de trabajo.
                Te orientamos con opciones de telas, estilos y soluciones posibles.
              </p>
              <ButtonLink
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="whatsapp"
                className="mt-7"
              >
                Consultar por WhatsApp
              </ButtonLink>
            </div>

            <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-[#DCD4C5]">
              <div className="bg-[#FBF8F1] px-6 py-6 sm:px-7">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#8A7A59]">
                  WhatsApp
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xl font-semibold leading-tight tracking-[-0.03em] text-[#181714] transition hover:text-[#4F7D38]"
                >
                  {site.whatsappDisplay}
                </a>
              </div>
              <div className="bg-[#FBF8F1] px-6 py-6 sm:px-7">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#8A7A59]">
                  Teléfono
                </p>
                <a
                  href={`tel:${site.phoneDisplay.replace(/\s/g, "")}`}
                  className="mt-3 inline-block text-xl font-semibold leading-tight tracking-[-0.03em] text-[#181714] transition hover:text-[#4F7D38]"
                >
                  {site.phoneDisplay}
                </a>
              </div>
              <div className="bg-[#FBF8F1] px-6 py-6 sm:px-7">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#8A7A59]">
                  Instagram
                </p>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-xl font-semibold leading-tight tracking-[-0.03em] text-[#181714] transition hover:text-[#4F7D38]"
                >
                  {site.instagramHandle}
                </a>
              </div>
              <div className="bg-[#FBF8F1] px-6 py-6 sm:px-7">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#8A7A59]">
                  Ubicación
                </p>
                <p className="mt-3 text-xl font-semibold leading-tight tracking-[-0.03em] text-[#181714]">
                  {site.location}
                </p>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[#6F7651] transition hover:text-[#181714]"
                >
                  Ver en Google Maps
                </a>
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
