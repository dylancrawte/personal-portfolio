import { Code2, Mail, Users } from "lucide-react"

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://github.com/dylancrawte", label: "GitHub", icon: Code2 },
  {
    href: "https://www.linkedin.com/in/dylancrawte",
    label: "LinkedIn",
    icon: Users,
  },
  { href: "mailto:hello@dylancrawte.com", label: "Email", icon: Mail },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="container mx-auto flex flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <a
            href="#"
            className="text-xl font-bold tracking-tight transition-colors hover:text-primary"
          >
            DC<span className="text-primary">.</span>
          </a>
          <p className="mt-3 max-w-md text-sm text-muted-foreground">
            Building reliable software, AI operations workflows, and polished
            web experiences.
          </p>
        </div>

        <div className="flex flex-col gap-5 md:items-end">
          <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => {
              const Icon = link.icon

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noreferrer"
                      : undefined
                  }
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>

          <p className="text-sm text-muted-foreground">
            Copyright {new Date().getFullYear()} Dylan Crawte. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
