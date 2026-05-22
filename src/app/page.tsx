import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/button-link";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { resolvePublicImage } from "@/lib/asset";
import { buildWhatsappUrl, featuredProjects, site } from "@/lib/site";

export default function HomePage() {
  const whatsappUrl = buildWhatsappUrl(site.whatsappMessage);
  const heroImage = "/images/norte-equipa/hero.jpg";

  return (
    <PageShell>
      <section id="inicio" className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24">
        <div className="relative overflow-hidden rounded-[2.2rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,247,248,0.96))] shadow-[0_36px_80px_-54px_rgba(24,33,43,0.24)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(95,111,128,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(208,177,138,0.14),transparent_26%)]" />
          <div className="relative grid gap-10 px-6 py-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10 lg:py-11">
            <div className="max-w-[30rem]">
              <p className="pb-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#6c7a86]">
                {site.heroEyebrow}
              </p>
              <h1 className="mt-4 max-w-2xl font-heading text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#18212b] sm:text-[2.6rem] lg:text-[3rem]">
                Equipamiento a medida para cada espacio
              </h1>
              <p className="mt-12 max-w-xl text-[0.98rem] leading-8 text-[#51606d]">
                Diseñamos soluciones funcionales y a medida para transformar ambientes con muebles, amoblamientos y equipamiento adaptado a cada necesidad.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-0 top-6 hidden h-[78%] w-[22%] rounded-[2rem] border border-[#dbe3e8] bg-[#eef2f5] lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white p-3 shadow-[0_28px_70px_-50px_rgba(24,33,43,0.28)]">
                <div className="relative h-[390px] overflow-hidden rounded-[1.55rem] sm:h-[500px]">
                  <Image
                    src={resolvePublicImage(
                      heroImage,
                      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
                    )}
                    alt="Ambiente moderno con equipamiento a medida"
                    fill
                    priority
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: "center 54%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#dde4e8] bg-[linear-gradient(180deg,#ffffff,#f7fafb)] px-6 py-10 shadow-[0_24px_60px_-46px_rgba(24,33,43,0.2)] sm:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
            <div className="lg:pr-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#6c7a86]">
                Quienes somos
              </p>
              <h2 className="mt-4 font-heading text-[1.85rem] font-semibold leading-tight tracking-[-0.03em] text-[#18212b] sm:text-[2.15rem]">
                {site.whoTitle}
              </h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
              <p className="max-w-2xl text-[0.98rem] leading-8 text-[#51606d]">{site.whoText}</p>
              <div className="flex flex-wrap gap-3 lg:max-w-[260px] lg:justify-end">
                {["Diseno funcional", "Equipamiento a medida", "Terminaciones prolijas"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#d7dfe4] bg-white px-4 py-2 text-sm font-medium text-[#43515d]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dbe3e8] bg-[#eef2f5]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#6c7a86]">
              Proyectos destacados
            </p>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                image={resolvePublicImage(project.image, project.fallbackImage)}
                alt={project.alt}
                objectPosition={project.objectPosition}
              />
            ))}
          </div>

          <div className="mt-8 flex justify-start">
            <Link href="/proyectos" className="text-sm font-semibold text-[#18212b] transition hover:text-[#43515d]">
              Ver todos los proyectos
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="rounded-[2.5rem] border border-[#dbe3e8] bg-[#18212b] p-8 text-white shadow-[0_30px_80px_-48px_rgba(24,33,43,0.34)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d0b18a]">
                Consulta inicial
              </p>
              <h2 className="mt-4 max-w-2xl font-heading text-[1.9rem] font-semibold leading-tight tracking-[-0.03em] sm:text-[2.2rem]">
                Si queres avanzar con un proyecto, podemos ayudarte a ordenarlo desde el primer contacto
              </h2>
            </div>
            <div>
              <ButtonLink
                href={whatsappUrl}
                target={whatsappUrl !== "#" ? "_blank" : undefined}
                rel={whatsappUrl !== "#" ? "noopener noreferrer" : undefined}
                className="border border-[#d0b18a] bg-[#d0b18a] text-[#18212b] hover:bg-[#dcc2a3]"
              >
                Consultar por WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
