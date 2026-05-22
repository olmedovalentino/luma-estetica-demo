import type { ReactNode } from "react";

import { FloatingWhatsAppButton } from "@/components/whatsapp-floating-button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildWhatsappUrl, site } from "@/lib/site";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  const whatsappUrl = buildWhatsappUrl(site.whatsappMessage);

  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden">{children}</main>
      <SiteFooter whatsappUrl={whatsappUrl} />
      <FloatingWhatsAppButton href={whatsappUrl} label="WhatsApp" />
    </>
  );
}
