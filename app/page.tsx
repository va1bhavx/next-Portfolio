import ExperienceSection from "@/components/web/Home/ExperienceSection";
import HeroSection from "@/components/web/Home/HeroSection";
import HowICanHelp from "@/components/web/Home/HowICanHelp";
import RecentWork from "@/components/web/Home/RecentWork";
import RecentLogs from "@/components/web/Home/RecentLogs";
import Testimonials from "@/components/web/Home/Testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowICanHelp />
      <ExperienceSection />
      <RecentWork />
      <RecentLogs />
      <Testimonials />
    </>
  );
}
