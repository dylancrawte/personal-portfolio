type AnimatedBorderButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode
  className?: string
}

export const AnimatedBorderButton = ({
  children,
  className = "",
  ...props
}: AnimatedBorderButtonProps) => {
  return (
    <a
      className={`group relative inline-flex overflow-hidden rounded-full p-px transition-transform duration-300 hover:-translate-y-0.5 ${className}`.trim()}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,var(--color-primary)_40%,var(--color-highlight)_55%,transparent_70%)]" />
      <span className="relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-base font-medium text-foreground transition-colors duration-300 group-hover:bg-surface">
        {children}
      </span>
    </a>
  )
}
