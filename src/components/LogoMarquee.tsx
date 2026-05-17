import type { StackItem } from "../data/techStack"

type LogoMarqueeProps = {
  items: StackItem[]
  direction?: "left" | "right"
}

function StackTile({ item }: { item: StackItem }) {
  const Icon = item.icon

  return (
    <div className="flex min-w-[5.5rem] shrink-0 flex-col items-center gap-2.5 rounded-xl border border-border/60 bg-background px-4 py-3 transition-colors hover:border-primary/50">
      <Icon size={32} />
      <span className="text-center text-xs font-medium text-muted-foreground">
        {item.name}
      </span>
    </div>
  )
}

export function LogoMarquee({ items, direction = "left" }: LogoMarqueeProps) {
  const trackClass =
    direction === "right"
      ? "animate-marquee-slow-reverse"
      : "animate-marquee-slow"

  const duplicated = [...items, ...items]

  return (
    <div className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-card/95 to-transparent sm:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-card/95 to-transparent sm:w-16"
        aria-hidden
      />

      <div className={`flex w-max gap-4 ${trackClass}`}>
        {duplicated.map((item, index) => (
          <StackTile key={`${item.name}-${index}`} item={item} />
        ))}
      </div>
    </div>
  )
}
