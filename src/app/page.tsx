import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialIconLink } from "@/components/social-icon-link";
import { faqs, gallery, services, site } from "@/lib/site";

export default function HomePage() {
  const whatsappUrl = site.whatsappUrl;

  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} />

      <main className="relative overflow-hidden">
        <section id="inicio" className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,252,248,0.98),rgba(247,243,236,0.96))] shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,122,90,0.11),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(183,165,138,0.1),transparent_28%)]" />
            <div className="relative grid gap-8 px-5 py-7 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-10">
              <div className="flex min-h-[360px] flex-col justify-between lg:min-h-[420px]">
                <p className="pt-1 text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-[#758063]">
                  {site.locationLabel}
                </p>

                <div className="py-4 lg:py-6">
                  <h1 className="max-w-2xl font-serif text-4xl font-semibold tracking-tight text-[#171717] sm:text-5xl">
                    Cuidado facial, cejas, pestañas y relax
                  </h1>
                </div>

                <div className="max-w-xl pt-6">
                  <p className="text-base leading-7 text-[#4a4a44]">{site.heroSubtitle}</p>
                  <p className="mt-4 text-sm text-[#6c675f]">{site.heroNote}</p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      {site.heroCtaPrimary}
                    </ButtonLink>
                    <ButtonLink href="#servicios" variant="secondary">
                      {site.heroCtaSecondary}
                    </ButtonLink>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-soft">
                <Image
                  src="/images/cliente/hero.jpg"
                  alt="Espacio de Kōra Studio Beauty con estética cálida y relajada"
                  width={1400}
                  height={900}
                  priority
                  className="h-[360px] w-full object-cover sm:h-[420px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-[#f7f3ec]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Servicios"
              title="Elegí el tratamiento que mejor se adapte a vos"
              description={site.servicesIntro}
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group overflow-hidden rounded-[1.4rem] border border-white/80 bg-white/92 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-28px_rgba(61,65,38,0.22)]"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-4">
                    <div className={`mb-3 h-1.5 w-12 rounded-full ${service.accent}`} />
                    <h3 className="text-base font-semibold text-[#171717]">{service.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-[#4a4a44]">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-white/85 p-3 shadow-soft">
              <Image
                src="/images/cliente/galeria-espacio.jpg"
                alt="Detalle del espacio cálido y relajado de Kōra Studio Beauty"
                width={1400}
                height={900}
                className="h-[330px] w-full rounded-[1.4rem] object-cover"
              />
            </div>

            <div>
              <SectionHeading
                eyebrow={site.aboutEyebrow}
                title={site.aboutTitle}
                description={site.aboutText}
              />

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {site.trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/70 bg-white/88 px-4 py-4 shadow-soft"
                  >
                    <p className="text-sm font-semibold text-[#171717]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="bg-[#f7f3ec]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow={site.galleryEyebrow}
              title={site.galleryTitle}
              description={site.galleryDescription}
            />

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.map((item) => (
                <article
                  key={item.title}
                  className={[
                    "group overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/90 shadow-soft",
                    item.span,
                  ].join(" ")}
                >
                  <div className="relative min-h-[220px]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,12,10,0.02),rgba(16,12,10,0.32))]" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-base font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
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
                  className="group self-start w-full rounded-[1.35rem] border border-white/80 bg-white/90 p-4 shadow-soft"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-[#171717] sm:text-base">
                    <span>{faq.question}</span>
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#e8dccb] bg-[#f7f3ec] text-[#758063] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#4a4a44]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="ubicacion" className="bg-[#f7f3ec]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-white/80 bg-white/92 p-6 shadow-soft sm:p-7">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#758063]">
                  {site.contactEyebrow}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-[#171717] sm:text-3xl">
                  {site.contactTitle}
                </h2>

                <div className="mt-5 space-y-2 text-sm text-[#4a4a44]">
                  <p>Obispo Oro 351, oficina 3.</p>
                  <p>{site.availability}</p>
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
              </div>

              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver ubicación en Google Maps"
                className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-soft"
              >
                <iframe
                  title="Mapa de Kōra Studio Beauty"
                  src={site.mapsEmbedUrl}
                  className="h-full min-h-[340px] w-full border-0"
                  style={{ pointerEvents: "none" }}
                  loading="lazy"
                />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingWhatsAppButton href={whatsappUrl} label="WhatsApp" />
    </>
  );
}
