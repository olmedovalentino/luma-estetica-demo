type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#866b58]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-[2rem] font-semibold tracking-[-0.03em] text-[#211a17] sm:text-[2.35rem]">
        {title}
      </h2>
      <p className="mt-4 text-[0.98rem] leading-8 text-[#5f554e]">{description}</p>
    </div>
  );
}
