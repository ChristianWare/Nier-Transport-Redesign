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
              Nier Transportation
            </h1>
            <h2 className={styles.heading2}>
              Black Car Service in the Phoenix Metro Area
            </h2>

            <div className={styles.btnContainer}>
              <Button
                href='https://bookridesonline.com/book/?dbaid=L4JAaOi0gExXw5xek9dmgQ%3d%3d'
                target='_blank'
                text='Book Your Ride Now'
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
