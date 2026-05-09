import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary";
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-sand-500 focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-ink-900 text-white shadow-soft hover:-translate-y-0.5 hover:bg-ink-800"
      : "border border-ink-200 bg-white/80 text-ink-800 hover:-translate-y-0.5 hover:border-sand-300 hover:bg-sand-50";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
