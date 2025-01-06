import  { StaticImageData } from "next/image";
import styles from "./PageIntro.module.css";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Button from "../Button/Button";
import { FC } from "react";
import ContentPadding from "../ContentPadding/ContentPadding";

interface Props {
  title?: string;
  heading: string;
  src: StaticImageData;
  videoSrc: string;
}

const PageIntro: FC<Props> = ({ title, heading, src, videoSrc }) => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <video preload='auto' autoPlay muted loop className={styles.video}>
              <source src={videoSrc} type='video/mp4' />{" "}
            </video>
            <div className={styles.imgOverlay}></div>
            <div className={styles.contentChildren}>
              <span className={styles.heading2}>{heading}</span>
              <h1 className={styles.heading} lang='en'>
                {title}
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
export default PageIntro;
