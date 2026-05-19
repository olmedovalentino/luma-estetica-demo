type SocialIconLinkProps = {
  href: string;
  label: string;
  icon: "instagram" | "whatsapp";
  tone?: "light" | "dark";
};

function SocialIcon({ icon }: { icon: SocialIconLinkProps["icon"] }) {
  switch (icon) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-none stroke-current stroke-[1.8]">
          <path d="M12 4.5a7.5 7.5 0 0 0-6.4 11.5L5 20l4-1.1A7.5 7.5 0 1 0 12 4.5Z" />
          <path d="M9.3 8.8c.2-.4.5-.4.8-.4h.6c.2 0 .5 0 .7.5l.8 1.8c.1.3.1.6-.1.8l-.5.6c-.1.2-.2.4 0 .7.2.4.8 1.3 1.8 2.1.8.7 1.5 1 1.9 1.2.3.1.5.1.7-.1l.7-.7c.2-.2.5-.3.8-.2l1.7.7c.3.1.5.4.5.7 0 1.3-1.2 2.2-2.4 2.1-1.5-.2-3.8-1.1-5.9-3.1-2.2-2-3.1-4.4-3.3-5.9-.1-1.2.8-2.4 2.1-2.4Z" />
        </svg>
      );
  }
}

export function SocialIconLink({ href, label, icon, tone = "light" }: SocialIconLinkProps) {
  const classes =
    tone === "light"
      ? "border border-[#D2D2D2] bg-white text-[#111111] hover:border-[#E43125] hover:text-[#E43125]"
      : "border border-white/15 bg-white/5 text-white hover:border-[#E43125] hover:text-white hover:bg-[#E43125]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition ${classes}`}
    >
      <SocialIcon icon={icon} />
    </a>
  );
}
