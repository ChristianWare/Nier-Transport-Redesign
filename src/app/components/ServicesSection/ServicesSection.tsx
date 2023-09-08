import styles from "./ServicesSection.module.css";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";

const ServicesSection = () => {
  return (
    <LayoutWrapper>
      <section className={styles.container}>
        <h2 className={styles.heading}>Our Services</h2>
      </section>
    </LayoutWrapper>
  );
};

export default ServicesSection;
