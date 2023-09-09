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
              <h2>
                Proudly Serveing Scottsdale, Phoenix, and Surrounding Areas.
              </h2>
              <p>
                If you need to go someowhere else outside of our service area,
                we will take you there as well.
              </p>
            </div>
            <div className={styles.right}>
              <h3></h3>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Areas;
