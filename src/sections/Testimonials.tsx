import { Quote, Star } from "lucide-react"

type Testimonial = {
  quote: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Dylan has a strong instinct for turning a vague operational problem into a clean, practical system the team can actually use.",
    name: "Product collaborator",
    role: "Workflow automation project",
  },
  {
    quote:
      "He balances the product detail with the engineering detail, which makes the end result feel polished without becoming overcomplicated.",
    name: "Engineering partner",
    role: "Frontend delivery",
  },
  {
    quote:
      "The best part of working with Dylan is the clarity. He makes the next step obvious and keeps the work moving.",
    name: "Operations lead",
    role: "AI operations process",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-surface py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Testimonials
          </span>
          <h2 className="mt-4 font-serif text-4xl tracking-tight text-foreground md:text-6xl">
            Clear thinking, careful delivery.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Feedback themes from collaborative product, engineering, and
            operations work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.role}`}
              className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={18} fill="currentColor" />
                  ))}
                </div>
                <Quote className="text-muted-foreground" size={28} />
              </div>

              <p className="flex-1 text-lg leading-8 text-muted-foreground">
                "{testimonial.quote}"
              </p>

              <div className="mt-8 flex items-center gap-4 border-t border-border pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-semibold text-foreground">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
