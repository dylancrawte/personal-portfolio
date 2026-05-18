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
    role: "Platform Engineer Associate",
    company: "International Airlines Group Transform · London / Barcelona",
    period: "Aug 2025 - Present",
    description:
      "IAG Transform is the central strategic and operational department for IAG and its airlines (including British Airways, Vueling and more operating companies), driving modernization, efficiency and cost reduction across the group.",
    achievements: [
      "Maintaining scalable cloud infrastructure using Terraform, ECS, GitHub Actions CI/CD pipelines and CloudWatch observability for prod, dev and UAT internal developer environments.",
      "Contributing to the IaC pipeline automating golden AMI builds for developer EC2 compute, and to the Lambda Python codebase to improve systems networking reliability and performance.",
      "Supporting developers through IAM and UiPath access management, debugging agentic automation workflows (AWS Bedrock and Copilot Studio), and maintaining internal platform documentation.",
    ],
    technologies: [
      "Terraform",
      "AWS ECS",
      "GitHub Actions",
      "CloudWatch",
      "Python",
      "Lambda",
      "AWS Bedrock",
      "UiPath",
    ],
  },
  {
    role: "Data Engineer Associate",
    company: "International Airlines Group Transform · London / Barcelona",
    period: "Aug 2024 - Aug 2025",
    description:
      "Contributed to the Engineering Metrics Platform, turning high-volume engineering telemetry into actionable insights for internal stakeholders.",
    achievements: [
      "Processed millions of events and data points from engineering tooling into actionable insights via SQL, AWS Athena and Power BI dashboards.",
      "Orchestrated ETL pipelines with AWS Glue and Python / TypeScript Lambdas to transform and load data into Athena, enabling near-real-time updates to Power BI dashboards.",
      "Designed and maintained consistent data models and schemas to normalise high-volume telemetry ingested from multiple engineering tool APIs (e.g. GitHub, Snyk).",
    ],
    technologies: [
      "SQL",
      "AWS Athena",
      "Power BI",
      "AWS Glue",
      "Python",
      "TypeScript",
      "Lambda",
    ],
  },
  {
    role: "Co-founder & Product Owner",
    company: "Go43 Ltd · London, England",
    period: "Mar 2024 - Present",
    description:
      "Digital marketing platform startup focused on social media marketing campaigns and live music gigs.",
    achievements: [
      "Own the end-to-end lifecycle of a full-stack mobile platform with hundreds of users, featuring events from Universal Music Group labels and acts such as Post Malone.",
      "Shipped and published the app on the Apple App Store, managing product delivery and roadmap with Trello.",
    ],
    technologies: ["React Native", "Express", "Node.js", "MongoDB", "Trello"],
  },
  
  {
    role: "Postgraduate EEG Researcher",
    company:
      "University of Bristol · Neuroscience, Physiology and Pharmacology",
    period: "Aug 2022 - Jul 2023",
    description:
      "Research into closed-loop vibrotactile stimulation (VTS) as a non-invasive neuromodulation therapy for dystonia within the sensorimotor cortex.",
    achievements: [
      "Investigated suppression of pathogenic alpha/mu oscillations (8–13 Hz) using closed-loop VTS as a non-invasive neuromodulation therapy for dystonia.",
      "Recorded and pre-processed raw 32-channel EEG data using an ANT Neuro system, including manual artefact rejection, HFA polarity normalisation and signal conditioning for spectral analysis.",
      "Built MATLAB analysis pipelines for power spectral density estimation (Pwelch), Fourier transforms, ERP extraction and oscillatory alignment, producing publication-quality visualisations of group-averaged neural data.",
      "Applied statistical analysis in SPSS and R (repeated measures ANOVA, Wilcoxon signed-rank tests, Greenhouse–Geisser correction, Cohen's d) to validate closed-loop VTS efficacy across experimental conditions.",
    ],
    technologies: ["MATLAB", "SPSS", "R", "EEG", "ANT Neuro"],
  },
  {
    role: "Peer Review Manager",
    company: "Editorial Office / British Medical Journal",
    period: "Oct 2021 - Apr 2023",
    description:
      "Publishing technology services company providing end-to-end peer review workflow management for leading academic life science journals.",
    achievements: [
      "Managed high-volume peer review workflows for BMJ journals via ScholarOne.",
      "Assessed submissions to identify relevant peer reviewers, building broad familiarity with biomedical and clinical research literature.",
      "Supported editorial administration for manuscript submissions, ensuring accurate processing and workflow compliance across the peer review pipeline.",
    ],
    technologies: ["ScholarOne"],
  },
  {
    role: "Website & App Developer",
    company: "Freelance",
    period: "Ongoing",
    description:
      "Working with companies closer to my personal interests to help build their vision into reality.",
    achievements: [
      "Currently building a streaming platform for up and coming artists in the UK - Sonar Presents.",
    ],
    technologies: ["React Native", "Express", "Node.js", "MongoDB", "Trello"],
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
