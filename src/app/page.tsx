import Hero from "./components/Hero/Hero";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import Areas from "./components/Areas/Areas";
import FleetSection from "./components/FleetSection/FleetSection";
import BookingProcess from "./components/BookingProcess/BookingProcess";
import ContactSection from "./components/ContactSection/ContactSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import FaqSection from "./components/Faqs/FaqSection";
// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";
import BlogSection from "./components/BlogSection/BlogSection";
import FinalCTA from "./components/FinalCTA/FinalCTA";

export default function Home() {
  // const blogDir = "blogs";
  // const files = fs.readdirSync(path.join(blogDir));
  // const blogs = files.map((filename) => {
  //   const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

  //   const { data: frontMatter } = matter(fileContent);
  //   return {
  //     meta: frontMatter,
  //     slug: filename.replace(".mdx", ""),
  //   };
  // });

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
      <BlogSection  />
      <ContactSection />
      <FinalCTA />
    </main>
  );
}
