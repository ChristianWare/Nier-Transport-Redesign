import PageIntro from "../components/PageIntro/PageIntro";
import Blog from "../../../public/images/blog3.png";
import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import styles from "../page.module.css";
import Nav from "../components/Nav/Nav";

const BlogPage = () => {
  const fs = require("fs");
  const path = require("path");
  const matter = require("gray-matter");
  const blogsDirectory = path.join(process.cwd(), "blogs");
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
      </div>{" "}
      <PageIntro
        title='Our Blog'
        heading='Nier Transportation Insights'
        src={Blog}
        videoSrc='/video/hero.mp4'
      />
      <BlogSection blogData={blogs} />
      <ContactSection />
      <FinalCTA />
    </main>
  );
};
export default BlogPage;
