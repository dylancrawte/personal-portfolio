type ButtonSize = "sm" | "default" | "lg"

type ButtonProps = {
  className?: string
  size?: ButtonSize
  variant?: "primary" | "accent"
  children: React.ReactNode
  href?: string
  type?: "button" | "submit" | "reset"
  target?: string
  rel?: string
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const Button = ({
  className = "",
  size = "default",
  variant = "primary",
  children,
  href,
  type = "button",
  target,
  rel,
  onClick,
}: ButtonProps) => {
  const variantClasses =
    variant === "accent"
      ? "bg-accent-blue-dark text-white shadow-md hover:bg-accent-blue-hover hover:shadow-lg focus-visible:ring-accent-blue-dark"
      : "bg-primary text-foreground hover:bg-primary/80 hover:shadow-lg hover:shadow-primary/30 focus-visible:ring-primary"

  const baseClasses =
    `relative inline-flex overflow-hidden rounded-full font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variantClasses}`.trim()

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`.trim()

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        onClick={onClick}
      >
        <span className="relative flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  )
}
