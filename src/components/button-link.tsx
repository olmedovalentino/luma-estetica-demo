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
    "inline-flex items-center justify-center border px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A6A57] focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "border-[#151515] bg-[#151515] text-[#F8F6F1] hover:bg-[#2B2B2B]"
      : "border-[#D8D2C8] bg-transparent text-[#151515] hover:border-[#7A6A57] hover:text-[#7A6A57]";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
