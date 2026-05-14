type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#7E8768]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-[#2C211B] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#5B463C] sm:text-base">{description}</p>
    </div>
  );
}
