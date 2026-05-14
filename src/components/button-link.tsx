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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7E8768] focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[#B8795F] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#A4664D]"
      : "border border-[#E7D6C3] bg-white/80 text-[#2C211B] hover:-translate-y-0.5 hover:border-[#B8795F] hover:bg-[#F8F3EC]";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
