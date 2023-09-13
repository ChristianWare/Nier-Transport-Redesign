import ContentPadding from "../components/ContentPadding/ContentPadding";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import PageIntro from "../components/PageIntro/PageIntro";
import Contact2 from "../../../public/images/contact2.png";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import ContactSection from "../components/ContactSection/ContactSection";
import BlogSection from "../components/BlogSection/BlogSection";

const ContactPage = () => {
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
        heading='Contact Us'
        copy='Our Contact Us page is your gateway to seamless communication with our dedicated team. Whether you have inquiries about our premium black car services, need assistance with bookings, or wish to discuss customized travel solutions, we&#39;re here to assist you. Reach out to us today and experience personalized support that ensures your every request is met with efficiency and care.'
        src={Contact2}
      />

      <ContactSection />
      <BlogSection blogData={blogs} />
      <FinalCTA />
    </main>
  );
};
export default ContactPage;
