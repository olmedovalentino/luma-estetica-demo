type FloatingWhatsAppButtonProps = {
  href: string;
  label: string;
};

export function FloatingWhatsAppButton({ href, label }: FloatingWhatsAppButtonProps) {
  return (
    <a
      href={href}
      target={href === "#" ? undefined : "_blank"}
      rel={href === "#" ? undefined : "noreferrer"}
      aria-label={label}
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full bg-[#B77B84] px-4 py-3 text-sm font-semibold text-white shadow-2xl shadow-[#2F2624]/15 transition hover:-translate-y-1 hover:bg-[#A96C75] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C98E95] focus-visible:ring-offset-2"
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/18 text-base">
        WA
      </span>
      <span>{label}</span>
    </a>
  );
}
