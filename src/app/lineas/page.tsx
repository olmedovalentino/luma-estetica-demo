import { ButtonLink } from "@/components/button-link";
import { CatalogCard } from "@/components/catalog-card";
import { PageShell } from "@/components/page-shell";
import { resolvePublicImage } from "@/lib/asset";
import { buildWhatsappUrl, lineCategories, site } from "@/lib/site";

export default function LineasPage() {
  const whatsappUrl = buildWhatsappUrl(site.whatsappMessage);

  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-2xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#6c7a86]">
            Líneas
          </p>
          <h1 className="mt-4 font-heading text-[2rem] font-semibold leading-tight tracking-[-0.03em] text-[#18212b] sm:text-[2.25rem]">
            Líneas
          </h1>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {lineCategories.map((category) => (
            <CatalogCard
              key={category.title}
              title={category.title}
              description={category.description}
              image={resolvePublicImage(category.image, category.fallbackImage)}
              alt={category.alt}
              objectPosition={category.objectPosition}
              ctaHref={whatsappUrl}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink
            href={whatsappUrl}
            target={whatsappUrl !== "#" ? "_blank" : undefined}
            rel={whatsappUrl !== "#" ? "noopener noreferrer" : undefined}
            className="bg-[#18212b] text-white hover:bg-[#24303d]"
          >
            Consultar por WhatsApp
          </ButtonLink>
        </div>
      </section>
    </PageShell>
  );
}
