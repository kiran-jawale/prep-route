import Background from "./parts/Background";
import HeroSection from "./parts/HeroSection";
import MajorChallengesSection from "./parts/MajorChallengesSection";
import SummarySection from "./parts/SummarySection";
import TechDecisionsSection from "./parts/TechnicalDecision";
import ArchitectureSection from "./parts/ArchitectureSection";

function Doc() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <Background />

      <main className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
          <HeroSection />
          <ArchitectureSection />
          <MajorChallengesSection />
          <TechDecisionsSection />
          <SummarySection />
        </div>
      </main>
    </div>
  );
}

export default Doc;
