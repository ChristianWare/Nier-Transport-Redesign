import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Hero.module.css";
import Button from "../Button/Button";
import Nav from "../Nav/Nav";
import ContentPadding from "../ContentPadding/ContentPadding";

const Hero = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <video preload='auto' autoPlay muted loop className={styles.video}>
              <source src='./video/heroiii.mp4' />
            </video>
            <div className={styles.imgOverlay}></div>
            <div className={styles.contentChildren}>
              <span className={styles.heading2}>
                Black Car Service in the Phoenix Metro Area
              </span>
              <h1 className={styles.heading} lang='en'>
                Nier Transportation
              </h1>
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
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Hero;
