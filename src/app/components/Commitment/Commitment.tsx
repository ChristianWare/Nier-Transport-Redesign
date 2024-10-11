import { commitment } from "@/app/lib/data";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./Commitment.module.css";
import Image from "next/image";

const Commitment = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.top}>
              <h2 className={styles.heading}>Our Commitment</h2>
              <p>Our Commitment to you is guided by these prinicples:</p>
            </div>
            <div className={styles.bottom}>
              {commitment.map((x) => (
                <div key={x.id} className={styles.commitBox}>
                  <Image
                    src={x.icon}
                    alt='icon'
                    width={40}
                    height={40}
                    className={styles.img}
                  />
                  <h3 className={styles.title}>{x.title}</h3>
                  <p>{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default Commitment;
