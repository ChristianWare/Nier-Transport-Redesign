"use client";

import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FaqSection.module.css";
import { useState } from "react";
import Plus from "../../../../public/icons/plus.svg";
import { FC } from "react";

interface Props {
  mapData: any;
}

const FaqSection: FC<Props> = ({ mapData }) => {
  const [selected, setSelected] = useState(0);

  const toggle = (i: any) => {
    setSelected(i);
  };

  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.top}>
              <h2 className={styles.heading}>FAQ&#39;s</h2>
              <p className={styles.copy}>
                Commonly asked questions and answers. If you do not see your
                question here, feel free to call us anytime to ask, and we will
                gladly give you a satisfactory answer.
              </p>
            </div>
            <div className={styles.bottom}>
              {mapData.map((x: any, i: any) => (
                <div
                  key={x.id}
                  className={`${styles.qaContainer} ${
                    selected === i ? styles.active : ""
                  }`}
                  onClick={() => toggle(i)}
                >
                  <div className={styles.headingArrowContainer}>
                    <h3 className={styles.question} lang='en'>
                      {x.question}
                    </h3>
                    {selected === i ? (
                      <Plus
                        className={styles.iconFlip}
                        width={35}
                        height={35}
                      />
                    ) : (
                      <Plus className={styles.icon} width={30} height={30} />
                    )}
                  </div>
                  <div
                    className={
                      selected === i
                        ? styles.answerContainer + " " + styles.show
                        : styles.answerContainer
                    }
                  >
                    <p className={styles.answer} lang='en'>
                      {x.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default FaqSection;
