import HeroSection from "../components/sections/HeroSection.jsx";
import ServicesIndex from "../components/sections/ServicesIndex.jsx";
import ResultsRow from "../components/sections/ResultsRow.jsx";
import MarqueeBar from "../components/ui/MarqueeBar.jsx";

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeBar items={["React", "Node.js", "AWS", "Claude API", "Postgres", "Docker"]} />
      <ServicesIndex />
      <ResultsRow />
    </>
  );
}
