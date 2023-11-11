import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="dark:bg-slate-950">
      <Header />
      <Hero />
      <hr className="h-1 m-5"/>
      <Skills />
      <hr className="h-1 m-5"/>
      <Projects />
      <hr className="h-1 m-5"/>
      <About />
      <hr className="h-1 m-5"/>
      <Contact />
    </main>
  )
}
