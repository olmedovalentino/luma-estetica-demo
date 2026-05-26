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
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-[#25D366] bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#0E2A18] shadow-[0_18px_45px_rgba(37,211,102,0.28)] transition duration-300 hover:bg-[#1FB75A] hover:border-[#1FB75A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#128C4A] text-xs font-bold text-white">
        WA
      </span>
      <span>{label}</span>
    </a>
  );
}
