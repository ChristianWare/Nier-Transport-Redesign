import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FaqSection from "../components/Faqs/FaqSection";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import PageIntro from "../components/PageIntro/PageIntro";
import Fleet from "../../../public/images/fleet.png";
import IndivServiceSection from "../components/IndivServiceSection/IndivServiceSection";
import Options from "../components/Options/Options";
import { homePageFaqs } from "../lib/data";

const ServicesPage = () => {
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
    <main>
      <PageIntro
        title='Our Services'
        heading='We are a Reliable Black Car Airport Service - and More!'
        src={Fleet}
      />
      <IndivServiceSection />
      <Options />
      <BlogSection blogData={blogs} />
      <FaqSection mapData={homePageFaqs} />
      <ContactSection />
      <FinalCTA />
    </main>
  );
};
export default ServicesPage;
