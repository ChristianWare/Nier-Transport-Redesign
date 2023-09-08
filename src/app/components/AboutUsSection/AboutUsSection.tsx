import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./AboutUsSection.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/img1.png";

const AboutUsSection = () => {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={Img1} alt='image' fill className={styles.img} />
            </div>
          </div>
          <div className={styles.right}>
            <h2>A Company You Can Trust To Be With You At Every Step</h2>
            <p>
              At Nier Transportation, we&#39;re more than a car service;
              we&#39;re your trusted partner in luxury transportation. With a
              passion for providing the best car service in Phoenix and
              Scottsdale, we&#39;ve been serving the Arizona community for 20
              years. Our mission is clear: to provide unparalleled luxury car
              service near you while ensuring your comfort, safety, and peace of
              mind.
            </p>
          </div>
        </div>
      </section>
    </LayoutWrapper>
  );
};
export default AboutUsSection;
