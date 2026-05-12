import { Code2, Lightbulb, Rocket, Users } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Product-minded code",
    description:
      "I focus on reliable interfaces, clear state, and features that are easy for teams to maintain.",
  },
  {
    icon: Rocket,
    title: "Operational speed",
    description:
      "I build automations and workflows that remove repetitive work and make delivery feel lighter.",
  },
  {
    icon: Users,
    title: "Collaborative delivery",
    description:
      "I work closely with stakeholders, designers, and engineers to turn loose ideas into shipped outcomes.",
  },
  {
    icon: Lightbulb,
    title: "AI systems thinking",
    description:
      "I connect AI tools to practical business processes with guardrails, monitoring, and human review.",
  },
]

export function About() {
  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-7">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              About Me
            </span>
            <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
              Building useful systems, one careful decision at a time.
            </h2>
            <div className="space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                I am Dylan Crawte, a software engineer focused on React,
                TypeScript, automation, and AI operations. I like the space
                where clean product experiences meet dependable internal
                systems.
              </p>
              <p>
                My work is shaped by a practical question: what would make this
                easier to use, easier to run, and easier to improve next month?
                That lens guides everything from frontend details to workflow
                automation and AI-assisted tooling.
              </p>
              <p>
                I enjoy working with teams that value clarity, iteration, and
                well-crafted software that solves real problems.
              </p>
            </div>

            <blockquote className="rounded-3xl border-l-4 border-primary bg-surface p-6 text-lg italic leading-8 text-foreground">
              "My goal is to build technology that feels calm in production:
              clear for users, maintainable for developers, and useful for the
              teams who rely on it."
            </blockquote>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon

              return (
                <article
                  key={item.title}
                  className="rounded-3xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-foreground">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
