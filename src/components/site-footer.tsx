import { site } from "@/lib/site";
import { SocialIconLink } from "@/components/social-icon-link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/70 bg-[#3e4634] text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-serif text-sm font-semibold uppercase tracking-[0.22em] text-[#e8dccb]">
            {site.businessName}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/55">
            {site.logoLineTwo}
          </p>
        </div>

        <div className="flex items-center gap-3">
          {site.socialLinks.map((link) => (
            <SocialIconLink key={link.label} href={link.href} label={link.label} icon={link.icon} tone="dark" />
          ))}
          <a
            href="#ubicacion"
            className="ml-2 text-sm text-white/75 transition hover:text-white"
          >
            Ubicación
          </a>
        </div>
      </div>
    </footer>
  );
}
