import { AboutMe } from "@/components/AboutMe"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Skills } from "@/components/Skills"
import { Exp } from "@/components/Exp"


export default function Home() {
  return (
    <main>
      <Header/>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Exp/>
    </main>
  );
}
