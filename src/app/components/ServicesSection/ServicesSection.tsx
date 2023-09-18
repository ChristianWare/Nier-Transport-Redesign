import styles from "./ServicesSection.module.css";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import { servicesSection } from "@/app/lib/data";
import Image from "next/image";
import Button from "../Button/Button";
import ContentPadding from "../ContentPadding/ContentPadding";

const ServicesSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <h2 className={styles.heading}>Our Services</h2>
            <p className={styles.copy}>
              Whether it&#39;s a wedding, corporate event, or simply a night
              out, our black car service delivers the epitome of luxury, setting
              us apart in Scottsdale, Phoenix, and Mesa Gateway airport transportation and beyond. Book
              your next ride with us. Here are some of the services we provide:
            </p>
            <div className={styles.servicesGrid}>
              {servicesSection.map((x) => (
                <div key={x.id} className={styles.card}>
                  <Image
                    src={x.icon}
                    alt='icon'
                    width={40}
                    height={40}
                    className={styles.img}
                  />
                  <h3 className={styles.subheading}>{x.service}</h3>
                  <p content={styles.desc} className={styles.desc}>
                    {x.descr}
                  </p>
                </div>
              ))}
            </div>
          <div className={styles.btnContainer}>
            <Button href='/services' text='See All Services' btnType='secondary' />
          </div>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};

export default ServicesSection;
