"use client";

import { useState } from "react";
import styles from "./Footer.module.css";
import ArrowRight from "../../../../public/icons/arrowRight.svg";
import { footer } from "@/app/lib/data";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import Logo from "../../../../public/icons/newnierlogofooter.png";
import Link from "next/link";
import Image from "next/image";
import ContentPadding from "../ContentPadding/ContentPadding";

const Footer = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i: any) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <footer className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <div className={styles.top}>
              <Link href='/' className={styles.logo}>
                <Image
                  src={Logo}
                  alt='logo'
                  width={160}
                  height={75}
                  className={styles.officialLogo}
                />
              </Link>
            </div>
            <div className={styles.middleDesktop}>
              {footer.map((f, index) => (
                <div key={index} className={styles.sectionContainer}>
                  <div className={styles.headingContainer}>
                    <p className={styles.heading}>{f.heading}</p>
                  </div>
                  <div className={styles.footerItemContainer}>
                    {f.section.map((s, index) => (
                      <Link
                        href={s.href}
                        key={index}
                        className={styles.footerItem}
                      >
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.middleMobile}>
              {footer.map((f, i) => (
                <div key={f.id} className={styles.sectionContainer}>
                  <div
                    className={styles.headingContainer}
                    onClick={() => toggle(i)}
                  >
                    <p className={styles.heading}>{f.heading}</p>
                    <span className={styles.arrow}>
                      {selected === i ? (
                        <ArrowRight
                          className={styles.arrowFlip}
                          height={20}
                          width={20}
                        />
                      ) : (
                        <ArrowRight
                          className={styles.arrow}
                          height={20}
                          width={20}
                        />
                      )}
                    </span>
                  </div>
                  <div
                    className={
                      selected === i
                        ? styles.answer + " " + styles.show
                        : styles.answer
                    }
                  >
                    <div className={styles.footerItemContainer}>
                      {f.section.map((s, index) => (
                        <Link
                          href={s.href}
                          key={index}
                          className={styles.footerItem}
                        >
                          {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomLeft}>
                <p className={styles.copy}>
                  &copy; 2023 Nier Transportation || All Rights Reserved ||
                  Designed and Developed by The Chris Ware Agency{" "}
                </p>
              </div>
              <div className={styles.bottomRight}>
                {/* <Socials borderSize='smallBorder' iconSize='smallIcon' /> */}
              </div>
            </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </footer>
  );
};
export default Footer;
