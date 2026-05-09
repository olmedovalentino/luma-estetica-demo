import type { ReactNode } from "react";

type InfoCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export function InfoCard({ title, description, icon }: InfoCardProps) {
  return (
    <article className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-soft backdrop-blur">
      {icon ? <div className="mb-4 text-sand-600">{icon}</div> : null}
      <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-ink-600">{description}</p>
    </article>
  );
}
