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
    "inline-flex items-center justify-center gap-2 border px-5 py-3 text-sm font-black uppercase tracking-[0.12em] transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "border-orange-500 bg-orange-500 text-zinc-950 hover:border-orange-400 hover:bg-orange-400"
      : "border-zinc-800 bg-transparent text-zinc-950 hover:bg-zinc-950 hover:text-white";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
