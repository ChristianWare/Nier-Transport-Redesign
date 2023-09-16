import Image from "next/image";
import styles from "./PageIntro.module.css";
import Nav from "../Nav/Nav";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Button from "../Button/Button";
import { FC } from "react";
import { PageIntroProps } from "@/app/lib/interface";
import ContentPadding from "../ContentPadding/ContentPadding";

const PageIntro: FC<PageIntroProps> = ({ heading, src }) => {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={src}
        alt='Nier Transportation'
        fill
        className={styles.img2}
        priority
        sizes='(max-width: 768px) 50vw, (max-width: 1200px) 100vw'
        quality={100}
      />
      <Nav />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <h1 className={styles.heading} lang='en'>
              {heading}
            </h1>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default PageIntro;
