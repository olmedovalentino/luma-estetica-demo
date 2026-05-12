type FloatingWhatsAppButtonProps = {
  href: string;
  label: string;
};

export function FloatingWhatsAppButton({ href, label }: FloatingWhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#6f7a5a] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-950/25 transition hover:-translate-y-1 hover:bg-[#5c664a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6f7a5a] focus-visible:ring-offset-2"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-base">
        WA
      </span>
      <span>{label}</span>
    </a>
  );
}
