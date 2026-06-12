import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";
  const styles = {
    primary:
      "bg-[linear-gradient(135deg,#22d3ee,#f0f33a_46%,#ff2bd6)] text-ink-950 shadow-neon hover:-translate-y-0.5 hover:brightness-110",
    secondary:
      "border border-cyan-300/35 bg-white/5 text-white shadow-[inset_0_0_22px_rgba(34,211,238,0.08)] hover:-translate-y-0.5 hover:border-cyan-200 hover:bg-cyan-300/10",
    ghost:
      "border border-white/10 bg-white/[0.03] text-white/78 hover:-translate-y-0.5 hover:border-fuchsia-300/45 hover:text-white",
  }[variant];

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
