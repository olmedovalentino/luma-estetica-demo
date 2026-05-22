import Image from "next/image";

type ProjectCardProps = {
  title: string;
  image: string;
  objectPosition?: string;
  alt: string;
};

export function ProjectCard({
  title,
  image,
  objectPosition = "center",
  alt,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-[1.8rem] border border-[#dde4e8] bg-white shadow-[0_24px_60px_-44px_rgba(24,33,43,0.22)]">
      <div className="relative h-[260px] sm:h-[320px]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
      <div className="px-5 py-4">
        <h3 className="font-heading text-[1.05rem] font-semibold tracking-[-0.02em] text-[#18212b]">
          {title}
        </h3>
      </div>
    </article>
  );
}
