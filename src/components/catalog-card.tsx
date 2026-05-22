import Image from "next/image";

type CatalogCardProps = {
  title: string;
  description: string;
  image: string;
  alt: string;
  objectPosition?: string;
  ctaHref?: string;
  ctaLabel?: string;
};

export function CatalogCard({
  title,
  description,
  image,
  alt,
  objectPosition = "center",
  ctaHref,
  ctaLabel = "Consultar",
}: CatalogCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-[#dde4e8] bg-white shadow-[0_24px_60px_-42px_rgba(24,33,43,0.28)]">
      <div className="relative h-[250px] overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          style={{ objectPosition }}
        />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-[1.35rem] font-semibold tracking-[-0.03em] text-[#18212b]">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#51606d]">{description}</p>
        {ctaHref ? (
          <a
            href={ctaHref}
            target={ctaHref !== "#" ? "_blank" : undefined}
            rel={ctaHref !== "#" ? "noopener noreferrer" : undefined}
            className="mt-5 inline-flex items-center text-sm font-semibold text-[#18212b] transition hover:text-[#43515d]"
          >
            {ctaLabel}
          </a>
        ) : null}
      </div>
    </article>
  );
}
