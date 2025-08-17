import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSection />
      <VideoSection />
      <FeaturesSection />
      <TestimonialsSection />
    </main>
  );
}
