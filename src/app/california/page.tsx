import Img from "../../../public/images/barry.jpg";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import ContentPadding from "../components/ContentPadding/ContentPadding";
import styles from "../leagal.module.css";
import Image from "next/image";
import Nav from "../components/Nav/Nav";

const CaliforniaPage = () => {
  return (
    <main>
      <section className={styles.container}>
        <div className={styles.imgOverlay}></div>
        <Image
          src={Img}
          alt='Nier Transportation'
          fill
          className={styles.img2}
        />
        <Nav />
        <LayoutWrapper>
          <ContentPadding>
            <div className={styles.content}>
              <h1 className={styles.heading} lang='en'>
                <span className={styles.span}>California </span>
                <span className={styles.span}>Consumer </span>
                <br />
                <span className={styles.span}>privacy </span>
                <span className={styles.span}>Act </span>
                <span className={styles.span}>(CCPA) </span>
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
              This California Consumer Privacy Act (CCPA) Privacy Notice (the
              &quot;Notice&quot;) is provided by Nier Transportation to inform
              California residents about their rights under the California
              Consumer Privacy Act (&quot;CCPA&quot;) and how we handle personal
              information.
            </p>
            <br />
            <h2>2. Categories of Personal Information Collected</h2>
            <p>
              We may collect the following categories of personal information as
              defined by the CCPA: <br />
              <br />
              <strong>Identifiers:</strong>
              <br />
              This may include your name, email address, phone number, and
              similar identifiers.
              <br />
              <strong>Personal Information Categories:</strong>
              <br />
              This may include information such as your postal address and
              payment information.
              <strong>Internet or Other Network Activity Information:</strong>
              This may include information about your interaction with our
              website and services, including browsing history and usage data.
              <strong>Geolocation Data:</strong>
              This may include information about your physical location.
              <strong>Inferences: </strong>
              This may include information derived from the personal information
              we collect to create a profile about your preferences and
              characteristics.
            </p>
            <br />
            <h2>3. How We Use Your Personal Information</h2>
            <p>
              We may use your personal information for the following purposes:
              <br />- To provide and maintain our services.
              <br />- To communicate with you and respond to your inquiries.
              <br />- To improve our website and services.
              <br />- To personalize your experience and provide you with
              tailored content and offers.
              <br />- To comply with legal obligations.
            </p>
            <br />
            <h2>4. Your Rights Under the CCPA</h2>
            <br />
            <h3>Right to Know</h3>
            <p>
              You have the right to request information about the personal
              information we have collected, used, and disclosed about you over
              the past 12 months.
            </p>
            <br />
            <h3>Right to Delete</h3>
            <p>
              You have the right to request the deletion of your personal
              information collected or maintained by us, subject to certain
              exceptions.
            </p>
            <br />
            <h3>Right to Opt-Out of Sale</h3>
            <p>
              We do not sell your personal information to third parties for
              monetary or other valuable consideration.
            </p>
            <br />
            <h3>Right to Non-Discrimination</h3>
            <p>
              We will not discriminate against you for exercising any of your
              CCPA rights.
            </p>
            <br />
            <h2>5. Exercising Your Rights</h2>
            <p>
              To exercise your rights under the CCPA, please contact us using
              the contact information provided in our main Privacy Policy ([Link
              to Privacy Policy]).
            </p>
            <br />
            <h2>6. Verification Process</h2>
            <p>
              To protect your personal information and verify your request, we
              may require you to provide information that matches the
              information we have on file.
            </p>
            <br />
            <h2>7. Authorized Agent</h2>
            <p>
              You may designate an authorized agent to make requests on your
              behalf. We will require the authorized agent to provide signed
              permission from you and verify their identity.
            </p>
            <br />
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions or concerns regarding this CCPA Privacy
              Notice or our privacy practices, please contact us at:
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
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </main>
  );
};
export default CaliforniaPage;
