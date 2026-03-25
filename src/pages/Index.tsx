import StarField from "@/components/StarField";
import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/HeroSection";
import LaunchSection from "@/components/LaunchSection";
import SpaceTravelSection from "@/components/SpaceTravelSection";
import GallerySection from "@/components/GallerySection";
import LandingSection from "@/components/LandingSection";
import ExploreSection from "@/components/ExploreSection";
import SpaceXCta from "@/components/SpaceXCta";

const Index = () => {
  return (
    <div className="relative bg-background min-h-screen overflow-x-hidden">
      <StarField />
      <NavigationBar />
      <HeroSection />
      <LaunchSection />
      <SpaceTravelSection />
      <GallerySection />
      <LandingSection />
      <ExploreSection />
      <SpaceXCta />
    </div>
  );
};

export default Index;
