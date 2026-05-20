import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { faqs, gallery, mediaFrames, services, site, specialServices } from "@/lib/site";

type MediaVariant = "cover" | "contain";

type MediaFrame = {
  variant?: MediaVariant;
  objectPosition?: string;
  background?: string;
  imageClassName?: string;
};

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
    <div
      className={[
        "relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(228,49,37,0.16),_transparent_44%),linear-gradient(160deg,#1A1A1A,#2A2A2A)]",
        className,
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))]" />
      <div className="absolute -right-10 top-5 h-32 w-32 rounded-full border border-white/10" />
      <div className="absolute bottom-6 left-6 right-6 h-px bg-white/10" />
      <div className="absolute left-6 top-6 h-10 w-10 rounded-2xl border border-white/15 bg-white/8" />
      <div className="relative flex h-full min-h-[220px] flex-col justify-between p-6 text-white">
        <span className="w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-white/80">
          {label}
        </span>
        <p className="max-w-[17rem] text-lg font-semibold leading-tight text-white">{title}</p>
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
  frame,
}: {
  image: string | null;
  alt: string;
  label: string;
  title: string;
  className?: string;
  sizes: string;
  frame?: MediaFrame;
}) {
  if (!image) {
    return <PlaceholderVisual label={label} title={title} className={className} />;
  }

  return (
    <div
      className={[
        "relative overflow-hidden",
        frame?.background ?? "bg-[#F4F4F4]",
        className,
      ].join(" ")}
    >
      <Image
        src={image}
        alt={alt}
        fill
        sizes={sizes}
        className={[
          frame?.variant === "contain" ? "object-contain" : "object-cover",
          frame?.imageClassName ?? "",
        ].join(" ")}
        style={{ objectPosition: frame?.objectPosition ?? "center" }}
      />
    </div>
  );
}

