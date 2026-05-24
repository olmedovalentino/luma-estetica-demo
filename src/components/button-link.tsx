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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b89678] focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[#221b18] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#352925]"
      : "border border-[#d7c8bc] bg-white/82 text-[#221b18] hover:-translate-y-0.5 hover:border-[#b89678] hover:bg-[#f7f0e7]";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
