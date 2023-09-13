import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Mission.module.css";
import Image from "next/image";
import BG from "../../../../public/images/phoenix.png";

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
              <div className={styles.missionContainer}>
                <p className={styles.copy}>
                  At Nier transportation, our mission is clear: to provide
                  professional friendly transportation services to our customers
                  safely and efficiently by utilizing quality personnel and
                  resources. We offer cost-effective, time-efficient, and
                  problem-solving solutions that assist our customers in
                  achieving their objectives.
                </p>
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Mission;
