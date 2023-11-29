import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Calculator from "./components/claculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white scroll-smooth">
      <Navbar className=' z-10' />
      <div className="container mt-24 mx-auto px-12 py-4 z-0">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <Calculator />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
