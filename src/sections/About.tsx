import type { ReactNode } from "react"
import { PlaneIcon, Lightbulb, GraduationCapIcon, CloudIcon } from "lucide-react"
import { useInView } from "../hooks/useInView"

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
    title: "Neuroscience & NeuroTech",
    description:
      "Postgraduate research with BCI and EEG technologies. Academic publishing experience with the British Medical Journal.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurial & Product Minded",
    description:
      "Experience founding a tech focused start up, and managing the end to end delivery of multiple products.",
  },
]

function AboutReveal({
  children,
  className = "",
  delayMs = 0,
}: {
  children: ReactNode
  className?: string
  delayMs?: number
}) {
  const { ref, isVisible } = useInView<HTMLDivElement>()

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delayMs}ms` }}
      className={`about-reveal ${className} ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  )
}

function HighlightCard({
  item,
  isVisible,
}: {
  item: (typeof highlights)[number]
  isVisible: boolean
}) {
  const Icon = item.icon

  return (
    <article
      className={`about-reveal rounded-3xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-foreground">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
      <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
    </article>
  )
}

export function About() {
  const { ref: mainContentRef, isVisible: mainContentVisible } =
    useInView<HTMLDivElement>()

  return (
    <section id="about" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div
          ref={mainContentRef}
          className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center"
        >
          <div className="space-y-4">
            <AboutReveal>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                About Me
              </span>
            </AboutReveal>

            <AboutReveal delayMs={80}>
              <h2 className="font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl xl:text-6xl">
                <span className="inline-flex items-center gap-2 whitespace-nowrap md:gap-3">
                  Building systems that fly.
                </span>
              </h2>
            </AboutReveal>

            <div
              className={`about-reveal overflow-hidden rounded-3xl border border-border bg-photo-panel p-3 shadow-lg ${mainContentVisible ? "is-visible" : ""}`}
            >
              <img
                src="/about-photo.webp"
                alt="Dylan Crawte"
                className="w-full rounded-2xl object-cover"
              />
            </div>

            <AboutReveal delayMs={240}>
              <blockquote className="rounded-3xl border-l-4 border-primary bg-surface p-6 text-lg italic leading-8 text-foreground">
                "I am keen to utilise my skills in AI and technology learnt from
                the aviation industry, into the next step of my career."
              </blockquote>
            </AboutReveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {highlights.map((item) => (
              <HighlightCard
                key={item.title}
                item={item}
                isVisible={mainContentVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
