import { About } from "./sections/About"
import { Contact } from "./sections/Contact"
import { Experience } from "./sections/Experience"
import { Footer } from "./layout/Footer"
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
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
