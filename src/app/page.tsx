import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SectionHeading } from "@/components/section-heading";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SocialIconLink } from "@/components/social-icon-link";
import { bookingOptions, faqs, gallery, services, site } from "@/lib/site";

export default function HomePage() {
  const whatsappUrl = site.whatsappUrl;

  return (
    <>
      <SiteHeader whatsappUrl={whatsappUrl} />

      <main className="relative overflow-hidden">
        <section id="inicio" className="mx-auto max-w-7xl scroll-mt-20 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,251,248,0.98),rgba(248,240,236,0.96))] shadow-soft">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,142,149,0.18),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(216,182,164,0.18),transparent_28%)]" />
            <div className="relative grid gap-8 px-5 py-7 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-10">
              <div className="flex min-h-[360px] flex-col justify-between lg:min-h-[420px]">
                <div>
                  <p className="pt-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#9E7277]">
                    {site.heroEyebrow}
                  </p>
                  <h1 className="mt-5 max-w-2xl font-serif text-4xl font-semibold tracking-tight text-[#2F2624] sm:text-5xl">
                    {site.heroTitle}
                  </h1>
                </div>

                <div className="max-w-xl pt-6">
                  <p className="text-base leading-7 text-[#5B4B47]">{site.heroSubtitle}</p>
                  <p className="mt-4 text-sm text-[#7A6661]">{site.heroNote}</p>

                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <ButtonLink href={whatsappUrl}>{site.heroCtaPrimary}</ButtonLink>
                    <ButtonLink href="#servicios" variant="secondary">
                      {site.heroCtaSecondary}
                    </ButtonLink>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 shadow-soft">
                <Image
                  src="/images/urani/hero.jpg"
                  alt="Detalle de beauty studio en Urani Studio"
                  width={1400}
                  height={900}
                  priority
                  className="h-[360px] w-full object-cover object-center [object-position:center_28%] sm:h-[420px]"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className="scroll-mt-20 bg-[#F8F0EC]">
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
                  className="group overflow-hidden rounded-[1.5rem] border border-white/80 bg-[#FFF9F6] shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-28px_rgba(71,45,44,0.24)]"
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
                    <h3 className="text-base font-semibold text-[#2F2624]">{service.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-[#5B4B47]">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="sobre" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/85 p-3 shadow-soft">
              <div className="relative h-[330px] overflow-hidden rounded-[1.4rem] sm:h-[360px]">
                <Image
                  src="/images/urani/galeria-espacio.jpg"
                  alt="Espacio de atención de Urani Studio"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover object-center [object-position:center_45%]"
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
                    className="rounded-2xl border border-white/80 bg-[#FFF9F6] px-4 py-4 shadow-soft"
                  >
                    <p className="text-sm font-semibold text-[#2F2624]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="turnos" className="scroll-mt-20 bg-[#FFF7F3]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[2rem] border border-white/80 bg-[#FFFDFC] p-6 shadow-soft sm:p-7">
                <SectionHeading
                  eyebrow={site.bookingEyebrow}
                  title={site.bookingTitle}
                  description={site.bookingDescription}
                />

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {bookingOptions.map((option) => (
                    <span
                      key={option}
                      className="rounded-full border border-[#E9D6CE] bg-[#F8F0EC] px-3 py-2 text-xs font-medium text-[#6C5852] sm:text-sm"
                    >
                      {option}
                    </span>
                  ))}
                </div>

                <p className="mt-6 max-w-md text-sm leading-6 text-[#5B4B47]">{site.bookingNote}</p>

                <div className="mt-6">
                  <ButtonLink href={whatsappUrl}>Consultar turno por WhatsApp</ButtonLink>
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/80 bg-[#FDF6F3] p-6 shadow-soft sm:p-7">
                <div className="grid gap-3">
                  {site.bookingFields.map((field) => (
                    <div
                      key={field.label}
                      className="rounded-[1.2rem] border border-[#EAD8CF] bg-white/90 px-4 py-4"
                    >
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#9E7277]">
                        {field.label}
                      </p>
                      <p className="mt-2 text-sm text-[#5B4B47]">{field.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-[1.2rem] border border-dashed border-[#D9B6BC] bg-white/70 px-4 py-4">
                  <p className="text-sm text-[#6C5852]">
                    Podés contarnos qué servicio querés y coordinamos tu visita según
                    disponibilidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="galeria" className="scroll-mt-20 bg-[#F8F0EC]">
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
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(47,38,36,0.04),rgba(47,38,36,0.44))]" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-base font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </article>
              ))}
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
                  className="group w-full self-start rounded-[1.35rem] border border-white/80 bg-[#FFF9F6] p-4 shadow-soft"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-sm font-semibold text-[#2F2624] sm:text-base">
                    <span>{faq.question}</span>
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#EAD8CF] bg-[#F8F0EC] text-[#B77B84] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-6 text-[#5B4B47]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="ubicacion" className="scroll-mt-20 bg-[#F8F0EC]">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
            <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-[2rem] border border-white/80 bg-[#FFF9F6] p-6 shadow-soft sm:p-7">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#9E7277]">
                  {site.contactEyebrow}
                </p>
                <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-[#2F2624] sm:text-3xl">
                  {site.contactTitle}
                </h2>
                <p className="mt-4 max-w-md text-sm leading-6 text-[#5B4B47]">
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

              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver ubicación en Google Maps"
                className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/90 shadow-soft"
              >
                <iframe
                  title="Mapa de Urani Studio"
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
