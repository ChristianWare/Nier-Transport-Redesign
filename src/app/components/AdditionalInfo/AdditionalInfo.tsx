import { FC } from "react";
import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./AdditionalInfo.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  bgColor?: string;
  heading: string;
  copy: string;
  mapData: any;
  btn?: boolean;
  href?: string;
  btnType?: string;
  btnText?: string;
  h3: string;
  more?: string;
  src: StaticImageData;
}

const AdditionalInfo: FC<Props> = ({
  bgColor = "",
  heading,
  copy,
  mapData,
  btn,
  href = "",
  btnType = "",
  btnText = "",
  h3,
  more,
  src,
}) => {
  return (
    <section className={`${styles.container} ${styles[bgColor]}`}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.top}>
            <h2 className={styles.heading}>{heading}</h2>
            <p className={styles.copy}>{copy}</p>
          </div>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.left2}>
                <h3 className={styles.heading2}>{h3}</h3>
                <div className={styles.mapContainer}>
                  {mapData.map((x: any, index: any) => (
                    <div key={index} className={styles.box}>
                      <p className={styles.value}>{x.value}</p>
                    </div>
                  ))}
                </div>
                {more && <p className={styles.more}>{more}</p>}
                {btn && (
                  <div className={styles.btnContainer}>
                    <Button href={href} btnType={btnType} text={btnText} />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.imgContainer}>
                <Image src={src} fill className={styles.img} alt='' />
              </div>
            </div>
          </div>{" "}
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default AdditionalInfo;
