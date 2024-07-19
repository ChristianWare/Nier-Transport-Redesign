import { servicesPage } from "@/app/lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./IndivServiceSection.module.css";
import Image from "next/image";
import Img from "../../../../public/images/Hero1.png";
import Button from "../Button/Button";

const IndivServiceSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          
          <div className={styles.top}>
            <h2 className={styles.heading}>Service Details</h2>
            <p className={styles.copy}>
              Welcome to Nier Transportation, your premier provider of phoenix
              black car services. We offer a range of luxury transportation
              options to meet all your needs.
            </p>
          </div>
          <div className={styles.bottom}>
            {servicesPage.map((x, index) => (
              <article key={x.id} className={styles.servicesContainer}>
                <div className={styles.left}>
                  <div className={styles.leftTop}>
                    <h3 className={styles.title}>
                      {index + 1}. {x.title}
                    </h3>
                    <p className={styles.desc}>{x.desc}</p>
                  </div>
                  <div className={styles.leftBottomFlex}>
                    <div className={styles.lb1}>
                      <p className={styles.desc2}>{x.desc2}</p>
                    </div>
                    <div className={styles.lb1}>
                      <p className={styles.desc2}>{x.desc3}</p>
                    </div>
                    <div className={styles.lb1}>
                      <p className={styles.desc2}>{x.desc4}</p>
                    </div>
                  </div>
                </div>
                <div className={styles.right}>
                  <div className={styles.imgContainer}>
                    <Image src={x.src} alt='' fill className={styles.img} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default IndivServiceSection;
