import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="bg-zinc-100 dark:bg-stone-900">
      <Header />
      <Hero />
      <hr/>
      <Skills />
      <hr/>
      <Certifications />
      <hr/>
      <Projects />
      <hr/>
      <About />
      <hr/>
      <Contact />
    </main>
  )
}
