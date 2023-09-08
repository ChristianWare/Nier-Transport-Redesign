import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Hero.module.css";
import Image from "next/image";
import BG from "../../../../public/images/Hero1.png";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image src={BG} alt='Nier Transportation' fill className={styles.img} />
      <div className={styles.content}>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Nier Transportation: <br />
            Exclusive Luxury Car Service in Phoenix & Scottsdale
          </h1>
          <p className={styles.copy}>
            From airport pickups and drop-offs to seamless golf course
            transportation, our professional chauffeurs and luxurious fleet
            ensure you arrive in style and comfort. Experience the epitome of
            sophistication with our black car service, setting us apart in the
            world of Scottsdale airport transportation and beyond.
          </p>
        </div>
        <div className={styles.right}></div>
      </div>
    </section>
  );
};
export default Hero;
