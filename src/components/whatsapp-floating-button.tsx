type FloatingWhatsAppButtonProps = {
  href: string;
  label: string;
};

export function FloatingWhatsAppButton({ href, label }: FloatingWhatsAppButtonProps) {
  const isExternal = href !== "#";

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#6F7C61] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#303B2C]/15 transition hover:-translate-y-1 hover:bg-[#5F6C52] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6F7C61] focus-visible:ring-offset-2"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/18 text-base">
        WA
      </span>
      <span>{label}</span>
    </a>
  );
}
