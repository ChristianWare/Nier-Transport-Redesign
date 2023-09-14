import PageIntro from "./components/PageIntro/PageIntro";
import Img from "../../public/images/barry.jpg";
import Link from "next/link";
import FaqSection from "./components/Faqs/FaqSection";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import ContactSection from "./components/ContactSection/ContactSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";

export default function NotFound() {
  return (
    <main>
      <PageIntro heading='404 not found' src={Img} />
    </main>
  );
}
