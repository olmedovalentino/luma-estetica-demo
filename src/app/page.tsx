import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialIconLink } from "@/components/social-icon-link";
import { StudioImage } from "@/components/studio-image";
import { faqs, gallery, secondaryServices, services, site } from "@/lib/site";

export default function HomePage() {
  const hasMap = Boolean(site.mapsUrl);

  return (
    <>
      <SiteHeader whatsappUrl={site.whatsappUrl} />

      <main className="relative overflow-hidden">
        <section id="inicio" className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,253,248,0.98),rgba(247,244,238,0.96))] shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,124,97,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(228,215,197,0.26),transparent_28%)]" />
            <div className="relative grid gap-8 px-5 py-7 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-10">
              <div className="flex min-h-[360px] flex-col justify-between lg:min-h-[420px]">
                <div>
                  <p className="pt-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#6F7C61]">
                    {site.heroEyebrow}
                  </p>
                  <h1 className="mt-5 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-[#1E1E1E] sm:text-5xl">
                    {site.heroTitle}
                  </h1>
                </div>

                <div className="max-w-xl pt-6">
                  <p className="text-base leading-7 text-[#4C4A45]">{site.heroSubtitle}</p>
                  <p className="mt-4 text-sm text-[#6D6A63]">{site.heroNote}</p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href={site.whatsappUrl}>{site.heroCtaPrimary}</ButtonLink>
                    <ButtonLink href="#servicios" variant="secondary">
                      {site.heroCtaSecondary}
                    </ButtonLink>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 shadow-soft">
                <StudioImage
                  src="/images/estudio-sens/hero.jpg"
                  alt="Movimiento consciente en Estudio Sens"
                  fallbackLabel="Estudio Sens"
                  className="h-[360px] w-full sm:h-[420px]"
                  imageClassName="object-cover object-center [object-position:center_52%]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="scroll-mt-20 bg-[#F7F4EE]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={site.servicesEyebrow}
              title={site.servicesTitle}
              description={site.servicesIntro}
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-[1.5rem] border border-white/80 bg-[#FFFDF8] shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-28px_rgba(48,59,44,0.22)]"
                >
                  <div className="relative h-[228px] overflow-hidden sm:h-[236px] lg:h-[230px]">
                    <StudioImage
                      src={service.image}
                      alt={service.alt}
                      fallbackLabel={service.title}
                      className="h-full w-full"
                      imageClassName={`object-cover transition duration-500 group-hover:scale-[1.03] ${service.imagePosition}`}
                    />
                  </div>
                  <div className="px-4 pb-4 pt-3">
                    <div className={`mb-2.5 h-1.5 w-12 rounded-full ${service.accent}`} />
                    <h3 className="text-base font-semibold text-[#1E1E1E]">{service.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-[#4C4A45]">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/80 bg-[#FFFDF8] px-5 py-5 shadow-soft">
              <p className="text-sm font-semibold text-[#1E1E1E]">{site.servicesListTitle}</p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {secondaryServices.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-[#E4D7C5] bg-[#F7F4EE] px-3 py-2 text-xs font-medium text-[#5D5A54] sm:text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-3 shadow-soft">
              <div className="relative h-[330px] overflow-hidden rounded-[1.4rem] sm:h-[360px]">
                <StudioImage
                  src="/images/estudio-sens/galeria-espacio.jpg"
                  alt="Espacio de Estudio Sens"
                  fallbackLabel="Espacio"
                  className="h-full w-full"
                  imageClassName="object-cover object-center [object-position:center_52%]"
                />
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow={site.aboutEyebrow}
                title={site.aboutTitle}
                description={site.aboutText}
              />

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {site.trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/80 bg-[#FFFDF8] px-4 py-4 shadow-soft"
                  >
                    <p className="text-sm font-semibold text-[#1E1E1E]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="scroll-mt-20 bg-[#F7F4EE]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={site.galleryEyebrow}
              title={site.galleryTitle}
              description={site.galleryDescription}
            />

            <div className="mt-7 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[220px]">
              {gallery.map((item) => (
                <article
                  key={item.title}
                  className={[
                    "group h-full overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/90 shadow-soft",
                    item.span,
                  ].join(" ")}
                >
                  <div className="relative h-full min-h-[220px] overflow-hidden">
                    <StudioImage
                      src={item.image}
                      alt={item.alt}
                      fallbackLabel={item.title}
                      fallbackTone="dark"
                      className="h-full w-full"
                      imageClassName={`object-cover transition duration-500 group-hover:scale-[1.03] ${item.imagePosition}`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(30,30,30,0.04),rgba(30,30,30,0.4))]" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-base font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="consulta" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-white/80 bg-[#FFFDF8] p-6 shadow-soft sm:p-7">
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <SectionHeading
                  eyebrow={site.consultationEyebrow}
                  title={site.consultationTitle}
                  description={site.consultationDescription}
                />

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {secondaryServices.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#D8CEBF] bg-[#F7F4EE] px-3 py-2 text-xs font-medium text-[#5D5A54] sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-7">
                  <ButtonLink href={site.whatsappUrl}>Consultar por WhatsApp</ButtonLink>
                </div>
              </div>

              <div className="rounded-[1.6rem] border border-[#E4D7C5] bg-[#F7F4EE] p-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#6F7C61]">
                  Orientacion inicial
                </p>
                <div className="mt-4 grid gap-3">
                  <div className="rounded-[1rem] bg-white/80 px-4 py-4">
                    <p className="text-sm font-semibold text-[#1E1E1E]">Mejorar postura</p>
                    <p className="mt-1 text-sm text-[#5D5A54]">
                      Propuestas para ganar control corporal y bienestar diario.
                    </p>
                  </div>
                  <div className="rounded-[1rem] bg-white/80 px-4 py-4">
                    <p className="text-sm font-semibold text-[#1E1E1E]">Recuperar movilidad</p>
                    <p className="mt-1 text-sm text-[#5D5A54]">
                      Acompanamiento profesional para moverte con mas seguridad.
                    </p>
                  </div>
                  <div className="rounded-[1rem] bg-white/80 px-4 py-4">
                    <p className="text-sm font-semibold text-[#1E1E1E]">Consultar formacion</p>
                    <p className="mt-1 text-sm text-[#5D5A54]">
                      Espacios pensados para profesionales y procesos de aprendizaje.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-[900px]">
            <SectionHeading
              eyebrow={site.faqEyebrow}
              title={site.faqTitle}
              description={site.faqDescription}
            />

            <div className="mt-7 flex flex-col gap-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group w-full self-start rounded-[1.35rem] border border-white/80 bg-[#FFFDF8] p-4 shadow-soft"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-[#1E1E1E] sm:text-base">
                    <span>{faq.question}</span>
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#E4D7C5] bg-[#F7F4EE] text-[#6F7C61] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#4C4A45]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="ubicacion" className="scroll-mt-20 bg-[#F7F4EE]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className={`grid gap-5 ${hasMap ? "lg:grid-cols-[0.92fr_1.08fr]" : "lg:grid-cols-2"}`}>
              <div className="rounded-[2rem] border border-white/80 bg-[#FFFDF8] p-6 shadow-soft sm:p-7">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#6F7C61]">
                  {site.contactEyebrow}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-[#1E1E1E] sm:text-3xl">
                  {site.contactTitle}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-[#4C4A45]">
                  {site.contactDescription}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  {site.socialLinks.map((link) => (
                    <SocialIconLink
                      key={link.label}
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                      tone="light"
                    />
                  ))}
                </div>
              </div>

              {hasMap ? (
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Ver ubicacion en Google Maps"
                  className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-soft"
                >
                  <iframe
                    title="Mapa de Estudio Sens"
                    src={site.mapsUrl}
                    className="h-full min-h-[340px] w-full border-0"
                    style={{ pointerEvents: "none" }}
                    loading="lazy"
                  />
                </a>
              ) : (
                <div className="rounded-[2rem] border border-white/80 bg-[linear-gradient(145deg,#FFFDF8,#EDE5D8)] p-6 shadow-soft sm:p-7">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#6F7C61]">
                    Cordoba Capital
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-[#1E1E1E]">
                    Movimiento con acompanamiento profesional
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-6 text-[#4C4A45]">
                    Podes consultar ubicacion, horarios y disponibilidad por WhatsApp o
                    Instagram.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingWhatsAppButton href={site.whatsappUrl} label="WhatsApp" />
    </>
  );
}
