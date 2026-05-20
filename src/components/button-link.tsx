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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.01em] transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E43125] focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[#E43125] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#C8281E]"
      : "border border-[#D2D2D2] bg-white text-[#111111] hover:-translate-y-0.5 hover:border-[#111111] hover:bg-[#F4F4F4]";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