export default function HomePage() {
  const whatsappUrl = site.whatsappUrl;

  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} />

      <main className="relative overflow-hidden">
        <section
          id="inicio"
          className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-10 pt-6 sm:px-6 lg:px-8"
        >
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#E8E8E8] bg-white shadow-soft">
            <div className="absolute inset-x-0 top-0 h-1 bg-[#E43125]" />
            <div className="relative grid items-stretch gap-8 px-5 py-8 lg:min-h-[540px] lg:grid-cols-[1fr_0.96fr] lg:px-8 lg:py-12">
              <div className="flex min-h-[380px] flex-col justify-between lg:min-h-[456px]">
                <div className="pt-2">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#E43125]">
                    {site.heroEyebrow}
                  </p>
                </div>

                <div className="py-8 lg:py-10">
                  <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight tracking-[-0.02em] text-[#111111] sm:text-5xl">
                    {site.heroTitle}
                  </h1>
                </div>

                <div className="max-w-xl pb-2">
                  <p className="text-base leading-7 text-[#5F5F5F]">{site.heroSubtitle}</p>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      {site.heroCtaPrimary}
                    </ButtonLink>
                    <ButtonLink href="#servicios" variant="secondary">
                      {site.heroCtaSecondary}
                    </ButtonLink>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-[#E8E8E8] bg-white shadow-soft">
                <MediaBlock
                  image={site.media.hero}
                  alt="Trabajos de climatización de Farías Aires"
                  label={site.heroVisualLabel}
                  title={site.heroVisualTitle}
                  className="h-[340px] sm:h-[400px] lg:h-full lg:min-h-[420px]"
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  frame={mediaFrames.hero}
                />
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="scroll-mt-20 bg-[#F4F4F4]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={site.servicesEyebrow}
              title={site.servicesTitle}
              description={site.servicesIntro}
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="flex h-full flex-col overflow-hidden rounded-[1.55rem] border border-[#E6E6E6] bg-white shadow-soft"
                >
                  <MediaBlock
                    image={service.image}
                    alt={service.alt}
                    label={service.placeholderLabel}
                    title={service.title}
                    className="h-[228px] border-b border-[#ECECEC]"
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    frame={{
                      variant: "cover",
                      objectPosition: service.objectPosition,
                    }}
                  />
                  <div className="flex flex-1 flex-col px-5 pb-6 pt-5">
                    <div className={`mb-3 h-1.5 w-12 rounded-full ${service.accent}`} />
                    <h3 className="text-[1.02rem] font-semibold leading-snug text-[#111111]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#5F5F5F]">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Servicios especiales"
            title="Promociones y opciones disponibles"
            description="Servicios puntuales y equipos disponibles para resolver necesidades específicas de climatización."
          />

            <div className="mt-8 grid max-w-5xl gap-5 md:grid-cols-2">
              {specialServices.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[1.7rem] border border-[#E6E6E6] bg-white shadow-soft"
                >
                  <MediaBlock
                    image={item.image}
                    alt={item.alt}
                    label={item.title}
                    title={item.title}
                    className="h-[260px] border-b border-[#ECECEC] sm:h-[300px]"
                    sizes="(min-width: 768px) 40vw, 100vw"
                    frame={{
                      variant: item.variant,
                      objectPosition: item.objectPosition,
                    }}
                  />
                  <div className="px-5 pb-6 pt-5">
                    <h3 className="text-[1.02rem] font-semibold text-[#111111]">{item.title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-[#5F5F5F]">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
        </section>

        <section id="equipos" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-14 sm:px-6 lg:px-8">
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
                image={mediaFrames.equipment.image}
                alt="Venta de equipos con instalación"
                label={site.equipmentVisualLabel}
                title={site.equipmentVisualTitle}
                className="h-full min-h-[320px]"
                sizes="(min-width: 1024px) 42vw, 100vw"
                frame={mediaFrames.equipment}
              />
            </div>
          </div>
        </section>

        <section id="sobre" className="scroll-mt-20 bg-[#F4F4F4]">
          <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-[#E8E8E8] bg-white p-3 shadow-soft">
              <MediaBlock
                image={site.media.about}
                alt="Farías Aires Acondicionados"
                label={site.aboutVisualLabel}
                title={site.aboutVisualTitle}
                className="h-[320px] rounded-[1.4rem] sm:h-[360px]"
                sizes="(min-width: 1024px) 40vw, 100vw"
                frame={mediaFrames.about}
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

        <section id="trabajos" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-14 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow={site.galleryEyebrow}
            title={site.galleryTitle}
            description={site.galleryDescription}
          />

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <article
                key={item.title}
                className="group overflow-hidden rounded-[1.7rem] border border-[#E8E8E8] bg-white shadow-soft"
              >
                <div className="relative h-[290px] overflow-hidden">
                  <MediaBlock
                    image={item.image}
                    alt={item.alt}
                    label={item.title}
                    title={item.description}
                    className="h-full"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    frame={{ variant: "cover", objectPosition: item.objectPosition }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,17,0.08),rgba(17,17,17,0.68))]" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="text-[1.02rem] font-semibold">{item.title}</h3>
                    <p className="mt-2 max-w-[18rem] text-sm leading-6 text-white/84">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="zonas" className="scroll-mt-20 bg-[#F4F4F4]">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-[#E5E5E5] bg-white p-6 shadow-soft sm:p-7">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div className="max-w-2xl">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#E43125]">
                    {site.zonesEyebrow}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-[#111111] sm:text-3xl">
                    Trabajamos en Córdoba y zonas cercanas
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-[#5F5F5F] sm:text-base">
                    {site.zonesDescription}
                  </p>
                </div>

                <div className="lg:justify-self-end">
                  <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {site.zonesCtaLabel}
                  </ButtonLink>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {site.zones.map((zone) => (
                  <div
                    key={zone}
                    className="rounded-full border border-[#E2E2E2] bg-[#F7F7F7] px-4 py-2.5 text-sm font-semibold text-[#111111]"
                  >
                    {zone}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-14 sm:px-6 lg:px-8">
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
                  className="group rounded-[1.35rem] border border-[#E5E5E5] bg-white p-4 shadow-soft"
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
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-[#E5E5E5] bg-white shadow-soft">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="border-b border-[#ECECEC] px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#E43125]">
                    {site.contactEyebrow}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.02em] text-[#111111] sm:text-3xl">
                    {site.contactTitle}
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-[#5F5F5F] sm:text-base">
                    {site.contactDescription}
                  </p>

                  <div className="mt-7">
                    <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      {site.contactCtaLabel}
                    </ButtonLink>
                  </div>
                </div>

                <div className="bg-[#FAFAFA] px-6 py-8 sm:px-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    {site.contactDetails.map((item) => (
                      <div key={item.label}>
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#E43125]">
                          {item.label}
                        </p>
                        {"href" in item ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 block text-sm font-semibold text-[#111111] transition hover:text-[#E43125] sm:text-base"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-sm font-semibold text-[#111111] sm:text-base">
                            {item.value}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
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
