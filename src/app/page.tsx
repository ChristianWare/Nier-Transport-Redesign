import Hero from "./components/Hero/Hero";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import Areas from "./components/Areas/Areas";
import FleetSection from "./components/FleetSection/FleetSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <ServicesSection />
      <Areas />
      <FleetSection />
    </main>
  );
}
