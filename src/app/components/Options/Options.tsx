import styles from './Options.module.css'
import BG from "../../../../public/images/fleet2.png";
import ContentPadding from "../ContentPadding/ContentPadding";
import { options } from "@/app/lib/data";
import Button from "../Button/Button";
import Image from "next/image";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";

const Options = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image src={BG} alt='Nier Transportation' fill className={styles.img} />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>
                Additioanl Information
              </h2>
              <p className={styles.copy}>
                Additioanl Services to further enhance your ride.
              </p>
              <div className={styles.btnContainer}>
                <Button href='/' text='Contact us' btnType='secondary' />
              </div>
            </div>
            <div className={styles.right}>
              {options.map((x) => (
                <div key={x.id} className={styles.cityDescContainer}>
                  <h3 className={styles.city}>{x.city}</h3>
                  <p className={styles.desc}>{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
}
export default Options