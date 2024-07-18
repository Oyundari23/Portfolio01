import { AboutMe } from "@/components/AboutMe"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { Work } from "@/components/Work"
 
export default function Home() {
  return (
    <main className="bg-white">
      <Header/>
      <Hero/>
      <AboutMe/>
      <Work/>
    </main>
  );
}
