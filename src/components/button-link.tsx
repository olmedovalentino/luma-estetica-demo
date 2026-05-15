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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6F7C61] focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[#6F7C61] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#5F6C52]"
      : "border border-[#D8CEBF] bg-white/80 text-[#1E1E1E] hover:-translate-y-0.5 hover:border-[#6F7C61] hover:bg-[#F7F4EE]";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
