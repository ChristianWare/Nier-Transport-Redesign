import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Usp.module.css";
import Image from "next/image";
import Img from "../../../../public/images/Sub1.png";

const data = [
  {
    id: 1,
    usp: "Unwavering commitment to excellence",
    src: Img,
  },
  {
    id: 2,
    usp: "Meticulously maintained fleet of luxury vehicles",
    src: Img,
  },
  {
    id: 3,
    usp: "Desire to go above and beyond to exceed your expectations",
    src: Img,
  },
];

const Usp = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.top}>
              <h2 className={styles.heading}>What sets us apart</h2>
              <p className={styles.copy}>What sets us apart is our...</p>
            </div>
            <div className={styles.bottom}>
              {data.map((x) => (
                <div key={x.id} className={styles.card}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={x.src}
                      alt=''
                      width={150}
                      height={150}
                      className={styles.img}
                    />
                  </div>
                  <h3 className={styles.usp}>{x.usp}</h3>
                </div>
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Usp;
