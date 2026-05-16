import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Layers3, X } from "lucide-react"
import { GitHubIcon } from "../components/icons/SocialIcons"

type Project = {
  title: string
  summary: string
  tags: string[]
  liveHref?: string
  demoVideo?: string
  appStoreHref?: string
  codeHref: string
  image?: string
  /** Use "contain" to show the full image without cropping (e.g. diagrams). */
  imageFit?: "cover" | "contain"
}

const projects: Project[] = [
  {
    title: "Go43 (Go-For-Free)",
    summary:
      "A digital marketing agency that gives social media influencers free access to live music events in exchange for content of the night.",
    tags: ["React", "TypeScript", "Node.js", "Expo"],
    liveHref: "https://www.go43.co.uk/",
    demoVideo: "/projects/go43-demo.mp4",
    appStoreHref: "https://apps.apple.com/gb/app/go43/id6748952122",
    codeHref: "https://github.com/GO43-tech/GO43-codebase",
    image: "/projects/go43-logo.PNG",
  },
  {
    title: "Sonar Presents",
    summary:
      "A mobile platform for the UK's grassroots music scene, allowing artists to share their music with a wider audience.",
    tags: ["React Native", "TypeScript", "Node.js", "Expo"],
    liveHref: "#contact",
    demoVideo: "/projects/sonar-recording.MP4",
    codeHref: "https://github.com/dylancrawte/sonar-presents",
    image: "/projects/ios_appstore.png",
  },
  {
    title: "Neuro Imager",
    summary:
      "An open source tool for reproducing and exploring cortical brain maps from published datasets ",
    tags: ["Python", "MatLab"],
    liveHref: "https://github.com/dylancrawte/Neuro-Imager/blob/main/README.md",
    codeHref: "https://github.com/dylancrawte/Neuro-Imager/blob/main/README.md",
    image: "/projects/hcp_gradients_cerebro.png",
    imageFit: "cover",
  },
  {
    title: "Music Portfolio",
    summary:
      "My website for my music project.",
    tags: ["React", "Tailwind CSS", "Vite", "Design"],
    liveHref: "https://crawta.vercel.app/",
    codeHref: "https://github.com/dylancrawte/crawta",
    image: "/projects/music-portfolio.JPG",
  },
  {
    title: "Personal Portfolio System",
    summary:
      "This site: a fast, responsive portfolio built with React, TypeScript, and Tailwind CSS v4.",
    tags: ["React", "Tailwind CSS", "Vite", "Design"],
    liveHref: "#hero",
    codeHref: "https://github.com/dylancrawte/personal-portfolio",
  },
]

function isExternalHref(href: string) {
  return href.startsWith("http")
}

export function Projects() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!activeVideo) return

    const video = videoRef.current

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveVideo(null)
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
      video?.pause()
    }
  }, [activeVideo])

  const closeVideo = () => {
    videoRef.current?.pause()
    setActiveVideo(null)
  }

  return (
    <section id="projects" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Projects
            </span>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-6xl">
              Personal projects outside of work.
            </h2>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {projects.map((project) => {
            const showVisitSite =
              project.demoVideo &&
              project.liveHref &&
              isExternalHref(project.liveHref)

            return (
              <article
                key={project.title}
                className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`relative aspect-[4/3] overflow-hidden bg-surface ${project.imageFit === "contain" ? "bg-background" : ""}`}
                >
                  {project.image ? (
                    <>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={
                          project.imageFit === "contain"
                            ? "h-full w-full object-contain p-4 transition-transform duration-300 group-hover:scale-[1.02]"
                            : "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        }
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.35)_50%,transparent_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </>
                  ) : (
                    <div className="flex h-full items-center justify-center bg-gradient-to-br from-surface via-primary/40 to-highlight">
                      <div className="rounded-3xl border border-primary/40 bg-background/80 p-6 shadow-xl backdrop-blur">
                        <Layers3 size={42} className="text-foreground" />
                      </div>
                    </div>
                  )}
                </div>

                <div className="space-y-5 p-6">
                  <div>
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

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    {project.demoVideo ? (
                      <button
                        type="button"
                        onClick={() => setActiveVideo(project.demoVideo!)}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-highlight"
                      >
                        View project
                        <ArrowUpRight size={16} />
                      </button>
                    ) : (
                      <a
                        href={project.liveHref}
                        target={
                          project.liveHref && isExternalHref(project.liveHref)
                            ? "_blank"
                            : undefined
                        }
                        rel={
                          project.liveHref && isExternalHref(project.liveHref)
                            ? "noreferrer"
                            : undefined
                        }
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-highlight"
                      >
                        View project
                        <ArrowUpRight size={16} />
                      </a>
                    )}

                    {showVisitSite && (
                      <a
                        href={project.liveHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/20"
                      >
                        Visit site
                        <ArrowUpRight size={16} />
                      </a>
                    )}

                    {project.appStoreHref && (
                      <a
                        href={project.appStoreHref}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/20"
                      >
                        Visit in App Store
                        <ArrowUpRight size={16} />
                      </a>
                    )}

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
                      <GitHubIcon size={18} />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Project demo video"
          onClick={closeVideo}
        >
          <button
            type="button"
            onClick={closeVideo}
            className="absolute right-4 top-4 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-background/90 text-foreground transition-colors hover:bg-background"
            aria-label="Close video"
          >
            <X size={20} />
          </button>

          <video
            ref={videoRef}
            src={activeVideo}
            controls
            autoPlay
            className="max-h-[85vh] max-w-[min(90vw,900px)] rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
