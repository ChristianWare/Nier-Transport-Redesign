import Hero from "./components/Hero/Hero";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import Areas from "./components/Areas/Areas";
import FleetSection from "./components/FleetSection/FleetSection";
import BookingProcess from "./components/BookingProcess/BookingProcess";
import ContactSection from "./components/ContactSection/ContactSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import FaqSection from "./components/Faqs/FaqSection";
import BlogSection from "./components/BlogSection/BlogSection";
import FinalCTA from "./components/FinalCTA/FinalCTA";
import FleetInfo from "./components/FleetInfo/FleetInfo";
import { homePageFaqs } from "./lib/data";
import IndivServiceSection from "./components/IndivServiceSection/IndivServiceSection";
import Nav from "./components/Nav/Nav";
import styles from "./page.module.css";
import Announcement from "./components/Announcement/Announcement";

export default function Home() {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");

  // Determine the correct path to the 'blogs' directory
  const blogsDirectory = path.join(process.cwd(), "blogs");

  // Use readdirSync to list files in the 'blogs' directory
  const files = fs.readdirSync(blogsDirectory);

  const blogs = files.map((filename: any) => {
    const fileContent = fs.readFileSync(
      path.join(blogsDirectory, filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return (
    <main className={styles.main}>
      <div className={styles.navContainer}>
        <Nav />
      </div>
      <Hero />
      <Announcement />
      <AboutUsSection />
      <ServicesSection />
      <IndivServiceSection />
      {/* <FleetSection /> */}
      <FleetInfo />
      <Areas />
      <BookingProcess />
      <TestimonialSection />
      <FaqSection mapData={homePageFaqs} />
      <BlogSection blogData={blogs} />
      <ContactSection />
      <FinalCTA />
    </main>
  );
}
