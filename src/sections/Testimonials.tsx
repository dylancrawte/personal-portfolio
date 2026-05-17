import { Quote, Star } from "lucide-react"

type Testimonial = {
  quote: string
  name: string
  role: string
  email?: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "It is a real pleasure to work with Dylan as he brings our company's vision to life. With clear communication, honesty and great timekeeping, the entire process has been (and continues to be) professional and stress-free",
    name: "Russel Phillips",
    role: "Sonar Presents",
    email: "russell@sonarpresents.com",
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
            Feedback, from clients and colleagues.
          </h2>
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
