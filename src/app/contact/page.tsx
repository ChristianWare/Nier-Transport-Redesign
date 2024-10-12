import ContentPadding from "../components/ContentPadding/ContentPadding";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import PageIntro from "../components/PageIntro/PageIntro";
import Contact2 from "../../../public/images/contact2.png";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import ContactSection from "../components/ContactSection/ContactSection";
import BlogSection from "../components/BlogSection/BlogSection";
import FaqSection from "../components/Faqs/FaqSection";
import styles from "./Contactpage.module.css";
import { homePageFaqs } from "../lib/data";
import Nav from "../components/Nav/Nav";

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
    <main className={styles.main}>
      <div className={styles.navContainer}>
        <Nav />
      </div>{" "}
      <PageIntro
        title='Contact Us'
        heading='Reach Out any time'
        src={Contact2}
        videoSrc='/video/contact.mp4'
      />
      <ContactSection />
      <LayoutWrapper>
        <ContentPadding>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.248717288147!2d-111.86333289999999!3d33.572891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b7553fa7aaaab%3A0x55c463417f2cb0a2!2s10105%20E%20V%C3%ADa%20Linda%20Suite%20A-%20105%2C%20Scottsdale%2C%20AZ%2085258!5e0!3m2!1sen!2sus!4v1694633298828!5m2!1sen!2sus'
            width='100%'
            height='450'
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className={styles.test}
          ></iframe>
        </ContentPadding>
      </LayoutWrapper>
      <FaqSection mapData={homePageFaqs} />
      <BlogSection blogData={blogs} />
      <FinalCTA />
    </main>
  );
};
export default ContactPage;
