import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialIconLink } from "@/components/social-icon-link";
import { faqs, gallery, services, site } from "@/lib/site";

function PlaceholderVisual({
  label,
  title,
  className = "",
}: {
  label: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={["relative overflow-hidden bg-[#F4F4F4]", className].join(" ")}>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(244,244,244,0.92))]" />
      <div className="absolute left-6 top-6 h-10 w-10 rounded-xl border border-[#D6D6D6] bg-white" />
      <div className="absolute right-8 top-8 h-px w-24 bg-[#E43125]" />
      <div className="absolute left-8 bottom-16 h-px w-28 bg-[#111111]" />
      <div className="absolute left-8 bottom-10 h-px w-40 bg-[#C8C8C8]" />
      <div className="absolute bottom-8 right-8 h-20 w-20 rounded-full border border-[#D6D6D6] bg-white/70" />
      <div className="relative flex h-full min-h-[220px] flex-col justify-between p-6 text-[#111111]">
        <span className="w-fit rounded-full border border-[#D6D6D6] bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[#E43125]">
          {label}
        </span>
        <p className="max-w-[17rem] text-lg font-semibold leading-tight text-[#111111]">{title}</p>
      </div>
    </div>
  );
}

function MediaBlock({
  image,
  alt,
  label,
  title,
  className = "",
  sizes,
}: {
  image: string | null;
  alt: string;
  label: string;
  title: string;
  className?: string;
  sizes: string;
}) {
  if (!image) {
    return <PlaceholderVisual label={label} title={title} className={className} />;
  }

  return (
    <div className={["relative overflow-hidden", className].join(" ")}>
      <Image src={image} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

export default function HomePage() {
  const whatsappUrl = site.whatsappUrl;

  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} />

      <main className="relative overflow-hidden">
        <section id="inicio" className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#E8E8E8] bg-white shadow-soft">
            <div className="absolute inset-x-0 top-0 h-1 bg-[#E43125]" />
            <div className="relative grid gap-8 px-5 py-7 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-10">
              <div className="flex min-h-[360px] flex-col justify-between lg:min-h-[430px]">
                <div>
                  <p className="pt-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#E43125]">
                    {site.heroEyebrow}
                  </p>
                  <h1 className="mt-5 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">
                    {site.heroTitle}
                  </h1>
                  <div className="mt-4 h-1 w-20 rounded-full bg-[#E43125]" />
                </div>

                <div className="max-w-xl pt-6">
                  <p className="text-base leading-7 text-[#5F5F5F]">{site.heroSubtitle}</p>
                  <p className="mt-4 text-sm text-[#5F5F5F]">{site.heroNote}</p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      {site.heroCtaPrimary}
                    </ButtonLink>
                    <ButtonLink href="#servicios" variant="secondary">
                      {site.heroCtaSecondary}
                    </ButtonLink>
                  </div>

                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {site.serviceHighlights.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-[#E5E5E5] bg-[#F4F4F4] px-4 py-3 text-sm font-medium text-[#111111]"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[#E8E8E8] bg-white shadow-soft">
                <MediaBlock
                  image={site.media.hero}
                  alt="Trabajos de climatización de Farías Aires"
                  label={site.heroVisualLabel}
                  title={site.heroVisualTitle}
                  className="h-[360px] sm:h-[430px]"
                  sizes="(min-width: 1024px) 46vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="scroll-mt-20 bg-[#F4F4F4]">
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
                  className="group overflow-hidden rounded-[1.5rem] border border-[#E6E6E6] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-32px_rgba(17,17,17,0.24)]"
                >
                  {service.image ? (
                    <div className="relative h-[228px] overflow-hidden sm:h-[236px] lg:h-[230px]">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  ) : (
                    <PlaceholderVisual
                      label={service.placeholderLabel}
                      title={service.title}
                      className="h-[228px] sm:h-[236px] lg:h-[230px]"
                    />
                  )}
                  <div className="px-4 pb-4 pt-3">
                    <div className={`mb-2.5 h-1.5 w-12 rounded-full ${service.accent}`} />
                    <h3 className="text-base font-semibold text-[#111111]">{service.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-[#5F5F5F]">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="equipos" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="rounded-[2rem] border border-[#E5E5E5] bg-white p-6 shadow-soft sm:p-7">
              <SectionHeading
                eyebrow={site.equipmentEyebrow}
                title={site.equipmentTitle}
                description={site.equipmentDescription}
              />

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {site.equipmentPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-[#E5E5E5] bg-[#F4F4F4] px-4 py-4 text-sm font-semibold text-[#111111]"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {site.equipmentCtaLabel}
                </ButtonLink>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#E8E8E8] bg-white shadow-soft">
              <MediaBlock
                image={site.media.services.ventaEquipos}
                alt="Venta de equipos con instalación"
                label={site.equipmentVisualLabel}
                title={site.equipmentVisualTitle}
                className="h-full min-h-[320px]"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-20 bg-[#F4F4F4]">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-[#E8E8E8] bg-white p-3 shadow-soft">
              <MediaBlock
                image={site.media.about}
                alt="Farías Aires Acondicionados"
                label={site.aboutVisualLabel}
                title={site.aboutVisualTitle}
                className="h-[330px] rounded-[1.4rem] sm:h-[360px]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
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
                    className="rounded-2xl border border-[#E6E6E6] bg-white px-4 py-4 shadow-soft"
                  >
                    <p className="text-sm font-semibold text-[#111111]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="trabajos" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8">
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
                  "group h-full overflow-hidden rounded-[1.8rem] border border-[#E8E8E8] bg-white shadow-soft",
                  item.span,
                ].join(" ")}
              >
                <div className="relative h-full min-h-[220px] overflow-hidden">
                  {item.image ? (
                    <>
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, 100vw"
                        className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.08),rgba(17,17,17,0.58))]" />
                    </>
                  ) : (
                    <PlaceholderVisual
                      label={item.title}
                      title={item.description}
                      className="h-full min-h-[220px]"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="zonas" className="scroll-mt-20 bg-[#F4F4F4]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-[#E5E5E5] bg-white p-6 shadow-soft sm:p-7">
              <SectionHeading
                eyebrow={site.zonesEyebrow}
                title={site.zonesTitle}
                description={site.zonesDescription}
              />

              <div className="mt-6 flex flex-wrap gap-3">
                {site.zones.map((zone) => (
                  <span
                    key={zone}
                    className="rounded-full border border-[#D6D6D6] bg-[#F4F4F4] px-4 py-2 text-sm font-medium text-[#111111]"
                  >
                    {zone}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {site.zonesCtaLabel}
                </ButtonLink>
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
                  className="group w-full self-start rounded-[1.35rem] border border-[#E5E5E5] bg-white p-4 shadow-soft"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-[#111111] sm:text-base">
                    <span>{faq.question}</span>
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#D6D6D6] bg-[#F4F4F4] text-[#E43125] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#5F5F5F]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="scroll-mt-20 bg-[#F4F4F4]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[2rem] border border-[#E5E5E5] bg-white p-6 shadow-soft sm:p-7">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#E43125]">
                  {site.contactEyebrow}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl">
                  {site.contactTitle}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-[#5F5F5F]">
                  {site.contactDescription}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {site.contactPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-[#E5E5E5] bg-[#F4F4F4] px-4 py-4 text-sm font-semibold text-[#111111]"
                    >
                      {point}
                    </div>
                  ))}
                </div>

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

                <div className="mt-6">
                  <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {site.contactCtaLabel}
                  </ButtonLink>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[#E8E8E8] bg-white shadow-soft">
                <PlaceholderVisual
                  label={site.contactVisualLabel}
                  title={site.contactVisualTitle}
                  className="h-full min-h-[340px]"
                />
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
