import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FinalCTA.module.css";
import Image from "next/image";
import Img from "../../../../public/images/finalcta.png";
import Button from "../Button/Button";

const FinalCTA = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <h2 className={styles.heading}>
                <span className={styles.span}>
                  <span className={styles.span}>Nier</span>{" "}
                  <br className={styles.br} />
                  <span className={styles.span}>Transportation:</span>
                </span>
              </h2>
              <p className={styles.copy}>
                Ready to elevate your travel experience? Choose Nier
                Transportation for exceptional black car services. Book now to
                enjoy the ultimate in luxury, comfort, and convenience.
              </p>
              <div className={styles.btnContainer}>
                <Button
                  href='https://bookridesonline.com/book/?dbaid=L4JAaOi0gExXw5xek9dmgQ%3d%3d'
                  target='_blank'
                  text='Book Now'
                  btnType='primary'
                />
                <Button href='/contact' text='Contact us' btnType='tertiary' />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image
                  src={Img}
                  alt='description'
                  fill
                  className={styles.img}
                />
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default FinalCTA;
