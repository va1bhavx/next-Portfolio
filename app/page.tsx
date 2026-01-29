import ExperienceSection from "@/components/web/ExperienceSection";
import HeroSection from "@/components/web/HeroSection";
import HowICanHelp from "@/components/web/HowICanHelp";
import RecentWork from "@/components/web/RecentWork";
import Testimonials from "@/components/web/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowICanHelp />
      <ExperienceSection />
      <RecentWork />
      <Testimonials />
    </>
  );
}
