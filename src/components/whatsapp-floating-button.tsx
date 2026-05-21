type FloatingWhatsAppButtonProps = {
  href: string;
  label: string;
};

export function FloatingWhatsAppButton({ href, label }: FloatingWhatsAppButtonProps) {
  if (href === "#") {
    return null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-[#D8C1A8] bg-[#1F1A17] px-4 py-3 text-sm font-semibold text-[#FFFDF8] shadow-[0_24px_50px_-28px_rgba(31,26,23,0.65)] transition duration-300 hover:-translate-y-1 hover:bg-[#342b26] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8A5A3C] focus-visible:ring-offset-2"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8A5A3C] text-[0.78rem]">
        WA
      </span>
      <span>{label}</span>
    </a>
  );
}
