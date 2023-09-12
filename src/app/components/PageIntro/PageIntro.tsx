import Image from "next/image";
import styles from "./PageIntro.module.css";
import Nav from "../Nav/Nav";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Button from "../Button/Button";
import { FC } from "react";
import { PageIntroProps } from "@/app/lib/interface";

const PageIntro: FC<PageIntroProps> = ({ heading, copy, src }) => {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image src={src} alt='Nier Transportation' fill className={styles.img2} />
      <Nav />
      <LayoutWrapper>
        <div className={styles.content}>
            <h1 className={styles.heading} lang='en'>
              {heading}
            </h1>
            <p className={styles.copy}>{copy}</p>
        </div>
      </LayoutWrapper>
    </section>
  );
};
export default PageIntro;
