import { useEffect, useRef, useState } from "react"
import { Briefcase, CalendarDays, CheckCircle2 } from "lucide-react"

type ExperienceItem = {
  role: string
  company: string
  period: string
  description: string
  achievements: string[]
  technologies?: string[]
}

const experiences: ExperienceItem[] = [
  {
    role: "AI Operations Engineer",
    company: "International Airlines Group",
    period: "Aug 2025 - Present",
    description:
      "Designing and maintaining platforms to support the Cognitive Automation Factory (CAF) and UiPath automation platforms at IAG, British Airways, Vueling and more.",
    achievements: [
      "Building & Maintaining Network and Compute Infrastructure",
      "Created guardrails around AI-assisted outputs so teams can move faster without losing quality.",
      "Connected product, support, and delivery workflows with clear handoffs and reporting.",
    ],
    technologies: ["AWS", "UiPath", "Python", "Terraform", "Bedrock"],
  },
  {
    role: "Software Engineer",
    company: "International Airlines Group",
    period: "Aug 2024 - Aug 2025",
    description:
      "Building pipelines to turn millions of events and data points into detailed actionable insights, for internal metrics dashboards.",
    achievements: [
      "Developed accessible, reusable UI patterns for customer-facing and internal products.",
      "Improved maintainability by simplifying state, component boundaries, and deployment paths.",
      "Worked across design, data, and engineering conversations to keep implementation grounded in user needs.",
    ],
    technologies: ["TypeScript", "SQL", "Python", "Node.js", "AWS"],
  },
  {
    role: "Freelance Mobile & Web Developer",
    company: "Self-employed",
    period: "Ongoing",
    description:
      "Outside of work I am a freelance mobile and web developer, building custom software solutions for businesses. See my projects below.",
    achievements: [
      "Built a custom software solution for a client.",
      "Implemented a custom software solution for a client.",
      "Implemented a custom software solution for a client.",
    ],
    technologies: ["React", "TypeScript", "SQL", "Python", "Node.js"],
  },
  {
    role: "Co-founder & Product Owner",
    company: "Go43 Ltd",
    period: "Ongoing",
    description:
      "Co-founded Go43 Ltd, a digital marketing agency that gives social media influencers free access to live music events in exchange for content of the night.",
    achievements: [
      "Developed a custom software solution for a client.",
      "Implemented a custom software solution for a client.",
      "Implemented a custom software solution for a client.",
    ],
    technologies: ["React", "TypeScript", "SQL", "Python", "Node.js"],
  },
  {
    role: "Peer Review Manager",
    company: "Editorial Office / British Medical Journal",
    period: "Oct 2021 - Apr 2024",
    description:
      "Peer reviewed medical research papers for the British Medical Journal, one of the world's leading medical journals.",
    achievements: [
      "Developed a custom software solution for a client.",
      "Implemented a custom software solution for a client.",
      "Implemented a custom software solution for a client.",
    ],
  },
  {
    role: "Postgraduate EEG Researcher",
    company: "University of Bristol",
    period: "Aug 2022 - July 2023",
    description:
      "Postgraduate research in Brain Computer Interfaces (BCI), EEG and Dystonia.",
    achievements: [
      "Developed a custom software solution for a client.",
      "Implemented a custom software solution for a client.",
      "Implemented a custom software solution for a client.",
    ],
    technologies: ["Python", "MatLab"],
  },
]

function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isVisible }
}

function ExperienceTimelineEntry({
  item,
  index,
}: {
  item: ExperienceItem
  index: number
}) {
  const { ref, isVisible } = useInView<HTMLElement>()

  return (
    <article
      ref={ref}
      style={{ animationDelay: `${index * 80}ms` }}
      className={`experience-timeline-item relative grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm md:ml-16 md:grid-cols-[0.8fr_1.2fr] md:p-8 ${isVisible ? "is-visible" : ""}`}
    >
      <div
        style={{ animationDelay: `${index * 80 + 120}ms` }}
        className={`experience-timeline-dot absolute -left-[4.2rem] top-8 hidden h-10 w-10 items-center justify-center rounded-full border border-primary bg-background text-primary shadow-sm md:flex ${isVisible ? "is-visible" : ""}`}
      >
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

      {item.technologies && item.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 border-t border-border pt-6 md:col-span-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted-foreground transition-colors hover:border-primary hover:bg-primary hover:text-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  )
}

export function Experience() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const element = headerRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="bg-surface py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`mx-auto max-w-3xl text-center ${headerVisible ? "animate-fade-in" : "opacity-0"}`}
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Experience
          </span>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-6xl">
            My professional journey.
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative space-y-8 before:absolute before:left-5 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-primary md:before:block">
            {experiences.map((item, index) => (
              <ExperienceTimelineEntry
                key={`${item.role}-${item.company}-${item.period}`}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
