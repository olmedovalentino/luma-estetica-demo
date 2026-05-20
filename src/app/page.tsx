import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { faqs, gallery, services, site } from "@/lib/site";

type MediaVariant = "cover" | "contain";

type MediaConfig = {
  variant: MediaVariant;
  position?: string;
  background?: string;
  imageClassName?: string;
  frameClassName?: string;
};

const mediaConfig: Record<string, MediaConfig> = {
  "/images/farias-aires/hero.jpg": {
    variant: "cover",
    position: "center 42%",
  },
  "/images/farias-aires/instalacion-1.jpg": {
    variant: "cover",
    position: "center 46%",
  },
  "/images/farias-aires/service-1.jpg": {
    variant: "cover",
    position: "center 44%",
  },
  "/images/farias-aires/mantenimiento-1.jpg": {
    variant: "cover",
    position: "center 45%",
  },
  "/images/farias-aires/recarga-gas-1.jpg": {
    variant: "cover",
    position: "center 48%",
  },
  "/images/farias-aires/equipo-venta-1.jpg": {
    variant: "cover",
    position: "center 42%",
  },
  "/images/farias-aires/equipo-piso-techo.jpg": {
    variant: "cover",
    position: "center 50%",
  },
  "/images/farias-aires/instalacion-altura.jpg": {
    variant: "cover",
    position: "center 24%",
  },
  "/images/farias-aires/sobre-nosotros.jpg": {
    variant: "contain",
    background: "bg-[#F7F7F7]",
    imageClassName: "p-4 sm:p-5",
  },
  "/images/farias-aires/promo-mudanza.jpg": {
    variant: "cover",
    position: "center 46%",
  },
  "/images/farias-aires/flyer-promo.jpg": {
    variant: "contain",
    background: "bg-[#FAFAFA]",
    imageClassName: "p-2 sm:p-3",
  },
  "/images/farias-aires/trabajo-1.jpg": {
    variant: "cover",
    position: "center 47%",
  },
  "/images/farias-aires/trabajo-2.jpg": {
    variant: "cover",
    position: "center 42%",
  },
  "/images/farias-aires/trabajo-3.jpg": {
    variant: "cover",
    position: "center 48%",
  },
  "/images/farias-aires/trabajo-4.jpg": {
    variant: "cover",
    position: "center 44%",
  },
};

const specialServices = [
  {
    title: "Promo mudanza",
    description:
      "Desinstalación, traslado y reconexión del equipo para que puedas mudarlo de forma segura y prolija.",
    image: "/images/farias-aires/promo-mudanza.jpg",
    alt: "Promo mudanza de aire acondicionado",
  },
  {
    title: "Equipos a la venta",
    description: "Consultá por equipos disponibles con opción de instalación incluida.",
    image: "/images/farias-aires/flyer-promo.jpg",
    alt: "Equipos de aire acondicionado a la venta",
  },
] as const;

const coverageZones = [
  "Córdoba Capital",
  "Villa Carlos Paz",
  "Río Ceballos",
  "Siquiman",
  "Zonas cercanas",
] as const;

