import { Briefcase, CalendarDays, CheckCircle2 } from "lucide-react"

type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
}

const experiences: ExperienceItem[] = [
  {
    role: "AI Operations Engineer",
    company: "Automation and product teams",
    period: "Current focus",
    description:
      "Designing workflows that combine software, AI tools, and human review into reliable day-to-day operations.",
    achievements: [
      "Built repeatable processes for routing, summarising, and actioning operational work.",
      "Created guardrails around AI-assisted outputs so teams can move faster without losing quality.",
      "Connected product, support, and delivery workflows with clear handoffs and reporting.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Frontend and full-stack projects",
    period: "Recent work",
    description:
      "Delivering responsive interfaces, internal tools, and production-ready features with React and TypeScript.",
    achievements: [
      "Developed accessible, reusable UI patterns for customer-facing and internal products.",
      "Improved maintainability by simplifying state, component boundaries, and deployment paths.",
      "Worked across design, data, and engineering conversations to keep implementation grounded in user needs.",
    ],
  },
  {
    role: "Technical Problem Solver",
    company: "Cross-functional delivery",
    period: "Ongoing",
    description:
      "Turning ambiguous operational problems into clear systems, documentation, and measurable next steps.",
    achievements: [
      "Mapped manual processes into lightweight tools and automations.",
      "Introduced clearer feedback loops for issue tracking and operational decisions.",
      "Balanced fast iteration with stable foundations for future improvements.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="bg-surface py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Experience
          </span>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-6xl">
            A practical mix of software, systems, and operations.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            My work sits between engineering craft and operational clarity:
            build the thing, make it understandable, and keep it dependable.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative space-y-8 before:absolute before:left-5 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-border md:before:block">
            {experiences.map((item) => (
              <article
                key={`${item.role}-${item.company}`}
                className="relative grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm md:ml-16 md:grid-cols-[0.8fr_1.2fr] md:p-8"
              >
                <div className="absolute -left-[4.2rem] top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-primary md:flex">
                  <Briefcase size={20} />
                </div>

                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-primary/40 px-3 py-1 text-sm text-foreground">
                    <CalendarDays size={16} />
                    {item.period}
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-foreground">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-muted-foreground">{item.company}</p>
                  <p className="mt-5 leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <ul className="space-y-4">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <CheckCircle2
                        className="mt-1 shrink-0 text-primary"
                        size={20}
                      />
                      <span className="leading-7 text-muted-foreground">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
