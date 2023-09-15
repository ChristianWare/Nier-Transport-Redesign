import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Hero.module.css";
import Image from "next/image";
import BG from "../../../../public/images/fleet2.png";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";
import ContentPadding from "../ContentPadding/ContentPadding";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image src={BG} alt='Nier Transportation' fill className={styles.img} priority={true} quality={100} />
      <Nav />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <h1 className={styles.heading} lang='en'>
              <span className={styles.span}>
                <span className={styles.span}>Nier</span> Transportation:
              </span>
              <br />
              Black Car Service in Phoenix & Scottsdale
            </h1>
            <p className={styles.copy}>
              From airport pickups and drop-offs to seamless golf course
              transportation, our professional chauffeurs and luxurious fleet
              ensure you arrive in style and comfort.
            </p>
            <div className={styles.btnContainer}>
              <Button
                href='https://bookridesonline.com/book/?dbaid=L4JAaOi0gExXw5xek9dmgQ%3d%3d'
                target='_blank'
                text='Book Now'
                btnType='primary'
              />
              <Button href='/contact' text='Contact us' btnType='secondary' />
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
