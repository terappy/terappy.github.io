import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Works from "@/components/Works";
import SkillSet from "@/components/SkillSet";
import History from "@/components/History";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <AboutMe />
      <Works />
      <SkillSet />
      <History />
    </main>
  );
}
