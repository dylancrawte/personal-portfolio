import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  Download,
  Sparkles,
} from "lucide-react"
import { AnimatedBorderButton } from "../components/AnimatedBorderButton"
import { Button } from "../components/Button"
import { GitHubIcon, LinkedInIcon } from "../components/icons/SocialIcons"

import { LogoMarquee } from "../components/LogoMarquee"
import { technologies, tools } from "../data/techStack"

const socialLinks = [
  { href: "https://github.com/dylancrawte", label: "GitHub", icon: GitHubIcon },
  {
    href: "https://www.linkedin.com/in/dylan-crawte-681324225/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
]

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-7"
    >
      <div className="hero-gradient absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="container relative z-10 mx-auto px-6 pb-20 pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="space-y-10">
            <div className="animate-fade-in">
              <span className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-green-500 hover:text-green-600">
                <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                Available for Work
              </span>
              <div className="space-y-6">
              <h1 className="max-w-4xl font-serif text-5xl leading-[0.95] tracking-tight text-headline md:text-7xl lg:text-8xl">
                Dylan Crawte
              </h1>
              <h1 className="max-w-4xl font-serif text-5xl leading-[1.1] tracking-tight text-headline md:text-4xl lg:text-4xl">
                AI Engineering. Computational Neuroscience. Mobile & Web Development
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                Passionate about building intuitive systems that solve real world problems.
              </p>
            </div>
            </div>

            

            <div className="animate-fade-in-delayed flex flex-col gap-4 sm:flex-row">
              <Button href="#contact" size="lg">
                Contact Me
                <ArrowRight size={20} />
              </Button>
              <AnimatedBorderButton href="mailto:hello@dylancrawte.com?subject=CV%20request">
                <Download size={20} />
                Request CV
              </AnimatedBorderButton>
            </div>

            <div className="animate-fade-in-delayed flex items-center gap-4 text-sm text-muted-foreground">
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
            <div className="animate-fade-in absolute -left-8 top-10 hidden rounded-2xl glass px-5 py-4 shadow-xl md:block">
              <div className="flex items-center gap-3">
                <Sparkles className="text-primary" size={22} />
                
              </div>
            </div>

            <div className="animate-slide-in-right relative overflow-hidden rounded-[2rem] border border-border bg-photo-panel p-6 shadow-2xl">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-surface">
                <img
                  src="/hero-headshot.webp"
                  alt="Dylan Crawte"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="animate-fade-in absolute -bottom-8 right-4 rounded-2xl glass-strong px-5 py-4 shadow-xl">
              <div className="flex items-center gap-3">
                <Briefcase className="text-accent-blue-mid" size={24} />
                <div>
                  <p className="text-2xl font-bold">4+</p>
                  <p className="text-xs text-muted-foreground">
                    years experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 rounded-2xl border border-border bg-card/60 px-4 py-8 sm:px-6">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Stack
            </p>
            <h2 className="mt-2 font-serif text-2xl tracking-tight text-foreground md:text-3xl">
              Technologies & tools
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <p className="mb-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Technologies
              </p>
              <LogoMarquee items={technologies} direction="left" />
            </div>

            <div>
              <p className="mb-3 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Tools
              </p>
              <LogoMarquee items={tools} direction="right" />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        <ChevronDown size={20} className="animate-bounce" />
      </a>
    </section>
  )
}
