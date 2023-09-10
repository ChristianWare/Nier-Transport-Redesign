import ContentPadding from "../ContentPadding/ContentPadding";
import LayoutWrapper from "../LayoutWrapper/LayoutWrapper";
import styles from "./FleetSection.module.css";
import Image from "next/image";

const FleetSection = () => {
  return (
    <section className={styles.container}>
      <LayoutWrapper>
        <ContentPadding>
          <div className={styles.content}>
            <h2>Fleet Highlights</h2>
          </div>
        </ContentPadding>
      </LayoutWrapper>
    </section>
  );
};
export default FleetSection;
