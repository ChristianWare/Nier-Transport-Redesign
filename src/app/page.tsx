import Hero from "./components/Hero/Hero";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import Areas from "./components/Areas/Areas";
import FleetSection from "./components/FleetSection/FleetSection";
import BookingProcess from "./components/BookingProcess/BookingProcess";
import ContactSection from "./components/ContactSection/ContactSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import FaqSection from "./components/Faqs/FaqSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUsSection />
      <ServicesSection />
      <FleetSection />
      <Areas />
      <BookingProcess />
      <TestimonialSection />
      <FaqSection />
      <ContactSection />
    </main>
  );
}
