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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.02em] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A5A3C] focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[#1F1A17] text-[#FFFDF8] shadow-[0_20px_35px_-24px_rgba(31,26,23,0.65)] hover:-translate-y-0.5 hover:bg-[#342b26]"
      : "border border-[#D8C1A8] bg-[#FFFDF8]/80 text-[#1F1A17] hover:-translate-y-0.5 hover:border-[#8A5A3C] hover:bg-[#F7F2EA]";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
