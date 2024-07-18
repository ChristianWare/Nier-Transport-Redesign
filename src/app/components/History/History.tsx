import Image from "next/image";
import styles from "./History.module.css";
import Img from "../../../../public/images/barry4.png";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";

const data = [
  {
    title: "A Legacy of Excellence in Black Car Service",
    description:
      "Since our inception, Nier Transportation has been dedicated to providing exceptional black car service, ensuring luxury and reliability for all our clients.",
  },
  {
    title: "Serving AZ: From Local Roots to Statewide Recognition",
    description:
      "Founded in 2004, we have grown from serving our local community to becoming a trusted name in black car services across Arizona.",
  },
  {
    title: "What Sets Us Apart: Commitment to Quality and Comfort",
    description:
      "Our unwavering commitment to quality and comfort is what sets us apart, making every journey with [Your Company Name] a superior experience.",
  },
] as const;

const History = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.imgContainer}>
                <Image src={Img} alt='image' fill className={styles.img} />
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.rightTop}>
                <h2 className={styles.heading}>
                  History begins in Phoenix, AZ
                </h2>
                <p className={styles.copy}>
                  Founded in 2004, Nier Transportation was born out of a passion
                  for delivering exceptional transportation experiences. Our
                  journey began with a single luxury vehicle, and today, we have
                  a large fleet of cars, serving hundreds of satisfied clients.
                </p>
                <div className={styles.imgContainerii}>
                  <Image src={Img} alt='image' fill className={styles.img} />
                </div>
              </div>
              <div className={styles.rightBottom}>
                {data.map((x, index) => (
                  <div key={index} className={styles.card}>
                    <h3 className={styles.title}>{x.title}</h3>
                    <p className={styles.desc}>{x.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default History;
