import Hero from "./components/Hero/Hero";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <ServicesSection />
    </main>
  );
}
