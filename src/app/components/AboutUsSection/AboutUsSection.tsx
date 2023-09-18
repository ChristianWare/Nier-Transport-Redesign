import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./AboutUsSection.module.css";
import Image from "next/image";
import Img1 from "../../../../public/images/img1.png";
import Driver from "../../../../public/icons/driver.svg";
import Options from "../../../../public/icons/options.svg";
import Diamond from "../../../../public/icons/diamond.svg";
import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";

const AboutUsSection = () => {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image src={Img1} alt='image' fill className={styles.img} />
              </div>
            </div>
            <div className={styles.right}>
              <h2 className={styles.heading}>About us</h2>
              <p className={styles.copy}>
                At Nier Transportation, we&#39;re more than a car service;
                we&#39;re your trusted partner in high end transportation. With
                a passion for providing the best car service in the Phoenix
                Metro area, we&#39;ve been serving the Arizona community for 20
                years. Our mission is clear: to provide an unparalleled, high end, late model car
                service near you while ensuring your comfort, safety, and peace
                of mind.
              </p>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Driver width={50} height={50} />
                </div>
                <div className={styles.itexRight}>
                  <h3 className={styles.h3}>Professional Drivers</h3>
                  <p className={styles.copy}>
                    Our experienced and courteous drivers are the epitome of
                    professionalism, providing you with a seamless journey from
                    start to finish.
                  </p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Options width={50} height={50} />
                </div>
                <div className={styles.itexRight}>
                  <h3 className={styles.h3}>Diverse Services</h3>
                  <p className={styles.copy}>
                    Whether you require airport transfers, city tours, or
                    executive transportation, we have tailored services to suit
                    every need.
                  </p>
                </div>
              </div>
              <div className={styles.iconTextContainer}>
                <div className={styles.itextLeft}>
                  <Diamond width={50} height={50} />
                </div>
                <div className={styles.itexRight}>
                  <h3 className={styles.h3}>Timeless Elegance</h3>
                  <p className={styles.copy}>
                    Our fleet of meticulously maintained black cars exudes class
                    and style, ensuring that you arrive at your destination not
                    just comfortably, but with an air of distinction.
                  </p>
                </div>
              </div>
              <div className={styles.btnContainer}>
                <Button href='/about' text='More about us' btnType='tertiary' />
              </div>
            </div>
          </div>
        </ContentPadding>
      </section>
    </LayoutWrapper>
  );
};
export default AboutUsSection;
