import { AboutMe } from "@/components/AboutMe"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Skills } from "@/components/Skills";
import { Works } from "@/components/Work"
import { Exp } from "@/components/Exp"

export default function Home() {
  return (
    <main className="bg-white flex flex-col">
      <Header />
      <Hero />
      <AboutMe />
      <Skills />
      <Exp />
      <Works />
    </main>
  );
}
