import PageIntro from "../components/PageIntro/PageIntro";
import styles from "./About.module.css";

import Img from "../../../public/images/aboutPageIntro.png";
import CompanyOverview from "../components/CompanyOverview/CompanyOverview";

const AboutPage = () => {
  return (
    <main>
      <PageIntro
        heading='About Us'
        copy='Welcome to Arizona&#39;s premier black car service, where every ride is an experience of unmatched luxury and sophistication. At Nier Transportation, we have proudly served the dynamic Phoenix area for nearly two decades, establishing ourselves as the go-to choice for those seeking the best car service in Phoenix.'
        src={Img}
      />
      <CompanyOverview />
    </main>
  );
};
export default AboutPage;
