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
    <article className="group overflow-hidden rounded-[1.8rem] border border-[#dde4e8] bg-white shadow-[0_24px_60px_-44px_rgba(24,33,43,0.22)]">
      <div className="relative h-[260px] sm:h-[320px]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.02]"
          style={{ objectPosition }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,33,43,0.06),rgba(24,33,43,0.56))]" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <h3 className="font-heading text-[1.02rem] font-semibold tracking-[-0.02em]">
            {title}
          </h3>
        </div>
      </div>
    </article>
  );
}
