import Image from "next/image";
import styles from "./SlugIntro.module.css";
import { FC } from "react";
import { SlugIntroProps } from "@/app/lib/interface";
import Nav from "../Nav/Nav";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import ContentPadding from "../ContentPadding/ContentPadding";

const SlugIntro: FC<SlugIntroProps> = ({ title, description, date, src }) => {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image src={src} alt='Nier Transportation' fill className={styles.img2} />
      <Nav />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <h1 className={styles.heading} lang='en'>
              {title}
            </h1>
            <p className={styles.date}>{date}</p>
            <p className={styles.copy}>{description}</p>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default SlugIntro;
