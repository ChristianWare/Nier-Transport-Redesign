import PageIntro from "../components/PageIntro/PageIntro";
import Img from "../../../public/images/barry.jpg";
import CompanyOverview from "../components/CompanyOverview/CompanyOverview";
import Mission from "../components/Mission/Mission";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import BookingProcess from "../components/BookingProcess/BookingProcess";
import FaqSection from "../components/Faqs/FaqSection";
import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import Commitment from "../components/Commitment/Commitment";
import FleetSection from "../components/FleetSection/FleetSection";

const AboutPage = () => {
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
        heading='About Us'
        copy='Welcome to Arizona&#39;s premier black car service, where every ride is an experience of unmatched luxury and sophistication. At Nier Transportation, we have proudly served the dynamic Phoenix area for nearly two decades, establishing ourselves as the go-to choice for those seeking the best car service in Phoenix.'
        src={Img}
      />
      <CompanyOverview />
      <Commitment />
      <Mission />
      <ServicesSection />
      <FleetSection />
      <TestimonialSection />
      <FaqSection />
      <BlogSection blogData={blogs} />
      <ContactSection />
      <FinalCTA />
    </main>
  );
};
export default AboutPage;
