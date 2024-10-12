import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Announcement.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/announcement.webp";

const Announcement = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>2024-2025 Footbal Season</h2>
              <p className={styles.copy}>
                Exciting times ahead! Join us for the Cardinals football game
                and make your experience hassle-free by chartering a van.
                Request your pricing today and enjoy a comfortable ride with
                friends and family. Don&apos;t miss out on the fun-contact us
                now to learn more!
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image src={Img1} alt='image' fill className={styles.img} />
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Announcement;
