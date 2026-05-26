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
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full border border-[#25D366] bg-[#25D366] px-3 py-2 text-xs font-semibold text-[#0E2A18] shadow-[0_14px_34px_rgba(37,211,102,0.24)] transition duration-300 hover:bg-[#1FB75A] hover:border-[#1FB75A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#128C4A] text-[0.62rem] font-bold text-white">
        WA
      </span>
      <span>{label}</span>
    </a>
  );
}
