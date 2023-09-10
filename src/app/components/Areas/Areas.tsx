import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Areas.module.css";
import BG from "../../../../public/images/phoenix.png";
import ContentPadding from "../ContentPadding/ContentPadding";

const Areas = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image src={BG} alt='Nier Transportation' fill className={styles.img} />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>
                Proudly Serveing Scottsdale, Phoenix, and Surrounding Areas.
              </h2>
              <p className={styles.copy}>
                If you need to go someowhere else outside of our service area,
                we will take you there as well.
              </p>
            </div>
            <div className={styles.right}>
              <h3 className={styles.city}>Scotsdale</h3>
              <h3 className={styles.city}>Phoenix</h3>
              <h3 className={styles.city}>Mesa</h3>
              <h3 className={styles.city}>Tempe</h3>
              <h3 className={styles.city}>Chandler</h3>
              <h3 className={styles.city}>Goodyear</h3>
              <h3 className={styles.city}>Surprise</h3>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Areas;
