import {
  ArrowRight,
  Bot,
  ChevronDown,
  Code2,
  Download,
  Sparkles,
  Users,
} from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"
import { Button } from "../components/Button"

const skills = [
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Automation",
  "AI Ops",
  "Cloud Workflows",
  "CI/CD",
  "Prompt Engineering",
  "Observability",
]

const socialLinks = [
  { href: "https://github.com/dylancrawte", label: "GitHub", icon: Code2 },
  {
    href: "https://www.linkedin.com/in/dylancrawte",
    label: "LinkedIn",
    icon: Users,
  },
]

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-primary)_0,transparent_28%),linear-gradient(135deg,var(--color-background)_0%,var(--color-surface)_48%,var(--color-background)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10 mx-auto px-6 pb-20 pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm text-foreground">
                <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                Software Engineer / AI Operations Engineer
              </span>
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight text-foreground md:text-7xl lg:text-8xl">
                Building calm
                <span className="block text-highlight">software systems</span>
                for ambitious teams.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                I help teams turn messy workflows into reliable products,
                automation, and AI operations systems that are simple to run
                and easy to improve.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" size="lg">
                Contact Me
                <ArrowRight size={20} />
              </Button>
              <AnimatedBorderButton href="mailto:hello@dylancrawte.com?subject=CV%20request">
                <Download size={20} />
                Request CV
              </AnimatedBorderButton>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Follow me:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary hover:bg-primary"
                  >
                    <Icon size={18} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -left-8 top-10 hidden rounded-2xl glass px-5 py-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <Sparkles className="text-primary" size={22} />
                <div>
                  <p className="text-sm font-semibold">Available for work</p>
                  <p className="text-xs text-muted-foreground">
                    Freelance and full-time roles
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-6 shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-highlight via-foreground to-muted">
                <div className="flex h-full flex-col items-center justify-center gap-6 p-10 text-center text-primary-foreground">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border border-primary/40 bg-primary/15 text-5xl font-bold tracking-tight text-primary">
                    DC
                  </div>
                  <div>
                    <p className="font-serif text-4xl">Dylan Crawte</p>
                    <p className="mt-3 text-sm uppercase tracking-[0.3em] text-primary">
                      AI Operations
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 right-4 rounded-2xl glass-strong px-5 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <Bot className="text-primary" size={24} />
                <div>
                  <p className="text-2xl font-bold">10+</p>
                  <p className="text-xs text-muted-foreground">
                    workflows automated
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 overflow-hidden rounded-full border border-border bg-card/80 py-4">
          <p className="mb-3 text-center text-sm text-muted-foreground">
            Technologies I work with
          </p>
          <div className="flex w-max animate-marquee gap-3">
            {[...skills, ...skills].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-muted-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        Scroll
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
