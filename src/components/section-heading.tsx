type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#E43125]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-3 font-display text-[1.95rem] font-semibold tracking-[-0.02em] text-[#111111] sm:text-[2.15rem]">
        {title}
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#5F5F5F] sm:text-base">{description}</p>
    </div>
  );
}
