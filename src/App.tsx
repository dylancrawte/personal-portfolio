import { About } from "./sections/About"
import { Experience } from "./sections/Experience"
import { Projects } from "./sections/Projects"
import { Testimonials } from "./sections/Testimonials"
import { Navbar } from "./layout/Navbar"
import { Hero } from "./sections/Hero"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
      </main>
    </div>
  )
}

export default App
