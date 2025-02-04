import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Announcement.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/announcement.jpg";

const Announcement = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>2025 Spring Training</h2>
              <p className={styles.copy}>
                Spring training in Arizona is a beloved tradition for baseball
                fans, offering a chance to see Major League Baseball teams up
                close in a more relaxed and intimate setting. In 2025, the
                Cactus League season will run from February 20 through March 25,
                featuring exciting games, sunny skies, and the opportunity to
                watch your favorite players prepare for the upcoming MLB season.
                Whether you&apos;re a die-hard fan or just looking for a fun way
                to enjoy the Arizona spring, spring training is an unforgettable
                experience for all ages.
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
