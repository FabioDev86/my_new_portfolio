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
    <main className="bg-zinc-50 dark:bg-stone-900 transition-colors duration-300">
      <LanguageProvider>
        <Header />
        <div className="py-10 md:py-16">
          <Hero />
        </div>
        <section className="bg-white dark:bg-stone-950 py-16 md:py-24 transition-colors duration-300">
          <Skills />
        </section>
        <section className="py-16 md:py-24">
          <Certifications />
        </section>
        <section className="bg-white dark:bg-stone-950 py-16 md:py-24 transition-colors duration-300">
          <Projects />
        </section>
        <section className="py-16 md:py-24">
          <About />
        </section>
        <section className="bg-white dark:bg-stone-950 py-16 md:py-24 transition-colors duration-300">
          <Contact />
        </section>
        <Footer />
      </LanguageProvider>
    </main>
  )
}
