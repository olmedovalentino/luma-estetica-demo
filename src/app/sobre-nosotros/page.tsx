import Image from "next/image";

import { PageShell } from "@/components/page-shell";
import { resolvePublicImage } from "@/lib/asset";
import { aboutSection, trustPoints } from "@/lib/site";

export default function SobreNosotrosPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="overflow-hidden rounded-[2.2rem] border border-[#dde4e8] bg-white p-3 shadow-[0_24px_60px_-44px_rgba(24,33,43,0.26)]">
            <div className="relative h-[380px] overflow-hidden rounded-[1.7rem] sm:h-[500px]">
              <Image
                src={resolvePublicImage(aboutSection.image, aboutSection.fallbackImage)}
                alt={aboutSection.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
                style={{ objectPosition: "center 54%" }}
              />
            </div>
          </div>

          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#6c7a86]">
              Sobre nosotros
            </p>
            <h1 className="mt-4 font-heading text-[2rem] font-semibold leading-tight tracking-[-0.03em] text-[#18212b] sm:text-[2.3rem]">
              {aboutSection.title}
            </h1>
            <p className="mt-6 max-w-2xl text-[0.98rem] leading-8 text-[#51606d]">{aboutSection.text}</p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.8rem] border border-[#dde4e8] bg-white px-6 py-6 shadow-[0_24px_60px_-44px_rgba(24,33,43,0.24)]"
                >
                  <p className="font-heading text-[1.15rem] font-semibold tracking-[-0.03em] text-[#18212b]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
