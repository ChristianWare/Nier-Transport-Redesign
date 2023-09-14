import { servicesPage } from "@/app/lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./IndivServiceSection.module.css";
import Image from "next/image";
import Button from "../Button/Button";

const IndivServiceSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <h2 className={styles.heading}>Service Details</h2>
          <div className={styles.content}>
            {servicesPage.map((x, index) => (
              <article key={index} className={styles.serviceContainer}>
                <div className={styles.left}>
                  <h3 className={styles.title}>
                    {index + 1}. {x.title}
                  </h3>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
                <div className={styles.right}>
                  <div className={styles.imgContainer}>
                    <Image src={x.src} alt='' fill className={styles.img} />
                  </div>
                </div>
              </article>
            ))}
            <div className={styles.btnContainer}>
              <Button
                href='https://bookridesonline.com/book/?dbaid=L4JAaOi0gExXw5xek9dmgQ%3d%3d'
                target='_blank'
                text='Book Now'
                btnType='primary'
              />
              <Button href='/' text='Call us' btnType='tertiary' />
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default IndivServiceSection;
