import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Mission.module.css";
import Image from "next/image";
import BG from "../../../../public/images/img6.png";

const Mission = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image src={BG} alt='Nier Transportation' fill className={styles.img} />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>Our Mission</h2>
            </div>
            <div className={styles.right}>
              <p className={styles.copy}>
                Our mission is to provide professional friendly transportation
                services to our customers safely and efficiently by utilizing
                quality personnel and resources. We offer cost-effective,
                time-efficient, and problem-solving solutions that assist our
                customers in achieving their objectives.
              </p>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content2}>
            <div className={styles.left}>
              <h2 className={styles.heading}>Our Vision</h2>
            </div>
            <div className={styles.right2}>
              <p className={styles.copy}>
                Our vision at Nier Transportation extends far beyond the
                ordinary.Our strategic positioning will elevate us to the
                forefront of major events in the region, ensuring that Nier
                Transportation becomes the preferred choice for both business
                and leisure travelers alike. We envision a future where every
                ride with us not only meets but exceeds expectations,
                solidifying our reputation as the premier car service in
                Phoenix.
              </p>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
      {/* <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>Our values</h2>
            </div>
            <div className={styles.right}>
              <p className={styles.copy}>
                We believe in providing safe, timely and dependable
                transportation. Friendly, knowledgeable, flexible operators who
                thrive on customer service. We will provide well-maintained
                vehicles, professional drivers and well-thought-out scheduling.
              </p>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content2}>
            <div className={styles.left}>
              <h2 className={styles.heading}>Our Commitment</h2>
            </div>
            <div className={styles.right2}>
              <p className={styles.copy}>
                Your safety is our top priority. We adhere to the highest safety
                standards, regularly maintain our vehicles, and ensure that our
                chauffeurs are trained to deliver a secure and comfortable ride.
                We&#39;re dedicated to making every trip exceptional. Your
                satisfaction is our ultimate measure of success.
              </p>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper> */}
    </section>
  );
};
export default Mission;
