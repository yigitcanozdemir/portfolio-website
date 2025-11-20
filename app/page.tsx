import Header from "@/app/components/header"
import Hero from "@/app/components/hero"
import Services from "@/app/components/services"
import Projects from "@/app/components/projects"
import Skills from "@/app/components/skills"
import Experience from "@/app/components/experience"
import About from "@/app/components/about"
import Contact from "@/app/components/contact"
import Footer from "@/app/components/footer"


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
