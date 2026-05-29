type FloatingWhatsAppButtonProps = {
  href: string;
  label: string;
};

export function FloatingWhatsAppButton({
  href,
  label,
}: FloatingWhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 border-2 border-white bg-[#25d366] px-4 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-2xl shadow-zinc-950/25 transition hover:-translate-y-1 hover:bg-[#1fb85a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2"
    >
      <span className="flex h-9 w-9 items-center justify-center bg-white/20 text-base">
        WA
      </span>
      <span>{label}</span>
    </a>
  );
}
