import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { resolvePublicImage } from "@/lib/asset";
import { projects } from "@/lib/site";

export default function ProyectosPage() {
  return (
    <PageShell>
      <section className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#6c7a86]">
            Proyectos
          </p>
          <h1 className="mt-4 font-heading text-[2rem] font-semibold leading-tight tracking-[-0.03em] text-[#18212b] sm:text-[2.3rem]">
            Proyectos
          </h1>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={resolvePublicImage(project.image, project.fallbackImage)}
              alt={project.alt}
              objectPosition={project.objectPosition}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
