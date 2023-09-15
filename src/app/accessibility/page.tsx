import Img from "../../../public/images/barry.jpg";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import ContentPadding from "../components/ContentPadding/ContentPadding";
import styles from "../leagal.module.css";
import Image from "next/image";
import Nav from "../components/Nav/Nav";

const AccessibilityPage = () => {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.imgOverlay}></div>
        <Image
          src={Img}
          alt='Accessibility Policy'
          fill
          className={styles.img2}
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          priority
        />
        <Nav />
        <LayoutWrapper>
          <ContentPadding>
            <div className={styles.content}>
              <h1 className={styles.heading} lang='en'>
                <span className={styles.span}>Accessibility </span>
                <span className={styles.span}>Policy </span>
              </h1>
            </div>
          </ContentPadding>
        </LayoutWrapper>
      </section>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <p>
              <strong>Effective Date: 09/14/2023</strong>
            </p>
            <br />
            <h2>1. Introduction</h2>
            <p>
              Welcome to Nier Transportation&#39;s Accessibility Policy. We are
              committed to making our website accessible to all individuals,
              including those with disabilities. This policy outlines our
              efforts to ensure that our website is accessible and usable to the
              widest possible audience.
            </p>
            <br />
            <h2>2. Web Content Accessibility Guidelines (WCAG)</h2>
            <p>
              We strive to comply with the Web Content Accessibility Guidelines
              (WCAG) 2.1 Level AA, a globally recognized standard for web
              accessibility. Our efforts include:
              <br />
              <br />
              - Providing alternative text descriptions for non-text content,
              such as images and multimedia.
              <br />
              <br />- Ensuring that our website is navigable using keyboard-only
              or screen-reader technology.
              <br />
              <br />- Using adaptable and responsive design principles to
              accommodate various devices and screen sizes.
              <br />
              <br />- Offering clear and consistent navigation and structure
              throughout the website.
            </p>
            <br />
            <h2>3. Assistive Technologies</h2>
            <p>
              We aim to be compatible with a variety of assistive technologies,
              such as screen readers and voice recognition software. Users who
              rely on these tools should be able to access and interact with our
              website with ease.
            </p>
            <br />
            <h2>4. Feedback and Contact Information</h2>
            <p>
              We value feedback from our website users, and we encourage you to
              report any accessibility issues you encounter. If you have
              questions, concerns, or would like to provide feedback on the
              accessibility of our website, please contact us at:
              <br />
              <br />
              <strong>
                Address:
                <br />
                10105 E Vía Linda Suite A- 105 <br />
                Scottsdale, AZ 85258
              </strong>
              <br />
              <br />
              <strong>
                Phone: <br />
                480-300-6003
              </strong>
              <br />
              <br />
              <strong>
                Email <br />
                hello@niertransportation.com
              </strong>
            </p>
            <br />
            <h2>5. Ongoing Accessibility Efforts</h2>
            <p>
              Ensuring accessibility is an ongoing process. We are committed to
              regularly reviewing and improving our website to maintain and
              enhance accessibility standards. As technologies evolve and
              accessibility guidelines are updated, we will strive to stay in
              compliance.
            </p>
            <br />
            <h2>6. Third-Party Content and Links</h2>
            <p>
              While we strive to make our own content accessible, some parts of
              our website may contain third-party content or links to external
              websites that are beyond our control. We cannot guarantee the
              accessibility of such content or the practices of external
              websites.
            </p>
            <br />
            <h2>7. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Accessibility
              Policy or would like to request accessible versions of specific
              content, please contact us at the provided contact information
              above.
            </p>
            <br />
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </main>
  );
};
export default AccessibilityPage;
