import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { LumaSection } from "./components/LumaSection";
import { WhyCoreAI } from "./components/WhyCoreAI";
import { WorkWithVivian } from "./components/WorkWithVivian";
import { FounderVision } from "./components/FounderVision";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div className="scale-wrapper">
        <div className="scaled-content">
          <LumaSection />
          <WhyCoreAI />
          <WorkWithVivian />
          <FounderVision />
          <Footer />
        </div>
      </div>
    </div>
  );
}
