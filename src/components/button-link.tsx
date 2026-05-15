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
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C98E95] focus-visible:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-[#C98E95] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#B77B84]"
      : "border border-[#EAD8CF] bg-white/80 text-[#2F2624] hover:-translate-y-0.5 hover:border-[#C98E95] hover:bg-[#F8F0EC]";

  return (
    <a className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </a>
  );
}
