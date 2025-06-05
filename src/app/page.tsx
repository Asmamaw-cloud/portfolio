import Hero from "@/app/components/hero"
import About from "@/app/components/about"
import Skills from "@/app/components/skills"
import Projects from "@/app/components/projects"
import Contact from "@/app/components/contact"
import Footer from "@/app/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
