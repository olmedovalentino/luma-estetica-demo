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
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 border border-[#151515] bg-[#151515] px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#F8F6F1] transition duration-300 hover:bg-[#2B2B2B] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A6A57] focus-visible:ring-offset-2"
    >
      <span className="flex h-9 w-9 items-center justify-center border border-[#4A4A4A] bg-[#222222] text-[0.78rem]">
        WS
      </span>
      <span>{label}</span>
    </a>
  );
}
