import Image, { StaticImageData } from "next/image";
import styles from "./PageIntro.module.css";
import Nav from "../Nav/Nav";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Button from "../Button/Button";
import { FC } from "react";
import ContentPadding from "../ContentPadding/ContentPadding";

interface Props {
  title?: string;
  heading: string;
  src: StaticImageData;
}

const PageIntro: FC<Props> = ({ title, heading, src }) => {
  return (
    <section className={styles.container}>
      <div className={styles.imgOverlay}></div>
      <Image
        src={src}
        alt='Nier Transportation'
        fill
        className={styles.img2}
        priority
        sizes='s100vw'
        quality={100}
      />
      <Nav />
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <span className={styles.title}>{title}</span>
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
