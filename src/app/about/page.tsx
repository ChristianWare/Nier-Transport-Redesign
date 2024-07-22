import PageIntro from "../components/PageIntro/PageIntro";
import Img from "../../../public/images/barry2.jpg";
import CompanyOverview from "../components/CompanyOverview/CompanyOverview";
import Mission from "../components/Mission/Mission";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import FaqSection from "../components/Faqs/FaqSection";
import BlogSection from "../components/BlogSection/BlogSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FinalCTA from "../components/FinalCTA/FinalCTA";
import TestimonialSection from "../components/TestimonialSection/TestimonialSection";
import Commitment from "../components/Commitment/Commitment";
import FleetSection from "../components/FleetSection/FleetSection";
import AdditionalInfo from "../components/AdditionalInfo/AdditionalInfo";
import { aboutPageAdditionalInfo } from "@/app/lib/data";
import Img1 from "../../../public/images/Hero5.png";
import History from "../components/History/History";
import FleetInfo from "../components/FleetInfo/FleetInfo";
import Usp from "../components/Usp/Usp";
import { aboutPageFaqs } from "@/app/lib/data";

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
        title='About Us'
        heading='Learn about Nier Transportation'
        src={Img}
      />
      <CompanyOverview />
      <AdditionalInfo
        bgColor='gray'
        heading='Redefining Transportation'
        copy="We're all about top-tier transportation services. When you get into one of our vehicles, you're in for a world of comfort and style. We have the latest models, so you'll travel in style and elegance."
        mapData={aboutPageAdditionalInfo}
        btn={true}
        href='/'
        btnText='Book Now'
        btnType='primary'
        h3='Professional Chauffeurs at Your Service'
        more="Our drivers are prepared to fulfill your requirements with the utmost professionalism. Choose Nier Transportation for a travel experience that's all about luxury, ease, and amazing service. It's a journey you won't forget."
        src={Img1}
      />
      <History />
      <Mission />
      <Commitment />
      <ServicesSection />
      <FleetInfo />
      <Usp />
      <TestimonialSection />
      <FaqSection mapData={aboutPageFaqs} />
      <BlogSection blogData={blogs} />
      <ContactSection />
      <FinalCTA />
    </main>
  );
};
export default AboutPage;
