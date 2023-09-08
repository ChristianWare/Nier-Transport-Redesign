import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Hero.module.css";
import Image from "next/image";
import BG from "../../../../public/images/Hero1.png";
import Button from "../Button/Button";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image src={BG} alt='Nier Transportation' fill className={styles.img} />
      <LayoutWrapper>
        <div className={styles.content}>
          <div className={styles.left}>
            
            <h1 className={styles.heading}>
              Black Car Service in Phoenix & Scottsdale
            </h1>
            <p className={styles.copy}>
              From airport pickups and drop-offs to seamless golf course
              transportation, our professional chauffeurs and luxurious fleet
              ensure you arrive in style and comfort.
            </p>
            <div className={styles.btnContainer}>
              <Button href='/' text='Book Now' btnType='primary' />
              <Button href='/' text='Contact us' btnType='secondary' />
            </div>
          </div>
          <div className={styles.right}></div>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
