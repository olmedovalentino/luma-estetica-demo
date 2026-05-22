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
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noreferrer" : undefined}
      aria-label={label}
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-3 rounded-full bg-[#25d366] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-emerald-950/25 transition hover:-translate-y-1 hover:bg-[#1fb85a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25d366] focus-visible:ring-offset-2 sm:bottom-5 sm:right-5"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-base">
        WA
      </span>
      <span>{label}</span>
    </a>
  );
}
