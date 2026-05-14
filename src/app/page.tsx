import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialIconLink } from "@/components/social-icon-link";
import { faqs, gallery, secondaryServices, services, site } from "@/lib/site";

export default function HomePage() {
  const whatsappUrl = site.whatsappUrl;

  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} />

      <main className="relative overflow-hidden">
        <section id="inicio" className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,253,248,0.98),rgba(248,243,236,0.96))] shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,121,95,0.14),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(126,135,104,0.12),transparent_28%)]" />
            <div className="relative grid gap-8 px-5 py-7 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-10">
              <div className="flex min-h-[360px] flex-col justify-between lg:min-h-[420px]">
                <div>
                  <p className="pt-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#7E8768]">
                    {site.heroEyebrow}
                  </p>
                  <h1 className="mt-5 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-[#2C211B] sm:text-5xl">
                    {site.heroTitle}
                  </h1>
                </div>

                <div className="max-w-xl pt-6">
                  <p className="text-base leading-7 text-[#5B463C]">{site.heroSubtitle}</p>
                  <p className="mt-4 text-sm text-[#7A665B]">{site.heroNote}</p>

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

              <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 shadow-soft">
                <Image
                  src="/images/belleza-mediterranea/hero.jpg"
                  alt="Espacio cálido de Belleza Mediterránea"
                  width={1400}
                  height={900}
                  priority
                  className="h-[360px] w-full object-cover object-center [object-position:center_38%] sm:h-[420px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="bg-[#F8F3EC]">
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
                  className="group overflow-hidden rounded-[1.5rem] border border-white/80 bg-[#FFFDF8] shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-28px_rgba(79,56,42,0.25)]"
                >
                  <div className="relative h-[228px] overflow-hidden sm:h-[236px] lg:h-[230px]">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className={`object-cover transition duration-500 group-hover:scale-[1.03] ${service.imagePosition}`}
                    />
                  </div>
                  <div className="px-4 pb-4 pt-3">
                    <div className={`mb-2.5 h-1.5 w-12 rounded-full ${service.accent}`} />
                    <h3 className="text-base font-semibold text-[#2C211B]">{service.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-[#5B463C]">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-white/80 bg-[#FFFDF8] px-5 py-5 shadow-soft">
              <p className="text-sm font-semibold text-[#2C211B]">{site.servicesListTitle}</p>
              <div className="mt-3 flex flex-wrap gap-2.5">
                {secondaryServices.map((service) => (
                  <span
                    key={service}
                    className="rounded-full border border-[#E7D6C3] bg-[#F8F3EC] px-3 py-2 text-xs font-medium text-[#6A554A] sm:text-sm"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-3 shadow-soft">
              <div className="relative h-[330px] overflow-hidden rounded-[1.4rem] sm:h-[360px]">
                <Image
                  src="/images/belleza-mediterranea/galeria-productos.jpg"
                  alt="Ambiente integral de Belleza Mediterránea"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center [object-position:center_44%]"
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
                    <p className="text-sm font-semibold text-[#2C211B]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="bg-[#F8F3EC]">
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
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 100vw"
                      className={`object-cover transition duration-500 group-hover:scale-[1.03] ${item.imagePosition}`}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,33,27,0.02),rgba(44,33,27,0.4))]" />
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
                  className="group w-full self-start rounded-[1.35rem] border border-white/80 bg-[#FFFDF8] p-4 shadow-soft"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-[#2C211B] sm:text-base">
                    <span>{faq.question}</span>
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#E7D6C3] bg-[#F8F3EC] text-[#B8795F] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#5B463C]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="ubicacion" className="bg-[#F8F3EC]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[2rem] border border-white/80 bg-[#FFFDF8] p-6 shadow-soft sm:p-7">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#7E8768]">
                  {site.contactEyebrow}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-[#2C211B] sm:text-3xl">
                  {site.contactTitle}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-[#5B463C]">
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

                <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#6A554A]">
                  <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#2C211B]">
                    WhatsApp
                  </a>
                  <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="transition hover:text-[#2C211B]">
                    Instagram
                  </a>
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
                  title="Mapa de Belleza Mediterránea"
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
