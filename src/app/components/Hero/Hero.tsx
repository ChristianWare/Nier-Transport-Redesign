import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Hero.module.css";
import Image from "next/image";
import BG from "../../../../public/images/fleet3.png";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";
import ContentPadding from "../ContentPadding/ContentPadding";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={BG}
        alt='Nier Transportation'
        fill
        className={styles.img}
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
        priority
      />
      <Nav />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <h1 className={styles.heading} lang='en'>
              <span className={styles.span}>
                <span className={styles.span}>Nier</span> Transportation:
              </span>
              <br />
              Black Car Service in the Phoenix Metro Area
            </h1>
            <p className={styles.copy}>
              Our professional drivers and latest model high end fleet ensure
              you arrive in style and comfort.
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
