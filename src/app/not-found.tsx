import PageIntro from "./components/PageIntro/PageIntro";
import Img from "../../public/images/barry.jpg";
import Link from "next/link";
import FaqSection from "./components/Faqs/FaqSection";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import ContactSection from "./components/ContactSection/ContactSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import styles from "./page.module.css";
import Nav from "./components/Nav/Nav";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.navContainer}>
        <Nav />
      </div>{" "}
      <PageIntro
        heading='404 not found'
        title="You're Lost. Go Home"
        src={Img}
        videoSrc='/video/lost.mp4'
      />
    </main>
  );
}
