import PageIntro from "../components/PageIntro/PageIntro";
import Blog from "../../../public/images/blog.png";
import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FinalCTA from "../components/FinalCTA/FinalCTA";

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
    <main>
      <PageIntro
        heading='Our Blog'
        copy='Explore our blog section to stay updated on the latest trends in luxury transportation, travel tips, and exclusive insights into the world of black car services. Whether you&#39;re seeking advice on planning a memorable event, discovering hidden gems in our service areas, or simply looking for inspiration for your next journey, our blog is your go-to resource. Join us on a journey of discovery and refinement in the world of premium transportation.'
        src={Blog}
      />
      <BlogSection blogData={blogs} />
      <ContactSection />
      <FinalCTA />
    </main>
  );
};
export default BlogPage;
