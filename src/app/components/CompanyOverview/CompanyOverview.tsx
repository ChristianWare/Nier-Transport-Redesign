import styles from "./CompanyOverview.module.css";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";
import Image from "next/image";
import Img from "../../../../public/images/companyOverview2.png";
import Img2 from "../../../../public/images/img4.png";
import Img3 from "../../../../public/images/img5.png";
import Img4 from "../../../../public/images/img1.png";

const CompanyOverview = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>
                We&#39;re the best car service in phoenix
              </h2>
              <h3 className={styles.subheading}>
                Experience the premier Arizona Car Service
              </h3>
              <p className={styles.copy}>
                At Nier Transportation, we understand that every journey is
                unique, and our mission is to transform each ride into an
                extraordinary experience. When you choose us, you&#39;re not
                just selecting a transportation service; you&#39;re choosing
                timeless elegance, unwavering reliability, and the assurance of
                arriving in style. Discover the pinnacle of luxury with our
                black car service, and experience the essence of Nier
                Transportation today.
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.rightTop}>
                <div className={styles.imgContainer}>
                  <Image
                    src={Img}
                    alt='image Description'
                    fill
                    className={styles.img}
                  />
                </div>
                <div className={styles.imgContainer}>
                  <Image
                    src={Img2}
                    alt='image Description'
                    fill
                    className={styles.img}
                  />
                </div>
              </div>
              <div className={styles.rightBottom}>
                <div className={styles.imgContainer}>
                  <Image
                    src={Img3}
                    alt='image Description'
                    fill
                    className={styles.img}
                  />
                </div>
                <div className={styles.imgContainer}>
                  <Image
                    src={Img4}
                    alt='image Description'
                    fill
                    className={styles.img}
                  />
                </div>
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default CompanyOverview;
