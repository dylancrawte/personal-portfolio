import { Mail, MapPin, MessageSquare, Send } from "lucide-react"
import { Button } from "../components/Button"

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@dylancrawte.com",
    href: "mailto:hello@dylancrawte.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "United Kingdom",
    href: "#contact",
  },
  {
    icon: MessageSquare,
    label: "Best for",
    value: "Product builds, AI ops, automation",
    href: "#projects",
  },
]

export function Contact() {
  return (
    <section id="contact" className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="space-y-8">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                Contact
              </span>
              <h2 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-foreground md:text-6xl">
                Have a workflow, product, or AI ops problem to solve?
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Send a note with what you are building, where things feel
                messy, and what success would look like. I will get back to you
                with a practical next step.
              </p>
            </div>

            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon

                return (
                  <a
                    key={method.label}
                    href={method.href}
                    className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 transition-colors hover:border-primary"
                  >
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-foreground">
                      <Icon size={22} />
                    </span>
                    <span>
                      <span className="block text-sm text-muted-foreground">
                        {method.label}
                      </span>
                      <span className="font-medium text-foreground">
                        {method.value}
                      </span>
                    </span>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-xl md:p-8">
            <form
              action="mailto:hello@dylancrawte.com"
              method="post"
              encType="text/plain"
              className="space-y-5"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">
                    Name
                  </span>
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                    placeholder="Your name"
                  />
                </label>

                <label className="space-y-2">
                  <span className="text-sm font-medium text-foreground">
                    Email
                  </span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                    placeholder="you@example.com"
                  />
                </label>
              </div>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-foreground">
                  Project type
                </span>
                <input
                  name="project"
                  type="text"
                  className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  placeholder="AI operations, web app, automation..."
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-foreground">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  placeholder="Tell me what you are trying to build or improve."
                />
              </label>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
                <Send size={20} />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
