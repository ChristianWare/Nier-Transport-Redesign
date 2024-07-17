import { fleet } from "@/app/lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FleetSection.module.css";
import Image from "next/image";
import Button from "../Button/Button";

const FleetSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.top}>
              <h2 className={styles.heading}>Our Fleet</h2>
              <p className={styles.copy}>
                Experience the difference with our carefully curated fleet of
                vehicles that cater to your every need.
              </p>
            </div>
            <div className={styles.bottom}>
              {fleet.map((x) => (
                <div key={x.id} className={styles.imgContainer}>
                  <Image
                    src={x.src}
                    alt='img description'
                    fill
                    className={styles.img}
                  />
                </div>
              ))}
            </div>
          <div className={styles.btnContainer}>
            <Button
              href='https://bookridesonline.com/book/?dbaid=L4JAaOi0gExXw5xek9dmgQ%3d%3d'
              target='_blank'
              text='Book Now'
              btnType='primary'
            />
          </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default FleetSection;
