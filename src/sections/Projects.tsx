import { ArrowUpRight, Code2, Layers3 } from "lucide-react"

type Project = {
  title: string
  summary: string
  tags: string[]
  status: string
  liveHref: string
  codeHref: string
}

const projects: Project[] = [
  {
    title: "AI Operations Command Centre",
    summary:
      "A dashboard concept for tracking AI-assisted workflows, approvals, exceptions, and team handoffs in one place.",
    tags: ["React", "TypeScript", "AI Ops", "Dashboards"],
    status: "Case study",
    liveHref: "#contact",
    codeHref: "https://github.com/dylancrawte",
  },
  {
    title: "Workflow Automation Toolkit",
    summary:
      "Reusable patterns for turning repetitive team processes into structured automations with clear review points.",
    tags: ["Automation", "Node.js", "APIs", "CI/CD"],
    status: "In progress",
    liveHref: "#contact",
    codeHref: "https://github.com/dylancrawte",
  },
  {
    title: "Personal Portfolio System",
    summary:
      "This site: a fast, responsive portfolio built with React, TypeScript, and Tailwind CSS v4.",
    tags: ["React", "Tailwind CSS", "Vite", "Design"],
    status: "Live build",
    liveHref: "#hero",
    codeHref: "https://github.com/dylancrawte/personal-portfolio",
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Projects
            </span>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-6xl">
              Selected work and systems thinking.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-muted-foreground">
            A snapshot of the type of work I like to build: useful interfaces,
            practical automations, and systems that make teams faster.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-surface via-primary/40 to-highlight">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.35)_50%,transparent_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="rounded-3xl border border-primary/40 bg-background/80 p-6 shadow-xl backdrop-blur">
                  <Layers3 size={42} className="text-foreground" />
                </div>
                <span className="absolute left-5 top-5 rounded-full bg-background/85 px-3 py-1 text-sm text-foreground backdrop-blur">
                  0{index + 1}
                </span>
              </div>

              <div className="space-y-5 p-6">
                <div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {project.status}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                </div>

                <p className="leading-7 text-muted-foreground">
                  {project.summary}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-3 py-1 text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={project.liveHref}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-highlight"
                  >
                    View project
                    <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={project.codeHref}
                    aria-label={`${project.title} source code`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                    target={
                      project.codeHref.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.codeHref.startsWith("http")
                        ? "noreferrer"
                        : undefined
                    }
                  >
                    <Code2 size={18} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