function getMediaConfig(image: string | null, variant?: MediaVariant): MediaConfig {
  const config = image ? mediaConfig[image] : undefined;

  return {
    variant: variant ?? config?.variant ?? "cover",
    position: config?.position ?? "center",
    background: config?.background ?? "bg-[#F4F4F4]",
    imageClassName: config?.imageClassName ?? "",
    frameClassName: config?.frameClassName ?? "",
  };
}

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
        <span className="w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/80">
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
  variant,
}: {
  image: string | null;
  alt: string;
  label: string;
  title: string;
  className?: string;
  sizes: string;
  variant?: MediaVariant;
}) {
  if (!image) {
    return <PlaceholderVisual label={label} title={title} className={className} />;
  }

  const config = getMediaConfig(image, variant);

  return (
    <div className={["relative overflow-hidden", config.background, className].join(" ")}>
      <div className={["absolute inset-0", config.frameClassName].join(" ")}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes={sizes}
          className={[
            config.variant === "contain" ? "object-contain" : "object-cover",
            config.imageClassName,
          ].join(" ")}
          style={{ objectPosition: config.position }}
        />
      </div>
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
            <div className="relative grid items-stretch gap-8 px-5 py-8 lg:min-h-[500px] lg:grid-cols-[1fr_0.96fr] lg:px-8 lg:py-10">
              <div className="flex min-h-[360px] flex-col justify-between lg:min-h-[420px]">
                <div className="pt-2">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#E43125]">
                    {site.heroEyebrow}
                  </p>
                </div>

                <div className="py-6 lg:py-8">
                  <h1 className="max-w-2xl font-serif text-4xl font-semibold tracking-tight text-[#111111] sm:text-5xl">
                    {site.heroTitle}
                  </h1>
                </div>

                <div className="max-w-xl pb-2">
                  <p className="text-base leading-7 text-[#5F5F5F]">{site.heroSubtitle}</p>
                  <p className="mt-4 text-sm text-[#5F5F5F]">{site.heroNote}</p>

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
                  variant="cover"
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
                    <MediaBlock
                      image={service.image}
                      alt={service.alt}
                      label={service.placeholderLabel}
                      title={service.title}
                      className="h-[220px] border-b border-[#ECECEC] sm:h-[240px]"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      variant="cover"
                    />
                  ) : (
                    <PlaceholderVisual
                      label={service.placeholderLabel}
                      title={service.title}
                      className="h-[220px] sm:h-[240px]"
                    />
                  )}
                  <div className="px-4 pb-5 pt-4">
                    <div className={`mb-3 h-1.5 w-12 rounded-full ${service.accent}`} />
                    <h3 className="text-base font-semibold text-[#111111]">{service.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#5F5F5F]">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Servicios especiales"
            title="Servicios especiales"
            description="Opciones puntuales para mudanzas y equipos disponibles, con una presentación simple y clara."
          />

          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            {specialServices.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.8rem] border border-[#E6E6E6] bg-white shadow-soft"
              >
                <MediaBlock
                  image={item.image}
                  alt={item.alt}
                  label={item.title}
                  title={item.title}
                  className="h-[220px] border-b border-[#ECECEC] sm:h-[240px]"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  variant={item.image.includes("flyer") ? "contain" : "cover"}
                />
                <div className="px-5 pb-6 pt-5">
                  <h3 className="text-lg font-semibold text-[#111111]">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-[#5F5F5F]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
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
                image="/images/farias-aires/equipo-piso-techo.jpg"
                alt="Venta de equipos con instalación"
                label={site.equipmentVisualLabel}
                title={site.equipmentVisualTitle}
                className="h-full min-h-[320px]"
                sizes="(min-width: 1024px) 42vw, 100vw"
                variant="contain"
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
                className="h-[320px] rounded-[1.4rem] sm:h-[360px]"
                sizes="(min-width: 1024px) 40vw, 100vw"
                variant="contain"
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

          <div className="mt-7 grid auto-rows-[250px] gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[260px]">
            {gallery.map((item) => (
              <article
                key={item.title}
                className={[
                  "group h-full overflow-hidden rounded-[1.8rem] border border-[#E8E8E8] bg-white shadow-soft",
                  item.span,
                ].join(" ")}
              >
                <div className="relative h-full min-h-[250px] overflow-hidden">
                  <MediaBlock
                    image={item.image}
                    alt={item.alt}
                    label={item.title}
                    title={item.description}
                    className="h-full"
                    sizes="(min-width: 1024px) 25vw, 100vw"
                    variant="cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,rgba(17,17,17,0),rgba(17,17,17,0.72))] p-4 text-white">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-1 max-w-xs text-sm text-white/85">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="zonas" className="scroll-mt-20 bg-[#F4F4F4]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="rounded-[2rem] border border-[#E5E5E5] bg-white p-6 shadow-soft sm:p-7">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div className="max-w-2xl">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#E43125]">
                    Cobertura
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl">
                    Trabajamos en Córdoba y zonas cercanas
                  </h2>
                  <p className="mt-4 text-sm leading-6 text-[#5F5F5F] sm:text-base">
                    Trabajamos en Córdoba Capital y distintas zonas cercanas. Consultanos por
                    WhatsApp y te confirmamos disponibilidad según el servicio y la ubicación.
                  </p>
                </div>

                <div className="lg:justify-self-end">
                  <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Consultar disponibilidad
                  </ButtonLink>
                </div>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {coverageZones.map((zone) => (
                  <div
                    key={zone}
                    className="rounded-2xl border border-[#E6E6E6] bg-[#F7F7F7] px-4 py-4 text-sm font-semibold text-[#111111]"
                  >
                    {zone}
                  </div>
                ))}
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
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[2rem] border border-[#E5E5E5] bg-white shadow-soft">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                <div className="border-b border-[#ECECEC] px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#E43125]">
                    Contacto
                  </p>
                  <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-[#111111] sm:text-3xl">
                    Pedí tu presupuesto por WhatsApp
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-6 text-[#5F5F5F] sm:text-base">
                    Contanos qué servicio necesitás y en qué zona estás. Te respondemos con una
                    orientación clara para coordinar instalación, service o mantenimiento.
                  </p>

                  <div className="mt-7">
                    <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      Pedir presupuesto por WhatsApp
                    </ButtonLink>
                  </div>
                </div>

                <div className="bg-[#FAFAFA] px-6 py-8 sm:px-8">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#E43125]">
                        WhatsApp
                      </p>
                      <a
                        href={site.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block text-sm font-semibold text-[#111111] transition hover:text-[#E43125] sm:text-base"
                      >
                        {site.whatsappDisplay}
                      </a>
                    </div>

                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#E43125]">
                        Instagram
                      </p>
                      <a
                        href={site.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block text-sm font-semibold text-[#111111] transition hover:text-[#E43125] sm:text-base"
                      >
                        {site.instagramHandle}
                      </a>
                    </div>

                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#E43125]">
                        Ubicación
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#111111] sm:text-base">
                        Córdoba, Argentina
                      </p>
                    </div>

                    <div>
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#E43125]">
                        Horario
                      </p>
                      <p className="mt-2 text-sm font-semibold text-[#111111] sm:text-base">
                        Horario comercial
                      </p>
                    </div>
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
