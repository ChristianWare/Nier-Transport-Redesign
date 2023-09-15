import Img from "../../../public/images/barry.jpg";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import ContentPadding from "../components/ContentPadding/ContentPadding";
import styles from "../leagal.module.css";
import Image from "next/image";
import Nav from "../components/Nav/Nav";

const PrivacyPage = () => {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.imgOverlay}></div>
        <Image
          src={Img}
          alt='Nier Transportation'
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
                <span className={styles.span}>Privacy </span>
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
              Welcome to Nier Transportation&#39;s Privacy Policy. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              personal information when you visit our website and use our
              services. By accessing or using our website and services, you
              consent to the practices described in this Privacy Policy.
            </p>
            <br />
            <h2>2. Information We Collect</h2>
            <p>
              We may collect the following types of information:
              <br />
              <br />
              <strong>Personal Information:</strong>
              <br />
              This may include your name, email address, phone number, and other
              identifying information that you provide when contacting us or
              using our services.
            </p>
            <br />
            <h2>3. How We Use Your Information</h2>
            <p>
              We may use your information for the following purposes:
              <br />
              <br />
              - To provide and maintain our services.
              <br />
              <br />
              - To communicate with you, including responding to your inquiries
              and providing customer support.
              <br />
              <br />- To improve our website and services. To send you updates,
              promotions, and other marketing communications (you can opt-out at
              any time).
            </p>
            <br />
            <h2>4. Disclosure of Your Information</h2>
            <p>
              We may share your personal information with:
              <br />
              <br />
              - Service providers and contractors who assist us in operating our
              business.
              <br />
              <br />- Legal authorities, if required by law or to protect our
              rights or the rights of others.
            </p>
            <br />
            <h2>5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your
              information, but no method of transmission over the internet or
              electronic storage is completely secure. We cannot guarantee
              absolute security.
            </p>
            <br />
            <h2>6. Your Choices</h2>
            <p>
              You can review and update your personal information by contacting
              us. You can opt out of marketing communications by following the
              instructions provided in those communications.
            </p>
            <br />
            <h2>7. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites or services.
              We are not responsible for the content or privacy practices of
              these third-party sites. We encourage you to review their privacy
              policies.
            </p>
            <br />
            <h2>8. Children&#39;s Privacy</h2>
            <p>
              Our website and services are not intended for children under the
              age of 18. We do not knowingly collect personal information from
              children.
            </p>
            <br />
            <h2>9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy to reflect changes to our
              practices or for other operational, legal, or regulatory reasons.
              The updated Privacy Policy will be effective upon posting on this
              page.
            </p>
            <br />
            <h2>10. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this Privacy
              Policy, please contact us at: :
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
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </main>
  );
};

export default PrivacyPage;
