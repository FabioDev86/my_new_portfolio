import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="dark:bg-slate-950">
      <Header />
      <Hero />
      <hr className="h-1 m-5"/>
      <Skills />
      <hr className="h-1 m-5"/>
    </main>
  )
}
