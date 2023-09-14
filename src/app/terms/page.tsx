import PageIntro from "../components/PageIntro/PageIntro";
import Img from "../../../public/images/barry.jpg";
import LayoutWrapper from "../components/LayoutWrapper/LayoutWrapper";
import ContentPadding from "../components/ContentPadding/ContentPadding";
import styles from "../leagal.module.css";

const page = () => {
  return (
    <main>
      <PageIntro heading='Terms and Conditions' src={Img} />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <h2>1. Acceptance of Terms</h2>
            <p>
              Welcome to Nier Transportation&#39;s website. By accessing or
              using this website, you agree to comply with and be bound by these
              Terms of Use (&quot;Terms&quot;). If you do not agree to these
              Terms, please do not use this website.
            </p>
            <br />
            <h2>2. Changes to Terms</h2>
            <p>
              Nier Transportation reserves the right to modify, amend, or update
              these Terms at any time without prior notice. Any changes will be
              effective immediately upon posting. Your continued use of the
              website following the posting of changes constitutes your
              acceptance of those changes.
            </p>
            <br />
            <h2>3. Use of the Website</h2>
            <p>
              You must be at least 18 years old to use this website. You agree
              to use this website for lawful purposes only and in a manner
              consistent with all applicable laws and regulations. You may not
              use this website in any way that could damage, disable,
              overburden, or impair Nier Transportation&#39;s services or
              interfere with other users&#39; enjoyment of the website.
            </p>
            <br />
            <h2>4. Intellectual Property</h2>
            <p>
              All content, trademarks, logos, and intellectual property on this
              website are the property of Nier Transportation and are protected
              by copyright and other intellectual property laws. You may not
              use, reproduce, or distribute any content from this website
              without prior written permission from Nier Transportation.
            </p>
            <br />
            <h2>5. Privacy</h2>
            <p>
              Your use of this website is also governed by our Privacy Policy,
              which can be found at [Link to Privacy Policy]. By using this
              website, you consent to the collection and use of your information
              as described in the Privacy Policy.
            </p>
            <br />
            <h2>6. Disclaimer of Warranties</h2>
            <p>
              This website is provided &quot;as is&quot; without warranties of
              any kind, either express or implied. Nier Transportation disclaims
              all warranties, including but not limited to the accuracy,
              completeness, reliability, or availability of this website.
            </p>
            <br />
            <h2>7. Limitation of Liability</h2>
            <p>
              Nier Transportation will not be liable for any direct, indirect,
              incidental, special, consequential, or punitive damages arising
              out of your access to or use of this website.
            </p>
            <br />
            <h2>8. Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the
              laws of Arizoan and California. Any disputes arising from or in
              connection with these Terms will be subject to the exclusive
              jurisdiction of the courts located in Arizoan and California.
            </p>
            <br />
            <h2>9. Contact Information</h2>
            <p>
              If you have any questions or concerns regarding these Terms,
              please contact us at: 
              <br />
              <br />
              <strong>Address: 10105 E Vía Linda Suite A- 105 </strong>
              <br /> <strong>Phone: 480-300-6003</strong>
              <br />
              <strong>Email: hello@niertransportation.com</strong>
            </p>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </main>
  );
};
export default page;

// Nier Transportation
