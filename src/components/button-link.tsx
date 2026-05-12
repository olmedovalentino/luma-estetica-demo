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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#758063] focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[#3e4634] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#2f3627]"
      : "border border-[#d9d2c5] bg-white/80 text-[#171717] hover:-translate-y-0.5 hover:border-[#b7a58a] hover:bg-[#f7f3ec]";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
