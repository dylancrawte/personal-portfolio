import { useEffect, useState } from "react"
import { Button } from "../components/Button"
import { Brain, Menu, X } from "lucide-react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

const SCROLL_BLUR_THRESHOLD_PX = 24

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_BLUR_THRESHOLD_PX)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 " +
        (isScrolled
          ? "border-b border-border/30 bg-background/45 shadow-sm backdrop-blur-xl backdrop-saturate-150"
          : "border-b border-transparent bg-transparent")
      }
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <a
          href="#"
          aria-label="Home"
          className="group inline-flex items-center gap-2 text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors group-hover:border-primary group-hover:bg-transparent group-hover:text-primary">
            <Brain size={18} />
          </span>
          DC<span className="text-primary"></span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          <div className="glass flex items-center gap-1 rounded-full px-2 py-1">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden md:block">
          <Button href="#contact" size="sm" variant="accent">
            Contact Me
          </Button>
        </div>

        <button
          className="cursor-pointer p-2 text-foreground md:hidden"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="glass-strong animate-fade-in md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-6 py-6">
            {navLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                className="py-2 text-lg text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <Button
              href="#contact"
              variant="accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
