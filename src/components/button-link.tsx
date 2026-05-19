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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0F5DA8] focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[#0F5DA8] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#0C4A87]"
      : "border border-[#CBE5F9] bg-white/80 text-[#0B2744] hover:-translate-y-0.5 hover:border-[#0F5DA8] hover:bg-[#EFF8FF]";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
