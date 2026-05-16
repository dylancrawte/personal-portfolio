import { PlaneIcon, Lightbulb, GraduationCapIcon, CloudIcon } from "lucide-react"

const highlights = [
  {
    icon: PlaneIcon,
    title: "Industry AI Engineering",
    description:
      "Exposure to cutting edge AI labs in the aviation industry, building and shipping AI solutions for real world problems.",
  },
  {
    icon: CloudIcon,
    title: "Cloud Based Infrastructure",
    description:
      "Experience with AWS and Terraform, with a strong understanding of cloud based infrastructure for real production systems.",
  },
  {
    icon: GraduationCapIcon,
    title: "MSc Neuroscience",
    description:
      "BCI research, and industry experience with the British Medical Journal",
  },
  {
    icon: Lightbulb,
    title: "Product Minded",
    description:
      "Ownership of projects outside of work, utilising management tools to oversee end to end delivery.",
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
            <h2 className="pt-5 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl xl:text-6xl">
              <span className="inline-flex items-center gap-2 whitespace-nowrap md:gap-3">
                Building systems that fly.
               
              </span>
            </h2>
            <div className="overflow-hidden rounded-3xl border border-border bg-photo-panel p-3 shadow-lg">
              <img
                src="/about-photo.webp"
                alt="Dylan Crawte"
                className="w-full rounded-2xl object-cover"
              />
            </div>

            <blockquote className="rounded-3xl border-l-4 border-primary bg-surface p-6 text-lg italic leading-8 text-foreground">
              "I am keen to utilise my skills in AI and technology learnt from the aviation industry, into a role that combines my background and passion for Neuroscience"
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
