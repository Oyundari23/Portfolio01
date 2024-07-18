import { AboutMe } from "@/components/AboutMe"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Skills } from "@/components/Skills"
import { Exp } from "@/components/Exp"
import { Work } from "@/components/Work"


export default function Home() {
  return (
    <main className="">
      <Header/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Exp/>
      <Work/>
    </main>
  );
}
