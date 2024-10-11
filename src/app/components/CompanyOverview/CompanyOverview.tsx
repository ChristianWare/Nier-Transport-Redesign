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
                Elevate Your Travel Experience with Nier Transportation{" "}
              </h2>
              <p className={styles.copy}>
                At Nier Transportation, we change what transportation means. Our
                excellent selection of vehicles and skilled drivers ensure that
                each journey is a unique experience. Whether it be for work, a
                special occasion, or a casual outing, we guarantee a comfortable
                and unforgettable ride.
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
