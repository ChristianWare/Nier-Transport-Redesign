import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Areas.module.css";
import BG from "../../../../public/images/phoenix.png";
import ContentPadding from "../ContentPadding/ContentPadding";
import { areas } from "@/app/lib/data";
import Button from "../Button/Button";

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
                Proudly Serving Scottsdale, Phoenix, and Surrounding Areas.
              </h2>
              <p className={styles.copy}>
                If you need to go someowhere else outside of our service area,
                we will take you there as well.
              </p>
              <div className={styles.btnContainer}>
                <Button href='/' text='Book Now' btnType='primary' />
                <Button href='/' text='Contact us' btnType='secondary' />
              </div>
            </div>
            <div className={styles.right}>
              {areas.map((x) => (
                <div key={x.id} className={styles.cityDescContainer}>
                  <h3 className={styles.city}>{x.city}</h3>
                  <p className={styles.copy}>{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Areas;
