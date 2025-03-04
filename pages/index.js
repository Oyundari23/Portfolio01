import { AboutMe } from "@/components/AboutMe"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Skills } from "@/components/Skills";
import { Works } from "@/components/Work"
import { Exp } from "@/components/Exp"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="bg-slate-50 dark:bg-black">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Exp />
      <Works />
      <Footer />
    </main>
  );
}
