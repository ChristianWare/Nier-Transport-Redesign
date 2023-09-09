import styles from "./ServicesSection.module.css";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import { servicesSection } from "@/app/lib/data";
import Image from "next/image";

const ServicesSection = () => {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <h2 className={styles.heading}>Our Services</h2>
        <h3 className={styles.subHeading}>
          Elevate Every Trip with Nier Transportation
        </h3>
        {servicesSection.map((x) => (
          <div key={x.id}>
            {/* <Image src={x.icon} alt='icon' width={40} height={40} /> */}
            <p>{x.service}</p>
          </div>
        ))}
      </section>
    </LayoutWrapper>
  );
};

export default ServicesSection;
