'use client'

import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { LanguageProvider } from "@/contexts/LanguageProvider";

export default function Home() {
  return (
    <main className="bg-zinc-100 dark:bg-stone-900">
      <LanguageProvider>
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
        <hr/>
        <Footer />
      </LanguageProvider>
    </main>
  )
}
