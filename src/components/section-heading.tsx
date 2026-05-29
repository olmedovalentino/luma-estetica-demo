type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description: string;
  light?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={`text-xs font-black uppercase tracking-[0.26em] ${light ? "text-orange-400" : "text-orange-600"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`mt-3 text-3xl font-black uppercase tracking-tight sm:text-4xl ${light ? "text-white" : "text-zinc-950"}`}>
        {title}
      </h2>
      <p className={`mt-4 text-base leading-7 sm:text-lg ${light ? "text-zinc-300" : "text-zinc-600"}`}>
        {description}
      </p>
    </div>
  );
}
