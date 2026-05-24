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
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#221b18] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#221b18]/25 transition hover:-translate-y-1 hover:bg-[#352925] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#b89678] focus-visible:ring-offset-2"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b89678] text-base">
        WA
      </span>
      <span>{label}</span>
    </a>
  );
}
