type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#758063]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-[#171717] sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#4a4a44] sm:text-lg">{description}</p>
    </div>
  );
}
